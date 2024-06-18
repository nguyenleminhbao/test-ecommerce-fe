<template>
  <div class="flex flex-col gap-[24px]">
    <h1 class="text-headline-5">Feed Lists</h1>

    <div class="bg-white p-[24px] rounded-lg">
      <!-- <Table
        :columns="columns"
        :row-key="(record) => record.login.uuid"
        :data-source="dataSource"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'name'">
            <a href="admin/feed/:feedId">{{ text.title }}</a></template
          >
          <template v-else-if="column.key === 'tags'">
            <span>
              <a-tag
                v-for="tag in text.tags"
                :key="tag"
                :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
              >
                {{ tag.toUpperCase() }}
              </a-tag>
            </span>
          </template>
        </template>
      </Table> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Table } from 'ant-design-vue'
import type { TableProps } from 'ant-design-vue'
import { usePagination } from 'vue-request'
import axios from 'axios'
const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    sorter: true
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    filters: [
      { text: 'Stationery', value: 'stationery' },
      { text: 'Tech', value: 'tech' }
    ]
  },
  {
    title: 'View',
    dataIndex: 'view',
    sorter: true
  },
  {
    title: 'Like',
    dataIndex: 'like',
    sorter: true
  },
  {
    title: 'Comment',
    dataIndex: 'cmt',
    sorter: true,
    width: '20%'
  },
  {
    title: 'Share',
    dataIndex: 'share',
    sorter: true
  }
]

type APIParams = {
  results: number
  page?: number
  sortField?: string
  sortOrder?: number
  [key: string]: any
}
type APIResult = {
  results: {
    title: string
    tags: 'tech' | 'stationery'
    view: number
    like: number
    cmt: number
    share: number
  }[]
}

const queryData = (params: APIParams) => {
  return axios.get<APIResult>('https://randomuser.me/api?noinfo', { params })
}

// const {
//   data: dataSource,
//   run,
//   loading,
//   current,
//   pageSize
// } = usePagination(queryData, {
//   formatResult: (res) => res.data.results,
//   pagination: {
//     currentKey: 'page',
//     pageSizeKey: 'results'
//   }
// })

// const pagination = computed(() => ({
//   total: 200,
//   current: current.value,
//   pageSize: pageSize.value
// }))

// const handleTableChange: TableProps['onChange'] = (
//   pag: { pageSize: number; current: number },
//   filters: any,
//   sorter: any
// ) => {
//   run({
//     results: pag.pageSize,
//     page: pag?.current,
//     sortField: sorter.field,
//     sortOrder: sorter.order,
//     ...filters
//   })
// }
</script>
