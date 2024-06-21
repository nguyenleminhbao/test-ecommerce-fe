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
        <RouterLink :to="`/shop/${feed.shop.id}`" class="flex items-center gap-2 text-body-2 text-neutral-4">
          <img :src="feed.shop.shopAvatar" class="!w-10 rounded-full aspect-square ring-2 ring-neutral-4" />
          <span>{{ feed.shop.shopName }}</span>
        </RouterLink>

        <div class="flex gap-1 items-center text-body-2 text-neutral-4">
          <CalendarOutlined class="text-2xl flex justify-center items-center" />
          <span>{{ formatDateText(feed.createdAt) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem } from 'ant-design-vue'
import { CalendarOutlined } from '@ant-design/icons-vue'
import { formatDateText } from '@/utils'
import type { IFeed } from '@/interfaces/news.interface'

const { feed } = defineProps<{
  feed: IFeed
}>()
</script>
