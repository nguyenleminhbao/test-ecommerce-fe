<template>
  <section class="w-full flex flex-col">
    <div
      class="w-full mt-5 grid grid-cols-4 gap-6 max-[1120px]:grid-cols-3 max-[800px]:grid-cols-2 max-sm:grid-cols-1"
    >
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
import { useRoute } from 'vue-router'
import { Pagination } from 'ant-design-vue'
import { useShopProduct } from '@/composables/useProduct'

const route = useRoute()
const { data: products } = useShopProduct({ shopId: route.params['shopId'] as string })
const currentPage = ref<number>(1)
</script>
