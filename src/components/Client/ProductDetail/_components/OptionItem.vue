<template>
  <RadioButton :value="title" class="">
    <span class="text-body-1-normal">{{ title }}</span>
  </RadioButton>
</template>

<script setup lang="ts">
import { RadioButton } from 'ant-design-vue'
import { defineProps } from 'vue'

const { title } = defineProps({
  title: String
})
</script>
