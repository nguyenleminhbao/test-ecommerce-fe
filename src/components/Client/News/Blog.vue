<template>
  <InputSearch
    v-model:value="value"
    class="border-neutral-4 border-2 rounded-lg sm:w-80 [&_.ant-btn-default]:border-0 [&_.ant-btn-default]:flex [&_.ant-btn-default]:justify-center [&_.ant-btn-default]:items-center"
    size="large"
    placeholder="Search..."
    :bordered="false"
    :loading="loading"
    @search="onSearch"
  />
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
import { Pagination, InputSearch } from 'ant-design-vue'
import { useFeed } from '@/composables/useFeed'

const currentPage = ref<number>(1)
const { data: feeds } = useFeed()

const loading = ref<boolean>(false)
const value = ref<string>('')
const onSearch = (searchValue: string) => {
  console.log('use value', searchValue)
  console.log('or use this.value', value.value)
}
</script>
