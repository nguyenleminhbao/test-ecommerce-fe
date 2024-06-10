<template>
  <div class="flex flex-col gap-[24px]">
    <h1 class="ml-[24px] text-headline-5">Shop Lists</h1>

    <div class="bg-white p-[24px] rounded-lg">
      <Table
        :columns="columns"
        :data-source="shops"
        :scroll="{
          x: 1000,
          y: 350,
          scrollToFirstRowOnChange: true
        }"
        class="[&_.ant-table-body]:!scrollbar-hide"
      >
        <template #bodyCell="{ index, column, record }">
          <template v-if="column.dataIndex == 'id'">
            <span>{{ index + 1 }}</span></template
          >
          <template v-if="column.dataIndex == 'name'">
            <span class="text-headline-7">{{ record.shopName }}</span>
          </template>
          <template v-if="column.dataIndex == 'avatar'">
            <Image :src="record.shopAvatar" class="object-cover !w-10 rounded-full aspect-square" />
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
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left'
  },
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar'
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user'
  }
]

onMounted(async () => {
  const data = await getAllShop()
  shops.value = data.message
})
</script>
