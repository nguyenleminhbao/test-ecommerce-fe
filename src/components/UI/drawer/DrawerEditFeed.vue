<template>
  <Drawer
    v-model:open="open"
    class="custom-class [&_.ant-drawer-title]:text-headline-6 [&_.ant-drawer-body]:!scrollbar-hide"
    :closable="false"
    root-class-name="root-class-name"
    :root-style="{ color: 'blue' }"
    width="50%"
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
          <Button
            type="primary"
            class="flex items-center bg-neutral-7"
            :loading="loadingImg"
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
        <editor
          v-model="imageState.content"
          style="width: 100%; height: 600px"
          :api-key="import.meta.env.VITE_EDITOR_KEY"
          :init="{
            menubar: false,
            branding: false,
            plugins: [
              'advlist autolink autosave autoresize link image lists charmap hr anchor',
              'table template colorpicker paste textcolor importcss textpattern spellchecker'
            ],
            toolbar: [
              'undo redo | bold italic underline strikethrough | alignleft aligncenter alignright  | blockquote',
              'cut copy paste removeformat | outdent indent | hr',
              'h1 h2 h3 | subscript superscript'
            ]
          }"
        ></editor>
      </div>
    </div>
    <template #footer>
      <div class="flex items-end w-full justify-end gap-2">
        <Popconfirm title="Are you sure？" ok-text="Yes" cancel-text="No" @confirm="onDelete">
          <template #icon><question-circle-outlined style="color: red" /></template>
          <Button :loading="loadingDel" type="primary" danger class="w-[70px]">Delete</Button>
        </Popconfirm>

        <Button
          :loading="loadingEdit"
          type="primary"
          class="bg-black w-[70px]"
          @click="onUpdateFeed"
          >Edit</Button
        >
      </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import Editor from '@tinymce/tinymce-vue'
import {
  Drawer,
  Button,
  Popconfirm,
  Input,
  Image,
  Upload,
  type UploadChangeParam,
  type UploadProps,
  message
} from 'ant-design-vue'
import { EditOutlined, QuestionCircleOutlined } from '@ant-design/icons-vue'
import { uploadImageUrl } from '@/constants/upload-url'
import { getPublicIdFromUrl } from '@/utils'
import type { IFeed } from '@/interfaces/news.interface'
import type { IResponse } from '@/interfaces/response.interface'
import type { fetcherFn } from 'swrv/dist/types'
import { updateFeed } from '@/services/news/post'

const { feedId, imageUrl, title, content, runMutation } = defineProps<{
  feedId: string
  imageUrl: string
  title: string
  content: string
  runMutation?: (data?: fetcherFn<IResponse<IFeed[]>>) => Promise<void>
}>()

const open = ref<boolean>(false)
const fileList = ref([])
const loadingImg = ref<boolean>(false)
const loadingEdit = ref<boolean>(false)
const loadingDel = ref<boolean>(false)
const emit = defineEmits(['deleteBlog'])

const imageState = ref<{
  image: string
  title: string
  content: string
}>({
  image: imageUrl,
  title,
  content
})

const showDrawer = (e: Event) => {
  e.preventDefault()
  open.value = true
}

const handleChange = async (info: UploadChangeParam) => {
  console.log(info.file)
  if (info.file.status === 'uploading') {
    loadingImg.value = true
    return
  }
  if (info.file.status === 'done') {
    imageState.value.image = info.file.response.url
    message.success('Upload reel successfully')
    loadingImg.value = false
  }
  if (info.file.status === 'error') {
    loadingImg.value = false
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
  loadingEdit.value = true
  await updateFeed({
    idImageOld: getPublicIdFromUrl(imageUrl),
    feedId,
    title: imageState.value.title,
    newImageUrl: imageState.value.image,
    content: imageState.value.content
  })
  loadingEdit.value = false
  message.success('Update feed successfully')
  if (runMutation) await runMutation()
  open.value = false
}

const onDelete = () => {
  loadingDel.value = true
  emit('deleteBlog', feedId)
  open.value = false
  loadingDel.value = false
}

defineExpose({
  showDrawer
})
</script>
