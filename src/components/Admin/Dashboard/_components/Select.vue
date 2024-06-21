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
import { ref } from 'vue'
import { Select, SelectOption } from 'ant-design-vue'

const value = ref<string>('Day')
</script>
