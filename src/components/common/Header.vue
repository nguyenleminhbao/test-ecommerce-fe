<template>
  <div class="w-full shadow-[-1px_1px_1px_#c7c7c7] sticky top-0 left-0 z-[1000] bg-white">
    <div class="h-[60px] max-w-[1120px] mx-auto flex justify-between items-center">
      <RouterLink to="/"
        ><img src="@/assets/images/LOGO.jpg" class="w-[40px] aspect-square rounded-full"
      /></RouterLink>

      <div class="flex items-center gap-10 text-neutral-4">
        <RouterLink class="hover:text-neutral-7 font-semibold" to="/">Home</RouterLink>
        <RouterLink class="hover:text-neutral-7 font-semibold" to="/product">Product</RouterLink>
        <RouterLink class="hover:text-neutral-7 font-semibold" to="/news">News</RouterLink>
        <RouterLink class="hover:text-neutral-7 font-semibold" to="/my-account">My account</RouterLink>
      </div>

      <div class="flex gap-4 items-center text-[24px]">
        <div class="flex items-center gap-3">
          <RouterLink to="/my-shop" class="object-center cursor-pointer">
            <ShopOutlined />
          </RouterLink>
          <span @click="showCart" class="object-center cursor-pointer">
            <ShoppingOutlined />
          </span>
          <span class="object-center cursor-pointer"> <BellOutlined /> </span>
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
              <Button @click="handler" class="border-none shadow-none font-semibold"
                >Sign up</Button
              >
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
import { Button } from 'ant-design-vue'
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
  SignUpButton
} from 'vue-clerk'
import DrawerCart from '@/components/UI/DrawerCart.vue'
import { ref } from 'vue'

const drawerCart = ref()

const showCart = () => {
  drawerCart?.value?.showCart()
}
</script>
