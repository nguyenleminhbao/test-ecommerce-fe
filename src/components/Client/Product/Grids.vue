<template>
  <div class="w-[834px] grid gap-[40px] h-fit">
    <div class="flex justify-between items-center">
      <h1 class="text-body-1-semibold">Living Room</h1>
      <div class="flex gap-[32px]">
        <Dropdown />
        <ToolbarSelector />
      </div>
    </div>

    <div class="flex flex-col gap-[80px]">
      <div class="grid grid-cols-3 gap-[24px]">
        <ProdCard v-for="product in displayedProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Dropdown, ToolbarSelector } from './_components'
import ProdCard from '@/components/UI/ProdCard.vue'
import type { IProduct } from '@/interfaces/product.interface'
import { ref, computed } from 'vue'
import { Pagination, Spin } from 'ant-design-vue'
import { usePagination } from 'vue-request'

const { products } = defineProps<{
  products: IProduct[]
}>()

const displayedProducts = computed(() => products.slice(0, 12))
</script>
