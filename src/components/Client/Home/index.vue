<template>
  <SliderSection />
  <BannerGrid />
  <LivestreanCarousel
    v-if="livestreamStore.listLivestream && livestreamStore.listLivestream.length"
  />
  <ProductCarousel v-if="!isLoading" :products="products" />
  <Values />
  <ReelCarousel />
  <Banner />
  <BlogSection />
  <TheNewsletter />
</template>

<script setup lang="ts">
import SliderSection from './SliderSection.vue'
import BannerGrid from './BannerGrid.vue'
import ProductCarousel from './ProductCarousel.vue'
import Values from './Values.vue'
import Banner from './Banner.vue'
import BlogSection from './BlogSection.vue'
import TheNewsletter from './TheNewsletter.vue'
import ReelCarousel from './ReelCarousel.vue'
import LivestreanCarousel from './LivestreamCarousel.vue'
import { useLivestream } from '@/stores/use-livestream'
import { useProduct } from '@/composables/useProduct'

const { data: products, isLoading } = useProduct({ page: 1 })
const livestreamStore = useLivestream()
</script>
