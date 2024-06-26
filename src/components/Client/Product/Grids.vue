<template>
  <div class="w-full flex flex-col gap-10 max-sm:gap-8 h-fit">
    <div class="flex flex-wrap justify-between items-center gap-6">
      <!-- <h1 class="text-body-1-semibold">All Products</h1> -->
      <InputSearch
        v-model:value="titleSearch"
        class="border-neutral-4 border-2 rounded-lg sm:w-80 [&_.ant-btn-default]:border-0 [&_.ant-btn-default]:flex [&_.ant-btn-default]:justify-center [&_.ant-btn-default]:items-center"
        size="large"
        placeholder="Search..."
        :bordered="false"
        :loading="loading"
        @change="onSearch"
      />

      <Dropdown placement="bottomRight">
        <a
          class="ant-dropdown-link flex gap-[4px] text-body-2-semibold items-center"
          @click.prevent
        >
          Sort by
          <DownOutlined />
        </a>
        <template #overlay>
          <Menu>
            <MenuItem>
              <a href="javascript:;">Thấp đến Cao</a>
            </MenuItem>
            <MenuItem>
              <a href="javascript:;">Cao đến Thấp</a>
            </MenuItem>
          </Menu>
        </template>
      </Dropdown>
    </div>

    <div class="flex flex-col gap-20 max-sm:gap-8">
      <Spin
        class="[&_.ant-spin-dot-item]:bg-black [&_.ant-spin-dot-item]:text-xl"
        :spinning="!products"
        size="large"
      />
      <div
        class="grid grid-cols-4 gap-6 max-[1120px]:grid-cols-3 max-[800px]:grid-cols-2 max-sm:grid-cols-1"
      >
        <ProdCard v-for="product in products" :key="product.id" :product="product" />
      </div>

      <div class="mx-auto">
        <Pagination
          v-model:current="currentPage"
          :total="60"
          :pageSize="12"
          show-less-items
          @change="onChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProdCard from '@/components/UI/ProdCard.vue'
import { ref } from 'vue'
import { Pagination, Spin, Dropdown, Menu, MenuItem, InputSearch } from 'ant-design-vue'
import { DownOutlined } from '@ant-design/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { useProduct } from '@/composables/useProduct'
import { searchProduct } from '@/services/products/post'
import { ElasticsearchIndex } from '@/constants/enum/search.enum'

const route = useRoute()
const router = useRouter()
const currentPage = ref<number>(
  isNaN(parseInt(route.query.page as string)) ? 1 : parseInt(route.query.page as string)
)
const { data: products, mutate: runMutation } = useProduct({
  key: `products/page=${currentPage.value}`,
  page: currentPage.value
})

const onChange = () => {
  // // dynamic query page
  router.push({
    path: route.path,
    query: { page: currentPage.value }
  })
  runMutation()
}

const loading = ref<boolean>(false)
const titleSearch = ref<string>('')
const onSearch = () => {
  if (titleSearch.value)
    runMutation(() => searchProduct(ElasticsearchIndex.PRODUCT, titleSearch.value))
  else runMutation()
}
</script>

<style scoped>
.demo-dropdown-wrap :deep(.ant-dropdown-button) {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
