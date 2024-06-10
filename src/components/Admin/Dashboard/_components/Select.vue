<template>
  <div>
    <Select v-model:value="value" style="width: 120px">
      <SelectOption value="Day">Day</SelectOption>
      <SelectOption value="Week">Week</SelectOption>
      <SelectOption value="Month">Month</SelectOption>
      <SelectOption value="Year">Year</SelectOption>
    </Select>
  </div>
</template>

<script setup lang="ts">
import { Select, SelectOption } from 'ant-design-vue'
import { ref } from 'vue'
const value = ref<string>('Day')
</script>
