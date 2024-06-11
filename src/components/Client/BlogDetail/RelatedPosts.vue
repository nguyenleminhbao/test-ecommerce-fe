<template>
  <div class="my-20 flex flex-col gap-12">
    <div class="flex justify-between items-end">
      <h1 class="text-headline-6">You might also like</h1>
<<<<<<< HEAD
      <ButtonArrow text="More Articles" link="/news" />
=======
      <ButtonArrow text="More Articles" link="/" />
>>>>>>> 06155174916644e25aae6aa8fb924d08de8ad4cc
    </div>

    <div class="grid grid-cols-3 gap-x-[25px] gap-y-10">
      <BlogCard
        imgUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/372191700.jpg?k=f500ad107b90760656244fbfb37fec3418553646e1d8769046cd775208961fa0&o=&hp=1"
        title="7 ways to decor your home like a professional"
        date="October 16, 2023"
      />
      <BlogCard
        imgUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/372191700.jpg?k=f500ad107b90760656244fbfb37fec3418553646e1d8769046cd775208961fa0&o=&hp=1"
        title="7 ways to decor your home like a professional"
        date="October 16, 2023"
      />
      <BlogCard
        imgUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/372191700.jpg?k=f500ad107b90760656244fbfb37fec3418553646e1d8769046cd775208961fa0&o=&hp=1"
        title="7 ways to decor your home like a professional"
        date="October 16, 2023"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonArrow from '@/components/UI/elements/ButtonArrow.vue'
import BlogCard from '@/components/UI/BlogCard.vue'
</script>
