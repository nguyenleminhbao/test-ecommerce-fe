<template>
  <div class="flex flex-col gap-6">
    <h1 class="text-headline-5">Banner</h1>
    <div class="bg-white p-[24px] rounded-lg">
      <div class="grid grid-cols-2 gap-4">
        <BannerItem />
        <BannerItem />
        <BannerItem />
        <BannerItem />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BannerItem from './_components/BannerItem.vue'

const bannerState = ref<{
  banner1: string
  banner2: string
  banner3: string
  banner4: string
}>({
  banner1: '',
  banner2: '',
  banner3: '',
  banner4: ''
})
</script>
