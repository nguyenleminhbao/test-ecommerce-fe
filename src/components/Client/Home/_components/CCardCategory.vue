<template>
  <div class="flex-col bg-neutral-2 p-[48px] max-w-[548px]">
    <div class="grid gap-[12px] text-neutral-7">
      <p class="text-headline-5">{{ title }}</p>
      <ButtonArrow text="Shop Now" link="/" />
    </div>

    <img :src="imageUrl" class="object-cover aspect-[3/4]" />
  </div>
</template>

<script setup lang="ts">
defineProps(['title', 'imageUrl'])
import ButtonArrow from '@/components/UI/elements/ButtonArrow.vue'
</script>
