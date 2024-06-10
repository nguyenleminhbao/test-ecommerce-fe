<template>
  <div class="flex flex-col gap-[24px]">
    <h1 class="ml-[24px] text-headline-5">Product Lists</h1>
    <div class="bg-white p-[24px] rounded-lg">
      <Table
        :columns="columns"
        :data-source="products"
        :scroll="{
          x: 1000,
          y: 350,
          scrollToFirstRowOnChange: true
        }"
        :custom-row="
          (record) => {
            return {
              onClick: () => router.push(`/admin/product/${record.id}`)
            }
          }
        "
        class="[&_.ant-table-body]:!scrollbar-hide [&_.ant-table-row]:cursor-pointer"
      >
        <template #bodyCell="{ index, column, record }" class="cursor-pointer">
          <template v-if="column.dataIndex == 'id'">
            <span>{{ products.findIndex((ele: any) => ele == record) + 1 }}</span></template
          >
          <template v-if="column.dataIndex == 'title'">
            <span class="text-lg font-semibold two-lines-truncate">{{ record.title }}</span>
          </template>
          <template v-if="column.dataIndex == 'image'">
            <Image
              :src="record.variants[0].variant_image"
              class="object-cover !w-16 aspect-square"
            />
          </template>
          <template v-if="column.dataIndex == 'shopName'">
            <span class="text-lg font-semibold">{{ record.shopName }}</span>
          </template>
          <template v-if="column.dataIndex == 'price'">
            <span class="text-xl">{{
              `${formatNumberWithCommas(record.variants[0].price)} đ`
            }}</span>
          </template>
        </template>
      </Table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAllProducts } from '@/services/products/get'
import { formatNumberWithCommas } from '@/utils'
import { Table, Image, type TableColumnsType } from 'ant-design-vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const products = ref()
const router = useRouter()

const columns: TableColumnsType = [
  {
    title: 'Stt',
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
    width: 80
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    fixed: 'left'
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image'
  },
  {
    title: 'Shop',
    dataIndex: 'shopName',
    key: 'shopName'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  }
]

onMounted(async () => {
  const data = await getAllProducts()
  products.value = data.message
})
</script>
