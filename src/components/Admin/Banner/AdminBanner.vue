<template>
  <div v-if="bannerState.length" class="flex flex-col gap-6">
    <div class="flex justify-between items-center">
      <h1 class="text-headline-5">Banner</h1>
      <Button class="bg-black text-white" @click="onUpdate">Update</Button>
    </div>

    <div class="bg-white p-[24px] rounded-lg">
      <ul class="grid grid-cols-2 gap-4">
        <li class="flex flex-col gap-3">
          <Image :src="bannerState[0]" class="w-full !h-[300px]" />
          <Select
            ref="select"
            v-model:value="bannerState[0]"
            style="width: 160px"
            class="!py-2 !border-black"
          >
            <SelectOption v-for="(banner, index) in banners" :key="index" :value="banner.banner">
              <img :src="banner.banner" class="!w-16 aspect-square" />
              <span>{{ banner.shopName }}</span>
            </SelectOption>
          </Select>
        </li>
        <li class="flex flex-col gap-3">
          <Image :src="bannerState[1]" class="w-full !h-[300px]" />
          <Select
            ref="select"
            v-model:value="bannerState[1]"
            style="width: 160px"
            class="!py-2 !border-black"
          >
            <SelectOption v-for="(banner, index) in banners" :key="index" :value="banner.banner">
              <img :src="banner.banner" class="!w-16 aspect-square" />
              <span>{{ banner.shopName }}</span>
            </SelectOption>
          </Select>
        </li>
        <li class="flex flex-col gap-3">
          <Image :src="bannerState[2]" class="w-full !h-[300px]" />
          <Select
            ref="select"
            v-model:value="bannerState[2]"
            style="width: 160px"
            class="!py-2 !border-black"
          >
            <SelectOption v-for="(banner, index) in banners" :key="index" :value="banner.banner">
              <img :src="banner.banner" class="!w-16 aspect-square" />
              <span>{{ banner.shopName }}</span>
            </SelectOption>
          </Select>
        </li>
        <li class="flex flex-col gap-3">
          <Image :src="bannerState[3]" class="w-full !h-[300px]" />
          <Select
            ref="select"
            v-model:value="bannerState[3]"
            style="width: 160px"
            class="!py-2 !border-black"
          >
            <SelectOption v-for="(banner, index) in banners" :key="index" :value="banner.banner">
              <img :src="banner.banner" class="!w-16 aspect-square" />
              <span>{{ banner.shopName }}</span>
            </SelectOption>
          </Select>
        </li>
      </ul>
    </div>
  </div>
  <div v-else class="w-full min-h-[500px] object-center">
    <Spin class="[&_.ant-spin-dot-item]:bg-black [&_.ant-spin-dot-item]:text-xl" size="large" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Image, Select, SelectOption, Button, message, Spin } from 'ant-design-vue'
import { getBannerPromotion, getBanners } from '@/services/shop/get'
import { updateBannerMarketPlace } from '@/services/shop/post'

const bannerState = ref<string[]>([])
const banners = ref<
  {
    shopName: string
    banner: string
  }[]
>([])

const onUpdate = async () => {
  await updateBannerMarketPlace(bannerState.value)
  message.success('Update banner successfully')
}

onMounted(async () => {
  const data = await getBanners()
  banners.value = data.message

  const data1 = await getBannerPromotion()
  bannerState.value = data1.message
})
</script>
