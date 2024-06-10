<template>
  <div class="flex flex-col gap-[24px]" v-if="order">
    <div class="ml-[24px] flex flex-col gap-[8px]">
      <h1 class="text-headline-5">Order Detail</h1>
      <div class="flex flex-col text-body-2">
        <span><span class="text-body-2-bold">ID: </span>{{ order.id.slice(0, 8) }}</span>

        <span
          ><span class="text-body-2-bold">Date: </span>{{ formatDateText(order.createdAt) }}</span
        >
      </div>
    </div>

    <div class="grid grid-flow-col gap-6 justify-items-stretch">
      <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px]">
        <h1 class="text-headline-6">Shipping Information</h1>

        <div class="grid grid-cols-2 text-body-2">
          <span class="text-body-2-bold">Delivery date:</span>
          <span>{{ formatDateDelivery(order.createdAt) }}</span>
          <span class="text-body-2-bold">Shipping unit:</span>
          <span>Aha move</span>
          <span class="text-body-2-bold">Bill of lading code:</span>
          <span>SPXN**************</span>
          <span class="text-body-2-bold">Shipping type:</span>
          <span>Fast</span>
        </div>
      </div>

      <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px]">
        <h1 class="text-headline-6">Delivery Information</h1>

        <div class="text-body-2 grid grid-flow-row-dense grid-cols-3 grid-rows-3">
          <span class="text-body-2-bold">Name:</span>
          <span class="col-span-2">{{ `${order.firstName} ${order.lastName}` }}</span>
          <span class="text-body-2-bold">Phone:</span>
          <span class="col-span-2">{{ order.phoneNumber }}</span>
          <span class="text-body-2-bold">Email:</span>
          <span class="col-span-2">{{ order.email }}</span>
          <span class="text-body-2-bold">Delivery Address:</span>
          <span class="col-span-2">{{ order.address }}</span>
        </div>
      </div>

      <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px]">
        <h1 class="text-headline-6">Payment Information</h1>
        <div class="grid grid-cols-2 text-body-2">
          <span class="text-body-2-bold">Ship as complete:</span>
          <span>Yes</span>
          <span class="text-body-2-bold">Method:</span>
          <span>Online</span>
        </div>
      </div>
    </div>

    <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px]">
      <h1 class="text-headline-6">Product</h1>
      <Table v-if="order.orderItems" :order-items="order.orderItems" />
      <div class="flex justify-end">
        <div class="grid grid-cols-2 text-body-2 w-1/4">
          <span class="text-body-2-bold">Total cost:</span>
          <span>{{ `${formatNumberWithCommas(order.amount)} đ` }}</span>
          <span class="text-body-2-bold">Transport fee:</span>
          <span>0 đ</span>
          <span class="text-body-2-bold">Discount:</span>
          <span>0 đ</span>
          <span class="text-body-1-bold">Into money:</span>
          <span class="text-body-1-semibold">{{
            `${formatNumberWithCommas(order.amount)} đ`
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IOrder } from '@/interfaces/order.interface'
import Table from './Table.vue'
import { onMounted, ref } from 'vue'
import { getOneOrderSystem } from '@/services/order/get'
import { useRoute } from 'vue-router'
import { formatDateText, formatDateDelivery, formatNumberWithCommas } from '@/utils'

const order = ref<IOrder>()
const route = useRoute()

onMounted(async () => {
  const data = await getOneOrderSystem(route.params['orderId'] as string)
  const cartItems = JSON.parse(data.message.cartItems)
  order.value = {
    ...data.message,
    orderItems: cartItems.map((cartItem: any) => cartItem.cartItems).flat() ?? []
  }
})
</script>
