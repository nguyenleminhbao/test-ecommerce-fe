<template>
  <li class="w-full bg-slate-200 shadow-md p-3 rounded-lg">
    <div class="flex items-center">
      <span class="text-body-1-semibold ml-6">{{ shopName }}</span>
    </div>
    <div class="h-[1px] w-full bg-gray-400 my-4"></div>
    <ul class="flex flex-col w-full gap-5 md:gap-3">
      <CartItemCheckout
        v-for="cartItem in cartItems"
        :cart-item="cartItem"
        :key="cartItem.cartId"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import { CartItemCheckout } from '.'
import type { ICartItem } from '@/interfaces/cart.interface'

const { shopName, cartItems } = defineProps<{
  shopName: string
  cartItems: ICartItem[]
}>()
</script>
