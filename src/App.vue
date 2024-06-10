<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { PUBLIC_LAYOUT } from './constants'
import AOS from 'aos'

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,
    offset: 100
  })
  AOS.refresh()
})

const route = useRoute()

const layout = computed(() => {
  return route.meta.layout || PUBLIC_LAYOUT
})
</script>
