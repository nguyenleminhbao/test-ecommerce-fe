<template>
  <div class="flex gap-6">
    <video class="w-2/3 h-auto max-w-full border border-gray-200 rounded-lg" controls>
      <source
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>

    <div class="p-[24px] bg-white rounded-lg flex flex-col gap-[24px] w-full">
      <h1 class="text-headline-6">Preview bánh tráng trộn</h1>

      <ul class="text-body-2">
        <li v-for="item in items" :key="item.id" class="flex justify-between gap-2">
          <span class="text-body-2-semibold flex items-center gap-2"
            ><component :is="item.icon" />{{ item.title }}:</span
          >
          <span>{{ item.content }}</span>
        </li>
      </ul>
      <ul class="text-body-2">
        <li v-for="interact in interacts" :key="interact.id" class="flex justify-between gap-2">
          <span class="text-body-2-semibold flex items-center gap-2"
            ><component :is="interact.icon" />{{ interact.title }}:</span
          >
          <span>{{ interact.content }}</span>
        </li>
      </ul>

      <div class="text-body-2">
        <span class="text-body-2-semibold">Description:</span>
        <p>{{ DesContent.slice(0, 150) }}...</p>
        <div class="flex justify-center">
          <Button type="primary" @click="showModal">Show more</Button>
          <Modal v-model:open="open" :footer="null" title="Description">
            <p>{{ DesContent }}</p>
          </Modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Modal } from 'ant-design-vue'
import {
  CalendarOutlined,
  UserOutlined,
  EyeOutlined,
  LikeOutlined,
  CommentOutlined,
  ShareAltOutlined
} from '@ant-design/icons-vue'

const items = ref([
  { id: 1, icon: CalendarOutlined, title: 'Create', content: '14/02/2019' },
  { id: 2, icon: UserOutlined, title: 'Owner', content: 'Name' },
  { id: 3, icon: EyeOutlined, title: 'View', content: '123' }
])

const interacts = ref([
  { id: 1, icon: LikeOutlined, title: 'Like', content: '123' },
  { id: 2, icon: CommentOutlined, title: 'Comment', content: '123' },
  { id: 3, icon: ShareAltOutlined, title: 'Share', content: '123' }
])

const open = ref<boolean>(false)

const showModal = () => {
  open.value = true
}

const DesContent =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae minus totam debitis, eligendi excepturi atque repellat quis voluptate similique, aliquam molestiae veniam, explicabo dolores quia ullam. Earum, similique tenetur. Illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores nihil qui. Necessitatibus, illo corporis nobis neque officiis incidunt, odio ratione modi aperiam placeat expedita sint voluptatibus quod iusto facilis.'
</script>
