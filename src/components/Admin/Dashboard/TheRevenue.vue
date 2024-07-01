<template>
  <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px]">
    <div class="flex justify-between">
      <h1 class="text-headline-6">Revenue</h1>
      <Select />
    </div>

    <Line />
  </div>
</template>

<script setup lang="ts">
import Select from './_components/TheSelect.vue'
import Line from './_components/LineChart.vue'
</script>
