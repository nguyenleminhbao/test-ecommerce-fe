<template>
  <div class="my-10 md:my-20 flex flex-col gap-12">
    <div class="flex justify-between items-end">
      <h1 class="text-headline-6 md:text-headline-5 w-[200px] md:w-[300px]">You might also like</h1>
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
import useSWRV from 'swrv'
import { configSWRV } from '@/config/swrv'
import { getAllFeed } from '@/services/news/get'

const { data: feeds } = useSWRV('feeds', getAllFeed, configSWRV)
</script>
