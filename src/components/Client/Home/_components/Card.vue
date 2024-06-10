<template>
  <div class="grid gap-[16px] px-[32px] py-[48px] bg-neutral-2">
    <component :is="icon" class="text-[48px] text-left" />
    <div class="grid gap-[8px]">
      <span class="text-headline-7 text-neutral-7">{{ title }}</span>
      <span class="min-w-[198px] text-neutral-4 text-[14px] leading-[24px]">{{ description }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['icon', 'title', 'description'])
</script>
