<template>
  <div
    class="max-h-[1440px] -mx-4 md:mx-0 content-center bg-[url('https://marketplace.canva.com/EAFCO6pfthY/1/0/1600w/canva-blue-green-watercolor-linktree-background-F2CyNS5sQdM.jpg')] bg-no-repeat bg-cover bg-local aspect-[1440/360] max-sm:aspect-[375/360]"
  >
    <div class="grid gap-[32px] place-content-center text-center mt-5 md:m-0 max-sm:mx-8">
      <div class="grid gap-[8px] text-neutral-7">
        <h1 class="text-headline-6 md:text-headline-4">Join Our Newsletter</h1>
        <span class="text-button-xs sm:text-button-m"
          >Sign up for deals, new products and promotions</span
        >
      </div>

      <InputGroup compact class="text-left border-b-[1px] border-neutral-4">
        <Input
          style="width: calc(100% - 80px)"
          size="large"
          :bordered="false"
          placeholder="Email address"
          allow-clear
        >
          <template #prefix><MailOutlined /></template>
        </Input>
        <Button type="text" size="large" class="text-neutral-4">Signup</Button>
      </InputGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MailOutlined } from '@ant-design/icons-vue'
import { InputGroup, Input, Button } from 'ant-design-vue'
</script>
