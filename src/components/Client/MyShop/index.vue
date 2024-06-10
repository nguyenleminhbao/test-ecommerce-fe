<template>
  <div class="w-[1120px] mx-auto mb-10">
    <div v-if="authStore.isShopOwner" class="w-full h-full">
      <ShopAvatar
        v-if="shopOwner"
        :shop-avatar="shopOwner?.shopAvatar"
        :shop-name="shopOwner?.shopName"
        :shop-id="shopOwner?.shopId"
        :user-id="shopOwner.userId"
      />
      <Banner v-if="shopOwner" :shop-id="shopOwner.shopId" :shop-banners="shopOwner.shopBanners" />
      <ReelShop />
    </div>
    <div v-if="!authStore.isShopOwner"><FormShop /></div>
  </div>
</template>

<script setup lang="ts">
import ShopAvatar from './ShopAvatar.vue'
import Banner from './Banner.vue'
import FormShop from './FormShop.vue'
import { onMounted, ref } from 'vue'
import { getShopAdmin } from '@/services/shop/get'
import { useAuthSystem } from '@/stores/use-auth'
import ReelShop from './ReelShop.vue'

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

onMounted(async () => {
  const data = await getShopAdmin()
  shopOwner.value = data.message
  setShopOwner(data.message.isShopOwner)
})
</script>
