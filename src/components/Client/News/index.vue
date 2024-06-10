<template>
  <Header />
  <div class="max-w-[1120px] mx-auto pt-6">
    <Tabs v-model:activeKey="activeKey">
      <TabPane key="1" tab="Blog" class="pt-[20px]"><Blog /></TabPane>
      <TabPane key="2" tab="Reel" force-render><Reel /></TabPane>
    </Tabs>
    <div class="flex justify-center my-20">
      <ButtonRound title="Show more" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Blog from './Blog.vue'
import Reel from './Reel.vue'
import ButtonRound from '@/components/UI/elements/ButtonRound.vue'

import { ref } from 'vue'
const activeKey = ref('1')
import { Tabs, TabPane } from 'ant-design-vue'
</script>
