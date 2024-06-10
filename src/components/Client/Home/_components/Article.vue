<template>
  <div class="grid gap-[24px]">
    <img class="object-cover aspect-[357/325]" :src="imageUrl" alt="Article" />
    <div class="grid gap-[8px] max-w-[352px]">
      <span class="text-headline-7 text-neutral-7">{{ title }}</span>
      <CButtonArrow text="Read More" link="/" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['title', 'imageUrl'])
import CButtonArrow from '@/components/UI/elements/ButtonArrow.vue'
</script>
