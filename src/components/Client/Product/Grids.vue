<template>
  <div class="w-[834px] grid gap-[40px] h-fit">
    <div class="flex justify-between items-center">
      <h1 class="text-body-1-semibold">All Product</h1>
      <div class="flex gap-[32px]">
        <Dropdown />
        <!-- <ToolbarSelector /> -->
      </div>
    </div>

    <div class="flex flex-col gap-[80px]">
      <div class="grid grid-cols-3 gap-6">
        <ProdCard
          v-for="product in products.slice((currentPage - 1) * 12, currentPage * 12)"
          :key="product.id"
          :product="product"
        />
      </div>

      <div class="mx-auto">
        <Pagination v-model:current="currentPage" :total="products.length" show-less-items />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Dropdown, ToolbarSelector } from './_components'
import ProdCard from '@/components/UI/ProdCard.vue'
import type { IProduct } from '@/interfaces/product.interface'
import { ref, computed, onMounted } from 'vue'
import { Pagination } from 'ant-design-vue'

const currentPage = ref<number>(1)

defineProps<{
  products: IProduct[]
}>()
</script>