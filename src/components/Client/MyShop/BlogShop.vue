<template>
  <section class="w-full flex flex-col">
    <div class="flex justify-between items-center">
      <h1 class="text-body-1-semibold text-headline-5">Blog</h1>
      <Button
        class="bg-neutral-7 flex items-center"
        type="primary"
        :icon="h(PlusCircleOutlined)"
        @click="drawerNewFeed?.showDrawer"
        >New Blog
      </Button>
    </div>

    <div class="grid grid-cols-4 gap-x-[25px] gap-y-10 mt-5" v-if="feeds">
      <BlogItem
        v-for="(feed, index) in feeds.slice((currentPage - 1) * 12, currentPage * 12)"
        :key="index"
        :feedId="feed.id"
        :title="feed.title"
        :imageUrl="feed.thumbnail"
        :date="feed.createdAt"
        :content="feed.content"
        :is-edit="true"
        :runMutation="runMutation"
        @delete-blog="onDelete"
      />
    </div>
    <div class="flex justify-center my-20">
      <Pagination
        v-if="feeds"
        v-model:current="currentPage"
        :total="feeds.length"
        show-less-items
      />
    </div>
  </section>
  <DrawerNewFeed ref="drawerNewFeed" :shop-id="shopId" :run-mutation="runMutation" />
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { PlusCircleOutlined } from '@ant-design/icons-vue'
import { Button, Pagination, message } from 'ant-design-vue'
import { deleteFeed } from '@/services/news/delete'
import { useShopFeed } from '@/composables/useFeed'
import { DrawerNewFeed } from '@/components/UI/drawer'
import BlogItem from '@/components/UI/BlogItem.vue'

const { shopId } = defineProps<{
  shopId: string
}>()

const drawerNewFeed = ref()
const { data: feeds, mutate: runMutation } = useShopFeed({ shopId })
const currentPage = ref<number>(1)

const onDelete = async (feedId: string) => {
  await deleteFeed(feedId)
  if (runMutation) await runMutation()
  message.success('Delete feed successfully')
}
</script>
