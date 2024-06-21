<template>
  <Table
    :columns="columns"
    :data-source="orders"
    :loading="!orders"
    :scroll="{
      x: 1000,
      y: 410,
      scrollToFirstRowOnChange: true
    }"
    :custom-row="
      (record) => {
        return {
          onClick: () => router.push(`/admin/order/${record.id}`)
        }
      }
    "
    class="[&_.ant-table-body]:!scrollbar-hide [&_.ant-table-row]:cursor-pointer"
  >
    <template #bodyCell="{ index, record, column, text }">
      <template v-if="column.dataIndex == 'id'">
        <span>{{ orders.findIndex((ele: any) => ele == record) + 1 }}</span>
      </template>

      <template v-if="column.dataIndex == 'user'">
        <div class="flex items-center gap-3">
          <img :src="record.avatarUser" class="object-cover !w-10 rounded-full aspect-square" />
          <span>{{ `${record.firstName} ${record.lastName}` }}</span>
        </div>
      </template>

      <template v-if="column.dataIndex == 'product'">
        <div class="flex gap-2">
          <img
            :src="image"
            v-for="(image, index) in groupImageOrder(record.cartItems)"
            class="!w-12 aspect-square rounded-lg"
            alt="prod"
          />
        </div>
      </template>
      <template v-if="column.dataIndex == 'createdAt'">
        <span>{{ formatDateText(record.createdAt) }}</span>
      </template>
      <template v-if="column.dataIndex === 'status'">
        <Tag v-if="record.status == STATUS_ORDER.FULFILLED" color="success">{{
          record.status
        }}</Tag>
        <Tag v-if="record.status == STATUS_ORDER.UNFULFILLED" color="processing">{{
          record.status
        }}</Tag>
      </template>
      <template v-if="column.dataIndex === 'amount'">
        <span class="text-body-2-semibold"
          >{{ `${formatNumberWithCommas(record.amount)} đ` }}
        </span>
      </template>
    </template>
  </Table>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Table, Image, Tag, type TableColumnsType } from 'ant-design-vue'
import type { ICartItem } from '@/interfaces/cart.interface'
import type { IOrder } from '@/interfaces/order.interface'
import { STATUS_ORDER } from '@/constants/enum/status-order.enum'
import { formatDateText, formatNumberWithCommas } from '@/utils'

const { orders } = defineProps<{
  orders: IOrder[]
}>()

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
    title: 'User',
    dataIndex: 'user',
    key: 'user',
    fixed: 'left'
  },
  {
    title: 'Product',
    dataIndex: 'product'
  },
  {
    title: 'Date',
    dataIndex: 'createdAt'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    ellipsis: true,
    width: '12%'
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    width: '10%'
  },

  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const groupImageOrder = (
  listProduct: {
    shopId: string
    cartItems: ICartItem[]
  }[]
) => {
  return (
    listProduct
      .map((ele) => {
        return ele?.cartItems?.map((cartItem) => cartItem.image)
      })
      .flat() ?? []
  )
}
</script>
