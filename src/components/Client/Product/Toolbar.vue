<template>
  <div class="flex gap-6 max-sm:flex-col">

    <!-- CATEGORIES --------------------------------------------------------------------------->
    <div class="w-[262px] max-sm:w-full flex flex-col gap-2">
      <h1 class="uppercase text-neutral-4 text-body-2-semibold">CATEGORIES</h1>
      <Dropdown>
        <template #overlay>
          <Menu @click="handleMenuClick">
            <MenuItem key="1">1st menu item</MenuItem>
            <MenuItem key="2">2nd menu item</MenuItem>
            <MenuItem key="3">3rd menu item</MenuItem>
          </Menu>
        </template>
        <Button
          size="large"
          class="flex justify-between items-center text-body-2-semibold text-neutral-7 border-2 border-neutral-4"
        >
          All Categories
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>

    <!-- PRICE --------------------------------------------------------------------------->
    <div class="w-[262px] max-sm:w-full flex flex-col gap-2">
      <h1 class="uppercase text-neutral-4 text-body-2-semibold">PRICE</h1>
      <Dropdown>
        <template #overlay>
          <Menu @click="handleMenuClick">
            <MenuItem key="1">1st menu item</MenuItem>
            <MenuItem key="2">2nd menu item</MenuItem>
            <MenuItem key="3">3rd menu item</MenuItem>
          </Menu>
        </template>
        <Button
          size="large"
          class="flex justify-between items-center text-body-2-semibold text-neutral-7 border-2 border-neutral-4"
        >
          All Price
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue'
import { Dropdown, Button, type MenuProps, Menu, MenuItem } from 'ant-design-vue'
const handleButtonClick = (e: Event) => {
  console.log('click left button', e)
}
const handleMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
}
</script>

<style scoped>
.demo-dropdown-wrap :deep(.ant-dropdown-button) {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
