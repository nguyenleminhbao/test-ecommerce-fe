<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[25px] gap-y-10 mt-5">
    <BlogItem
      v-if="feeds"
      v-for="(feed, index) in feeds.message.slice((currentPage - 1) * 12, currentPage * 12)"
      :key="index"
      :feedId="feed.id"
      :imageUrl="feed.thumbnail"
      :title="feed.title"
      :date="feed.createdAt"
      :content="feed.content"
      class=" !max-w-full"
    />
  </div>
  <div class="flex justify-center my-20">
    <Pagination
      v-if="feeds"
      v-model:current="currentPage"
      :total="feeds.message.length"
      show-less-items
    />
  </div>
</template>

<script setup lang="ts">
import BlogItem from '@/components/UI/BlogItem.vue'
import { ref } from 'vue'
import { Pagination } from 'ant-design-vue'
import { getAllFeed } from '@/services/news/get'
import useSWRV from 'swrv'
import { configSWRV } from '@/config/swrv'

const currentPage = ref<number>(1)
const { data: feeds } = useSWRV('feeds', getAllFeed, configSWRV)
</script>
