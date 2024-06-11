<template>
  <div class="w-[1120px] mx-auto mb-10" :class="isLoading && 'object-center min-h-[500px]'">
    <Spin v-if="isLoading" size="large" />
    <div v-if="!isLoading && authStore.isShopOwner && shopOwner" class="w-full h-full">
      <ShopAvatar
        :shop-avatar="shopOwner?.shopAvatar"
        :shop-name="shopOwner?.shopName"
        :shop-id="shopOwner?.shopId"
        :user-id="shopOwner.userId"
      />
      <Banner :shop-id="shopOwner.shopId" :shop-banners="shopOwner.shopBanners" />
      <ReelShop :shop-id="shopOwner.shopId" />
      <ShopProduct :shop-id="shopOwner.shopId" />
    </div>
    <div v-else><FormShop /></div>
  </div>
</template>

<script setup lang="ts">
import ShopAvatar from './ShopAvatar.vue'
import Banner from './Banner.vue'
import FormShop from './FormShop.vue'
import ShopProduct from './ShopProduct.vue'
import { onMounted, ref } from 'vue'
import { getShopAdmin } from '@/services/shop/get'
import { useAuthSystem } from '@/stores/use-auth'
import ReelShop from './ReelShop.vue'
import { Spin } from 'ant-design-vue'

const shopOwner = ref<{
  shopId: string
  userId: string
  shopName: string
  shopAvatar: string
  shopBanners: string[]
  isShopOwner: boolean
}>()
const authStore = useAuthSystem()
const { setShopOwner } = useAuthSystem()
const isLoading = ref<boolean>(false)

onMounted(async () => {
  isLoading.value = true
  const data = await getShopAdmin()
  shopOwner.value = data.message
  setShopOwner(data.message.isShopOwner)
  isLoading.value = false
})
</script>
