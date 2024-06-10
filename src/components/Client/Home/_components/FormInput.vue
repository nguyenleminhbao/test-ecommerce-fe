<template>
  <div class="flex gap-[8px] min-h-[52px] border-b-[1px] border-neutral-4 justify-between items-center">
    <div class="flex gap-[8px] items-center w-full">
      <MailOutlined class="text-[24px] text-neutral-7"/>
      <input class="text-neutral-4 text-button-s bg-none w-full bg-transparent" placeholder="Email address" />
    </div>
    <button class="text-button-s text-neutral-4">Signup</button>
  </div>
</template>

<script setup lang="ts">
import { MailOutlined } from '@ant-design/icons-vue'
</script>
