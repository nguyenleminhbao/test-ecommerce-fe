<template>
  <Card hoverable>
    <template #cover>
      <img alt="prod" :src="imageUrl" class="w-[300px] aspect-square object-contain" />
    </template>
    <CardMeta
      :title="title"
      class="[&_.ant-card-meta-title]:!text-headline-7 [&_.ant-card-meta-description]:!text-gray-600 [&_.ant-card-meta-description]:space-y-1"
    >
      <template #description>
        <p>PRICE: {{ formatNumberWithCommas(price) }}đ</p>
        <p>PIECE: {{ piece }}</p>
        <p>STATUS: {{ status }}</p>
      </template>
    </CardMeta>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardMeta } from 'ant-design-vue'
import { formatNumberWithCommas } from '@/utils'

defineProps({
  title: {
    type: String
  },
  imageUrl: {
    type: String
  },
  price: {
    type: Number
  },
  piece: {
    type: Number
  },
  status: {
    type: String
  }
})
</script>
