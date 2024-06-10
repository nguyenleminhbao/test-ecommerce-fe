<template>
  <section class="mt-10 w-full">
    <div class="w-full">
      <span class="text-center text-headline-3 block !w-full"> Newest Product </span>
      <div class="w-full mt-10 grid grid-cols-4 gap-6">
        <CardItem v-for="product in products.slice(0, 4)" :key="product.id" :product="product" />
        <RightCircleFilled
          class="bg-green z-10 sticky right-2 top-[calc(50%_-_50px)] text-4xl opacity-30"
        />
      </div>
    </div>

    <div class="w-full mt-10">
      <span class="text-center text-headline-3 block !w-full mt-10"> Products </span>
      <div class="w-full mt-10 grid grid-cols-4 gap-6">
        <CardItem
          v-for="product in products.slice((currentPage - 1) * 12, currentPage * 12)"
          :key="product.id"
          :product="product"
        />
        <RightCircleFilled
          class="bg-green z-10 sticky right-2 top-[calc(50%_-_50px)] text-4xl opacity-30"
        />
      </div>
      <div class="w-full flex justify-center mt-6">
        <Pagination v-model:current="currentPage" :total="products.length" show-less-items />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IProduct } from '@/interfaces/product.interface'
import { getShopProducts } from '@/services/products/get'
import { onMounted, ref } from 'vue'
import CardItem from '@/components/UI/ProdCard.vue'
import { useRoute } from 'vue-router'
import { Pagination } from 'ant-design-vue'

const route = useRoute()
const products = ref<IProduct[]>([])
const currentPage = ref<number>(1)

onMounted(async () => {
  const data = await getShopProducts(route.params['shopId'] as string)
  products.value = data?.message
})
</script>
