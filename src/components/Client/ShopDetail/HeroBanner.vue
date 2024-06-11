<template>
  <div class="w-full mt-8">
    <Carousel autoplay>
      <div class="w-full !h-[500px]" v-for="(banner, index) in shopBanners" :key="index">
        <img :src="banner" class="w-full h-full object-cover" />
      </div>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from 'ant-design-vue'

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
</style>
