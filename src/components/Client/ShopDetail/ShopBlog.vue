<template>
  <section class="w-full flex flex-col">
    <div class="grid grid-cols-3 gap-x-[25px] gap-y-10 mt-5">
      <BlogItem
        v-for="(feed, index) in feeds.slice((currentPage - 1) * 12, currentPage * 12)"
        :key="index"
        :feedId="feed.id"
        :title="feed.title"
        :imageUrl="feed.thumbnail"
        :date="feed.createdAt"
        :content="feed.content"
      />
    </div>
    <div class="flex justify-center my-20">
      <Pagination v-model:current="currentPage" :total="feeds.length" show-less-items />
    </div>
  </section>
</template>

<script setup lang="ts">
import BlogItem from '@/components/UI/BlogItem.vue'
import type { IFeed } from '@/interfaces/news.interface'
import { getFeedByShop } from '@/services/news/get'
import { onMounted, ref } from 'vue'
import { Pagination } from 'ant-design-vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const feeds = ref<IFeed[]>([])
const currentPage = ref<number>(1)

onMounted(async () => {
  const data = await getFeedByShop(route.params['shopId'] as string)
  feeds.value = data.message
})
</script>
