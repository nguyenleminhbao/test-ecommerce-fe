<template>
  <div class="max-w-[1120px] mx-auto">
    <section v-if="existRoom">
      <div class="!w-full !h-[400px] bg-neutral-700 rounded-xl object-center" id="roomStream"></div>
    </section>
    <section v-else>Room not exists</section>
  </div>
</template>

<script setup lang="ts">
import type { ILivestream } from '@/interfaces/livestream.interface'
import { useAuthSystem } from '@/stores/use-auth'
import { useLivestream } from '@/stores/use-livestream'
import { configStream } from '@/utils'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const roomID = route.query.roomID as string
const existRoom = ref<ILivestream>()
const authStore = useAuthSystem()
const streamStore = useLivestream()
const { role } = configStream(roomID)

onMounted(() => {
  existRoom.value = streamStore.listLivestream?.find((stream) => stream.roomId == roomID)

  if (existRoom.value) {
    const appID = parseFloat(import.meta.env.VITE_ZEGO_APPID)
    const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Math.random().toString(),
      authStore.user ? `${authStore.user?.firstName} ${authStore.user?.lastName}` : 'user'
    )
    // start the call
    const zp = ZegoUIKitPrebuilt.create(kitToken)
    zp.sendInRoomCommand
    zp.joinRoom({
      container: document.getElementById('roomStream'),
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role
        }
      },
      onReturnToHomeScreenClicked: () => {
        const parentNode = document.querySelector('.BYpXSnOHfrC2td4QRijO')?.parentElement
        parentNode?.remove()
        router.replace('/product')
      },
      onLeaveRoom: () => {
        // Add your custom logic
        const parentNode = document.querySelector('.BYpXSnOHfrC2td4QRijO')?.parentElement
        parentNode?.remove()
        router.replace('/product')
        zp.destroy()
      },
      turnOnCameraWhenJoining: false,
      showMyCameraToggleButton: true,
      showAudioVideoSettingsButton: true,
      showScreenSharingButton: false,
      showPreJoinView: false
    })
  }
})
</script>
