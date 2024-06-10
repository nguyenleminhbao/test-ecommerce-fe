<template>
  <Dropdown>
    <a class="ant-dropdown-link flex gap-[4px] text-body-2-semibold items-center" @click.prevent>
      Sort by
      <DownOutlined />
    </a>
    <template #overlay>
      <Menu>
        <MenuItem>
          <a href="javascript:;">A-Z</a>
        </MenuItem>
        <MenuItem>
          <a href="javascript:;">Z-A</a>
        </MenuItem>
      </Menu>
    </template>
  </Dropdown>
</template>

<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue'
import { Dropdown, Menu, MenuItem } from 'ant-design-vue'
</script>
