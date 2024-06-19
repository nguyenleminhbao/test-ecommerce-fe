<template>
  <section class="mt-10 w-full">
    <span class="text-center text-headline-3 block !w-full"> Newest Product </span>
    <div class="w-full mt-10 flex overflow-x-auto items-center gap-[24px] scrollbar-hide relative">
      <CardItem v-for="product in products.slice(0, 4)" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IProduct } from '@/interfaces/product.interface'
import { getShopProducts } from '@/services/products/get'
import { onMounted, ref } from 'vue'
import CardItem from '@/components/UI/ProdCard.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const products = ref<IProduct[]>([])

onMounted(async () => {
  const data = await getShopProducts(route.params['shopId'] as string)
  products.value = data?.message
})
</script>
