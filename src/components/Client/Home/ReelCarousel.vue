<template>
  <div class="grid gap-[48px] pt-[48px] max-w-[1120px] mx-auto">
    <div class="flex items-end justify-between text-neutral-7 max-w-[1120px]">
      <h1 data-aos="zoom-in" class="text-headline-4">Reel</h1>
      <ButtonArrow text="More Reels" link="/news" />
    </div>
    <div class="flex overflow-x-auto items-start gap-[24px] scrollbar-hide relative">
      <ReelItem
        video-url="https://res.cloudinary.com/dtglrewvk/video/upload/v1717057176/ecommerce/orc6wbc57rb3gd4z0kla.mp4"
        title="Tự tin trên phố"
        view="123K"
      />
      <ReelItem
        video-url="http://res.cloudinary.com/dtglrewvk/video/upload/v1717062003/ecommerce/ld0ufsryb4qt6matgurw.mp4"
        title="Thưởng thức nhạc tuổi thơ Doraemon"
        view="123K"
      />
      <ReelItem
        video-url="http://res.cloudinary.com/dtglrewvk/video/upload/v1717062059/ecommerce/a5b8xcbcjzmv6rxuzdho.mp4"
        title="Biểu diễn văn nghệ"
        view="13K"
      />
      <ReelItem
        video-url="http://res.cloudinary.com/dtglrewvk/video/upload/v1717062104/ecommerce/auzofqdcepvspoc0d4ms.mp4"
        title="Chill cùng Trung Quân"
        view="436M"
      />
      <RightCircleFilled
        class="bg-green z-10 sticky right-2 top-[calc(50%_-_50px)] text-4xl opacity-30"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonArrow from '@/components/UI/elements/ButtonArrow.vue'
import ReelItem from '@/components/UI/ReelItem.vue'
import { RightCircleFilled } from '@ant-design/icons-vue'
</script>
