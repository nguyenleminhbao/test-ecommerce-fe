<template>
  <div
    class="max-h-[1440px] -mx-4 md:mx-0 content-center bg-[url('https://marketplace.canva.com/EAFCO6pfthY/1/0/1600w/canva-blue-green-watercolor-linktree-background-F2CyNS5sQdM.jpg')] bg-no-repeat bg-cover bg-local aspect-[1440/360]"
  >
    <div class="grid gap-[32px] place-content-center text-center mt-5 md:m-0">
      <div class="grid gap-[8px] text-neutral-7">
        <h1 class="text-headline-5 md:text-headline-4">Join Our Newsletter</h1>
        <span class="text-[18px] leading-[30px]"
          >Sign up for deals, new products and promotions</span
        >
      </div>

      <!-- FormInput -------------------------------------------------------->
      <div
        class="flex gap-[8px] px-4 md:px-0 min-h-[52px] border-b-[1px] border-neutral-4 justify-between items-center"
      >
        <div class="flex gap-[8px] items-center w-full">
          <MailOutlined class="text-[24px] text-neutral-7" />
          <input
            class="text-neutral-4 text-button-s bg-none w-full bg-transparent"
            placeholder="Email address"
          />
        </div>
        <button class="text-button-s text-neutral-4">Signup</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MailOutlined } from '@ant-design/icons-vue'
</script>
