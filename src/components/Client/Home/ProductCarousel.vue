<template>
  <div class="grid gap-[48px] pt-[48px] max-w-[1120px] mx-auto">
    <div class="flex items-end justify-between text-neutral-7 max-w-[1120px]">
      <h1 data-aos="zoom-in" class="text-headline-4">New<br />Arrivals</h1>
      <ButtonArrow text="More Products" link="/product" />
    </div>
    <div class="flex overflow-x-auto items-center gap-[24px] scrollbar-hide relative">
      <ProdCard v-for="product in products" :key="product.id" :product="product" />
      <RightCircleFilled
        class="bg-green z-10 sticky right-2 top-[calc(50%_-_50px)] text-4xl opacity-30"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonArrow from '@/components/UI/elements/ButtonArrow.vue'
import ProdCard from '@/components/UI/ProdCard.vue'
import { RightCircleFilled } from '@ant-design/icons-vue'
import type { IProduct } from '@/interfaces/product.interface'

const { products } = defineProps<{
  products: IProduct[]
}>()
</script>
