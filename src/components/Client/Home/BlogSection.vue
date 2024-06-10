<template>
  <div class="grid gap-[40px] py-[80px] mx-auto max-w-[1121px]">
    <div class="flex items-end justify-between content-center text-neutral-7 max-w-[1120px]">
      <h1 class="text-headline-4">Articles</h1>
      <ButtonArrow text="More Articles" link="/news" />
    </div>

    <div class="flex gap-[25px]">
      <Article
        title="7 ways to decor your home"
        imageUrl="https://images.livspace-cdn.com/w:600/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/designs-sg-1633500163-pPxOT/batch-2-1637561408-DOCIx/living-room-1637561433-l9au2/001-2-1639548184-sU5ER.jpg"
      />
      <Article
        title="Kitchen organization"
        imageUrl="https://images.livspace-cdn.com/w:600/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/designs-sg-1633500163-pPxOT/batch-2-1637561408-DOCIx/living-room-1637561433-l9au2/001-2-1639548184-sU5ER.jpg"
      />
      <Article
        title="Decor your bedroom"
        imageUrl="https://images.livspace-cdn.com/w:600/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/designs-sg-1633500163-pPxOT/batch-2-1637561408-DOCIx/living-room-1637561433-l9au2/001-2-1639548184-sU5ER.jpg"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ButtonArrow } from '@/components/UI/elements'
import { Article } from './_components'
</script>
