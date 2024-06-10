<template>
  <button
    class="border-[1px] border-neutral-7 rounded-[80px] px-[40px] py-[6px] text-center text-button-s text-neutral-7 hover:bg-neutral-7 hover:text-white"
    >{{ title }}</button
  >
</template>

<script setup lang="ts">
defineProps(['title'])
</script>
