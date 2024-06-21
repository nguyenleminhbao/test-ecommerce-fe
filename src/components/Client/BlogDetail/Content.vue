<template>
  <img :src="thumnail" class="object-cover max-h-[450px]" alt="thumbnail" />
  <div class="w-full mt-4 [&_wp-block-heading]:text-red" v-html="content"></div>
</template>

<script setup lang="ts">
const { thumnail, content } = defineProps<{
  thumnail: string
  content: string
}>()
</script>

<style scoped>
.wp-block-heading {
  font-size: 28px !important;
  letter-spacing: -0.6px !important;
  line-height: 34px !important;
  font-weight: 500 !important;
}
</style>
