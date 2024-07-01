<template>
  <div class="grid grid-cols-[7fr_3fr] gap-6">
    <img
      class="w-full h-auto object-cover border rounded-lg"
      src="https://img.freepik.com/free-photo/vibrant-pastel-sky_53876-94792.jpg"
      alt="thumblr"
    />

    <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px] w-full">
      <h1 class="text-headline-6">How to make a busy bathroom a place to relax</h1>

      <ul class="text-body-2">
        <li v-for="item in items" class="flex justify-between gap-2">
          <span class="text-body-2-semibold flex items-center gap-2"
            ><component :is="item.icon" />{{ item.title }}:</span
          >
          <span>{{ item.content }}</span>
        </li>
      </ul>
      <ul class="text-body-2">
        <li v-for="interact in interacts" class="flex justify-between gap-2">
          <span class="text-body-2-semibold flex items-center gap-2"
            ><component :is="interact.icon" />{{ interact.title }}:</span
          >
          <span>{{ interact.content }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  CalendarOutlined,
  UserOutlined,
  EyeOutlined,
  LikeOutlined,
  CommentOutlined,
  ShareAltOutlined
} from '@ant-design/icons-vue'

const items = ref([
  { icon: CalendarOutlined, title: 'Create', content: '14/02/2019' },
  { icon: UserOutlined, title: 'Owner', content: 'Name' },
  { icon: EyeOutlined, title: 'View', content: '123' }
])

const interacts = ref([
  { icon: LikeOutlined, title: 'Like', content: '123' },
  { icon: CommentOutlined, title: 'Comment', content: '123' },
  { icon: ShareAltOutlined, title: 'Share', content: '123' }
])
</script>
