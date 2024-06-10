<template>
  <img
    :src="imageProduct"
    class="max-w-[280px] object-cover rounded-[8px] !aspect-[280/180]"
    alt="Apple Watch"
  />

  <ul class="text-body-2">
    <li class="flex justify-between gap-2">
      <span class="text-body-2-bold">Shop:</span>
      <span>{{ shopName }}</span>
    </li>
    <li class="flex justify-between gap-2">
      <span class="text-body-2-bold">Category:</span>
      <span>{{ productType }}</span>
    </li>
    <li class="flex justify-between items-start gap-2">
      <span class="text-body-2-bold">Available:</span>
      <div class="flex flex-col gap-2 items-end">
        <span v-for="(option, index) in options" :key="index">{{
          option.values.reduce((prev: string, cur: string) => prev + ', ' + cur)
        }}</span>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { IOption } from '@/interfaces/product.interface'

const { options } = defineProps<{
  shopName: string
  imageProduct: string
  productType: string
  options: IOption[]
}>()
</script>
