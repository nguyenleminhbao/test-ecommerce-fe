<template>
  <Table
    :loading="!orders"
    :columns="columns"
    :data-source="orders"
    class="w-full border-[1px] border-black rounded-lg [&_.ant-table-body]:!scrollbar-hide [&_.ant-table-row]:cursor-pointer"
    :scroll="{ x: 400 }"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'id'">
        {{ `#${record.id.slice(0, 8)}` }}
      </template>
      <template v-if="column.dataIndex === 'createdAt'">
        {{ formatDateText(record.createdAt) }}
      </template>
      <template v-if="column.dataIndex === 'status'">
        <Tag v-if="record.status == STATUS_ORDER.FULFILLED" color="success">
          {{ record.status }}
        </Tag>
        <Tag v-if="record.status == STATUS_ORDER.UNFULFILLED" color="processing">
          {{ record.status }}
        </Tag>
      </template>

      <template v-if="column.dataIndex === 'amount'">
        <span class="text-body-2-semibold">
          {{ `${formatNumberWithCommas(record.amount)} đ` }}
        </span>
      </template>
    </template>
  </Table>
</template>

<script setup lang="ts">
import { getAllOrder } from '@/services/order/get'
import { onMounted, ref } from 'vue'
import { Table, Tag, type TableColumnsType } from 'ant-design-vue'
import { formatDateText, formatNumberWithCommas } from '@/utils'
import { STATUS_ORDER } from '@/constants/enum/status-order.enum'

const orders = ref()
const columns: TableColumnsType = [
  {
    title: 'Order Id',
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
    ellipsis: true
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    ellipsis: true
  },
  {
    title: 'Price',
    dataIndex: 'amount',
    key: 'amount'
  }
]

onMounted(async () => {
  const data = await getAllOrder()
  orders.value = data.message.reverse()
})
</script>

<style lang="css">
:where(.css-dev-only-do-not-override-16pw25h).ant-table-wrapper .ant-table-thead > tr > th {
  background-color: rgb(216, 216, 216) !important;
}
</style>
