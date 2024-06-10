<template>
  <Select
    v-model:value="value"
    show-search
    placeholder="Select status"
    style="width: 130px"
    :options="options"
    :filter-option="filterOption"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  ></Select>
</template>

<script lang="ts" setup>
import { Select } from 'ant-design-vue'
import type { SelectProps } from 'ant-design-vue'
import { ref } from 'vue'
const options = ref<SelectProps['options']>([
  { value: 'Completed', label: 'Completed' },
  { value: 'Rejected', label: 'Rejected' },
  { value: 'Processing', label: 'Processing' }
])
const handleChange = (value: any) => {
  console.log(`selected ${value}`)
}
const handleBlur = () => {
  console.log('blur')
}
const handleFocus = () => {
  console.log('focus')
}
const filterOption = (input: string, option: any) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
}

const value = ref<string | undefined>(undefined)
</script>
