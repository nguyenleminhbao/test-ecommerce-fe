<template>
  <div class="max-w-[1120px] mx-auto grid gap-[32px] pb-[40px] overflow-x-hidden">
    <Carousel arrows autoplay>
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>
      <div v-if="banners" v-for="(banner, index) in banners.message" :key="index">
        <img class="w-full h-[500px] object-cover" :src="banner" alt="temp" />
      </div>
    </Carousel>

    <div class="flex gap-[24px] items-center max-w-[1120px]">
      <div class="max-w-[643px]">
        <h1
          data-aos="zoom-in"
          class="text-neutral-7 text-[72px] font-medium leading-[76px] tracking-[-2px]"
        >
          Simply Unique/<br />Simply Better.
        </h1>
      </div>

      <p class="max-w-[424px] text-neutral-4" data-aos="zoom-in-left">
        <span data-aos="zoom-in-left" class="text-neutral-5 text-body-2-semibold">Shop</span> is a
        gift & decorations store based in HCMC, Vietnam. Est since 2019.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from 'ant-design-vue'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue'
import { randomBanner } from '@/services/shop/get'
import useSWRV from 'swrv'
import { configBannerSWRV } from '@/config/swrv'

const { data: banners } = useSWRV('banners', randomBanner, configBannerSWRV)
</script>

<style scoped lang="css">
.ant-carousel {
  max-width: 1120px;
}

.slick-slide {
  height: 540px !important;
}
.slick-track {
  width: 100% !important;
}

.slick-arrow.custom-slick-arrow {
  width: 40px;
  height: 40px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(35, 35, 35, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
.anticon-left-circle,
.anticon-right-circle {
  font-size: 40px;
  color: black;
}

:where(.css-dev-only-do-not-override-16pw25h).ant-carousel .slick-prev::before {
  content: '';
}
:where(.css-dev-only-do-not-override-16pw25h).ant-carousel .slick-next::before {
  content: '';
}
</style>
