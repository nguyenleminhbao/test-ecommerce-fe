<template>
  <section class="w-full h-full [&_.ant-result]:!p-0 shadow-md p-6 rounded-xl bg-slate-200">
    <Result status="success" class="[&_.ant-result]:!p-0">
      <template #title>
        <h1 class="text-3xl font-semibold">Your order has been ordered successfully</h1>
      </template>
      <template #subTitle>
        <div class="flex flex-col">
          <ul
            class="flex overflow-x-auto gap-6 items-center max-w-[600px] mx-auto scrollbar-hide py-7 px-4"
          >
            <li class="min-w-[140px] relative" v-for="orderItem in orderItems" :key="orderItem.id">
              <img
                :src="orderItem.image"
                class="w-[140px] h-[180px] rounded-md shadow-lg object-cover"
              />
              <span
                class="w-6 h-6 rounded-full absolute -right-2 -top-3 bg-black text-white font-semibold z-20"
              >
                {{ orderItem.quantity }}
              </span>
            </li>
          </ul>

          <ul class="flex flex-col gap-3 max-w-[300px] min-w-[250px] mx-auto">
            <li class="flex items-center justify-between text-caption-1-semibold text-lg">
              <span class="text-neutral-4">Order code</span>
              <span class="text-neutral-7 font-semibold">{{
                `Order#${order.id.slice(0, 8)}`
              }}</span>
            </li>
            <li class="flex items-center justify-between text-caption-1-semibold text-lg">
              <span class="text-neutral-4">Date</span>
              <span class="text-neutral-7 font-semibold">{{
                formatDateText(order.createdAt)
              }}</span>
            </li>
            <li class="flex items-center justify-between text-caption-1-semibold text-lg">
              <span class="text-neutral-4">Total</span>
              <span class="text-neutral-7 font-semibold">{{ order.amount }}</span>
            </li>
            <li class="flex items-center justify-between text-caption-1-semibold text-lg">
              <span class="text-neutral-4">Payment method</span>
              <span class="text-neutral-7 font-semibold">{{ order.paymentMethod }}</span>
            </li>
          </ul>
        </div>
      </template>
      <template #extra class="gap-4">
        <div class="flex flex-col md:flex-row gap-3 items-center justify-center">
          <Button key="buy" class="w-[150px] h-10">Buy Again</Button>
          <RouterLink to="/my-account?keyPage=2">
            <Button key="console" class="!bg-neutral-7 w-[150px] h-10 font-semibold" type="primary"
              >Go to My order</Button
            ></RouterLink
          >
        </div>
      </template>
    </Result>
  </section>
</template>

<script setup lang="ts">
import type { ICartItem } from '@/interfaces/cart.interface'
import type { IOrder } from '@/interfaces/order.interface'
import { useCart } from '@/stores/use-cart'
import { formatDateText } from '@/utils'
import { Result, Button } from 'ant-design-vue'
import { computed, watchEffect } from 'vue'

const { order } = defineProps<{
  order: IOrder
}>()

const cartStore = useCart()
const { removeFromCart } = useCart()

// delete cache cartItem in pinia
cartStore.selectedCartItem.map((variantId) => removeFromCart(variantId))

const orderItems = computed(() => {
  return JSON.parse(order.cartItems) as ICartItem[]
})
</script>
