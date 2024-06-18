<template>
  <div class="w-[834px] grid gap-[40px] h-fit">
    <div class="flex justify-between items-center">
      <h1 class="text-body-1-semibold">All Product</h1>
      <Dropdown />
    </div>

    <div class="flex flex-col gap-[80px]">
      <Spin :spinning="!products" size="large" tip="Loading..." />
      <div v-if="products" class="grid grid-cols-3 gap-6">
        <ProdCard v-for="product in products.message" :key="product.id" :product="product" />
      </div>

      <div class="mx-auto">
        <Pagination
          v-if="products"
          v-model:current="currentPage"
          :total="60"
          :pageSize="12"
          show-less-items
          @change="onChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Dropdown } from './_components'
import ProdCard from '@/components/UI/ProdCard.vue'
import { ref } from 'vue'
import { Pagination, Spin } from 'ant-design-vue'
import { getAllProducts } from '@/services/products/get'
import useSWRV from 'swrv'
import { configSWRV } from '@/config/swrv'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const currentPage = ref<number>(
  isNaN(parseInt(route.query.page as string)) ? 1 : parseInt(route.query.page as string)
)
const { data: products, mutate: runMutation } = useSWRV(
  `products/page=${currentPage.value}`,
  () => getAllProducts(currentPage.value),
  configSWRV
)

const onChange = () => {
  // // dynamic query page
  router.push({
    path: route.path,
    query: { page: currentPage.value }
  })
  runMutation(() => getAllProducts(currentPage.value))
}
</script>
