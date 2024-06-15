<template>
  <div class="grid grid-cols-4 gap-x-[25px] gap-y-10">
    <ReelItem
    v-if="reels"
      v-for="(reel, index) in reels.message"
      :key="index"
      :reelId="reel.id"
      :video-url="reel.video"
      :title="reel.title"
      :description="reel.description"
      :view="reel.view"
    />
  </div>
</template>

<script setup lang="ts">
import ReelItem from '@/components/UI/ReelItem.vue'
import { getAllReel } from '@/services/news/get'
import useSWRV from 'swrv'
import { configSWRV } from '@/config/swrv'


const { data:reels  } = useSWRV('reels', getAllReel,configSWRV)


</script>
