<template>
  <div class="grid gap-[40px] py-10 md:py-[80px] mx-auto max-w-[1121px]">
    <div class="flex items-end justify-between content-center text-neutral-7 max-w-[1120px]">
      <h1 data-aos="zoom-in" class="text-headline-6 md:text-headline-4">Articles</h1>
      <ButtonArrow text="More Articles" link="/news" />
    </div>

    <div class="w-full flex overflow-x-auto items-start gap-6 scrollbar-hide relative">
      <BlogItem
        v-for="(feed, index) in feeds"
        :key="index"
        :feedId="feed.id"
        :imageUrl="feed.thumbnail"
        :title="feed.title"
        :date="feed.createdAt"
        :content="feed.content"
      />

      <RightIcon v-if="feeds.length > 4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ButtonArrow, RightIcon } from '@/components/UI/elements'
import BlogItem from '@/components/UI/BlogItem.vue'
import { useFeed } from '@/composables/useFeed'

const { data: feeds } = useFeed()
</script>
