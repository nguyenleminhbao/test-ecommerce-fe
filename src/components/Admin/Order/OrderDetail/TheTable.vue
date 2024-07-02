<template>
  <div class="bg-white rounded-lg">
    <Table
      :columns="columns"
      :data-source="orderItems"
      :loading="!orderItems"
      :scroll="{
        x: 1000,
        y: 410
      }"
      :pagination="false"
      class="[&_.ant-table-body]:!scrollbar-hide"
    >
      <template #bodyCell="{ column, record }">
        <div class="cursor-pointer">
          <template v-if="column.dataIndex == 'product'">
            <div class="flex gap-3 items-center">
              <Image
                :src="record.image"
                class="object-cover !w-16 !h-16 aspect-square rounded-lg"
              />
              <span class="text-body-2-semibold two-lines-truncate">{{ record.title }}</span>
            </div>
          </template>
          <template v-if="column.dataIndex == 'price'">
            <span>{{ `${formatNumberWithCommas(record.price * record.quantity)} đ` }}</span>
          </template>
        </div>
      </template>
    </Table>
  </div>
</template>
<script setup lang="ts">
import { Table, Image, type TableColumnsType } from 'ant-design-vue'
import { formatNumberWithCommas } from '@/utils'
import type { ICartItem } from '@/interfaces/cart.interface'

const columns: TableColumnsType = [
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product'
  },
  {
    title: 'Shop',
    dataIndex: 'shopName',
    key: 'shopName'
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    width: '10%'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    width: '14%'
  }
]

const { orderItems } = defineProps<{
  orderItems: ICartItem[]
}>()
</script>
