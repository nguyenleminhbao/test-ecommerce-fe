<template>
  <div class="my-10 md:my-20 flex flex-col gap-12">
    <div class="flex justify-end sm:justify-between items-end">
      <h1 class="text-headline-6 max-sm:hidden">You might also like</h1>
      <ButtonArrow text="More Articles" link="/news" />
    </div>

    <div class="w-full flex overflow-x-auto items-start gap-6 scrollbar-hide relative" v-if="feeds">
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
