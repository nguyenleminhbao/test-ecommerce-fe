<template>
  <div class="relative m-1 mb-4 group cursor-pointer">
    <img
      class="w-24 h-24 object-cover aspect-square p-1 rounded-full ring-4 ring-secondary-red"
      :src="logoShop"
      alt="Bordered avatar"
      @click="router.push(`/livestream?roomID=${roomId}`)"
    />
    <div class="absolute z-10 object-center w-full -bottom-3">
      <span
        class="px-2 font-semibold text-button-xs rounded-lg bg-secondary-red text-white border-white border-4"
      >
        LIVE
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue'
import { onMounted, ref, watch } from 'vue'
import { useMediaControls, useMouseInElement } from '@vueuse/core'
import { useRouter } from 'vue-router'

const { logoShop } = defineProps<{
  logoShop: string
  roomId: string
}>()

const router = useRouter()
const livestreamVideo = ref()
</script>
