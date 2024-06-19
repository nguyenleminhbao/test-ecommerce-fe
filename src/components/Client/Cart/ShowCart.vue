<template>
  <section class="md:col-span-7 flex flex-col gap-4">
    <div
      class="hidden md:flex w-full justify-between items-center bg-slate-300 shadow-md p-3 rounded-lg"
    >
      <div class="w-[350px]">
        <span class="text-body-2-semibold ml-6">Product</span>
      </div>

      <div class="flex-1 w-full flex justify-around">
        <span class="text-body-2-semibold min-w-[120px]">Quantity</span>
        <span class="text-body-2-semibold min-w-[75px]">Price</span>
        <span class="text-body-2-semibold min-w-[75px]">Subtotal</span>
      </div>
    </div>
    <ul class="w-full flex flex-col gap-4">
      <ShopItemCheckout
        v-for="cartShop in cartStore.shopCart"
        :shop-name="cartShop.shopName ?? ''"
        :cart-items="cartShop.cartItems"
        :key="cartShop.shopName"
      />
      <div class="flex flex-col mt-10 items-center" v-if="!cartStore.shopCart.length">
        <Empty class="[&_.ant-empty-description]:text-headline-7" description="No item" />

        <Button
          type="text"
          class="bg-sky-600 text-white h-[44px] text-lg mt-6"
          @click="router.push('product')"
        >
          Go to Product
        </Button>
      </div>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ShopItemCheckout } from './_components'
import { useCart } from '@/stores/use-cart'
import { Empty, Button } from 'ant-design-vue'
import { useRouter } from 'vue-router'

const cartStore = useCart()
const router = useRouter()
</script>
