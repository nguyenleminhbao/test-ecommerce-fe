<template>
  <div v-if="isSignedIn" class="max-w-[1120px] mx-auto">
    <h1 class="my-20 text-headline-3 text-center">My Account</h1>

    <section class="w-full flex mb-10">
      <div class="!bg-neutral-3 rounded-md shadow-md max-h-[390px]">
        <div class="flex flex-col items-center gap-4 border-[1px] border-b-black p-4 rounded-t-md">
          <ClerkLoading>
            <LoadingOutlined className="h-10 w-10 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <Image :src="user?.imageUrl" class="!w-[50px] !h-[50px] rounded-full" />
            <span class="text-body-2-semibold"> {{ user?.fullName }}</span>
          </ClerkLoaded>
        </div>

        <Menu
          v-model:selectedKeys="current"
          class="bg-neutral-3 [&_.ant-menu-title-content]:text-body-2"
          style="width: 256px"
          mode="vertical"
          :items="items"
          @click="handleClick"
        />
      </div>
      <div class="flex-1 pl-[72px] h-full">
        <AccountDetail v-if="keyPage == 0" />
        <AddressDetail v-if="keyPage == 1" />
        <OrderDetail v-if="keyPage == 2" />
        <WishlistDetail v-if="keyPage == 3" />
        <FollowDetail v-if="keyPage == 4" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Image, Menu, message } from 'ant-design-vue'
import { h, ref } from 'vue'
import {
  CalendarOutlined,
  AppstoreOutlined,
  HeartOutlined,
  UserOutlined,
  PlusCircleOutlined,
  LoginOutlined,
  LoadingOutlined
} from '@ant-design/icons-vue'
import { useAuth, useUser, ClerkLoaded, ClerkLoading, useClerk } from 'vue-clerk'
import type { MenuProps } from 'ant-design-vue'
import AccountDetail from './AccountDetail.vue'
import AddressDetail from './AddressDetail.vue'
import OrderDetail from './OrderDetail.vue'
import WishlistDetail from './WishlistDetail.vue'
import FollowDetail from './FollowDetail.vue'
import { useRoute, useRouter } from 'vue-router'

const { isSignedIn } = useAuth()
const { user } = useUser()
const { signOut } = useClerk()
const route = useRoute()
const router = useRouter()
const keyPage = ref<number>(
  isNaN(parseFloat(route.query['keyPage'] as string))
    ? 0
    : parseFloat(route.query['keyPage'] as string)
)

const current = ref<number[]>([keyPage.value])

// dynamic query product
router.push({
  path: route.path,
  query: { ...route.query, keyPage: keyPage.value }
})

const items = ref([
  {
    key: 0,
    icon: () => h(UserOutlined),
    label: 'Account',
    title: 'Account'
  },
  {
    key: 1,
    icon: () => h(CalendarOutlined),
    label: 'Address',
    title: 'Address'
  },
  {
    key: 2,
    icon: () => h(AppstoreOutlined),
    label: 'Orders',
    title: 'Orders'
  },
  {
    key: 3,
    icon: () => h(HeartOutlined),
    label: 'Wishlist',
    title: 'Wishlist'
  },
  {
    key: 4,
    icon: () => h(PlusCircleOutlined),
    label: 'Follow',
    title: 'Follow'
  },
  {
    key: 5,
    icon: () => h(LoginOutlined),
    label: 'Logout',
    title: 'Logout'
  }
])

const handleClick: MenuProps['onClick'] = async (menuInfo) => {
  keyPage.value = menuInfo.key as number

  if (keyPage.value == 5) {
    await signOut()
    message.success('Logout successfully')
    router.push('/')
  } else
    router.push({
      path: route.path,
      query: { ...route.query, keyPage: keyPage.value }
    })
}
</script>
