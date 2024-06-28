<template>
  <section class="w-full flex flex-col">
    <h1 class="text-body-1-semibold text-headline-5">Product</h1>

    <div class="w-full mt-5 grid grid-cols-4 gap-6">
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
import { ref } from 'vue'
import CardItem from '@/components/UI/ProdCard.vue'
import { Pagination } from 'ant-design-vue'
import { useShopProduct } from '@/composables/useProduct'

const { shopId } = defineProps<{
  shopId: string
}>()

const { data: products } = useShopProduct({ shopId })
const currentPage = ref<number>(1)
</script>
