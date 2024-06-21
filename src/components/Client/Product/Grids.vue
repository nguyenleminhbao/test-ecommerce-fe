<template>
  <div class="w-full flex flex-col gap-10 max-sm:gap-8 h-fit">
    <div class="flex justify-between items-center">
      <h1 class="text-body-1-semibold">All Products</h1>
      <Dropdown />
    </div>

    <div class="flex flex-col gap-20 max-sm:gap-8">
      <Spin
        class="[&_.ant-spin-dot-item]:bg-black [&_.ant-spin-dot-item]:text-xl"
        :spinning="!products"
        size="large"
      />
      <div
        class="grid grid-cols-4 gap-6 max-[1120px]:grid-cols-3 max-[800px]:grid-cols-2 max-sm:grid-cols-1"
      >
        <ProdCard v-for="product in products" :key="product.id" :product="product" />
      </div>

      <div class="mx-auto">
        <Pagination
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
import { useRoute, useRouter } from 'vue-router'
import { useProduct } from '@/composables/useProduct'

const route = useRoute()
const router = useRouter()
const currentPage = ref<number>(
  isNaN(parseInt(route.query.page as string)) ? 1 : parseInt(route.query.page as string)
)
const { data: products, mutate: runMutation } = useProduct({
  key: `products/page=${currentPage.value}`,
  page: currentPage.value
})

const onChange = () => {
  // // dynamic query page
  router.push({
    path: route.path,
    query: { page: currentPage.value }
  })
  runMutation(() => getAllProducts(currentPage.value))
}
</script>
