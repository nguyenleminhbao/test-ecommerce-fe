<template>
  <div class="CommentContainer !px-6">
    <div class="CommentListContainer">
      <Profie
        :shopId="reel.shop.id"
        :shopAvatar="reel.shop.shopAvatar"
        :shopName="reel.shop.shopName"
        :createdAt="reel.createdAt"
        :description="reel.description"
      />
      <div class="mt-6">
        <CommentItem
          v-for="(comment, index) in comments"
          :key="index"
          :avatarUrl="comment.user.avatar"
          :userName="comment.user.name"
          :desc="comment.content"
        />
      </div>
    </div>
    <div v-if="isSignedIn" class="w-full rounded-lg border-gray-600 border-[1px] sticky bottom-4">
      <input
        class="w-full rounded-lg border-gray-600 h-[50px] pl-3"
        placeholder="Enter comment here"
        v-model="content"
        ref="element"
      />
      <Button
        class="absolute right-3 translate-y-[28%] bg-primary text-white rounded-2xl w-[120px]"
        @click="sendComment"
        >Send</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import Profie from './_components/TheProfie.vue'
import CommentItem from './_components/CommentItem.vue'
import type { IReel } from '@/interfaces/news.interface'
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import type { IComment } from '@/interfaces/comment.interface'
import { TYPE_COMMENT } from '@/constants/enum/comment.enum'
import { createComment } from '@/services/comment/post'
import { getCommentByEtag } from '@/services/comment/get'
import { useEventListener } from '@vueuse/core'
import { useAuth } from 'vue-clerk'

const { reel } = defineProps<{
  reel: IReel
}>()
const comments = ref<IComment[]>(reel.comments)
const content = ref<string>('')

const { isSignedIn } = useAuth()
const element = ref<HTMLDivElement>()

const sendComment = async () => {
  if (!content.value) return
  const dataComment = {
    content: content.value,
    typeComment: TYPE_COMMENT.REEL,
    etag: reel.id
  }
  content.value = ''
  await createComment(dataComment)
  const data = await getCommentByEtag(reel.id)
  comments.value = data.message
}

useEventListener(element, 'keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    sendComment()
  }
})
</script>

<style scoped>
.CommentContainer {
  width: 100%;
  box-sizing: border-box;
  border-top: none;
  border-bottom: 1px solid rgba(22, 24, 35, 0.2);
  overflow: hidden;
  -webkit-box-flex: 1;
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
}

.CommentListContainer:first-of-type {
  padding-top: 24px;
}
.CommentListContainer {
  width: 100%;
  overflow: hidden auto;
  -webkit-box-flex: 1;
  flex-grow: 1;
  position: relative;
}
</style>
