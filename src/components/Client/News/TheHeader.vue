<template>
  <div
    class="max-w-[1120px] mx-auto max-h-[392px] content-center bg-[url('https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1718668800&semt=ais_user')] bg-no-repeat bg-local aspect-[1120/392] max-sm:aspect-[311/308] bg-cover bg-center"
  >
    <div
      class="backdrop-blur h-full grid gap-6 max-sm:gap-4 place-content-center text-center text-white"
    >
      <Breadcrumb
        separator=">"
        class="flex gap-4 text-button-xs justify-self-center [&_.ant-breadcrumb-link]:text-white [&_.ant-breadcrumb-separator]:text-white"
      >
        <BreadcrumbItem><a href="/" style="color: white">Home</a></BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>

      <h1 class="text-headline-3 max-sm:text-headline-4">News Page</h1>
      <span class="text-body-1 max-sm:text-body-2">Home ideas and design inspiration</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem } from 'ant-design-vue'
</script>
