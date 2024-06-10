<template>
  <div class="flex flex-col gap-[24px]">
    <h1 class="ml-[24px] text-headline-5">Name Prod</h1>

    <!-- <div class="grid grid-cols-[4fr_6fr] gap-6"> -->
    <div class="flex gap-6">
      <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px]">
        <InfoProd
          v-if="product"
          :shopName="product.shopName"
          :imageProduct="product.variants[0].variant_image"
          :productType="product.product_type"
          :options="product.options"
        />
      </div>

      <div
        class="p-[24px] bg-white rounded-lg flex justify-between gap-6 items-center max-h-[380px]"
      >
        <div class="flex flex-col justify-center items-center">
          <span class="text-headline-5 text-secondary-blue"
            >4.8 <span class="text-headline-6 text-neutral-7">trên 5</span></span
          >
          <span>(20 Đánh giá)</span>
        </div>
        <BarChart />
      </div>
    </div>

    <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px]">
      <h1 class="text-headline-6">Items</h1>
      <div class="grid grid-cols-4 !gap-6">
        <CardProduct
          v-for="(variant, index) in product?.variants"
          :title="variant.title"
          :imageUrl="variant.variant_image"
          :price="parseFloat(variant.price)"
          :piece="parseFloat(variant.price)"
          status="còn"
          :key="index"
        />
      </div>
    </div>

    <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px]">
      <h1 class="text-headline-6">Comment</h1>
      <div class="flex gap-6">
        <CheckList class="w-[200px]" />
        <div class="flex flex-col gap-[24px]">
          <Table />
          <Pagination />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Table from './Table.vue'
import InfoProd from './InfoProd.vue'
import CheckList from './CheckList.vue'
import BarChart from './BarChart.vue'
import Pagination from './Pagination.vue'
import CardProduct from './CardProduct.vue'
import { useRoute } from 'vue-router'
import type { IProduct } from '@/interfaces/product.interface'
import { onMounted, ref } from 'vue'
import { getOneProduct } from '@/services/products/get'

const route = useRoute()
const product = ref<IProduct>()

onMounted(async () => {
  const data = await getOneProduct(route.params['productId'] as string)
  product.value = data.message
})
</script>
