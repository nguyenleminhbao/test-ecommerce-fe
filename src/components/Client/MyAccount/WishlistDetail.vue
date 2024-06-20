<template>
  <div class="flex flex-col gap-[19px]">
    <!-- <h1 class="text-body-1-semibold">Your Wishlist</h1> -->

    <Table
      :loading="loading"
      :columns="columns"
      :data-source="products"
      :scroll="{ x: 500, y: 500 }"
      class="w-full border-[1px] border-black rounded-lg [&_.ant-table-body]:!scrollbar-hide [&_.ant-table-row]:cursor-pointer"
    >
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'product'">
          <div class="flex gap-4 items-center">
            <img
              class="w-[60px] aspect-square rounded-lg object-cover"
              src="https://product.hstatic.net/1000026602/product/img_5435_6afcdabbf16448eca040cc4bdcf0ba23.jpg"
              alt="product"
            />
            <h1 class="text-caption-1-semibold line-clamp-2">{{ text }}</h1>
          </div>
        </template>

        <template v-if="column.dataIndex === 'price'">
          <span class="text-caption-1">{{ text }}</span>
        </template>

        <template v-if="column.dataIndex === 'action'">
          <Button class="border-neutral-7 object-center w-full mb-2" :icon="h(HeartFilled)"
            >Wish</Button
          >
          <Button
            class="bg-primary text-white object-center w-full"
            :icon="h(ShoppingCartOutlined)"
          >
            Add to cart
          </Button>
        </template>
      </template>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import { ShoppingCartOutlined, HeartFilled } from '@ant-design/icons-vue'
import { Table, Button } from 'ant-design-vue'
import { ref, h } from 'vue'
import type { TableColumnsType } from 'ant-design-vue'
import { useWindowSize } from '@vueuse/core'

const loading = ref(false)
const { width: _width } = useWindowSize()
const columns: TableColumnsType = [
  {
    title: 'Product',
    dataIndex: 'product',
    width: _width.value < 450 ? '35%' : '50%',
    fixed: 'left'
  },
  { title: 'Price', dataIndex: 'price' },
  { title: 'Action', dataIndex: 'action', width: '30%' }
]

interface DataItem {
  key: number
  image: string
  product: string
  price: string
}

const products = ref<DataItem[]>([])
for (let i = 0; i < 100; i++) {
  products.value.push({
    key: i,
    image: '#',
    product: `Product ${i}`,
    price: `${i} đ`
  })
}

const onDelete = (key: number) => {
  products.value = products.value.filter((item) => item.key !== key)
}
</script>
