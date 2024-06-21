<template>
  <section class="mt-10 w-full">
    <span class="text-center text-headline-3 block !w-full"> Newest Product </span>
    <div class="w-full mt-10 flex overflow-x-auto items-center gap-[24px] scrollbar-hide relative">
      <CardItem v-for="product in products.slice(0, 4)" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup lang="ts">
import CardItem from '@/components/UI/ProdCard.vue'
import { useRoute } from 'vue-router'
import { useShopProduct } from '@/composables/useProduct'

const route = useRoute()
const { data: products } = useShopProduct({ shopId: route.params['shopId'] as string })
</script>
