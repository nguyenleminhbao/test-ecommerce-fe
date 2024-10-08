<template>
  <Drawer
    v-model:open="open"
    class="custom-class [&_.ant-drawer-title]:text-headline-6 [&_.ant-drawer-body]:!scrollbar-hide"
    :closable="false"
    root-class-name="root-class-name"
    :root-style="{ color: 'blue' }"
    width="50%"
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
          <Button
            :loading="loadingImg"
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
        <editor
          v-model="feedState.content"
          style="width: 100%; height: 600px"
          :api-key="editorApiKey"
          :init="{
            menubar: false,
            branding: false,
            toolbar: [
              'undo redo | bold italic underline strikethrough | alignleft aligncenter alignright  | blockquote | formatselect | spellchecker',
              'cut copy paste removeformat | searchreplace | bullist numlist | outdent indent | hr | link unlink anchor image code | inserttime',
              'h1 h2 h3 | table | subscript superscript | charmap | visualchars visualblocks nonbreaking | template | helloworld'
            ]
          }"
        ></editor>
      </div>
    </div>

    <template #footer>
      <div class="flex items-end w-full justify-end gap-2">
        <Button class="border-black w-[70px]" @click="open = false">Cancel</Button>
        <Button :loading="loadingAdd" type="primary" class="bg-black w-[70px]" @click="onAdd"
          >Add</Button
        >
      </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import Editor from '@tinymce/tinymce-vue'
import { UploadOutlined } from '@ant-design/icons-vue'
import {
  Drawer,
  Input,
  Button,
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
import { deleteFileV2 } from '@/services/upload/post'
import type { IResponse } from '@/interfaces/response.interface'
import type { IFeed } from '@/interfaces/news.interface'
import type { fetcherFn } from 'swrv/dist/types'

const { shopId, runMutation } = defineProps<{
  shopId: string
  runMutation: (data?: fetcherFn<IResponse<IFeed[]>>) => Promise<void>
}>()

const fileList = ref([])
const loadingImg = ref<boolean>(false)
const loadingAdd = ref<boolean>(false)
const open = ref<boolean>(false)
const editorApiKey = import.meta.env.VITE_EDITOR_KEY

const feedState = ref<{
  title: string
  thumbnail: string
  content: string
}>({
  title: '',
  thumbnail: '',
  content: ''
})

const showDrawer = (e: Event) => {
  e.preventDefault()
  open.value = true
}

const handleChange = async (info: UploadChangeParam) => {
  if (info.file.status === 'uploading') {
    loadingImg.value = true
    if (feedState.value.thumbnail) {
      await deleteFileV2(getPublicIdFromUrl(feedState.value.thumbnail))
    }
    return
  }
  if (info.file.status === 'done') {
    feedState.value.thumbnail = info.file.response.url
    message.success('Upload thumbnail successfully')
    loadingImg.value = false
  }
  if (info.file.status === 'error') {
    loadingImg.value = false
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
  loadingAdd.value = true
  await createFeed({
    title: feedState.value.title,
    thumbnail: feedState.value.thumbnail,
    content: feedState.value.content,
    shopId
  })
  if (runMutation) await runMutation()
  loadingAdd.value = false
  message.success('Create feed successfully')
  feedState.value = {
    title: '',
    thumbnail: '',
    content: ''
  }
  fileList.value = []
  open.value = false
}

defineExpose({
  showDrawer
})
</script>
