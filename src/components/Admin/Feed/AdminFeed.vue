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
