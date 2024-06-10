<template>
  <div class="bg-neutral-7 pt-[80px] pb-[32px]">
    <div class="grid gap-[49px] max-w-[1120px] mx-auto text-white">
      <div class="flex justify-between items-center">
        <div class="flex gap-[32px]">
          <p>Logo</p>
          <p>|</p>
          <p class="text-caption-1 text-neutral-3">Slogan</p>
        </div>

        <div class="flex gap-[40px]">
          <RouterLink class="text-caption-1 text-neutral-1" to="/">Home</RouterLink>
          <RouterLink class="text-caption-1 text-neutral-1" to="/product">Product</RouterLink>
          <RouterLink class="text-caption-1 text-neutral-1" to="/">New</RouterLink>
          <RouterLink class="text-caption-1 text-neutral-1" to="/">About us</RouterLink>
        </div>
      </div>

      <!-- <hr size="5px" /> -->

      <div class="flex justify-between items-center border-t-[0.5px] border-t-neutral-4 py-[16px]">
        <div class="flex gap-[28px]">
          <RouterLink to="/">Privacy Policy</RouterLink>
          <RouterLink to="/">Terms of Use</RouterLink>
        </div>

        <div class="flex gap-[24px] text-[24px]">
          <span> <InstagramOutlined /> </span>
          <span> <FacebookOutlined /> </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons-vue'
</script>
