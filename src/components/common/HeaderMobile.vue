<template>
  <div
    class="md:hidden px-4 md:px-6 lg:px-0 w-full shadow-[-1px_1px_1px_#c7c7c7] left-0 z-[1000] bg-white fixed top-0"
  >
    <div class="h-[60px] max-w-[1120px] mx-auto flex justify-between items-center">
      <div class="flex gap-2">
        <button @click="showMenu" :ghost="true" class="object-center">
          <MenuOutlined class="text-xl" />
        </button>
        <RouterLink to="/" class="flex items-center gap-2">
          <img src="@/assets/images/logo.svg" class="w-[28px] aspect-square" />
          <span class="text-xl">Shopo</span>
        </RouterLink>
      </div>

      <div class="flex gap-4 items-center text-[24px]">
        <div class="flex items-center gap-3">
          <Tooltip placement="bottom">
            <template #title>Cart</template
            ><span @click="showCart" class="object-center cursor-pointer">
              <ShoppingOutlined /> </span
          ></Tooltip>
          <span class="object-center cursor-pointer"> <BellOutlined /> </span>
        </div>
      </div>
    </div>
    <DrawerCart ref="drawerCart" />
  </div>
  <Drawer
    v-model:open="open"
    class="custom-class"
    root-class-name="root-class-name"
    :root-style="{ color: 'blue' }"
    style="color: red"
    placement="left"
    :width="300"
    :closable="false"
  >
    <template #title>
      <RouterLink to="/" class="flex items-center gap-2">
        <img src="@/assets/images/logo.svg" class="w-[28px] aspect-square" />
        <span class="text-xl">Shopo</span>
      </RouterLink>
    </template>
    <template #extra>
      <button @click="open = false" :ghost="true" class="object-center">
        <CloseOutlined class="text-xl text-black" />
      </button>
    </template>
    <ul class="flex flex-col gap-3 cursor-pointer">
      <RouterLink
        class="hover:bg-neutral-800 group -mx-4 rounded-md py-2 px-4 font-semibold flex items-center gap-2"
        to="/"
        @click="open = false"
      >
        <HomeOutlined class="text-black group-hover:text-white text-[18px]" />
        <span class="font-semibold text-black group-hover:text-white text-[18px]"
          >Home</span
        ></RouterLink
      >
      <RouterLink
        class="hover:bg-neutral-800 group -mx-4 rounded-md py-2 px-4 font-semibold flex items-center gap-2"
        to="/product"
        @click="open = false"
      >
        <GroupOutlined class="text-black text-[18px] group-hover:text-white" />
        <span class="font-semibold text-black text-[18px] group-hover:text-white"
          >Product</span
        ></RouterLink
      >

      <RouterLink
        class="hover:bg-neutral-800 group -mx-4 rounded-md py-2 px-4 font-semibold flex items-center gap-2"
        to="/news"
        @click="open = false"
      >
        <FundProjectionScreenOutlined class="text-black text-[18px] group-hover:text-white" />
        <span class="font-semibold text-black text-[18px] group-hover:text-white"
          >News</span
        ></RouterLink
      >

      <RouterLink
        class="hover:bg-neutral-800 group -mx-4 rounded-md py-2 px-4 font-semibold flex items-center gap-2"
        to="/cart"
        v-if="isSignedIn"
        @click="open = false"
      >
        <ShoppingOutlined class="text-black text-[18px] group-hover:text-white" />
        <span class="font-semibold text-black text-[18px] group-hover:text-white"
          >My cart</span
        ></RouterLink
      >

      <RouterLink
        to="@"
        @click="onCheckLogin"
        class="hover:bg-neutral-800 group -mx-4 rounded-md py-2 px-4 font-semibold flex items-center gap-2"
      >
        <UserOutlined class="text-black text-[18px] group-hover:text-white" />
        <span class="font-semibold text-black text-[18px] group-hover:text-white"
          >My account</span
        ></RouterLink
      >

      <div
        class="hover:bg-neutral-800 group -mx-4 rounded-md py-2 px-4 font-semibold flex items-center gap-2"
        @click="onLogout"
        v-if="isSignedIn"
      >
        <LogoutOutlined class="text-black text-[18px] group-hover:text-white" />
        <span class="font-semibold text-black text-[18px] group-hover:text-white">Logout</span>
      </div>
    </ul>
    <template #footer>
      <div class="grid grid-cols-1 gap-3 py-3" v-if="!isSignedIn">
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/"></UserButton>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" v-slot="{ handler }">
              <Button @click="handler" class="bg-primary text-[18px] text-white !font-semibold h-10"
                >Login</Button
              >
            </SignInButton>
            <SignUpButton mode="modal" v-slot="{ handler }">
              <Button @click="handler" class="border-black text-[18px] font-semibold h-10"
                >Sign up</Button
              >
            </SignUpButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
      <div v-else class="py-3 flex gap-2 items-center">
        <ClerkLoading>
          <LoadingOutlined className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/"></UserButton>
        </ClerkLoaded>
        <span class="text-black text-xl font-semibold">{{ user?.fullName }}</span>
      </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import { Button, Drawer, Tooltip, message } from 'ant-design-vue'
import {
  ShoppingOutlined,
  BellOutlined,
  LoadingOutlined,
  MenuOutlined,
  CloseOutlined,
  HomeOutlined,
  GroupOutlined,
  FundProjectionScreenOutlined,
  UserOutlined,
  LogoutOutlined
} from '@ant-design/icons-vue'
import {
  SignInButton,
  UserButton,
  ClerkLoading,
  ClerkLoaded,
  SignedOut,
  SignedIn,
  SignUpButton,
  useClerk,
  useAuth,
  useUser
} from 'vue-clerk'
import DrawerCart from '@/components/UI/DrawerCart.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const { isSignedIn } = useAuth()
const { user } = useUser()
const { openSignIn, signOut } = useClerk()
const drawerCart = ref()
const route = useRoute()
const open = ref<boolean>(false)

const showCart = () => {
  drawerCart?.value?.showCart()
}

const showMenu = () => {
  open.value = true
}

const checkNavNum = (path: string) => {
  if (path.includes('product')) return 1
  else if (path.includes('news')) return 2
  else if (path.includes('my-account')) return 3
  else return 0
}
const navNum = ref<number>(checkNavNum(route.path))

const onCheckLogin = (e: Event) => {
  e.stopPropagation()
  if (!isSignedIn.value) {
    openSignIn()
  } else {
    router.push('/my-account')
    open.value = false
  }
}

const onLogout = async () => {
  await signOut()
  message.success('Logout successfully')
  open.value = false
  router.push('/')
}
</script>

<style scoped>
.router-link-active {
  color: black;
  font-weight: 700;
}
</style>
