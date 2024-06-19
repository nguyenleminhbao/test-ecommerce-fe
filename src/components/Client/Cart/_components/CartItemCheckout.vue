<template>
  <li class="w-full flex flex-col md:flex-row justify-between items-center">
    <div class="w-[350px] flex items-center">
      <Checkbox
        v-model:checked="isChecked"
        class="mr-3 [&_.ant-checkbox]:hidden [&_.ant-checkbox]:md:block"
        @change="selectCartItem"
      />
      <div class="flex items-center gap-2 ml-5 md:ml-0">
        <Image :src="cartItem.image" class="!w-[70px] !aspect-square rounded-sm" />
        <div class="w-[220px] md:flex-1 flex flex-col gap-2">
          <span class="two-lines-truncate md:one-lines-truncate font-bold">{{
            cartItem.title
          }}</span>
          <div class="md:hidden flex justify-between items-center">
            <Button
              class="border-none shadow-none text-xl hover:bg-red-500 opacity-30 hover:opacity-100 max-w-[20px]"
              type="text"
              @click="removeItem(cartItem.variantId)"
              ><CloseOutlined
            /></Button>
            <Checkbox v-model:checked="isChecked" class="mr-3" @change="selectCartItem" />
          </div>
          <Button
            class="btnDelete border-none shadow-none text-xl hover:bg-red-500 opacity-30 hover:opacity-100 max-w-[20px]"
            type="text"
            @click="removeItem(cartItem.variantId)"
            ><CloseOutlined
          /></Button>
        </div>
      </div>
    </div>

    <div class="flex-1 w-full flex justify-around items-center mt-3 md:mt-0">
      <div
        class="flex md:mt-3 items-center bg-white rounded-lg border-[1px] border-gray-600 min-w-[120px]"
      >
        <Button
          class="border-none w-[40px] h-9 md:h-10 object-center rounded-l-lg hover:bg-sky-200"
          @click="decreaseQty"
        >
          <MinusOutlined />
        </Button>
        <span class="w-[40px] h-9 md:h-10 object-center text-body-2-semibold">{{ qty }}</span>
        <Button
          class="border-none w-[40px] h-9 md:h-10 object-center rounded-r-lg hover:bg-sky-200"
          @click="increaseQty"
        >
          <PlusOutlined />
        </Button>
      </div>

      <span class="text-body-2-semibold font-normal text-xl min-w-[70px]">{{
        `${formatNumberWithCommas(cartItem.price)} đ`
      }}</span>
      <span class="text-body-2-semibold text-xl min-w-[70px]">{{
        `${formatNumberWithCommas(cartItem.price * qty)} đ`
      }}</span>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { ICartItem } from '@/interfaces/cart.interface'
import { formatNumberWithCommas } from '@/utils'
import { Checkbox, Image, Button } from 'ant-design-vue'
import { MinusOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons-vue'
import { ref, watch } from 'vue'
import { deleteCartItem, updateQuantity } from '@/services/cart/post'
import { useCart } from '@/stores/use-cart'

const { cartItem } = defineProps<{
  cartItem: ICartItem
}>()

const {
  removeFromCart,
  increaseQuantityCartItem,
  decreaseQuantityCartItem,
  pushOrPopSelectedVariant
} = useCart()
const qty = ref<number>(cartItem.quantity)
const isChecked = ref<boolean>(false)

const selectCartItem = (e: any) => {
  pushOrPopSelectedVariant(cartItem.variantId)
}

const removeItem = async (variantId: number) => {
  removeFromCart(variantId)
  await deleteCartItem(variantId)
}

const decreaseQty = async () => {
  qty.value = Math.max(1, --qty.value)
  decreaseQuantityCartItem(cartItem.variantId)
  await updateQuantity({
    quantity: qty.value,
    variantId: cartItem.variantId
  })

  if (qty.value == 0) {
    removeItem(cartItem.variantId)
  }
}

const increaseQty = async () => {
  qty.value++
  increaseQuantityCartItem(cartItem.variantId)
  await updateQuantity({
    quantity: qty.value,
    variantId: cartItem.variantId
  })
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
.btnDelete {
  display: none;
}

@media only screen and (min-width: 600px) {
  .btnDelete {
    display: block;
  }
}
</style>
