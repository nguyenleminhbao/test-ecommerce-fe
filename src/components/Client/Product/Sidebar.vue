<template>
  <div class="grid gap-8 max-w-[262px] max-h-[600px]">
    <div class="flex gap-[8px] max-w-[262px] text-body-1-semibold items-center">
      <FilterOutlined class="text-[24px]" />
      Filter
    </div>

    <div class="grid gap-[16px] w-[262px]">
      <h1 class="uppercase text-body-2-semibold">CATEGORIES</h1>
      <SectionList />
    </div>

    <div class="grid gap-[16px] w-[262px]">
      <h1 class="uppercase text-body-2-semibold">PRICE</h1>
      <SectionPrice />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FilterOutlined } from '@ant-design/icons-vue'
import { SectionList, SectionPrice } from './_components'
</script>
