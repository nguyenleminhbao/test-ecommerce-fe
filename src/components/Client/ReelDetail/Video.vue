<template>
  <div>
    <!-- Blur Poster Backgroud ---------------------------------------------------------------------------->
    <BlurBg
      poster="https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/19edd65dcea345e7a4966c7fc0b91dfc_1690128608?x-expires=1717725600&amp;x-signature=kUM5UUNgwyajG23%2BtYJDMFKew0o%3D"
    />

    <!-- Video ---------------------------------------------------------------------------->
    <div
      class="VideoWrapper"
      @mouseover="showVideoControl = true"
      @mouseout="showVideoControl = false"
    >
      <div mode="2" class="Container">
        <div class="BasicPlayerWrapper">
          <div class="w-full h-full">
            <video
              ref="video"
              @click="playing = !playing"
              autoplay
              playsinline
              loop
              preload="auto"
              class="h-full w-full"
            />

            <Spin
              :spinning="waiting"
              class="StyledPlayIcon [&_.ant-spin-dot-item]:bg-black"
              size="large"
            />
          </div>
        </div>
      </div>

      <div class="VideoControlContainer">
        <div class="SeekBarContainer">
          <VideoSlider v-model="currentTime" :max="duration" :secondary="endBuffer" class="mt-2">
            <template #default="{ position, pendingValue }">
              <div
                class="absolute transform -translate-x-1/2 bg-black rounded px-2 bottom-0 mb-4 py-1 text-xs text-white"
                :style="{ left: position }"
              >
                {{ formatDuration(pendingValue) }}
              </div>
            </template>
          </VideoSlider>
          <!-- <div tabindex="0" role="slider" class="SeekBarProgress"></div> -->
          <!-- <div :class="`SeekBarCircle left-[calc(${currentTime}%)]`"></div>
          <div :class="`SeekBar -translate-y-2/4 scale-x-[${currentTime}/100]`"></div> -->
        </div>
        <div class="SeekBarTimeContainer">
          {{ formatDuration(currentTime) }}/{{ formatDuration(duration) }}
        </div>
      </div>
    </div>

    <!-- Play Button ---------------------------------------------------------------------------->
    <CaretRightFilled v-if="!playing && !waiting" class="StyledPlayIcon text-white text-[70px]" />

    <!-- Close Button ---------------------------------------------------------------------------->
    <button role="button" class="StyledCloseIconContainer" @click="$router.back()">
      <CloseOutlined class="text-[20px] text-white" />
    </button>

    <!-- Volum Button ---------------------------------------------------------------------------->
    <div
      class="VoiceControlContainer max-sm:hidden"
      @mouseover="showVolumeControl = true"
      @mouseout="showVolumeControl = false"
    >
      <div v-if="!muted" class="VolumeControlContainer">
        <VolumeSlider v-if="!muted" v-model="volume" :max="1" class="VolumeControlProgress" />
      </div>

      <button
        role="button"
        class="ButtonVoiceControlNew !w-[40px] !h-[40px] object-center"
        @click="muted = !muted"
      >
        <img v-if="!muted" src="@/assets/images/volume-up.png" class="" />
        <img v-else src="@/assets/images/mute.png" class="!w-6 !h-6" />
      </button>
    </div>

    <!-- Up Button ---------------------------------------------------------------------------->
    <!-- <button role="button" class="StyledVideoSwitch top-[calc(50%_-_48px)]">
      <UpOutlined class="text-[26px] text-white" />
    </button> -->

    <!-- Down Button ---------------------------------------------------------------------------->
    <!-- <button role="button" class="StyledVideoSwitch top-[calc(50%_+_8px)]">
      <DownOutlined class="text-[26px] text-white" />
    </button> -->

    <!-- Button Reaction ---------------------------------------------------------------------------->
    <div>
      <div class="sm:hidden absolute z-10 top-1/2 right-5">
        <RouterLink :to="`/shop/${shopId}`">
          <img
            class="w-10 h-10 rounded-full ring-2 ring-white"
            :src="avatarUrl"
            alt="Bordered avatar"
          />
          <PlusCircleFilled class="absolute text-secondary-red left-[calc(1/2+)] bottom-0" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VolumeSlider from './_components/VolumeSlider.vue'
import VideoSlider from './_components/VideoSlider.vue'
import BlurBg from './_components/BlurBg.vue'

import { Spin } from 'ant-design-vue'
import {
  CaretRightFilled,
  CloseOutlined,
  UpOutlined,
  DownOutlined,
  PlusCircleFilled
} from '@ant-design/icons-vue'
import { computed, onMounted, ref } from 'vue'
import { useMediaControls } from '@vueuse/core'

const { videoUrl, shopId, avatarUrl } = defineProps<{
  shopId: string
  videoUrl: string
  avatarUrl: string
}>()

const showVideoControl = ref()
const showVolumeControl = ref()
const video = ref()

const endBuffer = computed(() =>
  buffered.value.length > 0 ? buffered.value[buffered.value.length - 1][1] : 0
)
const { playing, waiting, currentTime, duration, volume, muted, buffered } = useMediaControls(
  video,
  {
    src: videoUrl
  }
)

function formatDuration(seconds: number) {
  return new Date(1000 * seconds).toISOString().slice(14, 19)
}
</script>

<style scoped>
.StyledVideoBlurBackground {
  position: absolute;
  width: 10%;
  height: 10%;
  filter: blur(2px);
  left: 50%;
  top: 50%;
  transform: scale(11);
  opacity: 0.3;
}
.VideoWrapper {
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.Container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background-color: rgba(22, 24, 35, 0.06);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.BasicPlayerWrapper {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}
.VideoControlContainer {
  width: calc(100% - 250px);
  height: 24px;
  padding-inline: 16px;
  position: absolute;
  /* opacity: 0; */
  transition: opacity 0.3s ease 0s;
  bottom: 28px;
  cursor: initial;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  max-width: 56.25vh;
  z-index: 1;
}
.SeekBarContainer {
  width: 100%;
  height: 24px;
  flex: 1 1 auto;
  position: relative;
}
.SeekBarProgress {
  height: 4px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.34);
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.SeekBarCircle {
  display: none;
  width: 16px;
  height: 16px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 1;
}
.SeekBar {
  height: 4px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transform-origin: left center;
}
.SeekBarTimeContainer {
  flex: 0 0 88px;
  max-width: 88px;
  margin-inline-start: 8px;
  font-size: 14px;
  line-height: 24px;
  color: rgb(255, 255, 255);
  text-align: end;
  white-space: nowrap;
}

.StyledPlayIcon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.StyledCloseIconContainer {
  position: absolute;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background: rgba(84, 84, 84, 0.5);
  border-radius: 50%;
  cursor: pointer;
  border: none;
  outline: none;
  width: 40px;
  height: 40px;
  top: 20px;
  transition: opacity 0.3s ease 0s;
  z-index: 100;
  transform: translateY(0px);
  left: 20px;
}
.VoiceControlContainer {
  position: absolute;
  z-index: 1;
  bottom: 20px;
  right: 20px;
}
.VolumeControlContainer:hover {
  background-color: rgba(37, 37, 37, 0.6);
}
.VolumeControlContainer {
  width: 28px;
  height: 96px;
  margin: 8px 6px;
  display: block;
  position: relative;
  background: rgba(84, 84, 84, 0.5);
  border-radius: 32px;
}
.VolumeControlProgress {
  width: 4px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.34);
  position: absolute;
  left: 12px;
  top: 8px;
  border-radius: 0.25rem;
  bottom: 8px;
  cursor: pointer;
}
.VolumeControlCircle {
  width: 16px;
  height: 16px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  position: absolute;
  left: 6px;
  bottom: 0px;
  cursor: pointer;
  z-index: 1;
}
.VolumeControlBar {
  width: 4px;
  height: 80px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  left: 12px;
  bottom: 8px;
  cursor: pointer;
  transform: scaleY(0);
  transform-origin: center bottom;
}
.ButtonVoiceControlNew {
  border: none;
  background: none rgba(84, 84, 84, 0.5);
  outline: none;
  padding: 0px;
  display: flex;
  transition: opacity 0.3s ease 0s;
  cursor: pointer;
  line-height: 0;
  border-radius: 100px;
}
.StyledVideoSwitch {
  position: absolute;
  z-index: 1;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background: rgba(84, 84, 84, 0.5);
  border-radius: 50%;
  cursor: pointer;
  border: none;
  outline: none;
  width: 40px;
  height: 40px;

  margin-top: -24px;
  right: 20px;
}
</style>
