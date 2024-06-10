<template>
  <div class="w-full flex flex-col">
    <Image class="w-full h-full aspect-square object-cover" :src="primaryImage" />

    <div class="grid grid-cols-3 gap-3 mt-3">
      <Image class="w-full aspect-square object-cover" :src="images[0]?.src" />
      <Image class="w-full aspect-square object-cover" :src="images[1]?.src" />
      <Image class="w-full aspect-square object-cover" :src="images[2]?.src" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IImage } from '@/interfaces/product.interface'
import { Image } from 'ant-design-vue'

const { primaryImage, images } = defineProps<{
  primaryImage: string
  images: IImage[]
}>()
</script>
