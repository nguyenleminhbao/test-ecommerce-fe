<template>
  <Header />
  <div class="mt-[60px] mb-[100px] max-w-[1120px] mx-auto flex gap-[24px]">
    <Sidebar />
    <Grids v-if="products" :products="products.message" />
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Grids from './Grids.vue'
import { getAllProducts } from '@/services/products/get'
import useSWRV from 'swrv'
import { configSWRV } from '@/config/swrv'

const { data:products  } = useSWRV('products', getAllProducts,configSWRV)
</script>
