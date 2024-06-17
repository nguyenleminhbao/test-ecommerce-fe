<template>
  <section class="w-full grid grid-cols-3 mt-8">
    <div class="flex p-6 col-span-1 bg-slate-200 rounded-md">
      <Image class="!w-[80px] aspect-square rounded-full" :src="shopAvatar" />
      <div class="flex flex-col ml-5 flex-1">
        <span class="text-headline-7">{{ shopName }}</span>
        <span class="text-neutral-5 text-[12px]">Online 1 hour ago</span>
        <div class="grid grid-cols-2 mt-3 gap-2">
          <Button class="h-7 bg-slate-200 border-black object-center" :icon="h(WechatOutlined)"
            >Chat</Button
          >

          <Button class="h-7 bg-primary text-white object-center" @click="follow = !follow">
            <template #icon>
              <PlusCircleOutlined v-if="!follow" /> <CheckCircleOutlined v-else
            /></template>
            <span v-if="!follow">Follow</span>
            <span v-else>Following</span>
          </Button>
          
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
import { WechatOutlined, PlusCircleOutlined, CheckCircleOutlined } from '@ant-design/icons-vue'
import { ref, h } from 'vue'

const follow = ref<boolean>(false)
const { shopId, shopName, shopAvatar } = defineProps<{
  shopId: string
  shopName: string
  shopAvatar: string
}>()
</script>
