<template>
  <DatePicker :presets="presets" @change="onChange" format="DD/MM/YYYY" />
</template>

<script lang="ts" setup>
import { DatePicker } from 'ant-design-vue'
import dayjs, { Dayjs } from 'dayjs'
import { ref } from 'vue'

const onChange = (date: Dayjs | string) => {
  if (date) {
    console.log('Date: ', date)
  } else {
    console.log('Clear')
  }
}

const presets = ref([
  { label: 'Yesterday', value: dayjs().add(-1, 'd') },
  { label: 'Last Week', value: dayjs().add(-7, 'd') },
  { label: 'Last Month', value: dayjs().add(-1, 'month') }
])
</script>
