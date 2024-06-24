<template>
  <Header />
  <div class="max-w-[1120px] mx-auto pt-6">
    <Tabs
      v-model:activeKey="activeKey"
      @change="onChange"
      class="[&_.ant-tabs-tab-btn]:flex [&_.ant-tabs-tab-btn]:items-center"
    >
      <TabPane key="1">
        <template #tab>
          <FileOutlined />
          <span class="text-body-2 font-semibold">Blog</span>
        </template>
        <Blog />
      </TabPane>

      <TabPane key="2" force-render>
        <template #tab>
          <MobileOutlined />
          <span class="text-body-2 font-semibold">Reel</span>
        </template>
        <Reel />
      </TabPane>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Blog from './Blog.vue'
import Reel from './Reel.vue'
import { FileOutlined, MobileOutlined } from '@ant-design/icons-vue'
import { Tabs, TabPane } from 'ant-design-vue'
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const findTab = (tab: string) => {
  if (tab == 'Blog') return '1'
  else if (tab == 'Reel') return '2'
  else return '1'
}
const activeKey = ref(findTab(route.query.tab as string))

const onChange = () => {
  // // dynamic query product
  router.push({
    path: route.path,
    query: { tab: activeKey.value == '2' ? 'Reel' : 'Blog' }
  })
}
</script>
