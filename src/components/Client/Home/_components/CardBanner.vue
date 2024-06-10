<template>
  <div class="bg-neutral-2 p-[48px] w-full shadow-md">
    <div class="grid gap-[12px] text-neutral-7 content-end">
      <p class="text-headline-5">{{ title }}</p>
      <ButtonArrow text="Shop Now" link="/" />
    </div>

    <img :src="imageUrl" class="object-contain aspect-[3/4] w-full" />
  </div>
</template>

<script setup lang="ts">
defineProps(['title', 'imageUrl'])
import ButtonArrow from '@/components/UI/elements/ButtonArrow.vue'
</script>
