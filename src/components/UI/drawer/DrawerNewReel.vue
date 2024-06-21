<template>
  <Drawer
    v-model:open="open"
    class="custom-class [&_.ant-drawer-title]:text-headline-6 [&_.ant-drawer-body]:!scrollbar-hide"
    :closable="false"
    root-class-name="root-class-name"
    :root-style="{ color: 'blue' }"
    :width="500"
    style="color: red"
    title="New Reel"
    placement="right"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-col items-start gap-2">
        <span class="text-xl font-semibold text-black min-w-[100px]">Title</span>
        <Input v-model:value="videoState.title" />
      </div>
      <div class="flex flex-col items-start gap-2">
        <span class="text-xl font-semibold text-black min-w-[100px]">Description</span>
        <Textarea v-model:value="videoState.description" :rows="4" />
      </div>

      <div class="flex flex-col items-start gap-2">
        <span class="text-xl font-semibold text-black min-w-[100px]">Upload Video</span>
        <UploadDragger
          v-model:fileList="fileList"
          list-type="picture"
          name="file"
          @change="handleChange"
          :max-count="1"
          :action="uploadVideoUrl"
          :before-upload="beforeUpload"
          class="w-full"
        >
          <p class="ant-upload-drag-icon">
            <LoadingOutlined v-if="loading" /><inbox-outlined v-else />
          </p>
          <p class="ant-upload-text">Click or drag file to this area to upload</p>
          <p class="ant-upload-hint w-full">Only upload file video mp4</p>
        </UploadDragger>
        <video
          v-if="videoState.video"
          :src="videoState.video"
          class="w-full h-full mt-2 rounded-lg object-cover max-h-[450px]"
          controls
        ></video>
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
import { ref } from 'vue'
import { InboxOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import {
  Drawer,
  Input,
  Textarea,
  Button,
  UploadDragger,
  type UploadChangeParam,
  type UploadProps,
  Upload,
  message
} from 'ant-design-vue'
import { uploadVideoUrl } from '@/constants/upload-url'
import { getPublicIdFromUrl } from '@/utils'
import { createReel } from '@/services/news/post'
import { deleteFileV2 } from '@/services/upload/post'
import type { fetcherFn } from 'swrv/dist/types'
import type { IReel } from '@/interfaces/news.interface'
import type { IResponse } from '@/interfaces/response.interface'

const { shopId, runMutation } = defineProps<{
  shopId: string
  runMutation: (data?: fetcherFn<IResponse<IReel[]>>) => Promise<void>
}>()

const fileList = ref([])
const loading = ref<boolean>(false)
const open = ref<boolean>(false)

const videoState = ref<{
  video: string
  title: string
  description: string
}>({
  video: '',
  title: '',
  description: ''
})

const showDrawer = (e: Event) => {
  e.preventDefault()
  open.value = true
}

const handleChange = async (info: UploadChangeParam) => {
  if (info.file.status === 'uploading') {
    loading.value = true
    if (videoState.value.video) {
      await deleteFileV2(getPublicIdFromUrl(videoState.value.video))
    }
    return
  }
  if (info.file.status === 'done') {
    videoState.value.video = info.file.response.url
    message.success('Upload reel successfully')
    loading.value = false
  }
  if (info.file.status === 'error') {
    loading.value = false
    message.error('Upload error')
  }
}

const beforeUpload: UploadProps['beforeUpload'] = (file) => {
  const isMP4 = file.type === 'video/mp4'
  if (!isMP4) {
    message.error(`${file.name} is not a mp4 file`)
  }
  return isMP4 || Upload.LIST_IGNORE
}

const onAdd = async () => {
  if (!videoState.value.title || !videoState.value.description || !videoState.value.video) {
    message.error('Please fill full the information!')
    return
  }
  await createReel({
    video: videoState.value.video,
    title: videoState.value.title,
    description: videoState.value.description,
    shopId
  })
  if (runMutation) await runMutation()
  message.success('Create reel successfully')
  videoState.value = {
    video: '',
    title: '',
    description: ''
  }
  fileList.value = []
  open.value = false
}

defineExpose({
  showDrawer
})
</script>
