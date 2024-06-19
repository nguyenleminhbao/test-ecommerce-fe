<template>
  <section class="w-full flex flex-col">
    <div class="w-full mt-5 grid grid-cols-4 gap-6 max-[1120px]:grid-cols-3 max-[800px]:grid-cols-2 max-sm:grid-cols-1">
      <CardItem
        v-for="product in products.slice((currentPage - 1) * 12, currentPage * 12)"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="flex justify-center my-20">
      <Pagination v-model:current="currentPage" :total="products.length" show-less-items />
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
