<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-16 py-3">
            <span class="sr-only">Image</span>
          </th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Product</th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Shop</th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Quantity</th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white text-[17px]" v-for="(cartItem, index) in orderItems" :key="index">
          <td class="p-4">
            <img
              :src="cartItem.image"
              class="w-[100px] aspect-square object-cover rounded-[8px]"
              :alt="cartItem.title"
            />
          </td>
          <th class="px-6 py-4 font-semibold text-gray-900 overflow-hidden">
            {{ cartItem.title }}
          </th>
          <td class="px-6 py-4">{{ cartItem.shopName }}</td>
          <td class="px-6 py-4">{{ cartItem.quantity }}</td>
          <td class="px-6 py-4 font-semibold text-gray-900">
            {{ `${formatNumberWithCommas(cartItem.price * cartItem.quantity)} đ` }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import type { ICartItem } from '@/interfaces/cart.interface'
import { formatNumberWithCommas } from '@/utils'

const { orderItems } = defineProps<{
  orderItems: ICartItem[]
}>()
</script>
