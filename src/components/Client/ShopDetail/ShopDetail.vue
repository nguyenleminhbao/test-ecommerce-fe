<template>
  <div class="max-w-[1120px] mx-auto mb-10" v-if="shop">
    <ShopInfo :shop-id="shop.shopId" :shop-name="shop.shopName" :shop-avatar="shop.shopAvatar" />
    <HeroBanner :shop-banners="shop.shopBanners" />
    <Newest />

    <Tabs
      v-model:activeKey="activeKey"
      class="mt-20 [&_.ant-tabs-tab-btn]:flex [&_.ant-tabs-tab-btn]:items-center"
      @change="onChange"
    >
      <TabPane key="1">
        <template #tab>
          <AppstoreOutlined />
          <span class="text-body-2">Product</span>
        </template>
        <ShopProduct />
      </TabPane>

      <TabPane key="2">
        <template #tab>
          <FileOutlined />
          <span class="text-body-2">Blog</span>
        </template>
        <ShopBlog />
      </TabPane>

      <TabPane key="3" force-render>
        <template #tab>
          <MobileOutlined />
          <span class="text-body-2">Reel</span>
        </template>
        <ShopReel />
      </TabPane>
    </Tabs>
  </div>
  <div v-else class="w-full min-h-[500px] object-center">
    <Spin class="[&_.ant-spin-dot-item]:bg-black [&_.ant-spin-dot-item]:text-xl" size="large" />
  </div>
</template>

<script setup lang="ts">
import ShopInfo from './ShopInfo.vue'
import HeroBanner from './HeroBanner.vue'
import Newest from './TheNewest.vue'
import ShopProduct from './ShopProduct.vue'
import ShopBlog from './ShopBlog.vue'
import ShopReel from './ShopReel.vue'

import type { IShop } from '@/interfaces/shop.interface'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getOneShop } from '@/services/shop/get'
import { Tabs, TabPane } from 'ant-design-vue'
import { AppstoreOutlined, FileOutlined, MobileOutlined } from '@ant-design/icons-vue'

const route = useRoute()
const router = useRouter()
const shop = ref<IShop>()

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
  const data = await getOneShop(route.params.shopId as string)
  shop.value = data.message
})
</script>
