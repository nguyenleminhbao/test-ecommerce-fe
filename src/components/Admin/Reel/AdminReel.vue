<template>
  <div class="flex flex-col gap-[24px]">
    <h1 class="text-headline-5">Reel Lists</h1>

    <div class="bg-white p-[24px] rounded-lg">
      <!-- <Table
        v-if="dataSource"
        :columns="columns"
        :row-key="(record) => record.login.uuid"
        :data-source="dataSource"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'name'">
            <a href="admin/reel/:reelId">{{ text.title }}</a></template
          >
        </template>
      </Table> -->
    </div>
  </div>
</template>
