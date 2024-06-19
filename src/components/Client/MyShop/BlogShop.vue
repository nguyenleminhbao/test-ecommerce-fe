<template>
  <section class="w-full flex flex-col">
    <div class="flex justify-between items-center">
      <h1 class="text-body-1-semibold text-headline-5">Blog</h1>
      <Button
        class="bg-neutral-7 flex items-center"
        type="primary"
        :icon="h(PlusCircleOutlined)"
        @click="showDrawer"
        >New Blog
      </Button>
    </div>

    <div class="grid grid-cols-3 gap-x-[25px] gap-y-10 mt-5" v-if="feeds">
      <BlogItem
        v-for="(feed, index) in feeds.message.slice((currentPage - 1) * 12, currentPage * 12)"
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
        :total="feeds.message.length"
        show-less-items
      />
    </div>
  </section>

  <Drawer
    v-model:open="open"
    class="custom-class [&_.ant-drawer-title]:text-headline-6 [&_.ant-drawer-body]:!scrollbar-hide"
    :closable="false"
    root-class-name="root-class-name"
    :root-style="{ color: 'blue' }"
    :width="500"
    style="color: red"
    title="New Blog"
    placement="right"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-col items-start gap-2">
        <span class="text-xl font-semibold text-black min-w-[100px]">Title</span>
        <Input v-model:value="feedState.title" />
      </div>

      <div class="flex justify-between">
        <span class="text-xl font-semibold text-black min-w-[100px]">Thumbnail</span>

        <Upload
          v-model:fileList="fileList"
          list-type="picture"
          name="file"
          @change="handleChange"
          :show-upload-list="false"
          :max-count="1"
          :action="uploadImageUrl"
          :before-upload="beforeUpload"
        >
          <Button v-if="loading" type="primary" loading class="flex items-center bg-neutral-7"
            >Loading</Button
          >
          <Button
            v-else
            type="primary"
            class="flex items-center bg-neutral-7"
            :icon="h(UploadOutlined)"
          >
            Upload
          </Button>
        </Upload>
      </div>
      <div class="w-full aspect-[16/9] flex items-center justify-center">
        <Image
          class="w-full aspect-[16/9] object-cover rounded"
          v-if="feedState.thumbnail"
          :src="feedState.thumbnail"
          alt="thumbnail"
        />
        <Empty v-else />
      </div>

      <div class="flex flex-col items-start gap-2">
        <span class="text-xl font-semibold text-black min-w-[100px]">Content</span>
        <Textarea v-model:value="feedState.content" :rows="10" />
      </div>
    </div>

    <template #footer>
      <div class="flex items-end w-full justify-end gap-2">
        <Button class="border-black w-[70px]" @click="open = false">Cancel</Button>
        <Button type="primary" class="bg-black w-[70px]" @click="onAdd">Add</Button>
      </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import BlogItem from '@/components/UI/BlogItem.vue'
import { getFeedByShop } from '@/services/news/get'
import { ref, h } from 'vue'
import { PlusCircleOutlined, UploadOutlined } from '@ant-design/icons-vue'
import {
  Drawer,
  Input,
  Textarea,
  Button,
  Pagination,
  Empty,
  type UploadChangeParam,
  type UploadProps,
  Upload,
  message,
  Image
} from 'ant-design-vue'
import { uploadImageUrl } from '@/constants/upload-url'
import { getPublicIdFromUrl } from '@/utils'
import { createFeed } from '@/services/news/post'
import { deleteFeed } from '@/services/news/delete'
import useSWRV from 'swrv'
import { configSWRV } from '@/config/swrv'
import { deleteFileV2 } from '@/services/upload/post'

const { shopId } = defineProps<{
  shopId: string
}>()

const { data: feeds, mutate: runMutation } = useSWRV(
  `/news/feed/shop/${shopId}`,
  getFeedByShop,
  configSWRV
)
const fileList = ref([])
const loading = ref<boolean>(false)
const currentPage = ref<number>(1)
const feedState = ref<{
  title: string
  thumbnail: string
  content: string
}>({
  title: '',
  thumbnail: '',
  content: ''
})
const open = ref<boolean>(false)
const showDrawer = (e: Event) => {
  e.preventDefault()
  open.value = true
}

const handleChange = async (info: UploadChangeParam) => {
  if (info.file.status === 'uploading') {
    loading.value = true
    if (feedState.value.thumbnail) {
      await deleteFileV2(getPublicIdFromUrl(feedState.value.thumbnail))
    }
    return
  }
  if (info.file.status === 'done') {
    feedState.value.thumbnail = info.file.response.url
    message.success('Upload thumbnail successfully')
    loading.value = false
  }
  if (info.file.status === 'error') {
    loading.value = false
    message.error('Upload error')
  }
}

const beforeUpload: UploadProps['beforeUpload'] = (file) => {
  const isIMG = file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg'
  if (!isIMG) {
    message.error(`${file.name} is not a image file`)
  }
  return isIMG || Upload.LIST_IGNORE
}

const onAdd = async () => {
  if (!feedState.value.title || !feedState.value.thumbnail || !feedState.value.content) {
    message.error('Please fill full the information!')
    return
  }
  await createFeed({
    title: feedState.value.title,
    thumbnail: feedState.value.thumbnail,
    content: feedState.value.content,
    shopId
  })
  runMutation()
  message.success('Create feed successfully')
  feedState.value = {
    title: '',
    thumbnail: '',
    content: ''
  }
  fileList.value = []
  open.value = false
}

const onDelete = async (feedId: string) => {
  await deleteFeed(feedId)
  message.success('Delete feed successfully')
  runMutation()
}
</script>
