<template>
  <div class="flex min-h-[532px] mt-12">
    <img
      data-aos="zoom-in"
      class="max-w-[50%] object-cover aspect-[720/532]"
      src="https://hips.hearstapps.com/hmg-prod/images/cute-room-ideas-1677096334.png"
      alt="aesthetic room"
    />
    <div class="grid content-center gap-[24px] pl-[72px] pr-[160px] bg-neutral-2 text-left">
      <div class="grid gap-[16px]">
        <span class="uppercase text-secondary-blue text-hairline-1">SALE UP TO 35% OFF</span>
        <span class="text-neutral-7 text-headline-4">HUNDREDS of<br />New lower prices!</span>
        <span class="text-neutral-7 text-body-1"
          >It’s more affordable than ever to give every room in your home a stylish makeover</span
        >
      </div>
      <ButtonArrow text="Shop Now" link="/" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonArrow from '@/components/UI/elements/ButtonArrow.vue'
</script>
