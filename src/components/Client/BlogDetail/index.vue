<template>
  <div v-if="feed" class="max-w-[1120px] mx-auto">
    <div class="flex flex-col gap-10 pt-4">
      <Header :feed="feed" />
      <Content :thumnail="feed.thumbnail" :content="feed.content" />
    </div>
    <RelatedPosts />
  </div>
  <div v-else class="w-full min-h-[500px] object-center">
    <Spin class="[&_.ant-spin-dot-item]:bg-black [&_.ant-spin-dot-item]:text-xl" size="large" />
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Content from './Content.vue'
import RelatedPosts from './RelatedPosts.vue'
import type { IFeed } from '@/interfaces/news.interface'
import { onMounted, ref } from 'vue'
import { getFeedById } from '@/services/news/get'
import { useRoute } from 'vue-router'
import { Spin } from 'ant-design-vue'

const route = useRoute()
const feed = ref<IFeed>()

onMounted(async () => {
  const data = await getFeedById(route.params.blogId as string)
  feed.value = data.message
})
</script>
