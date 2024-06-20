<template>
  <div class="flex flex-col gap-14">
    <Breadcrumb separator=">" class="text-button-xs">
      <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
      <BreadcrumbItem><a href="/news">News</a></BreadcrumbItem>
      <BreadcrumbItem>Blog</BreadcrumbItem>
      <BreadcrumbItem>{{ feed.title }}</BreadcrumbItem>
    </Breadcrumb>

    <div class="flex flex-col gap-6">
      <h3 class="text-hairline-2 uppercase">Article</h3>
      <h1 class="text-headline-3 text-neutral-7 max-w-[834px]">
        {{ feed.title }}
      </h1>
      <div class="flex flex-col md:flex-row md:gap-12">
        <div class="flex items-center gap-2">
          <img :src="feed.shop.shopAvatar" class="!w-12 !h-12 rounded-full" />
          <Meta icon="UserOutlined" :text="feed.shop.shopName" />
        </div>

        <Meta icon="CalendarOutlined" :text="formatDateText(feed.createdAt)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Meta from './_components/Meta.vue'
import { Breadcrumb, BreadcrumbItem, Spin } from 'ant-design-vue'
import { formatDateText } from '@/utils'
import type { IFeed } from '@/interfaces/news.interface'

const { feed } = defineProps<{
  feed: IFeed
}>()
</script>
