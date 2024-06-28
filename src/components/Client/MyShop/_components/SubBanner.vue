<template>
  <div class="w-full !h-[300px] relative group">
    <img
      v-if="!loading"
      :src="imageUrl ? imageUrl : bannerUrl"
      class="w-full h-full object-cover group-hover:blur-sm duration-200"
      :key="imageKey"
    />
    <div v-if="loading" class="w-full h-full object-center bg-gray-300">
      <Spin size="large" class="[&_.ant-spin-dot-item]:bg-black" />
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EditOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import { Spin, Upload, message } from 'ant-design-vue'
import type { UploadChangeParam } from 'ant-design-vue'
import type { FileType } from 'ant-design-vue/es/upload/interface'
import { getBase64 } from '@/utils/get-base-64'
import { getPublicIdFromUrl } from '@/utils/get-publicId-from-url'
import { uploadImageUrl } from '@/constants/upload-url'
import { updateBanner } from '@/services/shop/post'

const { bannerUrl, shopId, numOfBanner } = defineProps<{
  bannerUrl: string
  shopId: string
  numOfBanner: number
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

    await updateBanner({
      numOfBanner,
      idImageOld: getPublicIdFromUrl(bannerUrl),
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
</script>
