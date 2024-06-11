<template>
  <div class="grid grid-cols-4 gap-x-[25px] gap-y-10">
    <ReelItem
      v-for="(reel, index) in reels"
      :key="index"
      :reelId="reel.id"
      :video-url="reel.video"
      :title="reel.title"
      :view="reel.view"
    />
  </div>
</template>

<script setup lang="ts">
import ReelItem from '@/components/UI/ReelItem.vue'
import type { IReel } from '@/interfaces/news.interface'
import { getAllReel } from '@/services/news/get'
import { onMounted, ref } from 'vue'

const reels = ref<IReel[]>([])

onMounted(async () => {
  const data = await getAllReel()
  reels.value = data.message
})
</script>
