<template>
  <div class="grid gap-[48px] pt-[48px] max-w-[1120px] mx-auto">
    <span class="text-headline-3 text-center">Reel </span>
    <div class="flex w-full overflow-x-auto items-start gap-[24px] scrollbar-hide relative">
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
        class="bg-green z-10 sticky right-0 top-[calc(50%_-_50px)] text-4xl opacity-30"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ReelItem from '@/components/UI/ReelItem.vue'
import type { IReel } from '@/interfaces/news.interface'
import { getReelByShop } from '@/services/news/get'
import { RightCircleFilled } from '@ant-design/icons-vue'
import { onMounted, ref } from 'vue'

const { shopId } = defineProps<{
  shopId: string
}>()
const reels = ref<IReel[]>([])

onMounted(async () => {
  const data = await getReelByShop(shopId)
  reels.value = data.message
})
</script>
