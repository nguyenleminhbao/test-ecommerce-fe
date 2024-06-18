<template>
  <div v-if="product" class="max-w-[1120px] mx-auto">
    <Breadcrumb class="my-4">
      <BreadcrumbItem class="[&_.ant-breadcrumb-link]:text-gray-600">
        <a href="/">Home</a>
      </BreadcrumbItem>

      <!-- <BreadcrumbItem><span>Shop</span></BreadcrumbItem> -->
      <BreadcrumbItem
        ><RouterLink :to="`/shop/${product?.shopId}`">{{
          product?.shopName
        }}</RouterLink></BreadcrumbItem
      >
      <BreadcrumbItem class="[&_.ant-breadcrumb-link]:font-semibold">Product</BreadcrumbItem>
    </Breadcrumb>
    <ProductInfor :product="product" />
    <ShopInfor :shop-id="product?.shopId" />
    <TabProduct
      :description="product.body_html"
      :product-id="product.id"
      :option-product="product.product_type"
    />
    <ProductRelation />
  </div>
  <div v-else class="w-full min-h-[500px] object-center">
    <Spin class="[&_.ant-spin-dot-item]:bg-black [&_.ant-spin-dot-item]:text-xl" size="large" />
  </div>
</template>

<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem, Spin } from 'ant-design-vue'
import ProductInfor from './ProductInfor.vue'
import ShopInfor from './ShopInfor.vue'
import TabProduct from './TabProduct.vue'
import ProductRelation from './ProductRelation.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import type { IProduct } from '@/interfaces/product.interface'
import { getOneProduct } from '@/services/products/get'

const route = useRoute()
const product = ref<IProduct>()

onMounted(async () => {
  const data = await getOneProduct(route.params['productId'] as string)
  product.value = data.message
})
</script>
