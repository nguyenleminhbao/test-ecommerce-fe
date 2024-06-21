<template>
  <section class="w-full flex flex-col" v-if="feeds">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[25px] gap-y-10 mt-5">
      <BlogItem
        v-for="(feed, index) in feeds.slice((currentPage - 1) * 12, currentPage * 12)"
        :key="index"
        :feedId="feed.id"
        :title="feed.title"
        :imageUrl="feed.thumbnail"
        :date="feed.createdAt"
        :content="feed.content"
        class="!max-w-full"
      />
    </div>
    <div class="flex justify-center my-20">
      <Pagination v-model:current="currentPage" :total="feeds.length" show-less-items />
    </div>
  </section>
</template>

<script setup lang="ts">
import BlogItem from '@/components/UI/BlogItem.vue'
import { ref } from 'vue'
import { Pagination } from 'ant-design-vue'
import { useRoute } from 'vue-router'
import { useShopFeed } from '@/composables/useFeed'

const route = useRoute()
const currentPage = ref<number>(1)

const { data: feeds, mutate: runMutation } = useShopFeed({
  shopId: route.params['shopId'] as string
})
</script>
