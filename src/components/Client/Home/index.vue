<template>
  <SliderSection />
  <BannerGrid />
  <LivestreanCarousel
    v-if="livestreamStore.listLivestream && livestreamStore.listLivestream.length"
  />
  <ProductCarousel :products="products" />
  <Values />
  <ReelCarousel />
  <Banner />
  <BlogSection />
  <Newsletter />
</template>

<script setup lang="ts">
import SliderSection from './SliderSection.vue'
import BannerGrid from './BannerGrid.vue'
import ProductCarousel from './ProductCarousel.vue'
import Values from './Values.vue'
import Banner from './Banner.vue'
import BlogSection from './BlogSection.vue'
import Newsletter from './Newsletter.vue'
import ReelCarousel from './ReelCarousel.vue'
import LivestreanCarousel from './LivestreamCarousel.vue'

import { getAllProducts } from '@/services/products/get'
import { onMounted, ref, watchEffect } from 'vue'
import type { IProduct } from '@/interfaces/product.interface'
import { useLivestream } from '@/stores/use-livestream'

const products = ref<IProduct[]>([])
const livestreamStore = useLivestream()

onMounted(async () => {
  const data = await getAllProducts()
  products.value = data?.message
})
</script>
