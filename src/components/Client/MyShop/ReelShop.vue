<template>
  <section class="mt-8 w-full flex flex-col">
    <span class="text-headline-3 mt-5 text-center">Reel</span>
    <div class="w-full grid grid-cols-4 mt-10 gap-4">
      <ReelItem
        v-for="(reel, index) in reels"
        :key="index"
        :reelId="reel.id"
        :video-url="reel.video"
        :title="reel.title"
        :view="reel.view"
        :is-edit="true"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ReelItem from '@/components/UI/ReelItem.vue'
import type { IReel } from '@/interfaces/news.interface'
import { getReelByShop } from '@/services/news/get'
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
