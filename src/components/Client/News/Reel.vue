<template>
  <InputSearch
    v-model:value="titleSearch"
    class="border-neutral-4 border-2 rounded-lg sm:w-80 [&_.ant-btn-default]:border-0 [&_.ant-btn-default]:flex [&_.ant-btn-default]:justify-center [&_.ant-btn-default]:items-center"
    size="large"
    placeholder="Search..."
    :bordered="false"
    :loading="loading"
    @change="onSearch"
  />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[25px] gap-y-10 mt-5">
    <ReelItem
      v-for="(reel, index) in reels.slice((currentPage - 1) * 12, currentPage * 12)"
      :key="index"
      :reelId="reel.id"
      :video-url="reel.video"
      :title="reel.title"
      :description="reel.description"
      :view="reel.view"
      class="!max-w-full"
    />
  </div>
  <div class="flex justify-center my-20">
    <Pagination v-if="reels" v-model:current="currentPage" :total="reels.length" show-less-items />
  </div>
</template>

<script setup lang="ts">
import ReelItem from '@/components/UI/ReelItem.vue'
import { Pagination, InputSearch } from 'ant-design-vue'
import { ref } from 'vue'
import { useReel } from '@/composables/useReel'
import { searchReel } from '@/services/news/post'
import { ElasticsearchIndex } from '@/constants/enum/search.enum'

const { data: reels, mutate: runMutation } = useReel()
const currentPage = ref<number>(1)

const loading = ref<boolean>(false)
const titleSearch = ref<string>('')
const onSearch = () => {
  if (titleSearch.value) runMutation(() => searchReel(ElasticsearchIndex.REEL, titleSearch.value))
  else runMutation()
}
</script>
