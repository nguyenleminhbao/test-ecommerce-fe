<template>
  <div class="flex flex-col gap-[24px]" v-if="products">
    <h1 class="text-headline-5">Product Lists</h1>
    <div class="bg-white p-[24px] rounded-lg">
      <Table
        :columns="columns"
        :data-source="products"
        :scroll="{
          x: 1000,
          y: 410,
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
          <template v-if="column.dataIndex == 'product'">
            <div class="flex gap-3 items-center">
              <Image
                :src="record.variants[0].variant_image"
                class="object-cover !w-16 !h-16 aspect-square rounded-lg"
              />
              <span class="text-body-2-semibold two-lines-truncate">{{ record.title }}</span>
            </div>
          </template>
          <template v-if="column.dataIndex == 'shopName'">
            <span>{{ record.shopName }}</span>
          </template>
          <template v-if="column.dataIndex == 'price'">
            <span>{{ `${formatNumberWithCommas(record.variants[0].price)} đ` }}</span>
          </template>
        </template>
      </Table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProduct } from '@/composables/useProduct'
import { formatNumberWithCommas } from '@/utils'
import { Table, Image, type TableColumnsType } from 'ant-design-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { data: products } = useProduct()

const columns: TableColumnsType = [
  {
    title: 'Stt',
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
    width: 80
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
    fixed: 'left'
  },
  {
    title: 'Shop',
    dataIndex: 'shopName',
    key: 'shopName',
    width: 200
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    width: 100
  }
]
</script>
