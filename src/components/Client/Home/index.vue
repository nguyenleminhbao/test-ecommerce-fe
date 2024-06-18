<template>
  <SliderSection />
  <BannerGrid />
  <LivestreanCarousel
    v-if="livestreamStore.listLivestream && livestreamStore.listLivestream.length"
  />
  <ProductCarousel v-if="products" :products="products.message" />
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
import { useLivestream } from '@/stores/use-livestream'
import useSWRV from 'swrv'
import { configSWRV } from '@/config/swrv'

const { data: products } = useSWRV('products', () => getAllProducts(1), configSWRV)
const livestreamStore = useLivestream()
</script>
