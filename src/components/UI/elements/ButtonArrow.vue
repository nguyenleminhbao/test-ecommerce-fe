<template>
  <RouterLink
    class="flex gap-[4px] items-center text-button-s text-neutral-7 border-b-[1px] border-neutral-7 w-fit"
    :to="link"
    >{{ text }}<ArrowRightOutlined class="text-[15px]"
  /></RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRightOutlined } from '@ant-design/icons-vue'

const { text, link } = defineProps<{
  text: string
  link: string
}>()
</script>
