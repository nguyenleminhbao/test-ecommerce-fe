<template>
  <div
    class="hidden md:block px-6 w-full shadow-[-1px_1px_1px_#c7c7c7] sticky top-0 left-0 z-[1000] bg-white"
  >
    <div class="h-[60px] max-w-[1120px] mx-auto flex justify-between items-center">
      <RouterLink to="/" class="flex items-center gap-2 text-neutral-7 text-body-1-bold">
        <img v-once src="@/assets/images/logo.svg" class="w-[40px] aspect-square" /> Shopo
      </RouterLink>

      <div class="flex items-center gap-10 text-neutral-4">
        <Tooltip placement="bottom">
          <template #title>Home</template>
          <RouterLink class="hover:text-neutral-7 font-semibold" to="/">Home</RouterLink>
        </Tooltip>
        <Tooltip placement="bottom">
          <template #title>Product</template>
          <RouterLink class="hover:text-neutral-7 font-semibold" to="/product"
            >Product</RouterLink
          ></Tooltip
        >
        <Tooltip placement="bottom">
          <template #title>News</template>
          <RouterLink class="hover:text-neutral-7 font-semibold" to="/news">News</RouterLink>
        </Tooltip>

        <Tooltip placement="bottom">
          <template #title>My account</template>
          <RouterLink to="@" @click="onCheckLogin" class="hover:text-neutral-7 font-semibold"
            >My account</RouterLink
          ></Tooltip
        >
      </div>

      <div class="flex gap-4 items-center text-[24px]">
        <div class="flex items-center gap-3">
          <Tooltip placement="bottom">
            <template #title>My shop</template>
            <RouterLink to="/my-shop" class="object-center cursor-pointer">
              <ShopOutlined /> </RouterLink
          ></Tooltip>

          <Tooltip placement="bottom">
            <template #title>Cart</template
            ><span @click="showCart" class="object-center cursor-pointer">
              <ShoppingOutlined /> </span
          ></Tooltip>

          <Dropdown placement="bottom" arrow>
            <span class="object-center cursor-pointer"> <BellOutlined /> </span>
            <template #overlay>
              <Empty>
                <template #description>
                  <span>No Notifications Yet</span>
                </template>
              </Empty>
            </template>
          </Dropdown>
        </div>

        <ClerkLoading>
          <LoadingOutlined className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/"></UserButton>
          </SignedIn>
          <SignedOut>
            <SignUpButton mode="modal" v-slot="{ handler }">
              <Button @click="handler" class="border-black font-semibold">Sign up</Button>
            </SignUpButton>
            <SignInButton mode="modal" v-slot="{ handler }">
              <Button @click="handler" class="bg-primary text-white !font-semibold">Login</Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </div>
    <DrawerCart ref="drawerCart" />
  </div>
</template>

<script setup lang="ts">
import { Button, Tooltip, Dropdown, Empty } from 'ant-design-vue'
import {
  ShopOutlined,
  ShoppingOutlined,
  BellOutlined,
  LoadingOutlined
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
  useAuth
} from 'vue-clerk'
import DrawerCart from '@/components/UI/drawer/DrawerCart.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { isSignedIn } = useAuth()
const { openSignIn } = useClerk()
const drawerCart = ref()

const showCart = () => {
  drawerCart?.value?.showCart()
}

const onCheckLogin = (e: Event) => {
  e.stopPropagation()
  if (!isSignedIn.value) {
    openSignIn()
  } else {
    router.push('/my-account')
  }
}
</script>

<style scoped>
.router-link-active {
  color: black;
  font-weight: 700;
}
</style>
