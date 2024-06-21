<template>
  <div class="grid gap-[48px] pt-[48px] max-w-[1120px] mx-auto">
    <div class="flex items-end justify-between text-neutral-7 max-w-[1120px]">
      <h1 data-aos="zoom-in" class="text-headline-4">Reel</h1>
      <ButtonArrow text="More Reels" link="/news?tab=Reel" />
    </div>
    <div class="flex overflow-x-auto items-start gap-[24px] scrollbar-hide relative">
      <ReelItem
        v-for="(reel, index) in reels"
        :key="index"
        :reelId="reel.id"
        :video-url="reel.video"
        :description="reel.description"
        :title="reel.title"
        :view="reel.view"
      />
      <RightCircleFilled
        v-if="reels.length > 4"
        class="bg-green z-10 sticky right-2 top-[calc(50%_-_50px)] text-4xl opacity-30"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonArrow from '@/components/UI/elements/ButtonArrow.vue'
import ReelItem from '@/components/UI/ReelItem.vue'
import { useReel } from '@/composables/useReel'
import { RightCircleFilled } from '@ant-design/icons-vue'

const { data: reels } = useReel()
</script>
