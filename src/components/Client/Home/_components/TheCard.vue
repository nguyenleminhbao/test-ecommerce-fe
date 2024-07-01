<template>
  <div class="grid gap-[16px] p-3 md:px-[32px] md:py-[48px] bg-neutral-2">
    <component :is="icon" class="text-[48px] text-left" />
    <div class="grid gap-[8px]">
      <span class="text-headline-7 !text-[17px] md:!text-[20px] text-neutral-7">{{ title }}</span>
      <span class="md:min-w-[198px] text-neutral-4 text-[12px] md:text-[14px] leading-[24px]">
        {{ description }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['icon', 'title', 'description'])
</script>
