<template>
  <div class="grid gap-[48px] pt-[48px] max-w-[1120px] mx-auto">
    <div class="flex items-end justify-between text-neutral-7 max-w-[1120px]">
      <h1 data-aos="zoom-in" class="flex items-center gap-6">
        <span class="text-headline-4">Live</span>
        <img src="@/assets/images/live.png" class="w-5 h-5 translate-y-1 live-icon" />
      </h1>
    </div>
    <div class="flex overflow-x-auto items-center gap-[24px] scrollbar-hide relative">
      <!-- <LivestreamItem
        video-url="https://res.cloudinary.com/dtglrewvk/video/upload/v1717057176/ecommerce/orc6wbc57rb3gd4z0kla.mp4"
      /> -->
      <!-- <LivestreamItem
        v-for="(stream, index) in streamStore.listLivestream"
        :room-id="stream.roomId"
        video-url="http://res.cloudinary.com/dtglrewvk/video/upload/v1717062003/ecommerce/ld0ufsryb4qt6matgurw.mp4"
      /> -->

      <CardLive
        v-for="(stream, index) in streamStore.listLivestream"
        :room-id="stream.roomId"
        logoShop="https://play-lh.googleusercontent.com/5vcrZX1-Rx6NpuOASKSUWqMpQqbFTiLOZ-IV8CehAP3XycsmaKJvp36BJOxaKhq8TWc"
      />
      <!-- <LivestreamItem
        video-url="http://res.cloudinary.com/dtglrewvk/video/upload/v1717062003/ecommerce/ld0ufsryb4qt6matgurw.mp4"
      />
      <LivestreamItem
        video-url="http://res.cloudinary.com/dtglrewvk/video/upload/v1717062104/ecommerce/auzofqdcepvspoc0d4ms.mp4"
      /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import LivestreamItem from '@/components/UI/LivestreamItem.vue'
import { CardLive } from './_components/index'
import { useLivestream } from '@/stores/use-livestream'

const streamStore = useLivestream()
</script>
