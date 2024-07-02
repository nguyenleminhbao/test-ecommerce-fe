<template>
  <RouterLink
    class="relative group max-w-[262px]"
    :class="class"
    :to="`/reel/${reelId}`"
    @click="onClick"
  >
    <div
      class="w-full h-[420px] aspect-[9/16] bg-gray-800 rounded-2xl relative group cursor-pointer"
      @mouseover="playing = true; muted = true"
      @mouseleave="playing = false; currentTime = 0"
    >
      <video
        ref="video"
        :src="videoUrl"
        class="w-full h-full rounded-lg object-cover"
        :muted="true"
      ></video>
      <Button
        v-if="isEdit"
        class="absolute bg-black bottom-2 right-2 shadow-lg hidden group-hover:block"
        type="primary"
        @click="drawerEditReel?.showDrawer"
        >Edit</Button
      >
    </div>
    <h1 class="pt-3 text-headline-7 text-neutral-7 line-clamp-2">{{ title }}</h1>
    <span class="text-neutral-4 text-[14px] leading-[24px]">{{ numOfView }} views</span>
    <DrawerEditReel
      ref="drawerEditReel"
      :reel-id="reelId"
      :video-url="videoUrl"
      :title="title"
      :description="description"
      :view="view"
      :run-mutation="runMutation"
    />
  </RouterLink>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMediaControls } from '@vueuse/core'
import { Button } from 'ant-design-vue'
import { increateViewReel } from '@/services/news/post'
import type { IResponse } from '@/interfaces/response.interface'
import type { IReel } from '@/interfaces/news.interface'
import type { fetcherFn } from 'swrv/dist/types'
import { DrawerEditReel } from './drawer'

const {
  reelId,
  videoUrl,
  title,
  description,
  view,
  isEdit = false,
  runMutation
} = defineProps<{
  reelId: string
  videoUrl: string
  title: string
  description: string
  view: number
  isEdit?: boolean
  class?: string
  runMutation?: (data?: fetcherFn<IResponse<IReel[]>>) => Promise<void>
}>()

const numOfView = ref<number>(view)
const onClick = async () => {
  await increateViewReel(reelId)
  numOfView.value++
}
const video = ref()
const drawerEditReel = ref()

const { playing, muted, currentTime } = useMediaControls(video, {
  src: videoUrl
})
</script>
