<template>
  <section class="w-full mt-6 grid grid-cols-1 lg:grid-cols-3 bg-slate-200 shadow-md">
    <div class="flex p-6 col-span-1 border-b-[1px] lg:border-r-[1px] border-gray-400">
      <Image class="!w-[60px] lg:!w-[80px] aspect-square rounded-full" :src="shop?.shopAvatar" />
      <div class="flex flex-col ml-5 flex-1">
        <span class="text-headline-7">{{ shop?.shopName }}</span>
        <span class="text-neutral-5 text-[12px]">Online 1 hour ago</span>
        <div class="grid grid-cols-2 mt-3 gap-2">
          <Button
            class="h-7 bg-slate-200 border-neutral-7 object-center"
            :icon="h(MessageOutlined)"
          >
            Chat
          </Button>
          <RouterLink :to="`/shop/${shopId}`">
            <Button class="h-7 w-full bg-primary text-white object-center" :icon="h(ShopOutlined)">
              Shop</Button
            >
          </RouterLink>
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
          <span>{{ products.length }}</span>
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
import { MessageOutlined, ShopOutlined } from '@ant-design/icons-vue'
import { onMounted, ref, h } from 'vue'
import { getOneShop } from '@/services/shop/get'
import { useShopProduct } from '@/composables/useProduct'

const { shopId } = defineProps<{
  shopId: string
}>()

const shop = ref<{
  shopId: string
  shopName: string
  shopAvatar: string
}>()

const { data: products } = useShopProduct({ shopId })

onMounted(async () => {
  const data = await getOneShop(shopId)
  shop.value = data.message
})
</script>
