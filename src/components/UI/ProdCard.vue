<template>
  <div class="min-w-[262px] gap-[12px] cursor-pointer group">
    <div
      class="flex flex-col bg-neutral-2 p-[16px] pb-0 justify-between rounded-t-lg ease-linear max-h-[350px]"
    >
      <div class="flex justify-between">
        <div class="grid gap-[8px]">
          <BadgeMedium
            title="New"
            textColor="text-black"
            bgColor="bg-white"
            :type="TYPE_BADGE.NEW"
          />
          <BadgeMedium
            :title="'10'"
            textColor="text-neutral-1"
            bgColor="bg-secondary-green"
            :type="TYPE_BADGE.DISCOUNT"
          />
        </div>

        <Button shape="circle" @click="wish = !wish">
          <template #icon>
            <HeartOutlined v-if="!wish" />
            <HeartFilled v-else />
          </template>
        </Button>
      </div>

      <RouterLink :to="`/product/${product?.id}?title=${product.title}`" @click="reloadPage">
        <img
          class="max-w-full w-full h-[240px] group-hover:max-h-[200px] rounded-md object-cover my-3 shadow-md"
          :src="product.variants[0].variant_image"
        />
      </RouterLink>

      <button
        @click="addToCartFunc"
        class="border-[1px] border-neutral-7 rounded-[8px] py-1 text-button-s hover:bg-neutral-7 hover:text-white bg-neutral-7 text-white hidden group-hover:block group-hover:delay-150 animate-jump-in animate-once"
      >
        Add to cart
      </button>
    </div>

    <RouterLink
      :to="`/product/${product?.id}?title=${product.title}`"
      class="grid gap-1 group-hover:border-[1px] group-hover:border-t-0 group-hover:border-neutral-3 group-hover:shadow-xl p-4 pt-0 rounded-b-lg"
    >
      <div class="text-neutral-5 text-[16px] mt-1">
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
      </div>
      <span class="text-body-2-semibold text-neutral-7 two-lines-truncate h-[42px]">{{
        product.title
      }}</span>
      <div class="flex gap-[12px]">
        <span class="text-caption-1-semibold"
          >₫{{ formatNumberWithCommas(product.variants[0].price) }}</span
        >
        <del class="text-caption-1 text-neutral-4"
          >₫{{ formatNumberWithCommas(product.variants[0].price) }}</del
        >
      </div>
    </RouterLink>
    <DrawerCart ref="drawerCart" />
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue'
import { StarFilled, HeartOutlined, HeartFilled } from '@ant-design/icons-vue'
import BadgeMedium from '@/components/UI/elements/BadgeMedium.vue'
import { TYPE_BADGE } from '@/constants/enum/badge.enum'
import type { IProduct } from '@/interfaces/product.interface'
import { formatNumberWithCommas } from '@/utils'
import { RouterLink, useRouter } from 'vue-router'
import { useCart } from '@/stores/use-cart'
import { addToCart } from '@/services/cart/post'
import { ref, h } from 'vue'
import DrawerCart from '@/components/UI/DrawerCart.vue'
import { useAuth, useClerk } from 'vue-clerk'

const { product } = defineProps<{
  product: IProduct
}>()

const { isSignedIn } = useAuth()
const { openSignIn } = useClerk()
const router = useRouter()

const { addToCart: _addToCart } = useCart()
const drawerCart = ref()
const wish = ref<boolean>(false)

const addToCartFunc = async () => {
  if (isSignedIn.value) {
    const cartItem = {
      variantId: product.variants[0].id,
      image: product.variants[0].variant_image,
      price: parseFloat(product.variants[0].price),
      title: product.title,
      quantity: 1,
      shopId: product.shopId,
      shopName: product.shopName
    }

    _addToCart(cartItem)
    // message.success('Add to cart successfully')
    drawerCart?.value?.showCart()
    await addToCart(cartItem)
  } else {
    openSignIn()
  }
}

const reloadPage = () => {
  setTimeout(() => {
    window.location.reload()
  }, 100)
}
</script>

<style scoped>
:where(.css-dev-only-do-not-override-16pw25h).ant-btn.ant-btn-circle {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
