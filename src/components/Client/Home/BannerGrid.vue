<template>
  <div>
    <div class="grid grid-cols-2 gap-6 max-w-[1120px] mx-auto">
      <CardBanner
        data-aos="fade-right"
        class="max-w-[548px] h-[662px]"
        title="Headphone"
        imageUrl="https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch520_Primary_image?$categorypdpnav$&fmt=png-alpha"
      ></CardBanner>
      <div class="grid gap-[24px]">
        <CardBanner
          data-aos="fade-left"
          class="flex max-w-[548px] max-h-[319px]"
          title="Perfume"
          imageUrl="https://png.pngtree.com/png-clipart/20230430/original/pngtree-perfume-glass-bottle-dark-perfume-png-image_9124960.png"
        ></CardBanner>
        <CardBanner
          data-aos="fade-left"
          class="flex max-w-[548px] max-h-[319px]"
          title="Mouse"
          imageUrl="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1681406749/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/223164_0_h8gyuu.png?tr=w-600"
        ></CardBanner>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardBanner } from './_components'
</script>
