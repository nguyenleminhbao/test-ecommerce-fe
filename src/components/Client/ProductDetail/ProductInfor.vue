<template>
  <div class="grid grid-cols-[4fr_6fr] gap-16">
    <div class="flex flex-col gap-6">
      <ProductImage :images="product.images" :primary-image="variant.variant_image" />

      <!-- <div class="grid grid-cols-2 gap-3 w-full">
        <Button
          class="h-9 border-neutral-7 object-center text-[16px]"
          :disabled="!isSupported"
          @click="prodShare"
          :icon="h(ShareAltOutlined)"
        >
          {{ isSupported ? 'Share' : 'Web share is not supported in your browser' }}
        </Button>
        <div class="flex gap-2 items-center text-2xl">
          <FacebookOutlined />
          <TwitterOutlined />
        </div>
      </div> -->
    </div>

    <Form class="flex flex-col relative justify-between">
      <div>
        <div class="flex items-center gap-2">
          <Rate
            v-model:value="resultReviewState.medium_star"
            :disabled="true"
            :allow-half="true"
            class="text-[16px] text-black"
          />
          <span>{{ `${resultReviewState.review_len} Reviews` }}</span>
        </div>
        <span class="text-headline-4 mt-4">{{ product.title }}</span>
        <div class="flex items-center mt-4">
          <span class="text-headline-6">₫{{ formatNumberWithCommas(variant.price) }}</span>
          <span class="line-through text-neutral-4 ml-3 text-headline-7"
            >₫{{ formatNumberWithCommas(variant.price) }}</span
          >
        </div>
        <div class="w-full h-6 border-b-[1px]"></div>
        <div class="flex flex-col">
          <RadioOption
            v-for="option in product.options"
            :option="option"
            :key="option.id"
            @options="listenOptions"
          />
        </div>
        <div class="flex flex-col mt-6">
          <span class="text-body-1-semibold text-neutral-4">Quantity</span>
          <div class="flex mt-3 items-center">
            <button
              class="border-[1px] w-[50px] h-10 object-center rounded-l-lg hover:bg-sky-200"
              @click="qty = Math.max(1, --qty)"
            >
              <MinusOutlined />
            </button>
            <span class="w-[50px] h-10 border-y-[1px] object-center">{{ qty }}</span>
            <button
              class="border-[1px] w-[50px] h-10 object-center rounded-r-lg hover:bg-sky-200"
              @click="qty++"
            >
              <PlusOutlined />
            </button>
          </div>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-2 gap-3 w-full">
        <Button class="h-9 border-neutral-7 object-center text-[16px]" @click="wish = !wish">
          <template #icon>
            <HeartOutlined v-if="!wish" />
            <HeartFilled v-else />
          </template>
          Wishlist
        </Button>
        <Button
          class="h-9 bg-primary text-white text-[16px] object-center"
          @click="addToCartFunc"
          :icon="h(ShoppingCartOutlined)"
        >
          Add to cart</Button
        >
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import {
  PlusOutlined,
  MinusOutlined,
  HeartOutlined,
  HeartFilled,
  ShareAltOutlined,
  ShoppingCartOutlined, FacebookOutlined, TwitterOutlined
} from '@ant-design/icons-vue'
import { Form, Button, message, Rate } from 'ant-design-vue'
import { ProductImage, RadioOption } from './_components'
import { computed, ref, h } from 'vue'
import type { IProduct, IVariant } from '@/interfaces/product.interface'
import { useRoute, useRouter } from 'vue-router'
import { formatNumberWithCommas, dynamicQuery, findVariant } from '@/utils'
import { useCart } from '@/stores/use-cart'
import { addToCart } from '@/services/cart/post'
import { isClient } from '@vueuse/shared'
import { useShare } from '@vueuse/core'

const options = ref({
  title: 'VueUse',
  text: 'Collection of essential Vue Composition Utilities!',
  url: isClient ? location.href : ''
})
const { share, isSupported } = useShare(options)
function prodShare() {
  return share().catch((err) => err)
}

const { product } = defineProps<{
  product: IProduct
}>()
const wish = ref<boolean>(false)
const route = useRoute()
const router = useRouter()
const qty = ref<number>(1)
const variant = ref<IVariant>(
  product.variants.find((variant) => variant.position == (route.query['position'] ?? 2)) as IVariant
)

const resultReviewState = ref<{
  review_len: number
  medium_star: number
}>({
  review_len: isNaN(parseFloat(route.query.len as string))
    ? 0
    : parseFloat(route.query.len as string),
  medium_star: isNaN(parseFloat(route.query.medium as string))
    ? 0
    : parseFloat(route.query.medium as string)
})

const variantOptions = ref<{ key: string; value: string; position: number }[]>(
  product.options.map((option) => {
    return {
      key: option.name,
      value: option.values[0],
      position: 1
    }
  })
)

// dynamic query product
router.push({
  path: route.path,
  query: { ...route.query, ...dynamicQuery(variantOptions) }
})

const listenOptions = (e: { key: string; value: string; position: number }) => {
  variantOptions.value = variantOptions.value.map((ele) => {
    if (ele.key == e.key) {
      ele = e
    }
    return ele
  })

  variant.value = findVariant(
    product.options,
    product.variants,
    variantOptions.value.map((ele) => ele.position)
  )

  router.push({
    path: route.path,
    query: { ...route.query, ...dynamicQuery(variantOptions), position: variant.value.position }
  })
}

const { addToCart: _addToCart } = useCart()

const addToCartFunc = async () => {
  const cartItem = {
    variantId: variant.value.id,
    image: variant.value.variant_image,
    price: parseFloat(variant.value.price),
    title: product.title + ' /' + variant.value.title,
    quantity: qty.value,
    shopId: product.shopId,
    shopName: product.shopName
  }
  _addToCart(cartItem)
  message.success('Add to cart successfully')
  await addToCart(cartItem)
}
</script>
