<template>
  <section class="mt-8 w-full flex flex-col">
    <div class="flex items-center justify-center mt-5 gap-2">
      <span class="text-headline-3 text-center">Reel </span>
      <button class="w-10 h-10 object-center translate-y-1" @click="showDrawer">
        <PlusCircleOutlined class="w-10 h-10 text-[35px]" />
      </button>
    </div>

    <div class="w-full mt-10 flex overflow-x-auto items-start gap-6 scrollbar-hide relative">
      <ReelItem
        v-for="(reel, index) in reels"
        :key="index"
        :reelId="reel.id"
        :video-url="reel.video"
        :title="reel.title"
        :description="reel.description"
        :view="reel.view"
        :is-edit="true"
        @delete-reel="onDelete"
      />
      <RightCircleFilled class="bg-green z-10 sticky right-2 top-[calc(50%_-_50px)] text-4xl" />
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
    title="New Reel"
    placement="right"
  >
    <div class="flex flex-col gap-4">
      <div class="flex justify-end mb-10">
        <UploadDragger
          v-model:fileList="fileList"
          name="file"
          @change="handleChange"
          :action="uploadVideoUrl"
          class="w-full"
        >
          <p class="ant-upload-drag-icon">
            <inbox-outlined></inbox-outlined>
          </p>
          <p class="ant-upload-text">Click or drag file to this area to upload</p>
          <p class="ant-upload-hint w-full">Only upload file video mp4</p>
        </UploadDragger>
      </div>

      <div class="flex flex-col items-start gap-2">
        <span class="text-xl font-semibold text-black min-w-[100px]">Title</span>
        <Input v-model:value="videoState.title" />
      </div>
      <div class="flex flex-col items-start gap-2">
        <span class="text-xl font-semibold text-black min-w-[100px]">Description</span>
        <Textarea v-model:value="videoState.description" />
      </div>
      <video
        :src="videoState.video"
        class="w-full h-full mt-2 rounded-lg object-cover max-h-[450px]"
        controls
      ></video>
    </div>
    <template #footer>
      <div class="flex items-end w-full justify-end gap-2">
        <Button type="primary" class="bg-gray-400 w-[70px]" @click="open = false">Cancel</Button>
        <Button type="primary" class="bg-black w-[70px]" @click="onAdd">Add</Button>
      </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import ReelItem from '@/components/UI/ReelItem.vue'
import type { IReel } from '@/interfaces/news.interface'
import { getReelByShop } from '@/services/news/get'
import { onMounted, ref } from 'vue'
import { PlusCircleOutlined, InboxOutlined, RightCircleFilled } from '@ant-design/icons-vue'
import {
  Drawer,
  Input,
  Textarea,
  Button,
  UploadDragger,
  type UploadChangeParam,
  message
} from 'ant-design-vue'
import { uploadVideoUrl } from '@/constants/upload-url'
import { deleteFile } from '@/services/upload/delete'
import { getPublicIdFromUrl } from '@/utils'
import { createReel } from '@/services/news/post'
import { deleteReel } from '@/services/news/delete'

const { shopId } = defineProps<{
  shopId: string
}>()

const reels = ref<IReel[]>([])
const fileList = ref([])
const loading = ref<boolean>(false)
const videoState = ref<{
  video: string
  title: string
  description: string
}>({
  video: '',
  title: '',
  description: ''
})
const open = ref<boolean>(false)
const showDrawer = (e: Event) => {
  e.preventDefault()
  open.value = true
}

const handleChange = async (info: UploadChangeParam) => {
  if (info.file.status === 'uploading') {
    loading.value = true
    if (videoState.value.video) {
      await deleteFile(getPublicIdFromUrl(videoState.value.video))
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
    message.error('upload error')
  }
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
  const data = await getReelByShop(shopId)
  reels.value = data.message
  message.success('Create reel successfully')
  open.value = false
}

const onDelete = async (reelId: string) => {
  await deleteReel(reelId)
  message.success('Delete reel successfully')
  const data = await getReelByShop(shopId)
  reels.value = data.message
}

onMounted(async () => {
  const data = await getReelByShop(shopId)
  reels.value = data.message
})
</script>
