<template>
  <Drawer
    v-model:open="open"
    class="custom-class [&_.ant-drawer-title]:text-headline-6 [&_.ant-drawer-body]:!scrollbar-hide"
    :closable="false"
    root-class-name="root-class-name"
    :root-style="{ color: 'blue' }"
    :width="500"
    style="color: red"
    title="Edit Reel"
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

      <div class="flex justify-between">
        <span class="text-xl font-semibold text-black min-w-[100px]">Edit Video</span>
        <Upload
          v-model:file-list="fileList"
          name="file"
          :show-upload-list="false"
          :action="uploadVideoUrl"
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
      <video
        :src="videoState.video"
        class="w-full h-full rounded-lg object-cover min-h-[440px] max-h-[450px]"
        controls
      ></video>
    </div>
    <template #footer>
      <div class="flex items-end w-full justify-end gap-2">
        <Popconfirm title="Are you sure？" ok-text="Yes" cancel-text="No" @confirm="onDelete">
          <template #icon><question-circle-outlined style="color: red" /></template>
          <Button type="primary" danger class="w-[70px]">Delete</Button>
        </Popconfirm>

        <Button type="primary" class="bg-black w-[70px]" @click="onUpdateReel">Edit</Button>
      </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import { onMounted, ref, h } from 'vue'
import { useMediaControls } from '@vueuse/core'
import {
  Drawer,
  Button,
  Popconfirm,
  Input,
  Textarea,
  Upload,
  type UploadChangeParam,
  type UploadProps,
  message
} from 'ant-design-vue'
import { EditOutlined, QuestionCircleOutlined } from '@ant-design/icons-vue'
import { uploadVideoUrl } from '@/constants/upload-url'
import { getPublicIdFromUrl } from '@/utils'
import type { IResponse } from '@/interfaces/response.interface'
import type { IReel } from '@/interfaces/news.interface'
import type { fetcherFn } from 'swrv/dist/types'
import { updateReel } from '@/services/news/post'

const { reelId, videoUrl, title, description, runMutation } = defineProps<{
  reelId: string
  videoUrl: string
  title: string
  description: string
  view: number
  isEdit?: boolean
  class?: string
  runMutation?: (data?: fetcherFn<IResponse<IReel[]>>) => Promise<void>
}>()

const videoState = ref<{
  video: string
  title: string
  description: string
}>({
  video: videoUrl,
  title,
  description
})

const video = ref()
const open = ref<boolean>(false)
const fileList = ref([])
const loading = ref<boolean>(false)
const emit = defineEmits(['deleteReel'])

const { volume, muted } = useMediaControls(video, {
  src: videoState.value.video
})

const showDrawer = (e: Event) => {
  e.preventDefault()
  open.value = true
}

const handleChange = async (info: UploadChangeParam) => {
  console.log(info.file)
  if (info.file.status === 'uploading') {
    loading.value = true
    return
  }
  if (info.file.status === 'done') {
    videoState.value.video = info.file.response.url
    message.success('Upload reel successfully')
    loading.value = false
  }
  if (info.file.status === 'error') {
    loading.value = false
    message.error('upload error')
  }
}

const beforeUpload: UploadProps['beforeUpload'] = (file) => {
  const isMP4 = file.type === 'video/mp4'
  if (!isMP4) {
    message.error(`${file.name} is not a mp4 file`)
  }
  return isMP4 || Upload.LIST_IGNORE
}

const onUpdateReel = async () => {
  await updateReel({
    idVideoOld: getPublicIdFromUrl(videoUrl),
    reelId,
    title: videoState.value.title,
    description: videoState.value.description,
    newVideoUrl: videoState.value.video
  })
  message.success('Update reel successfully')
  if (runMutation) await runMutation()
  open.value = false
}

const onDelete = () => {
  emit('deleteReel', reelId)
  open.value = false
}

// Change initial media properties
onMounted(() => {
  muted.value = true
  volume.value = 1
})

defineExpose({
  showDrawer
})
</script>
