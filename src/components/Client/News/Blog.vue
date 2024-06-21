<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[25px] gap-y-10 mt-5">
    <BlogItem
      v-for="(feed, index) in feeds.slice((currentPage - 1) * 12, currentPage * 12)"
      :key="index"
      :feedId="feed.id"
      :imageUrl="feed.thumbnail"
      :title="feed.title"
      :date="feed.createdAt"
      :content="feed.content"
      class="!max-w-full"
    />
  </div>
  <div class="flex justify-center my-20">
    <Pagination v-model:current="currentPage" :total="feeds.length" show-less-items />
  </div>
</template>

<script setup lang="ts">
import BlogItem from '@/components/UI/BlogItem.vue'
import { ref } from 'vue'
import { Pagination } from 'ant-design-vue'
import { useFeed } from '@/composables/useFeed'

const currentPage = ref<number>(1)
const { data: feeds } = useFeed()
</script>
