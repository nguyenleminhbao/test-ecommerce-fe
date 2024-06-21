<template>
  <div v-if="product" class="max-w-[1120px] mx-auto">
    <Breadcrumb class="my-4 mt-[76px] md:mt-4">
      <BreadcrumbItem class="[&_.ant-breadcrumb-link]:text-gray-600">
        <a href="/">Home</a>
      </BreadcrumbItem>
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
import { useProductDetail } from '@/composables/useProduct'

const route = useRoute()
const { data: product } = useProductDetail({ productId: route.params['productId'] as string })
</script>
