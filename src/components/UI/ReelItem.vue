<template>
  <RouterLink
    class="w-full relative group min-w-[262px] max-w-[270px]"
    :to="`/reel/${reelId}`"
    @click="onClick"
  >
    <div
      class="w-full h-[420px] bg-gray-800 rounded-2xl relative group cursor-pointer"
      @mouseover="(playing = true), (muted = true)"
      @mouseleave="(playing = false), (currentTime = 0)"
    >
      <video
        ref="video"
        :src="videoState.video"
        class="w-full h-full rounded-lg object-cover"
        :muted="true"
      ></video>
      <Button
        v-if="isEdit"
        class="absolute bg-black !font-semibold w-[70px] h-[35px] bottom-0 right-0 hidden group-hover:block"
        type="primary"
        @click="showDrawer"
        >Edit</Button
      >
    </div>
    <h1 class="pt-3 text-headline-7 text-neutral-7">{{ title }}</h1>
    <span class="text-neutral-4 text-[14px] leading-[24px]">{{ numOfView }} views</span>
  </RouterLink>

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
      <video
        :src="videoState.video"
        class="w-full h-full rounded-lg object-cover min-h-[440px] max-h-[450px]"
        controls
      ></video>
      <div class="flex justify-end">
        <Upload
          v-model:file-list="fileList"
          name="file"
          class="avatar-uploader [&_.ant-upload-list]:!hidden"
          :action="uploadVideoUrl"
          :multiple="false"
          @change="handleChange"
        >
          <div class="flex items-center gap-1">
            <loading-outlined v-if="loading"></loading-outlined>
            <EditOutlined v-else class="text-lg" />
            <span class="text-body-1-bold !text-[18px]">Edit</span>
          </div>
        </Upload>
      </div>

      <div class="flex flex-col items-start gap-2">
        <span class="text-xl font-semibold text-black min-w-[100px]">Title</span>
        <Input v-model:value="videoState.title" />
      </div>
      <div class="flex flex-col items-start gap-2">
        <span class="text-xl font-semibold text-black min-w-[100px]">Description</span>
        <Textarea v-model:value="videoState.description" />
      </div>
    </div>
    <template #footer>
      <div class="flex items-end w-full justify-end gap-2">
        <Button type="primary" class="bg-red-600 w-[70px]" @click="onDelete">Delete</Button>
        <Button type="primary" class="bg-black w-[70px]" @click="onUpdateReel">Edit</Button>
      </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMediaControls } from '@vueuse/core'
import { increateViewReel } from '@/services/news/post'
import {
  Drawer,
  Button,
  Input,
  Textarea,
  Upload,
  type UploadChangeParam,
  message
} from 'ant-design-vue'
import { uploadVideoUrl } from '@/constants/upload-url'
import { LoadingOutlined, EditOutlined } from '@ant-design/icons-vue'
import { getPublicIdFromUrl } from '@/utils'
import { updateReel } from '@/services/upload/post'

const {
  reelId,
  videoUrl,
  title,
  description,
  view,
  isEdit = false
} = defineProps<{
  reelId: string
  videoUrl: string
  title: string
  description: string
  view: number
  isEdit?: boolean
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
const { playing, volume, muted, currentTime } = useMediaControls(video, {
  src: videoState.value.video
})

const numOfView = ref<number>(view)
const onClick = async () => {
  await increateViewReel(reelId)
  numOfView.value++
}

const open = ref<boolean>(false)
const showDrawer = (e: Event) => {
  e.preventDefault()
  open.value = true
}

const fileList = ref([])
const loading = ref<boolean>(false)
const emit = defineEmits(['deleteReel'])

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

const onUpdateReel = async () => {
  await updateReel({
    idVideoOld: getPublicIdFromUrl(videoUrl),
    reelId,
    title: videoState.value.title,
    description: videoState.value.description,
    newVideoUrl: videoState.value.video
  })
  message.success('Update reel successfully')
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
</script>
