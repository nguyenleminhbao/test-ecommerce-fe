<template>
  <div class="BrowserModeContainer" v-if="reel">
    <Video class="VideoContainer" :videoUrl="reel.video" :shopId="reel.shop.id" :avatarUrl="reel.shop.shopAvatar" />
    <Content class="ContentContainer" :reel="reel" />
  </div>
</template>

<script setup lang="ts">
import Video from './Video.vue'
import Content from './Content.vue'
import { useRoute } from 'vue-router'
import type { IReel } from '@/interfaces/news.interface'
import { onMounted, ref } from 'vue'
import { getReelById } from '@/services/news/get'

const route = useRoute()
const reel = ref<IReel>()

onMounted(async () => {
  const data = await getReelById(route.params.reelId as string)
  reel.value = data.message
})
</script>

<style scoped>
.BrowserModeContainer {
  position: fixed;
  inset: 0px;
  background: rgb(255, 255, 255);
  z-index: 1000;
  display: flex;
  flex-direction: row;
}

.VideoContainer {
  flex: 1 0 600px;
  max-width: 100%;
  background: rgb(0, 0, 0);
  position: relative;
  overflow: hidden;
  padding: 0px 80px;
}

.ContentContainer {
  flex: 0 0 544px;
  width: 544px;
  display: flex;
  flex-direction: column;
  padding: 0px;
}
</style>
