<template>
  <li class="flex pb-3 border-b-[1px] border-gray-200 mt-4">
    <div class="w-[50px]">
      <Image class="w-full aspect-square rounded-full object-cover" :src="comment.user.avatar" />
    </div>
    <div class="flex flex-col ml-6 items-start -translate-y-1">
      <span class="text-body-2-semibold">{{ comment.user.name ?? 'User' }}</span>

      <Rate v-model:value="star" :disabled="true" class="text-[16px] text-black" />

      <div class="flex items-center mt-1 text-gray-400">
        <span>{{ formatDateText(comment.createdAt) }}</span>
        <span class="w-[1px] h-4 bg-gray-500 mx-2"></span>
        <span>{{ `Option: ${comment.optionProduct}` }}</span>
      </div>

      <span class="my-2">
        {{ comment.content }}
      </span>

      <div class="flex gap-3">
        <div class="w-[72px]" v-for="(image, index) in comment.imageUrls" :key="index">
          <Image class="w-full aspect-square object-cover rounded-md" :src="image" />
        </div>
      </div>
      <div class="flex gap-4">
        <Button class="flex items-center border-none">
          <LikeFilled class="mr-1" />
          Like?
        </Button>
        <Button class="flex items-center border-none">
          <RollbackOutlined class="mr-1" />
          Reply
        </Button>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { Image, Button, Rate } from 'ant-design-vue'
import { StarFilled, StarOutlined, LikeFilled, RollbackOutlined } from '@ant-design/icons-vue'
import type { IComment } from '@/interfaces/comment.interface'
import { ref } from 'vue'
import { formatDateText } from '@/utils'

const { comment } = defineProps<{
  comment: IComment
}>()

const star = ref<number>(comment.numOfStar)
</script>
