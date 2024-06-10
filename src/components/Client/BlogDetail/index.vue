<template>
  <div class="max-w-[1120px] mx-auto">
    <div class="flex flex-col gap-10 pt-4 pb-20">
      <Header />
      <Content />
    </div>
    <RelatedPosts />
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Content from './Content.vue'
import RelatedPosts from './RelatedPosts.vue'
</script>
