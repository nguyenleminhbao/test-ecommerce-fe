<template>
  <div class="grid gap-[40px] py-[80px] mx-auto max-w-[1121px]">
    <div class="flex items-end justify-between content-center text-neutral-7 max-w-[1120px]">
      <h1 class="text-headline-4">Articles</h1>
      <ButtonArrow text="More Articles" link="/news" />
    </div>

    <div class="w-full flex overflow-x-auto items-start gap-6 scrollbar-hide relative" v-if="feeds">
      <BlogItem
        v-for="(feed, index) in feeds.message"
        :key="index"
        :feedId="feed.id"
        :imageUrl="feed.thumbnail"
        :title="feed.title"
        :date="feed.createdAt"
        :content="feed.content"
      />

      <RightCircleFilled
        v-if="feeds && feeds.message.length > 3"
        class="bg-green z-10 sticky right-2 top-[calc(50%_-_50px)] text-4xl"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RightCircleFilled } from '@ant-design/icons-vue'
import { ButtonArrow } from '@/components/UI/elements'
import BlogItem from '@/components/UI/BlogItem.vue'
import { getAllFeed } from '@/services/news/get'
import useSWRV from 'swrv'
import { configSWRV } from '@/config/swrv'

const { data: feeds } = useSWRV('feeds', getAllFeed, configSWRV)
</script>
