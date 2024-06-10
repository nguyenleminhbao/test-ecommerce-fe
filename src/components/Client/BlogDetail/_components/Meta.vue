<template>
  <div class="flex gap-1 items-center text-body-2 text-neutral-4">
    <component :is="icon" />
    <span>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
const { icon, text } = defineProps<{
  icon: string
  text: string
}>()
</script>
