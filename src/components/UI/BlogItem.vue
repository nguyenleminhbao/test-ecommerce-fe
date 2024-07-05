<template>
  <RouterLink
    :to="`/blog/${feedId}`"
    class="group relative shadow-md min-w-[262px] max-w-[262px] rounded-md bg-neutral-3"
    :class="otherStyle"
    @click="reloadPage"
  >
    <Card hoverable class="w-full bg-neutral-2">
      <template #cover>
        <img class="w-full aspect-[357/325] object-cover" :src="imageUrl" alt="theme blog" />
      </template>
      <CardMeta :title="title">
        <template #description>
          {{ formatDateText(date) }}
          
          <Button
            v-if="isEdit"
            class="absolute bg-black bottom-2 right-2 hidden shadow-lg z-30 group-hover:block"
            type="primary"
            @click="drawerEditFeed?.showDrawer"
            >Edit
          </Button>
        </template>
      </CardMeta>
    </Card>

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
import { Button, Card, CardMeta } from 'ant-design-vue'
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
  otherStyle?: string
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
