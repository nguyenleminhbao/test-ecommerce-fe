<template>
  <div class="flex-col bg-neutral-2 p-10">
    <a-icon type="car" />
    <p>{{ title }}</p>
    <RouterLink class="flex items-center" to="/">Collection <RightOutlined /></RouterLink>
  </div>
</template>

<script setup lang="ts">
defineProps(['title', 'imageUrl'])
import { RightOutlined } from '@ant-design/icons-vue'
</script>
