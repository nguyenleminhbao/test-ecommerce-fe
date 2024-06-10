<template>
  <section class="w-full grid grid-cols-3 mt-8">
    <div class="flex p-6 col-span-1 bg-slate-200 rounded-md">
      <Image class="!w-[80px] aspect-square rounded-full" :src="shop?.shopAvatar" />
      <div class="flex flex-col ml-5 flex-1">
        <span class="text-headline-7">{{ shop?.shopName }}</span>
        <span class="text-neutral-5 text-[12px]">Online 1 hour ago</span>
        <div class="grid grid-cols-2 mt-3 gap-2">
          <Button class="h-7 bg-black/10 object-center">
            <template #icon>
              <WechatOutlined />
            </template>
            Chat
          </Button>
          <Button class="h-7 bg-primary text-white object-center">
            <template #icon><PlusCircleOutlined /> </template>
            Follow</Button
          >
        </div>
      </div>
    </div>
    <div class="col-span-2 p-6 object-center">
      <ul class="grid grid-cols-2 gap-3 w-full">
        <li class="flex justify-between items-center max-w-[230px]">
          <span class="text-hairline-1">Evaluation</span>
          <span>1,2k</span>
        </li>
        <li class="flex justify-between items-center max-w-[230px]">
          <span class="text-hairline-1">Product</span>
          <span>1,2k</span>
        </li>
        <li class="flex justify-between items-center max-w-[230px]">
          <span class="text-hairline-1">Participation</span>
          <span>1,2k</span>
        </li>
        <li class="flex justify-between items-center max-w-[230px]">
          <span class="text-hairline-1">Follower</span>
          <span>1,2k</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Image, Button } from 'ant-design-vue'
import { WechatOutlined, PlusCircleOutlined } from '@ant-design/icons-vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getOneShop } from '@/services/shop/get'

const shop = ref<{
  shopId: string
  shopName: string
  shopAvatar: string
}>()
const route = useRoute()

onMounted(async () => {
  const data = await getOneShop(route.params['shopId'] as string)
  shop.value = data.message
})
</script>
