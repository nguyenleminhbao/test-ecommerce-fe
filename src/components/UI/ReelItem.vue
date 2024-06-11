<template>
  <RouterLink class="w-full" :to="`/reel/${reelId}`" @click="onClick">
    <div
      class="w-full h-[420px] bg-gray-800 rounded-2xl relative group cursor-pointer"
      @mouseover="(playing = true), (muted = true)"
      @mouseleave="(playing = false), (currentTime = 0)"
    >
      <video ref="video" class="w-full h-full rounded-lg object-cover"></video>
    </div>
    <h1 class="pt-3 text-headline-7 text-neutral-7">{{ title }}</h1>
    <span class="text-neutral-4 text-[14px] leading-[24px]">{{ numOfView }} views</span>
  </RouterLink>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMediaControls } from '@vueuse/core'
import { increateViewReel } from '@/services/news/post'

const {
  reelId,
  videoUrl,
  title,
  view,
  isEdit = false
} = defineProps<{
  reelId: string
  videoUrl: string
  title: string
  view: number
  isEdit?: boolean
}>()

const video = ref()
const { playing, volume, muted, currentTime } = useMediaControls(video, {
  src: videoUrl
})

const numOfView = ref<number>(view)
const onClick = async () => {
  await increateViewReel(reelId)
  numOfView.value++
}

// Change initial media properties
onMounted(() => {
  volume.value = 1
})
</script>
