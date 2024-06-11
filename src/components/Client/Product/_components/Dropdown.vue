<template>
  <Dropdown>
    <a class="ant-dropdown-link flex gap-[4px] text-body-2-semibold items-center" @click.prevent>
      Sort by
      <DownOutlined />
    </a>
    <template #overlay>
      <Menu>
        <MenuItem>
          <a href="javascript:;">Thấp đến Cao</a>
        </MenuItem>
        <MenuItem>
          <a href="javascript:;">Cao đến Thấp</a>
        </MenuItem>
      </Menu>
    </template>
  </Dropdown>
</template>

<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue'
import { Dropdown, Menu, MenuItem } from 'ant-design-vue'
</script>

<style scoped>
.demo-dropdown-wrap :deep(.ant-dropdown-button) {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
