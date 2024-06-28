<template>
  <RouterLink
    :to="`/blog/${feedId}`"
    class="group relative shadow-md min-w-[262px] max-w-[262px] rounded-md bg-neutral-3"
    :class="class"
    @click="reloadPage"
  >
    <div class="flex flex-col w-full rounded-md">
      <div class="w-full rounded">
        <img
          class="w-full aspect-[357/325] object-cover rounded-t"
          :src="imageUrl"
          alt="theme blog"
        />
        <Button
          v-if="isEdit"
          class="absolute bg-black bottom-2 right-2 hidden shadow-lg z-30 group-hover:block"
          type="primary"
          @click="drawerEditFeed?.showDrawer"
          >Edit</Button
        >
      </div>
      <div class="flex flex-col gap-2 p-4 bg-neutral-200 bg-opacity-15 rounded-b-md">
        <h3 class="text-headline-7 text-neutral-7 h-[42px] two-lines-truncate">{{ title }}</h3>
        <p class="text-neutral-4 text-[14px] leading-6">{{ formatDateText(date) }}</p>
      </div>
    </div>
    <DrawerEditFeed
      ref="drawerEditFeed"
      :feed-id="feedId"
      :image-url="imageUrl"
      :title="title"
      :content="content"
      :run-mutation="runMutation"
    />
  </RouterLink>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import { formatDateText } from '@/utils'
import { DrawerEditFeed } from './drawer'
import type { IFeed } from '@/interfaces/news.interface'
import type { IResponse } from '@/interfaces/response.interface'
import type { fetcherFn } from 'swrv/dist/types'
import { useRouter } from 'vue-router'

const {
  feedId,
  imageUrl,
  title,
  date,
  content,
  isEdit = false,
  runMutation
} = defineProps<{
  feedId: string
  imageUrl: string
  title: string
  date: string
  content: string
  isEdit?: boolean
  class?: string
  runMutation?: (data?: fetcherFn<IResponse<IFeed[]>>) => Promise<void>
}>()

const drawerEditFeed = ref()
const router = useRouter()
const reloadPage = (e: Event) => {
  e.stopPropagation()
  setTimeout(() => {
    window.location.reload()
    router.push
  }, 300)
}
</script>
