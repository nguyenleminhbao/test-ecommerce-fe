<template>
  <div class="grid gap-[48px] pt-[48px] max-w-[1120px] mx-auto">
    <div class="flex items-end justify-between text-neutral-7 max-w-[1120px]">
      <h1 data-aos="zoom-in" class="text-headline-6 md:text-headline-4">New<br />Products</h1>
      <ButtonArrow text="More Products" link="/product" />
    </div>
    <div class="flex overflow-x-auto items-center gap-[24px] scrollbar-hide relative">
      <ProdCard v-for="product in products" :key="product.id" :product="product" />

      <RightIcon v-if="products.length > 4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonArrow from '@/components/UI/elements/ButtonArrow.vue'
import ProdCard from '@/components/UI/ProdCard.vue'
import { RightIcon } from '@/components/UI/elements/index'
import type { IProduct } from '@/interfaces/product.interface'

const { products } = defineProps<{
  products: IProduct[]
}>()
</script>
