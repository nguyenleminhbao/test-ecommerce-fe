<template>
  <section class="w-full flex flex-col">
    <div class="grid grid-cols-4 gap-x-[25px] gap-y-10 mt-5">
      <ReelItem
        v-for="(reel, index) in reels.slice((currentPage - 1) * 12, currentPage * 12)"
        :key="index"
        :reelId="reel.id"
        :video-url="reel.video"
        :title="reel.title"
        :description="reel.description"
        :view="reel.view"
      />
    </div>
    <div class="flex justify-center my-20">
      <Pagination v-model:current="currentPage" :total="reels.length" show-less-items />
    </div>
  </section>
</template>

<script setup lang="ts">
import ReelItem from '@/components/UI/ReelItem.vue'
import type { IReel } from '@/interfaces/news.interface'
import { getReelByShop } from '@/services/news/get'
import { onMounted, ref } from 'vue'
import { Pagination } from 'ant-design-vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const reels = ref<IReel[]>([])
const currentPage = ref<number>(1)

onMounted(async () => {
  const data = await getReelByShop(route.params['shopId'] as string)
  reels.value = data.message
})
</script>
