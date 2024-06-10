<template>
  <section class="mb-5">
    <span class="text-headline-6">Product Description</span>
    <div class="w-full mt-4" v-html="description"></div>
  </section>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

const { description } = defineProps({
  description: {
    type: String,
    required: true
  }
})
</script>
