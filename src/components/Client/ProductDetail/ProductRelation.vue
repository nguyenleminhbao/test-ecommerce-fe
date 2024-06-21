<template>
  <div class="grid gap-[48px] my-[48px] max-w-[1120px] mx-auto">
    <div class="flex items-end justify-between text-neutral-7 max-w-[1120px]">
      <h1 class="text-headline-5 lg:text-headline-4">You might also like</h1>
      <ButtonArrow text="More Products" link="/product" />
    </div>
    <div class="flex overflow-x-auto items-center gap-[24px] scrollbar-hide relative">
      <CardItem v-for="product in products" :key="product.id" :product="product"></CardItem>
      <RightCircleFilled
        class="bg-green z-10 sticky right-2 top-[calc(50%_-_50px)] text-4xl opacity-30"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonArrow from '@/components/UI/elements/ButtonArrow.vue'
import CardItem from '@/components/UI/ProdCard.vue'
import { useProduct } from '@/composables/useProduct'
import { RightCircleFilled } from '@ant-design/icons-vue'

const { data: products } = useProduct()
</script>
