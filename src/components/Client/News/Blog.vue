<template>
  <InputSearch
    v-model:value="titleSearch"
    class="border-neutral-4 border-2 rounded-lg sm:w-80 [&_.ant-btn-default]:border-0 [&_.ant-btn-default]:flex [&_.ant-btn-default]:justify-center [&_.ant-btn-default]:items-center"
    size="large"
    placeholder="Search..."
    :bordered="false"
    :loading="loading"
    @change="onSearch"
  />
  <div class="w-full">
    <div v-if="isLoading"  class="w-full min-h-[500px] object-center">
      <Spin
        class="[&_.ant-spin-dot-item]:bg-black [&_.ant-spin-dot-item]:text-xl"
        :spinning="isLoading"
        size="large"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[25px] gap-y-10 mt-5">
    <BlogItem
      v-if="!isLoading"
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
  </div>
 
  <div class="flex justify-center my-20">
    <Pagination v-model:current="currentPage" :total="feeds.length" show-less-items />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, InputSearch, Spin } from 'ant-design-vue'
import { useFeed } from '@/composables/useFeed'
import { searchNews } from '@/services/news/post'
import { ElasticsearchIndex } from '@/constants/enum/search.enum'
import BlogItem from '@/components/UI/BlogItem.vue'
import type { IFeed } from '@/interfaces/news.interface'
import { getAllFeed } from '@/services/news/get'

const currentPage = ref<number>(1)
const loading = ref<boolean>(false)
const titleSearch = ref<string>('')
const { data: feeds,isLoading, mutate: runMutation } = useFeed()

const onSearch = () => {
  if (titleSearch.value)
    runMutation(() => searchNews<IFeed>(ElasticsearchIndex.FEED, titleSearch.value))
  else runMutation(()=>getAllFeed())
}
</script>
