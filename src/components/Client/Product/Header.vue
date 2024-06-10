<template>
  <div
    class="max-w-[1120px] mx-auto max-h-[392px] content-center bg-[url('https://marketplace.canva.com/EAFCO6pfthY/1/0/1600w/canva-blue-green-watercolor-linktree-background-F2CyNS5sQdM.jpg')] bg-no-repeat bg-cover bg-local aspect-[1120/392]"
  >
    <div class="grid gap-[24px] place-content-center text-center">
      <Breadcrumb separator=">" class="flex gap-[16px] text-button-xs justify-self-center">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Product</BreadcrumbItem>
      </Breadcrumb>

      <h1 class="text-headline-3">Product Page</h1>
      <span class="text-body-1">Let’s design the place you always imagined.</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem } from 'ant-design-vue'
</script>
