<template>
  <section class="w-full flex flex-col" v-if="reels">
    <div class="grid grid-cols-4 gap-x-[25px] gap-y-10 mt-5">
      <ReelItem
        v-for="(reel, index) in reels.message.slice((currentPage - 1) * 12, currentPage * 12)"
        :key="index"
        :reelId="reel.id"
        :video-url="reel.video"
        :title="reel.title"
        :description="reel.description"
        :view="reel.view"
      />
    </div>
    <div class="flex justify-center my-20">
      <Pagination v-model:current="currentPage" :total="reels.message.length" show-less-items />
    </div>
  </section>
</template>

<script setup lang="ts">
import ReelItem from '@/components/UI/ReelItem.vue'
import { getReelByShop } from '@/services/news/get'
import { ref } from 'vue'
import { Pagination } from 'ant-design-vue'
import { useRoute } from 'vue-router'
import useSWRV from 'swrv'
import { configSWRV } from '@/config/swrv'

const route = useRoute()
const currentPage = ref<number>(1)

const { data: reels } = useSWRV(
  `/news/reel/shop/${route.params['shopId'] as string}`,
  getReelByShop,
  configSWRV
)
</script>
