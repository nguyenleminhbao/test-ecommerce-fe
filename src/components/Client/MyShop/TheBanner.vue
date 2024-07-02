<template>
  <section class="mt-8 w-full flex flex-col">
    <span class="text-headline-3 mt-5 text-center">Banner</span>
    <div class="w-full grid grid-cols-3 gap-6 mt-5">
      <SubBanner
        v-for="(banner, id) in shopBanners"
        :bannerUrl="
          banner
            ? banner
            : 'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg'
        "
        :key="id"
        :shopId="shopId"
        :numOfBanner="id"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import SubBanner from './_components/SubBanner.vue'

const { shopId, shopBanners } = defineProps<{
  shopId: string
  shopBanners: string[]
}>()
</script>
