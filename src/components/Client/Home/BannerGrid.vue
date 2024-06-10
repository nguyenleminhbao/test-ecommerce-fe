<template>
  <div>
    <div class="grid grid-cols-2 gap-6 max-w-[1120px] mx-auto">
      <CardBanner
        data-aos="fade-right"
        class="max-w-[548px] h-[662px]"
        title="Headphone"
        imageUrl="https://static.vecteezy.com/system/resources/thumbnails/022/972/872/small/modern-sofa-isolated-png.png"
      ></CardBanner>
      <div class="grid gap-[24px]">
        <CardBanner
          data-aos="fade-left"
          class="flex max-w-[548px] max-h-[319px]"
          title="Ring"
          imageUrl="https://static.vecteezy.com/system/resources/thumbnails/022/972/872/small/modern-sofa-isolated-png.png"
        ></CardBanner>
        <CardBanner
          data-aos="fade-left"
          class="flex max-w-[548px] max-h-[319px]"
          title="Bag"
          imageUrl="https://static.vecteezy.com/system/resources/thumbnails/022/972/872/small/modern-sofa-isolated-png.png"
        ></CardBanner>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardBanner } from './_components'
</script>
