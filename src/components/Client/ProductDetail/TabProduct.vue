<template>
  <section class="mt-6">
    <Tabs
      v-model:activeKey="activeKey"
      class="[&_.ant-tabs-tab-btn]:flex [&_.ant-tabs-tab-btn]:items-center"
    >
      <TabPane key="1">
        <template #tab>
          <LayoutOutlined />
          <span class="text-body-2">Reviews</span>
        </template>
        <Reviews :productId="productId" />
      </TabPane>
      <TabPane key="2">
        <template #tab>
          <FileTextOutlined />
          <span class="text-body-2">Description</span>
        </template>
        <Description :description="description" />
      </TabPane>
    </Tabs>
  </section>
</template>

<script setup lang="ts">
import { LayoutOutlined, FileTextOutlined } from '@ant-design/icons-vue'
import { Tabs, TabPane } from 'ant-design-vue'
import { ref } from 'vue'
import { Reviews, Description } from './_components'

const { description, productId } = defineProps<{
  description: string
  productId: number
}>()

const activeKey = ref('1')
</script>
