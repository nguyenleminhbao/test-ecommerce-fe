<template>
  <Rate v-model:value="value" allow-half />
</template>

<script lang="ts" setup>
import { Rate } from 'ant-design-vue'
import { ref } from 'vue'
const value = ref<number>()
</script>
