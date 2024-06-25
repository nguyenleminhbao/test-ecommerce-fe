<template>
  <div class="bg-neutral-2 p-5 md:p-[48px] w-full shadow-md">
    <div class="grid gap-[12px] text-neutral-7 content-end">
      <p class="text-headline-5">{{ title }}</p>
      <ButtonArrow text="Shop Now" link="/product" />
    </div>

    <img
      :src="imageUrl"
      class="object-contain aspect-square w-[200px] md:w-[500px] lg:aspect-[3/4] lg:w-full"
    />
  </div>
</template>

<script setup lang="ts">
defineProps(['title', 'imageUrl'])
import { ButtonArrow } from '@/components/UI/elements'
</script>
