<template>
  <div class="grid grid-cols-4 gap-x-[25px] gap-y-10 mt-5">
    <ReelItem
      v-if="reels"
      v-for="(reel, index) in reels.message.slice((currentPage - 1) * 12, currentPage * 12)"
      :key="index"
      :reelId="reel.id"
      :video-url="reel.video"
      :title="reel.title"
      :description="reel.description"
      :view="reel.view"
    />
  </div>
  <div class="flex justify-center my-20">
    <Pagination
      v-if="reels"
      v-model:current="currentPage"
      :total="reels.message.length"
      show-less-items
    />
  </div>
</template>

<script setup lang="ts">
import ReelItem from '@/components/UI/ReelItem.vue'
import { getAllReel } from '@/services/news/get'
import useSWRV from 'swrv'
import { configSWRV } from '@/config/swrv'
import { Pagination } from 'ant-design-vue'
import { ref } from 'vue'

const { data: reels } = useSWRV('reels', getAllReel, configSWRV)
const currentPage = ref<number>(1)
</script>
