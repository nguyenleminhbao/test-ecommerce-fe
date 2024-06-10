<template>
  <div class="max-w-[1120px] mx-auto">
    <Breadcrumb class="my-4">
      <BreadcrumbItem class="[&_.ant-breadcrumb-link]:text-gray-600">Home</BreadcrumbItem>
      <BreadcrumbItem><a href="text-gray-600">Shop</a></BreadcrumbItem>
      <BreadcrumbItem><a href="text-gray-600">Living room</a></BreadcrumbItem>
      <BreadcrumbItem class="[&_.ant-breadcrumb-link]:font-semibold">Product</BreadcrumbItem>
    </Breadcrumb>
    <ProductInfor v-if="product" :product="product" />
    <ShopInfor v-if="product" :shop-id="product?.shopId" />
    <TabProduct
      v-if="product"
      :description="product.body_html"
      :product-id="product.id"
      :option-product="product.product_type"
    />
    <ProductRelation />
  </div>
</template>

<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem } from 'ant-design-vue'
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
