<template>
  <section>
    <span class="text-headline-6">Customer Reviews</span>
    <div class="flex gap-2 items-center my-4">
      <Rate
        v-model:value="resultReviewState.medium_star"
        :disabled="true"
        :allow-half="true"
        class="text-[16px] text-black"
      />
      <span>{{ `${resultReviewState.review_len} Reviews` }}</span>
    </div>
    <div v-if="authStore.user" class="w-full rounded-lg border-gray-600 border-[1px] relative">
      <input
        class="w-full rounded-lg border-gray-600 h-[50px] pl-3"
        placeholder="Enter review here"
        v-model="content"
      />
      <Button
        class="absolute right-3 translate-y-[28%] bg-primary text-white rounded-2xl w-[120px]"
        @click="showModal"
        >Send</Button
      >
    </div>
    <div class="flex justify-between items-center my-10">
      <span class="text-headline-6">{{ `${resultReviewState.review_len} Reviews` }}</span>
      <Select v-model:value="value" style="width: 25%">
        <SelectOption value="New">Newest</SelectOption>
        <SelectOption value="Old">Older</SelectOption>
      </Select>
    </div>
    <ul class="">
      <Comment v-for="(comment, index) in comments" :key="index" :comment="comment" />
    </ul>
  </section>
  <Modal
    v-model:open="open"
    title="Product reviews"
    :confirm-loading="confirmLoading"
    class="[&_.ant-modal-title]:!text-headline-7"
    @ok="handleOk"
  >
    <ul class="flex flex-col gap-3">
      <li class="flex items-center justify-between">
        <span class="font-medium">Product quality</span>
        <div>
          <Rate v-model:value="star" :tooltips="desc" class="text-[16px] text-black" />
          <span class="ant-rate-text w-16">{{ desc[star - 1] }}</span>
        </div>
      </li>
      <li class="flex flex-col gap-2">
        <span class="font-medium">Comment</span>
        <Input placeholder="Enter review here" v-model:value="content" />
      </li>
      <li class="flex">
        <Upload
          v-model:file-list="fileList"
          list-type="picture-card"
          name="file"
          :action="uploadImageUrl"
          :multiple="true"
          @change="handleChange"
        >
          <div v-if="fileList.length < 8">
            <plus-outlined />
            <div style="margin-top: 8px">Upload</div>
          </div>
        </Upload>
      </li>
    </ul>
  </Modal>
</template>
<script setup lang="ts">
import {
  Select,
  SelectOption,
  Button,
  Modal,
  Rate,
  Input,
  Upload,
  type UploadChangeParam,
  message
} from 'ant-design-vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import Comment from './Comment.vue'
import { onMounted, ref } from 'vue'
import { uploadImageUrl } from '@/constants/upload-url'
import { TYPE_COMMENT } from '@/constants/enum/comment.enum'
import { useRoute } from 'vue-router'
import { createComment } from '@/services/comment/post'
import { useAuthSystem } from '@/stores/use-auth'
import { getCommentByEtag } from '@/services/comment/get'
import type { IComment } from '@/interfaces/comment.interface'
import { resultReview } from '@/utils'

const { productId } = defineProps<{
  productId: number
}>()

const route = useRoute()
const authStore = useAuthSystem()

// Rate
const star = ref<number>(3)
const desc = ref<string[]>(['terrible', 'bad', 'normal', 'good', 'wonderful'])

// Newest
const value = ref<string>('New')

//Modal comment
const content = ref<string>('')
const open = ref<boolean>(false)
const confirmLoading = ref<boolean>(false)
const fileList = ref([])
const imageUrls = ref<string[]>([])
const comments = ref<IComment[]>([])
const resultReviewState = ref<{
  review_len: number
  medium_star: number
}>(resultReview(comments.value))

const showModal = () => {
  open.value = true
}

const handleOk = async () => {
  if (!content.value) {
    message.error('Please enter comment!')
  } else {
    confirmLoading.value = true

    // get option product
    const optionVariant = route.query
    delete optionVariant?.title
    delete optionVariant?.position

    const optionProduct = Object.keys(optionVariant).map((key) => optionVariant[key]) as string[]

    const commentData = {
      content: content.value,
      numOfStar: star.value,
      optionProduct: optionProduct.join(','),
      imageUrls: imageUrls.value,
      typeComment: TYPE_COMMENT.PRODUCT,
      etag: productId
    }

    const create = await createComment(commentData)
    if (create) {
      const data = await getCommentByEtag(productId)
      comments.value = data.message
      resultReviewState.value = resultReview(data.message)
    }

    setTimeout(() => {
      open.value = false
      content.value = ''
      confirmLoading.value = false
    }, 2000)
  }
}

const handleChange = async (info: UploadChangeParam) => {
  imageUrls.value = info.fileList.map((file) => {
    return file.response.url as string
  })
}

onMounted(async () => {
  const data = await getCommentByEtag(productId)
  comments.value = data.message
  resultReviewState.value = resultReview(data.message)
})
</script>
