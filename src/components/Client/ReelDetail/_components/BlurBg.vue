<template>
  <div class="StyledVideoBlurBackground">
    <span
      class="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0"
    >
      <picture
        ><img
          decoding="async"
          :srcset="poster"
          :src="poster"
          imagex-type="react"
          imagex-version="0.3.10"
          class="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full m-auto p-0 border-[none] inset-0"
        /> </picture
    ></span>
  </div>
</template>

<script setup lang="ts">
const { poster } = defineProps<{
  poster: string
}>()
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
</style>
