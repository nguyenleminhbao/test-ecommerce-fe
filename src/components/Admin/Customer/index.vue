<template>
  <div class="flex flex-col gap-6">
    <h1 class="text-headline-5">Customer Lists</h1>
    <div class="bg-white p-[24px] rounded-lg">
      <Table
        :loading="!customers"
        :columns="columns"
        :data-source="customers"
        :scroll="{
          x: 1000,
          y: 350,
          scrollToFirstRowOnChange: true
        }"
        ref="customerTableRef"
        class="[&_.ant-table-body]:!scrollbar-hide"
      >
        <template #bodyCell="{ index, column, record }">
          <template v-if="column.dataIndex == 'id'">
            <span>{{ index + 1 }}</span></template
          >
          <template v-if="column.dataIndex == 'name'">
            <div class="flex items-center gap-3">
              <Image :src="record.avatar" class="object-cover !w-10 rounded-full aspect-square" />
              <span class="text-body-2-semibold">{{ record.name }}</span>
            </div>
          </template>
        </template>
      </Table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAllCustomer } from '@/services/customer/get'
import { Image, Table } from 'ant-design-vue'
import { onMounted, ref } from 'vue'
import type { TableColumnsType } from 'ant-design-vue'

const columns: TableColumnsType = [
  {
    title: 'Stt',
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
    width: 80
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: '25%'
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    width: '20%'
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role'
  }
]

const customers = ref()

onMounted(async () => {
  const data = await getAllCustomer()
  customers.value = data.message
})
</script>
