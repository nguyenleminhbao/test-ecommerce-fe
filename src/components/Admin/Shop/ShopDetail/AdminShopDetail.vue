<template>
  <div class="flex flex-col gap-[24px]">
    <h1 class="ml-[24px] text-headline-5">Name Shop</h1>

    <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px]">
      <h1 class="text-headline-6">Information</h1>
      <InfoList />
    </div>

    <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px]">
      <h1 class="text-headline-6">Product</h1>
      <TableProd />
    </div>

    <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px]">
      <h1 class="text-headline-6">Order</h1>
      <TableOrder />
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoList from './InfoList.vue'
import TableProd from './TableProd.vue'
import TableOrder from './TableOrder.vue'
</script>
