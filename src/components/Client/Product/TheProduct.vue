<template>
  <Header />
  <div
    class="mt-[60px] max-sm:mt-8 max mb-[100px] max-sm:mb-20 max-w-[1120px] mx-auto flex flex-col gap-10 max-sm:gap-8"
  >
    <Toolbar />
    <Grids />
  </div>
</template>

<script setup lang="ts">
import Header from './TheHeader.vue'
import Toolbar from './TheToolbar.vue'
import Grids from './TheGrids.vue'
</script>
