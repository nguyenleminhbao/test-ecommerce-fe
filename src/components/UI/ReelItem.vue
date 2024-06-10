<template>
  <RouterLink class="w-full" to="/reel/:reelId">
    <div
      class="w-full h-[420px] bg-gray-800 rounded-2xl relative group cursor-pointer"
      @mouseover="playing = true, muted = true"
      @mouseleave="playing = false, currentTime=0"
    >
      <video ref="video" class="w-full h-full rounded-lg object-cover"></video>
      <!-- <div class="absolute top-[calc(50%_-_24px)] left-[calc(50%_-_24px)]">
      <PlayCircleOutlined class="text-5xl text-rose-600 cursor-pointer" />
    </div> -->
    </div>
    <h1 class="pt-3 text-headline-7 text-neutral-7">{{ title }}</h1>
    <span class="text-neutral-4 text-[14px] leading-[24px]">{{ view }} views</span>
  </RouterLink>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMediaControls } from '@vueuse/core'
import { PlayCircleOutlined } from '@ant-design/icons-vue'

const { videoUrl, title, view } = defineProps<{
  videoUrl: string
  title: string
  view: string
}>()

const video = ref()
const { playing, volume, muted, currentTime } = useMediaControls(video, {
  src: videoUrl
})

// Change initial media properties
onMounted(() => {
  volume.value = 1
})
</script>
