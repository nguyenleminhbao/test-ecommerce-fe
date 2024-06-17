<template>
  <div class="w-full mt-8">
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

      <div class="w-full !h-[500px]" v-for="(banner, index) in shopBanners" :key="index">
        <img :src="banner" class="w-full h-full object-cover" alt="banner" />
      </div>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from 'ant-design-vue'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue'

const { shopBanners } = defineProps<{
  shopBanners: string[]
}>()

console.log(shopBanners)
</script>

<style scoped lang="css">
:deep(.slick-slide) {
  text-align: center;

  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
:deep(.slick-slide h3) {
  color: #fff;
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
</style>
