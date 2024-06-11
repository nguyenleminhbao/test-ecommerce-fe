<template>
  <div class="grid gap-[48px] pt-[48px] max-w-[1120px] mx-auto">
    <div class="flex items-end justify-between text-neutral-7 max-w-[1120px]">
      <h1 data-aos="zoom-in" class="text-headline-4">Reel</h1>
      <ButtonArrow text="More Reels" link="/news" />
    </div>
    <div class="flex overflow-x-auto items-start gap-[24px] scrollbar-hide relative">
      <ReelItem
        v-for="(reel, index) in reels"
        :key="index"
        :reelId="reel.id"
        :video-url="reel.video"
        :title="reel.title"
        :view="reel.view"
      />
      <RightCircleFilled
        class="bg-green z-10 sticky right-2 top-[calc(50%_-_50px)] text-4xl opacity-30"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonArrow from '@/components/UI/elements/ButtonArrow.vue'
import ReelItem from '@/components/UI/ReelItem.vue'
import type { IReel } from '@/interfaces/news.interface'
import { getAllReel } from '@/services/news/get'
import { RightCircleFilled } from '@ant-design/icons-vue'
import { onMounted, ref } from 'vue'

const reels = ref<IReel[]>([])

onMounted(async () => {
  const data = await getAllReel()
  reels.value = data.message
})
</script>
