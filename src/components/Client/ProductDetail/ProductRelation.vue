<template>
  <div class="grid gap-[48px] my-[48px] max-w-[1120px] mx-auto">
    <div class="flex items-end justify-end sm:justify-between text-neutral-7 max-w-[1120px]">
      <h1 class="text-headline-6 max-sm:hidden">You might also like</h1>
      <ButtonArrow text="More Products" link="/product" />
    </div>
    <div class="flex overflow-x-auto items-center gap-[24px] scrollbar-hide relative">
      <CardItem v-for="product in products" :key="product.id" :product="product"></CardItem>
      <RightIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ButtonArrow, RightIcon } from '@/components/UI/elements'
import CardItem from '@/components/UI/ProdCard.vue'
import { useProduct } from '@/composables/useProduct'

const { data: products } = useProduct()
</script>
