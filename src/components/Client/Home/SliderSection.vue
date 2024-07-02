<template>
  <div
    class="max-w-[1120px] mx-auto grid gap-[32px] pb-[40px] overflow-x-hidden"
    style="display: inherit"
    v-if="banners"
  >
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
      <div v-for="(banner, index) in banners.message" :key="index">
        <img class="w-full aspect-[1120/536] object-cover" :src="banner" alt="temp" />
      </div>
    </Carousel>
  </div>
  <div class="flex flex-col lg:flex-row gap-[24px] items-center max-w-[1120px] mx-auto">
    <div class="max-w-[643px]">
      <h1
        data-aos="zoom-in"
        class="text-neutral-7 text-[40px] leading-[50px] md:text-[72px] font-medium md:leading-[76px] tracking-[-2px]"
      >
        Simply Unique/<br />Simply Better.
      </h1>
    </div>

    <p class="max-w-[250px] md:max-w-[424px] text-neutral-4" data-aos="zoom-in-left">
      <span data-aos="zoom-in-left" class="text-neutral-5 text-body-2-semibold">Shop</span> is a
      gift & decorations store based in HCMC, Vietnam. Est since 2019.
    </p>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from 'ant-design-vue'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue'
import { getBannerPromotion } from '@/services/shop/get'
import useSWRV from 'swrv'
import { configBannerSWRV } from '@/composables/swrv'

const { data: banners } = useSWRV('banners', getBannerPromotion, configBannerSWRV)
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
