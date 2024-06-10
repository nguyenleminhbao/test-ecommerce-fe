<template>
  <div class="p-[24px] bg-white rounded-lg">
    <div class="text-center">
      <h1 class="text-body-2">{{ title }}</h1>
      <h1 class="text-body-1-bold">{{ num }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String
  },
  num: {
    type: String
  }
})
import { BadgeMedium } from '@/components/UI/elements'
</script>
