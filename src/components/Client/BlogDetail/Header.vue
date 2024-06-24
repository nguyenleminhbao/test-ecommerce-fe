<template>
  <div class="flex flex-col">
    <Breadcrumb separator=">" class="text-button-xs max-sm:hidden mb-14">
      <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
      <BreadcrumbItem><a href="/news">News</a></BreadcrumbItem>
      <BreadcrumbItem>Blog</BreadcrumbItem>
      <BreadcrumbItem class="line-clamp-1">{{ feed.title }}</BreadcrumbItem>
    </Breadcrumb>

    <button
      class="sm:hidden text-button-xs text-neutral-4 w-fit flex justify-center items-center gap-1 mb-12"
      @click="() => $router.go(-1)"
    >
      <LeftOutlined class="text-[12px]" />back
    </button>

    <div class="flex flex-col gap-6">
      <h3 class="text-hairline-2 uppercase">Article</h3>
      <h1 class="text-headline-3 max-sm:text-headline-6 text-neutral-7 max-w-[834px]">
        {{ feed.title }}
      </h1>
      <div
        class="flex max-sm:justify-between sm:gap-12 text-body-2 max-md:text-caption-1 text-neutral-4"
      >
        <RouterLink :to="`/shop/${feed.shop.id}`" class="flex items-center gap-2">
          <img
            :src="feed.shop.shopAvatar"
            class="!w-10 max-sm:!w-8 rounded-full aspect-square ring-2 ring-neutral-4"
          />
          <span>{{ feed.shop.shopName }}</span>
        </RouterLink>

        <div class="flex gap-1 items-center">
          <CalendarOutlined class="text-2xl max-sm:text-base flex justify-center items-center" />
          <span>{{ formatDateText(feed.createdAt) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem } from 'ant-design-vue'
import { CalendarOutlined, LeftOutlined } from '@ant-design/icons-vue'
import { formatDateText } from '@/utils'
import type { IFeed } from '@/interfaces/news.interface'

const { feed } = defineProps<{
  feed: IFeed
}>()
</script>
