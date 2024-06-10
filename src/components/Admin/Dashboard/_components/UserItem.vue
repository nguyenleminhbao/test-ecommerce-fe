<template>
  <div class="grid justify-items-center">
    <img :src="imageUrl" alt="avatar" class="w-[68px] h-[68px] rounded-full" />
    <p class="text-body-2">{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String
  },
  imageUrl: {
    type: String
  }
})
</script>
