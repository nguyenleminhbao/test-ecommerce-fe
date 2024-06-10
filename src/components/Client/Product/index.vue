<template>
  <Header />
  <div class="pt-[60px] pb-[100px] max-w-[1120px] mx-auto flex gap-[24px]">
    <Sidebar />
    <Grids :products="products" />
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Grids from './Grids.vue'
import type { IProduct } from '@/interfaces/product.interface'
import { onMounted, ref } from 'vue'
import { getAllProducts } from '@/services/products/get'

const products = ref<IProduct[]>([])

onMounted(async () => {
  const data = await getAllProducts()
  products.value = data.message
})
</script>
