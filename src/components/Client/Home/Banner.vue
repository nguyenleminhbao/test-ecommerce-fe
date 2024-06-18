<template>
  <div class="grid grid-cols-1 md:grid-cols-2 min-h-[532px] mt-12">
    <img
      data-aos="zoom-in"
      class="!w-full !h-full object-cover"
      src="https://hips.hearstapps.com/hmg-prod/images/cute-room-ideas-1677096334.png"
      alt="aesthetic room"
    />
    <div
      class="grid content-center gap-[24px] md:pl-[72px] md:pr-[160px] px-4 py-8 mt-5 -mx-4 md:m-0 bg-neutral-2 text-left"
    >
      <div class="grid gap-[16px]">
        <span class="uppercase text-secondary-blue text-hairline-1">SALE UP TO 35% OFF</span>
        <span class="text-neutral-7 text-headline-5 md:text-headline-4"
          >HUNDREDS of<br />New lower prices!</span
        >
        <span class="text-neutral-7 text-body-1"
          >It’s more affordable than ever to give every room in your home a stylish makeover</span
        >
      </div>
      <ButtonArrow text="Shop Now" link="/product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonArrow from '@/components/UI/elements/ButtonArrow.vue'
</script>
