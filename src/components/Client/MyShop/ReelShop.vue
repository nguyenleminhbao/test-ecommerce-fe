<template>
  <section class="w-full flex flex-col">
    <div class="flex justify-between items-center">
      <h1 class="text-body-1-semibold text-headline-5">Reel</h1>
      <Button
        class="bg-neutral-7 flex items-center"
        type="primary"
        :icon="h(PlusCircleOutlined)"
        @click="drawerNewReel?.showDrawer"
        >New Reel
      </Button>
    </div>

    <div class="grid grid-cols-4 gap-x-[25px] gap-y-10 mt-5">
      <ReelItem
        v-for="(reel, index) in reels.slice((currentPage - 1) * 12, currentPage * 12)"
        :key="index"
        :reelId="reel.id"
        :video-url="reel.video"
        :title="reel.title"
        :description="reel.description"
        :view="reel.view"
        :is-edit="true"
        :runMutation="runMutation"
        @delete-reel="onDelete"
      />
    </div>
    <div class="flex justify-center my-20">
      <Pagination v-model:current="currentPage" :total="reels.length" show-less-items />
    </div>
  </section>
  <DrawerNewReel ref="drawerNewReel" :shop-id="shopId" :run-mutation="runMutation" />
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { PlusCircleOutlined } from '@ant-design/icons-vue'
import { Button, Pagination, message } from 'ant-design-vue'
import { deleteReel } from '@/services/news/delete'
import { useShopReel } from '@/composables/useReel'
import { DrawerNewReel } from '@/components/UI/drawer'
import ReelItem from '@/components/UI/ReelItem.vue'

const { shopId } = defineProps<{
  shopId: string
}>()

const drawerNewReel = ref()
const { data: reels, mutate: runMutation } = useShopReel({ shopId })
const currentPage = ref<number>(1)

const onDelete = async (reelId: string) => {
  await deleteReel(reelId)
  if (runMutation) await runMutation()
  message.success('Delete reel successfully')
}
</script>
