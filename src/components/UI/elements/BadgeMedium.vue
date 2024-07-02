<template>
  <span
    :class="[
      bgColor,
      'rounded-[4px]',
      'px-[14px]',
      'py-[4px]',
      'text-center',
      'text-hairline-1',
      textColor,
      'uppercase',
      'shadow-md'
    ]"
    >{{ type == TYPE_BADGE.DISCOUNT ? `-${title}%` : title }}</span
  >
</template>
<script setup lang="ts">
import { TYPE_BADGE } from '@/constants/enum/badge.enum'

const { title, textColor, bgColor, type } = defineProps<{
  title: string
  textColor: string
  bgColor: string
  type: TYPE_BADGE
}>()
</script>
