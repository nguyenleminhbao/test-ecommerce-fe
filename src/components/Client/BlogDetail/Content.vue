<template>
  <img :src="thumnail" class="object-cover max-h-[450px]" alt="thumbnail" />
  <div class="w-full mt-4" v-html="content"></div>
</template>

<script setup lang="ts">
const { thumnail, content } = defineProps<{
  thumnail: string
  content: string
}>()
</script>
