<template>
  <div>
    <div class="m-[8px] h-11 flex justify-center items-center">
      <RouterLink to="/admin" class="px-6 text-headline-5">Admin</RouterLink>
    </div>
    <Menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      :inline-collapsed="state.collapsed"
      :items="items"
      @click="handleMenuItemClick"
    ></Menu>
  </div>
</template>
<script lang="ts" setup>
import { Menu, type ItemType } from 'ant-design-vue'
import { reactive, watch, VueElement, h } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
import {
  UserOutlined,
  InboxOutlined,
  AppstoreOutlined,
  SettingFilled,
  LogoutOutlined,
  UnorderedListOutlined,
  VideoCameraOutlined,
  ShopOutlined,
  FileTextOutlined
} from '@ant-design/icons-vue'
const state = reactive({
  collapsed: false,
  selectedKeys: [route.path],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1']
})
const items: ItemType[] = reactive([
  {
    key: '/admin',
    icon: () => h(AppstoreOutlined),
    label: 'Dashboard',
    title: 'Dashboard'
  },
  {
    key: '/admin/customer',
    icon: () => h(UserOutlined),
    label: 'Customer',
    title: 'Customer'
  },
  {
    key: '/admin/shop',
    icon: () => h(ShopOutlined),
    label: 'Shop',
    title: 'Shop'
  },
  {
    key: '/admin/product',
    icon: () => h(InboxOutlined),
    label: 'Product',
    title: 'Product'
  },
  {
    key: '/admin/order',
    icon: () => h(UnorderedListOutlined),
    label: 'Order',
    title: 'Order'
  },
  {
    key: '/admin/reel',
    icon: () => h(VideoCameraOutlined),
    label: 'Reel',
    title: 'Reel'
  },
  {
    key: '/admin/feed',
    icon: () => h(FileTextOutlined),
    label: 'Feed',
    title: 'Feed'
  },
  {
    key: '/admin/banner',
    icon: () => h(FileTextOutlined),
    label: 'Banner',
    title: 'Banner'
  },

  { type: 'divider' },
  {
    key: '/admin/setting',
    icon: () => h(SettingFilled),
    label: 'Settings',
    title: 'Settings'
  },
  {
    key: '14',
    icon: () => h(LogoutOutlined),
    label: 'Logout',
    title: 'Logout'
  }
])

watch(
  () => route.path,
  (val) => {
    state.selectedKeys = [val]
  }
)
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed
  state.openKeys = state.collapsed ? [] : state.preOpenKeys
}
const handleMenuItemClick = (e: any) => {
  const { key } = e
  router.push(key)
}
</script>
