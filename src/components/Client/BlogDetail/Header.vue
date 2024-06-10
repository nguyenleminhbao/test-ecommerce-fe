<template>
  <div class="flex flex-col gap-14">
    <Breadcrumb separator=">" class="text-button-xs">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/">News</BreadcrumbItem>
      <BreadcrumbItem href="/">Blog</BreadcrumbItem>
      <BreadcrumbItem>How to make a busy bathroom a place to relax</BreadcrumbItem>
    </Breadcrumb>

    <div class="flex flex-col gap-6">
      <h3 class="text-hairline-2 uppercase">Article</h3>
      <h1 class="text-headline-3 text-neutral-7 max-w-[834px]">
        How to make a busy bathroom a place to relax
      </h1>
      <div class="flex gap-12">
        <Meta icon="UserOutlined" text="Henrik Annemark" />
        <Meta icon="CalendarOutlined" text="October 16, 2023" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Meta from './_components/Meta.vue'
import { Breadcrumb, BreadcrumbItem } from 'ant-design-vue'
import { UserOutlined, CalendarOutlined } from '@ant-design/icons-vue'
</script>
