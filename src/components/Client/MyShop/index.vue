<template>
  <div
    class="w-[1120px] mx-auto mb-10"
    v-if="!isLoading"
    :class="isLoading && 'object-center min-h-[500px]'"
  >
    <div v-if="authStore.isShopOwner && shopOwner" class="w-full h-full">
      <ShopAvatar
        :shop-avatar="shopOwner?.shopAvatar"
        :shop-name="shopOwner?.shopName"
        :shop-id="shopOwner?.shopId"
        :user-id="shopOwner.userId"
      />
      <Banner v-if="shopOwner" :shop-id="shopOwner.shopId" :shop-banners="shopOwner.shopBanners" />

      <Tabs
        v-model:activeKey="activeKey"
        class="mt-8 [&_.ant-tabs-tab-btn]:flex [&_.ant-tabs-tab-btn]:items-center"
        @change="onChange"
      >
        <TabPane key="1">
          <template #tab>
            <AppstoreOutlined />
            <span class="text-body-2 font-semibold">Product</span>
          </template>
          <ProductShop :shop-id="shopOwner?.shopId" />
        </TabPane>

        <TabPane key="2">
          <template #tab>
            <FileOutlined />
            <span class="text-body-2 font-semibold">Blog</span>
          </template>
          <BlogShop :shop-id="shopOwner?.shopId" />
        </TabPane>

        <TabPane key="3" force-render>
          <template #tab>
            <MobileOutlined />
            <span class="text-body-2 font-semibold">Reel</span>
          </template>
          <ReelShop :shop-id="shopOwner?.shopId" />
        </TabPane>
      </Tabs>
    </div>
    <div v-else><FormShop /></div>
  </div>
  <div v-else class="w-full min-h-[500px] object-center">
    <Spin class="[&_.ant-spin-dot-item]:bg-black [&_.ant-spin-dot-item]:text-xl" size="large" />
  </div>
</template>

<script setup lang="ts">
import ShopAvatar from './ShopAvatar.vue'
import Banner from './Banner.vue'
import FormShop from './FormShop.vue'
import { onMounted, ref } from 'vue'
import { getShopAdmin } from '@/services/shop/get'
import { useAuthSystem } from '@/stores/use-auth'
import ProductShop from './ProductShop.vue'
import ReelShop from './ReelShop.vue'
import BlogShop from './BlogShop.vue'
import { Spin } from 'ant-design-vue'
import { AppstoreOutlined, FileOutlined, MobileOutlined } from '@ant-design/icons-vue'
import { Tabs, TabPane } from 'ant-design-vue'
import { useRoute, useRouter } from 'vue-router'

const shopOwner = ref<{
  shopId: string
  userId: string
  shopName: string
  shopAvatar: string
  shopBanners: string[]
  isShopOwner: boolean
}>()

const route = useRoute()
const router = useRouter()
const authStore = useAuthSystem()
const { setShopOwner } = useAuthSystem()
const isLoading = ref<boolean>(false)

const findTab = (tab: string) => {
  if (tab == 'Product') return '1'
  else if (tab == 'Blog') return '2'
  else if (tab == 'Reel') return '3'
  else return '1'
}
const activeKey = ref(findTab(route.query.tab as string) ?? '1')

const onChange = () => {
  // // dynamic query product
  router.push({
    path: route.path,
    query: { tab: activeKey.value == '1' ? 'Product' : activeKey.value == '2' ? 'Blog' : 'Reel' }
  })
}

onMounted(async () => {
  isLoading.value = true
  const data = await getShopAdmin()
  shopOwner.value = data.message
  setShopOwner(data.message.isShopOwner)
  isLoading.value = false
})
</script>
