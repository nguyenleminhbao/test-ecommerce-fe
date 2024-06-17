<template>
  <RouterLink :to="`/blog/${feedId}`" class="group relative shadow-md">
    <div class="flex flex-col gap-6 w-[357px]">
      <div class="w-[357px] h-[325px]">
        <img class="w-[357px] h-[325px] object-cover rounded-md" :src="imageUrl" alt="theme blog" />
        <Button
          v-if="isEdit"
          class="absolute bg-black bottom-2 right-2 hidden shadow-lg z-30 group-hover:block"
          type="primary"
          @click="showDrawer"
          >Edit</Button
        >
      </div>
      <div class="flex flex-col gap-2 p-4 bg-gray-200">
        <h3 class="pt-3 text-headline-7 text-neutral-7">{{ title }}</h3>
        <p class="text-neutral-4 text-[14px] leading-[24px]">{{ formatDateText(date) }}</p>
      </div>
    </div>
  </RouterLink>

  <Drawer
    v-model:open="open"
    class="custom-class [&_.ant-drawer-title]:text-headline-6 [&_.ant-drawer-body]:!scrollbar-hide"
    :closable="false"
    root-class-name="root-class-name"
    :root-style="{ color: 'blue' }"
    :width="500"
    style="color: red"
    title="Edit Blog"
    placement="right"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-col items-start gap-2">
        <span class="text-xl font-semibold text-black min-w-[100px]">Title</span>
        <Input v-model:value="imageState.title" />
      </div>

      <div class="flex justify-between">
        <span class="text-xl font-semibold text-black min-w-[100px]">Edit Thumbnail</span>
        <Upload
          v-model:file-list="fileList"
          name="file"
          :show-upload-list="false"
          :action="uploadImageUrl"
          @change="handleChange"
          :max-count="1"
          :before-upload="beforeUpload"
        >
          <Button v-if="loading" type="primary" loading class="flex items-center bg-neutral-7"
            >Loading</Button
          >
          <Button
            v-else
            type="primary"
            class="flex items-center bg-neutral-7"
            :icon="h(EditOutlined)"
          >
            Edit
          </Button>
        </Upload>
      </div>
      <Image
        :src="imageState.image"
        class="w-full h-full rounded-lg object-cover aspect-[16/9]"
        alt="thumbnail"
      ></Image>

      <div class="flex flex-col items-start gap-2">
        <span class="text-xl font-semibold text-black min-w-[100px]">Content</span>
        <Textarea v-model:value="imageState.content" :rows="10" />
      </div>
    </div>
    <template #footer>
      <div class="flex items-end w-full justify-end gap-2">
        <Popconfirm title="Are you sure？" ok-text="Yes" cancel-text="No" @confirm="onDelete">
          <template #icon><question-circle-outlined style="color: red" /></template>
          <Button type="primary" danger class="w-[70px]">Delete</Button>
        </Popconfirm>

        <Button type="primary" class="bg-black w-[70px]" @click="onUpdateFeed">Edit</Button>
      </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import {
  Drawer,
  Button,
  Popconfirm,
  Input,
  Textarea,
  Image,
  Upload,
  type UploadChangeParam,
  type UploadProps,
  message
} from 'ant-design-vue'
import { uploadImageUrl } from '@/constants/upload-url'
import { EditOutlined, QuestionCircleOutlined } from '@ant-design/icons-vue'
import { getPublicIdFromUrl } from '@/utils'
import { updateFeed } from '@/services/upload/post'
import { formatDateText } from '@/utils'
import type { IFeed } from '@/interfaces/news.interface'
import type { IResponse } from '@/interfaces/response.interface'
import type { fetcherFn } from 'swrv/dist/types'

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
  runMutation?: (data?: fetcherFn<IResponse<IFeed[]>>) => Promise<void>
}>()

const imageState = ref<{
  image: string
  title: string
  content: string
}>({
  image: imageUrl,
  title,
  content
})

const open = ref<boolean>(false)
const showDrawer = (e: Event) => {
  e.preventDefault()
  open.value = true
}

const fileList = ref([])
const loading = ref<boolean>(false)
const emit = defineEmits(['deleteBlog'])

const handleChange = async (info: UploadChangeParam) => {
  console.log(info.file)
  if (info.file.status === 'uploading') {
    loading.value = true
    return
  }
  if (info.file.status === 'done') {
    imageState.value.image = info.file.response.url
    message.success('Upload reel successfully')
    loading.value = false
  }
  if (info.file.status === 'error') {
    loading.value = false
    message.error('upload error')
  }
}

const beforeUpload: UploadProps['beforeUpload'] = (file) => {
  const isIMG = file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg'
  if (!isIMG) {
    message.error(`${file.name} is not a image file`)
  }
  return isIMG || Upload.LIST_IGNORE
}

const onUpdateFeed = async () => {
  await updateFeed({
    idImageOld: getPublicIdFromUrl(imageUrl),
    feedId,
    title: imageState.value.title,
    newImageUrl: imageState.value.image,
    content: imageState.value.content
  })
  message.success('Update feed successfully')
  if (runMutation) runMutation()
  open.value = false
}

const onDelete = () => {
  emit('deleteBlog', feedId)
  open.value = false
}
</script>
