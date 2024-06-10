<template>
  <div
    class="w-full h-[420px] bg-gray-800 rounded-2xl relative group cursor-pointer"
    @dblclick="router.push(`/livestream?roomID=${roomId}`)"
  >
    <span class="absolute top-2 left-2 flex items-center">
      <span class="px-1 font-semibold text-[13px] rounded-l-[5px] bg-[#f82626] text-white"
        >LIVE</span
      >
      <span
        class="object-center text-[13px] px-1 bg-[rgba(28,26,26,0.5)] text-white rounded-r-[5px]"
      >
        <UserOutlined class="mr-[1px] -translate-y-[1px]" />
        500K
      </span>
    </span>
    <video
      class="w-full h-full rounded-lg object-cover"
      ref="livestreamVideo"
      :muted="true"
    ></video>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue'
import { onMounted, ref, watch } from 'vue'
import { useMediaControls, useMouseInElement } from '@vueuse/core'
import { useRouter } from 'vue-router'

const { videoUrl } = defineProps<{
  videoUrl: string
  roomId: string
}>()

const router = useRouter()
const livestreamVideo = ref()
const { playing, volume } = useMediaControls(livestreamVideo, {
  src: videoUrl
})
const { isOutside } = useMouseInElement(livestreamVideo)

watch(isOutside, () => {
  if (isOutside.value) {
    playing.value = false
    volume.value = 0
  } else {
    playing.value = true
    volume.value = 1
  }
})

// Change initial media properties
onMounted(() => {
  volume.value = 0
})
</script>
