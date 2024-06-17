<template>
  <div class="flex flex-col gap-[24px]">
    <h1 class="ml-[24px] text-headline-5">Shop Lists</h1>

    <div class="bg-white p-[24px] rounded-lg">
      <Table
        :columns="columns"
        :data-source="shops"
        :loading="!shops"
        :scroll="{
          x: 1000,
          y: 410,
          scrollToFirstRowOnChange: true
        }"
        class="[&_.ant-table-body]:!scrollbar-hide"
      >
        <template #bodyCell="{ index, column, record }">
          <template v-if="column.dataIndex == 'id'">
            <span>{{ index + 1 }}</span></template
          >
          <template v-if="column.dataIndex == 'name'">
            <div class="flex items-center gap-3">
              <Image
                :src="record.shopAvatar"
                class="object-cover !w-10 rounded-full aspect-square"
              />
              <span class="text-body-2-semibold">{{ record.shopName }}</span>
            </div>
          </template>
          <template v-if="column.dataIndex == 'user'">
            <div class="flex items-center gap-3">
              <Image
                :src="record.user.avatar"
                class="object-cover !w-10 rounded-full aspect-square"
              />
              <span>{{ record.user.name }}</span>
            </div>
          </template>
        </template>
      </Table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Image, Table } from 'ant-design-vue'
import { onMounted, ref } from 'vue'
import type { TableColumnsType } from 'ant-design-vue'
import { getAllShop } from '@/services/shop/get'

const shops = ref()

const columns: TableColumnsType = [
  {
    title: 'Stt',
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
    width: 80
  },
  {
    title: 'Name Shop',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left'
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user'
  },
  {
    title: 'Product',
    dataIndex: 'numProd',
    key: 'numProd'
  },
]

onMounted(async () => {
  const data = await getAllShop()
  shops.value = data.message
})
</script>
