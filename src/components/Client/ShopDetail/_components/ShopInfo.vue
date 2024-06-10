<template>
  <div class="flex flex-col gap-[12px]">
    <div class="flex gap-2 text-caption-1-semibold text-neutral-4 items-center">
      <ShopOutlined />
      <span class="flex gap-2"
        >Sản phẩm:
        <p class="text-caption-1-bold text-secondary-green">{{ numProd }}</p></span
      >
    </div>

    <div class="flex gap-2 text-caption-1-semibold text-neutral-4 items-center">
      <StarOutlined />
      <span class="flex gap-2"
        >Đánh giá:
        <p class="text-caption-1-bold text-secondary-green">{{ numRate }}</p></span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['numProd', 'numRate'])
import { ShopOutlined, StarOutlined } from '@ant-design/icons-vue'
</script>
