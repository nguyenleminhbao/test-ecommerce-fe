<template>
  <Drawer
    v-model:open="open"
    title="Cart"
    :closable="false"
    :footer-style="{ textAlign: 'right' }"
    @close="closeCart"
    class="[&_.ant-drawer-title]:text-headline-6 [&_.ant-drawer-body]:px-0"
    :width="width > 500 ? 450 : 300"
  >
    <ul class="flex flex-col h-full">
      <CartItem
        v-if="cartStore.cart"
        v-for="cartItem in cartStore.cart.cartItems"
        :key="cartItem.variantId"
        :cart-item="cartItem"
      />
      <div v-if="!cartStore.cart?.cartItems.length" class="w-full h-full object-center">
        <img
          src="@/assets/images/no-shopping-cart.png"
          class="w-[150px] aspect-square object-center"
        />
      </div>
    </ul>
    <template #footer>
      <div class="flex justify-end py-2">
        <Button class="h-9 mr-2" @click="closeCart">Cancel</Button>
        <Button class="h-9 bg-primary text-white text-[16px] object-center" @click="goToCart"
          >Go to cart</Button
        >
      </div>
    </template>
  </Drawer>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, Button } from 'ant-design-vue'
import { CartItem } from '@/components/UI/elements'
import { useCart } from '@/stores/use-cart'
import { useRouter } from 'vue-router'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const router = useRouter()

const cartStore = useCart()
const open = ref<boolean>(false)
const showCart = () => {
  open.value = true
}
const closeCart = () => {
  open.value = false
}

const goToCart = () => {
  router.push('/cart')
  open.value = false
}

defineExpose({
  showCart,
  closeCart
})
</script>
