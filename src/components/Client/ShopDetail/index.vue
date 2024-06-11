<template>
  <div class="max-w-[1120px] mx-auto mb-10" v-if="shop">
    <ShopInfo :shop-id="shop.shopId" :shop-name="shop.shopName" :shop-avatar="shop.shopAvatar" />
    <HeroBanner :shop-banners="shop.shopBanners" />
    <ShopProduct />
  </div>
</template>

<script setup lang="ts">
import ShopInfo from './ShopInfo.vue'
import HeroBanner from './HeroBanner.vue'
import ShopProduct from './ShopProduct.vue'
import type { IShop } from '@/interfaces/shop.interface'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getOneShop } from '@/services/shop/get'

const route = useRoute()
const shop = ref<IShop>()

onMounted(async () => {
  const data = await getOneShop(route.params.shopId as string)
  shop.value = data.message
})
</script>
