<template>
  <div class="w-full mt-8">
    <Carousel autoplay>
      <div class="w-full !h-[500px]">
        <img
          src="https://down-bs-vn.img.susercontent.com/cn-11134210-7r98o-lvk44ckoslca3a.webp"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="w-full h-[500px]">
        <img
          src="https://down-bs-vn.img.susercontent.com/cn-11134210-7r98o-lvmv2prvfnll7f.webp"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="w-full h-[500px]">
        <img
          src="https://down-bs-vn.img.susercontent.com/cn-11134210-7qukw-lkiy9phq6yeu77.webp"
          class="w-full h-full object-cover"
        />
      </div>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from 'ant-design-vue'
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
