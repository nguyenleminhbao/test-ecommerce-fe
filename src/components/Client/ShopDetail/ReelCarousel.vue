<template>
  <div class="grid gap-[48px] pt-[48px] max-w-[1120px] mx-auto" v-if="reels">
    <span class="text-headline-3 text-center">Reel </span>
    <div class="flex w-full overflow-x-auto items-start gap-[24px] scrollbar-hide relative">
      <ReelItem
        v-for="(reel, index) in reels.message"
        :key="index"
        :reelId="reel.id"
        :video-url="reel.video"
        :description="reel.description"
        :title="reel.title"
        :view="reel.view"
      />
      <RightCircleFilled
        class="bg-green z-10 sticky right-0 top-[calc(50%_-_50px)] text-4xl opacity-30"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ReelItem from '@/components/UI/ReelItem.vue'
import { configSWRV } from '@/config/swrv'
import { getReelByShop } from '@/services/news/get'
import { RightCircleFilled } from '@ant-design/icons-vue'
import useSWRV from 'swrv'

const { shopId } = defineProps<{
  shopId: string
}>()
const { data: reels } = useSWRV(`/news/reel/shop/${shopId}`, getReelByShop, configSWRV)
</script>
