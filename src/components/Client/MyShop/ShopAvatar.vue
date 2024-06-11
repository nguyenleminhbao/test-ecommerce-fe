<template>
  <section class="grid grid-cols-10 gap-4 mt-8">
    <div class="col-span-3 flex flex-col justify-center items-center gap-4">
      <div class="w-full max-w-[200px] relative group">
        <img
          v-if="!loading"
          :src="imageUrl ? imageUrl : shopAvatar"
          class="rounded-full aspect-square object-cover group-hover:blur-sm duration-200"
        />
        <div v-if="loading" class="w-full aspect-square object-center bg-gray-300 rounded-full">
          <Spin size="large" />
        </div>
        <div
          class="absolute top-[calc(50%_-_30px)] left-[calc(50%_-_30px)] cursor-pointer items-center gap-1 bg-slate-400 rounded-full aspect-square w-[60px] justify-center hidden group-hover:flex"
        >
          <Upload
            v-model:file-list="fileList"
            name="file"
            class="avatar-uploader [&_.ant-upload-list]:!hidden"
            :action="uploadImageUrl"
            :multiple="false"
            @change="handleChange"
          >
            <div v-if="!imageUrl" class="flex items-center gap-1">
              <loading-outlined v-if="loading"></loading-outlined>
              <EditOutlined class="text-lg" />
              <span class="text-body-1-bold !text-[15px]">Edit</span>
            </div>
            <div v-else class="flex items-center gap-1">
              <EditOutlined class="text-lg" />
              <span class="text-body-1-bold !text-[15px]">Edit</span>
            </div>
          </Upload>
        </div>
      </div>

      <span class="text-headline-6">{{ shopName }}</span>
      <a href="#" class="hover:text-blue-400">Redirect Admin shop</a>
    </div>
    <div class="col-span-7 flex flex-col">
      <div class="w-full h-[400px] bg-neutral-700 rounded-xl object-center" id="livestream">
        <PlayCircleOutlined class="text-7xl text-rose-600 cursor-pointer" />
      </div>
      <div class="flex justify-end items-center gap-4 mt-4">
        <Button
          class="bg-sky-400 w-[150px] h-[40px] text-lg !font-semibold"
          @click="handleStopLivestream"
          >Stop stream</Button
        >

        <Button
          class="bg-rose-500 w-[150px] h-[40px] text-lg !font-semibold"
          @click="handleLivestream"
          >LiveStream
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EditOutlined, LoadingOutlined, PlayCircleOutlined } from '@ant-design/icons-vue'
import { Spin, Upload, message, Button } from 'ant-design-vue'
import type { UploadChangeParam } from 'ant-design-vue'
import type { FileType } from 'ant-design-vue/es/upload/interface'
import { updateShopAvatar } from '@/services/upload/post'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useAuthSystem } from '@/stores/use-auth'
import { getBase64, getPublicIdFromUrl, configStream, listenSocketStream } from '@/utils'
import { uploadImageUrl } from '@/constants/upload-url'

const { shopName, shopAvatar, shopId, userId } = defineProps<{
  shopName: string
  shopAvatar: string
  shopId: string
  userId: string
}>()

const fileList = ref([])
const loading = ref<boolean>(false)
const imageUrl = ref<string>('')
const imageKey = ref<string>('')

const handleChange = async (info: UploadChangeParam) => {
  if (info.file.status === 'uploading') {
    loading.value = true
    return
  }
  if (info.file.status === 'done') {
    imageKey.value = info.file.response.public_id
    getBase64(info.file.originFileObj as FileType, (base64Url: string) => {
      imageUrl.value = base64Url
      loading.value = false
    })

    await updateShopAvatar({
      idImageOld: getPublicIdFromUrl(shopAvatar),
      shopId,
      newImageUrl: info.file.response.url
    })
    message.success('Upload image successfully')
  }
  if (info.file.status === 'error') {
    loading.value = false
    message.error('upload error')
  }
}

const roomID = shopName
const { role, sharedLinks } = configStream(roomID)
// Create instance object from Kit Token.

const zpRef = ref<ZegoUIKitPrebuilt>()
const authStore = useAuthSystem()

const handleLivestream = () => {
  // Generate Kit Token
  const appID = parseFloat(import.meta.env.VITE_ZEGO_APPID)
  const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET

  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomID,
    userId,
    authStore.user ? `${authStore.user?.firstName} ${authStore.user?.lastName}` : 'user'
  )

  // start the call
  const zp = ZegoUIKitPrebuilt.create(kitToken)
  zp.joinRoom({
    container: document.getElementById('livestream'),
    scenario: {
      mode: ZegoUIKitPrebuilt.LiveStreaming,
      config: {
        role
      }
    },
    sharedLinks
  })

  zpRef.value = zp
  listenSocketStream('new-livestream')
  localStorage.setItem('live', 'a')
}

const handleStopLivestream = () => {
  if (zpRef.value) {
    zpRef.value.destroy()
  }
  listenSocketStream('delete-livestream')
}
</script>
