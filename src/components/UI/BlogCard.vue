<template>
  <RouterLink to="/blog/:blogId">
    <div class="flex flex-col gap-6">
      <img class="w-[357px] h-[325px] object-cover rounded-md" :src="imgUrl" alt="theme blog" />
      <div class="flex flex-col gap-2">
        <h3 class="pt-3 text-headline-7 text-neutral-7">{{ title }}</h3>
        <p class="text-neutral-4 text-[14px] leading-[24px]">{{ date }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
const { imgUrl, title, date } = defineProps<{
  imgUrl: string
  title: string
  date: string
}>()
</script>
