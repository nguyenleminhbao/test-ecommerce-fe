<template>
  <div class="flex flex-col gap-[19px]">
    <Table
      :loading="loading"
      :columns="columns"
      :data-source="products"
      :scroll="{ x: 500, y: 500 }"
      class="w-full border-[1px] border-black rounded-lg [&_.ant-table-body]:!scrollbar-hide [&_.ant-table-row]:cursor-pointer"
    >
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'shop'">
          <div class="flex gap-[10px] items-center">
            <div class="flex gap-4 items-center">
              <img
                class="w-[50px] aspect-square rounded-full object-cover"
                src="https://play-lh.googleusercontent.com/5vcrZX1-Rx6NpuOASKSUWqMpQqbFTiLOZ-IV8CehAP3XycsmaKJvp36BJOxaKhq8TWc"
                alt="shop"
              />
              <h1 class="text-caption-1-semibold">{{ text }}</h1>
            </div>
          </div>
        </template>

        <template v-if="column.dataIndex === 'product'">
          <span class="text-caption-1">{{ text }}</span>
        </template>

        <template v-if="column.dataIndex === 'following'">
          <Button class="border-neutral-7 object-center w-full mb-2" :icon="h(ShopOutlined)"
            >View Shop</Button
          >
          <Button class="bg-primary text-white object-center w-full" :icon="h(CheckCircleOutlined)">
            Following
          </Button>
        </template>
      </template>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import { CheckCircleOutlined, ShopOutlined } from '@ant-design/icons-vue'
import { Table, Button, type TableColumnsType } from 'ant-design-vue'
import { ref, h } from 'vue'
import { useWindowSize } from '@vueuse/core'

const loading = ref(false)
const { width: _width } = useWindowSize()
const columns: TableColumnsType = [
  { title: 'Shop', dataIndex: 'shop', width: _width.value < 450 ? '35%' : '50%', fixed: 'left' },
  { title: 'Product', dataIndex: 'product' },
  { title: 'Following', dataIndex: 'following', width: '30%' }
]

interface DataItem {
  key: number
  image: string
  shop: string
  product: string
}

const products = ref<DataItem[]>([])
for (let i = 0; i < 100; i++) {
  products.value.push({
    key: i,
    image: '#',
    shop: 'NameShop',
    product: '20'
  })
}
</script>
