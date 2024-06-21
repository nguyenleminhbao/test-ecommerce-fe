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
      <RightIcon v-if="reels.length > 4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonArrow from '@/components/UI/elements/ButtonArrow.vue'
import ReelItem from '@/components/UI/ReelItem.vue'
import { useReel } from '@/composables/useReel'
import { RightIcon } from '@/components/UI/elements/index'

const { data: reels } = useReel()
</script>
