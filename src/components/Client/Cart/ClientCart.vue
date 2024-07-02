<template>
  <Form class="max-w-[1120px] mx-auto" :model="form" @finish="onFinish">
    <button @click="router.back()" class="flex items-center md:hidden gap-2 pt-3">
      <LeftOutlined />back
    </button>
    <div
      class="w-full max-w-[840px] mx-auto mt-[40px] md:mt-[80px] flex flex-col items-center justify-center"
    >
      <span class="text-headline-3 text-center" v-if="current == 0">Cart</span>
      <span class="text-headline-3 text-center" v-if="current == 1">Check Out</span>
      <span class="text-headline-3 text-center" v-if="current == 2">Complete!</span>
      <Steps
        :current="current"
        :direction="width < 450 ? 'vertical' : 'horizontal'"
        class="[&_.ant-steps-icon]:!text-white [&_.ant-steps-finish-icon]:!-translate-y-[2px] [&_.ant-steps-finish-icon]:text-[16px] [&_.ant-steps-item-title]:text-body-2-semibold mt-10 ml-[130px] md:ml-0"
        :items="[
          { title: 'Shopping cart' },
          { title: 'Checkout details' },
          { title: 'Order complete' }
        ]"
      ></Steps>
    </div>
    <div v-if="current == 0" class="w-full">
      <section
        class="w-full grid grid-cols-1 lg:grid-cols-10 mt-10 md:mt-[80px] gap-6 mb-14 md:mb-10"
      >
        <ShowCart />
        <CartSummary @checkout="stepCheckout" />
      </section>
    </div>

    <div v-if="current == 1" class="w-full h-full">
      <section class="w-full grid grid-cols-1 md:grid-cols-10 mt-10 md:mt-[80px] gap-6 mb-10">
        <ShowInforOrder :form="form" />
        <OrderSummary @order="stepOrder" :form="form" :isLoading="isLoading" />
      </section>
    </div>
    <div v-if="current == 2" class="w-full h-full">
      <section class="max-w-[738px] mx-auto mt-10 md:mt-[80px] mb-10">
        <OrderComplete v-if="completeOrder" :order="completeOrder" />
      </section>
    </div>
  </Form>
  <ModalPayment ref="modalPayment" />
</template>

<script setup lang="ts">
import ShowCart from './ShowCart.vue'
import ShowInforOrder from './ShowInforOrder.vue'
import CartSummary from './CartSummary.vue'
import OrderSummary from './OrderSummary.vue'
import OrderComplete from './OrderComplete.vue'
import ModalPayment from '@/components/UI/ModalPayment.vue'
import { Steps, message, Form } from 'ant-design-vue'
import { LeftOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import { useCart } from '@/stores/use-cart'
import { PAYMENT_TYPE } from '@/constants/enum/payment.enum'
import { getVariantIdSelectedInShop } from '@/utils'
import { createOrderZaloPayQR, createOrderZaloPayATM } from '@/services/zalopay/post'
import { io } from 'socket.io-client'
import { usePayment } from '@/stores/use-payment'
import type { IOrder } from '@/interfaces/order.interface'
import { createOrder } from '@/services/order/post'
import { useRouter } from 'vue-router'
import { useWindowSize } from '@vueuse/core'

export type FormOrderType = {
  firstName: string
  lastName: string
  phoneNumber: string
  shippingAddress: string
  payMethod: PAYMENT_TYPE
  bankCode?: string
}

const router = useRouter()
const current = ref<number>(0) // set step current
// const description = 'This is a description.'
const cartStore = useCart()
const { setSelectedCartItemEmpty } = useCart()
const paymentStore = usePayment()
const { setPaymentSession } = usePayment()
const modalPayment = ref()
const isLoading = ref<boolean>(false)
const completeOrder = ref<IOrder>()
const { width } = useWindowSize()

const form = ref<FormOrderType>({
  firstName: paymentStore.user?.firstName ?? '',
  lastName: paymentStore.user?.lastName ?? '',
  phoneNumber: paymentStore.user?.phoneNumber ?? '',
  shippingAddress: '',
  payMethod: PAYMENT_TYPE.DELIVERY
})

const stepCheckout = () => {
  if (cartStore.selectedCartItem.length) current.value++
  else {
    message.error('Please select product in cart before checkout!')
  }
}

const stepOrder = async () => {
  // check input
  if (
    form.value.firstName &&
    form.value.lastName &&
    form.value.phoneNumber &&
    form.value.shippingAddress &&
    form.value.payMethod
  ) {
    // create data order to post server
    let createData = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      phoneNumber: form.value.phoneNumber,
      address: form.value.shippingAddress,
      paymentMethod: form.value.payMethod,
      amount: cartStore.subTotal,
      shopCart: getVariantIdSelectedInShop(cartStore.shopCart, cartStore.selectedCartItem),
      bankCode: form.value.bankCode ?? ''
    }

    isLoading.value = true

    // PAYMENT_DELIVERY
    if (form.value.payMethod == PAYMENT_TYPE.DELIVERY) {
      const data = await createOrder(createData) // create order by pay delivery
      if (data.type == 'Success') {
        message.success('Create order successfully')
        completeOrder.value = data.message // get newOrder after create

        setSelectedCartItemEmpty()
        setTimeout(() => {
          // next step
          current.value = 2
        }, 2000)
      } else {
        message.error('Payment failed')
      }
    } else {
      // PAYEMENT ZALOPAY
      if (form.value.payMethod == PAYMENT_TYPE.ZALOPAY) {
        // setup data for payment QR or payment Zalopay app mobile
        createData = {
          ...createData,
          //bankCode: width.value < 450 ? '' : 'zalopayapp'
          bankCode: 'zalopayapp'
        }
        if (paymentStore.paymentSession) {
          modalPayment?.value?.showModal()
          modalPayment?.value?.assignZaloResponse(paymentStore.paymentSession) // cache payment session form pinia
        } else {
          const data = await createOrderZaloPayQR(createData) // create order by pay zalopay

          if (data && data.type == 'Error') {
            message.error('Payment failed. Please you check again!')
            isLoading.value = false
          }

          modalPayment?.value?.showModal()
          modalPayment?.value?.assignZaloResponse(data.message)
          setPaymentSession(data.message)
          // if (width.value > 450) {
          //   modalPayment?.value?.showModal()
          //   modalPayment?.value?.assignZaloResponse(data.message)
          //   setPaymentSession(data.message)
          // } else {
          //   window.location.href = data.message.orderUrl
          // }
        }
      }

      // PAYMENT CREDIT
      else if (form.value.payMethod == PAYMENT_TYPE.CREDIT) {
        if (!form.value.bankCode) {
          message.error('Please select bank to pay!')
        } else {
          const data = await createOrderZaloPayATM(createData) // create order by pay zalopay ATM

          if (data && data.type == 'Error') {
            message.error('Payment failed. Please you check again!')
            isLoading.value = false
          } else {
            window.location.href = data.message.orderUrl
          }
        }
      }

      // socket connect
      const socket = io(import.meta.env.VITE_BACKEND_URL, {
        extraHeaders: {
          Authorization: `Bearer ${localStorage && localStorage.getItem('accessToken')}`
        }
      })

      socket.on('connect', function () {
        console.log('Connected')
      })

      // listening payment-status form server zalopay
      socket.on('payment-status', (data) => {
        if (data.type == 'Success') {
          modalPayment?.value?.closeModal(socket)
          const newOrder = data?.message?.new_order as IOrder
          console.log(data, newOrder)
          completeOrder.value = newOrder
          message.success('Payment successfully')
          setPaymentSession(null)
          setSelectedCartItemEmpty()
          setTimeout(() => {
            // next step
            current.value = 2
          }, 2000)
        } else {
          modalPayment?.value?.closeModal(socket)
          message.error('Payment failed')
        }
      })
    }

    isLoading.value = false
  }
}

const onFinish = async (valueForm: FormOrderType) => {
  console.log(valueForm)
}
</script>

<style lang="css">
:where(.css-dev-only-do-not-override-16pw25h).ant-steps
  .ant-steps-item-wait
  > .ant-steps-item-container
  > .ant-steps-item-icon {
  background-color: #e8ecef !important;
}

.ant-steps-item-finish .ant-steps-item-icon {
  background-color: green !important;
}
.ant-steps-item-process .ant-steps-item-icon {
  background-color: #23262f !important;
}
</style>
