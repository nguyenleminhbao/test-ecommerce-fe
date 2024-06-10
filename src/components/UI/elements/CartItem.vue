<template>
  <li class="w-full flex hover:bg-neutral-200 px-6 py-2 rounded-lg">
    <div class="w-[70px] h-[70px]">
      <Image :src="cartItem.image" class="object-cover aspect-square w-full shadow-sm" />
    </div>
    <div class="flex-1 flex justify-between flex-col pl-[10px]">
      <div class="flex justify-between -translate-y-1">
        <span class="text-hairline-1 font-normal two-lines-truncate max-w-[230px]">{{
          cartItem.title
        }}</span>
        <span class="text-hairline-1 font-medium">{{
          `đ ${formatNumberWithCommas(cartItem.price)}`
        }}</span>
      </div>
      <div class="flex justify-between translate-y-1">
        <span class="text-neutral-4 font-medium text-[17px]"> {{ `x${cartItem.quantity}` }}</span>
        <Button
          class="border-none shadow-none text-xl hover:bg-red-500 opacity-30 hover:opacity-100"
          type="text"
          @click="removeItem"
          ><CloseOutlined
        /></Button>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { Button, Image } from 'ant-design-vue'
import { CloseOutlined } from '@ant-design/icons-vue'
import type { ICartItem } from '@/interfaces/cart.interface'
import { formatNumberWithCommas } from '@/utils'
import { deleteCartItem } from '@/services/cart/post'
import { useCart } from '@/stores/use-cart'

const { cartItem } = defineProps<{
  cartItem: ICartItem
}>()

const { removeFromCart } = useCart()

const removeItem = async () => {
  removeFromCart(cartItem?.variantId)
  await deleteCartItem(cartItem.variantId)
}
</script>

<style scoped>
.css-dev-only-do-not-override-16pw25h {
  display: flex;
  justify-content: center;
  align-items: center;
}
.css-dev-only-do-not-override-16pw25h:hover {
  color: red;
}
</style>
