<template>
  <div class="flex flex-col gap-[24px]">
    <h1 class="ml-[24px] text-headline-5">Dashboard</h1>

    <Statistic />
    <div class="flex flex-col gap-[24px]">
      <Revenue />
    </div>
    <div class="grid grid-cols-[7fr_3fr] gap-[24px]">
      <!-- <div class="flex flex-col gap-[24px]"> -->
      <Sales />
      <Comments />
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Revenue from './Revenue.vue'
import Sales from './Sales.vue'
import Comments from './Customers.vue'
import Statistic from './Statistic.vue'
</script>
