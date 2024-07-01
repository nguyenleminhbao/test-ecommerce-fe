<template>
  <div class="flex flex-col gap-[24px]">
    <h1 class="ml-[24px] text-headline-5">Customer Detail</h1>

    <div class="grid grid-cols-[3fr_6fr] gap-6">
      <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px]">
        <h1 class="text-headline-6">Information</h1>
        <InfoList />
        <RateList />
      </div>

      <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px]">
        <h1 class="text-headline-6">Address</h1>
        <AddressList />
      </div>
    </div>

    <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px]">
      <h1 class="text-headline-6">Order</h1>
      <Table />
    </div>
  </div>
</template>

<script setup lang="ts">
import Table from './TheTable.vue'
import InfoList from './InfoList.vue'
import RateList from './RateList.vue'
import AddressList from './AddressList.vue'
</script>
