<template>
  <section class="mt-10 w-full">
    <div class="w-full mt-10">
      <span class="text-center text-headline-3 block !w-full mt-10"> Products </span>
      <div class="w-full mt-10 grid grid-cols-4 gap-6">
        <CardItem
          v-for="product in products.slice((currentPage - 1) * 12, currentPage * 12)"
          :key="product.id"
          :product="product"
        />
        <RightCircleFilled
          class="bg-green z-10 sticky right-2 top-[calc(50%_-_50px)] text-4xl opacity-30"
        />
      </div>
      <div class="w-full flex justify-center mt-6">
        <Pagination v-model:current="currentPage" :total="products.length" show-less-items />
      </div>
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
