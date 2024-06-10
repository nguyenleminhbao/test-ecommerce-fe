<template>
  <Button shape="circle" :icon="h(HeartOutlined)" />
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { HeartOutlined } from '@ant-design/icons-vue'
import { Button } from 'ant-design-vue'
</script>

<style scoped>
:where(.css-dev-only-do-not-override-16pw25h).ant-btn.ant-btn-circle {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
