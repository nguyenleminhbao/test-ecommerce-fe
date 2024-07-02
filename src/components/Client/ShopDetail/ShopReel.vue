<template>
  <section class="w-full flex flex-col" v-if="reels">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[25px] gap-y-10 mt-5">
      <ReelItem
        v-for="(reel, index) in reels.slice((currentPage - 1) * 12, currentPage * 12)"
        :key="index"
        :reelId="reel.id"
        :video-url="reel.video"
        :title="reel.title"
        :description="reel.description"
        :view="reel.view"
        otherStyle="!max-w-full"
      />
    </div>
    <div class="flex justify-center my-20">
      <Pagination v-model:current="currentPage" :total="reels.length" show-less-items />
    </div>
  </section>
</template>

<script setup lang="ts">
import ReelItem from '@/components/UI/ReelItem.vue'
import { ref } from 'vue'
import { Pagination } from 'ant-design-vue'
import { useRoute } from 'vue-router'
import { useShopReel } from '@/composables/useReel'

const route = useRoute()
const currentPage = ref<number>(1)

const { data: reels } = useShopReel({ shopId: route.params['shopId'] as string })
</script>
