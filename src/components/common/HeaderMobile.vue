<template>
  <div
    class="md:hidden px-4 md:px-6 lg:px-0 w-full shadow-[-1px_1px_1px_#c7c7c7] sticky top-0 left-0 z-[1000] bg-white"
  >
    <div class="h-[60px] max-w-[1120px] mx-auto flex justify-between items-center">
      <RouterLink to="/" class="flex items-center gap-2">
        <img src="@/assets/images/logo.svg" class="w-[30px] aspect-square" />
        <span class="text-xl">Shopo</span>
      </RouterLink>

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
</template>

<script setup lang="ts">
import { Button, Tooltip } from 'ant-design-vue'
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
import DrawerCart from '@/components/UI/DrawerCart.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const { isSignedIn } = useAuth()
const { openSignIn } = useClerk()
const drawerCart = ref()
const route = useRoute()

const showCart = () => {
  drawerCart?.value?.showCart()
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
  }
}
</script>

<style scoped>
.router-link-active {
  color: black;
  font-weight: 700;
}
</style>
