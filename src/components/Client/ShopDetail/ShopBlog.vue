<template>
  <section class="w-full flex flex-col">
    <div class="grid grid-cols-3 gap-x-[25px] gap-y-10 mt-5" v-if="feeds">
      <BlogItem
        v-for="(feed, index) in feeds.message.slice((currentPage - 1) * 12, currentPage * 12)"
        :key="index"
        :feedId="feed.id"
        :title="feed.title"
        :imageUrl="feed.thumbnail"
        :date="feed.createdAt"
        :content="feed.content"
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
  </section>
</template>

<script setup lang="ts">
import BlogItem from '@/components/UI/BlogItem.vue'
import { onMounted, ref } from 'vue'
import { Pagination } from 'ant-design-vue'
import { useRoute } from 'vue-router'
import type { IFeed } from '@/interfaces/news.interface'
import { getFeedByShop } from '@/services/news/get'
import useSWRV from 'swrv'
import { configSWRV } from '@/config/swrv'

const route = useRoute()
const shopId = route.params['shopId'] as string
const currentPage = ref<number>(1)

const { data: feeds } = useSWRV(`/news/feed/shop/${shopId}`, getFeedByShop, configSWRV)
</script>
