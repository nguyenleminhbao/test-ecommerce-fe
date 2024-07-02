<template>
  <div class="overflow-x-hidden">
    <Header />
    <HeaderMobile />
    <div class="px-4 md:px-6 lg:px-0 scrollbar-hide mt-[60px] md:mt-0">
      <Skeleton
        class="max-w-[1120px] mx-auto"
        :paragraph="{
          rows: 15
        }"
        v-if="isLoading"
        :active="true"
      />
      <slot v-else></slot>
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/common/HeaderWeb.vue'
import HeaderMobile from '@/components/common/HeaderMobile.vue'
import Footer from '@/components/common/TheFooter.vue'

import { login } from '@/services/auth/post'
import { onMounted, ref, watch } from 'vue'
import { useAuth } from 'vue-clerk'
import { getCart } from '@/services/cart/get'
import { useCart } from '@/stores/use-cart'
import { usePayment } from '@/stores/use-payment'
import { checkAdmin, getMe } from '@/services/auth/get'
import { useRouter } from 'vue-router'
import { useAuthSystem } from '@/stores/use-auth'
import { Skeleton, message } from 'ant-design-vue'
import { useLivestream } from '@/stores/use-livestream'
import { getAllStream } from '@/services/livestream/get'

window.scrollTo(0, 0)
const { userId } = useAuth()
const isLoading = ref<boolean>(false)

const router = useRouter()

const cartStore = useCart()
const paymentStore = usePayment()
const authStore = useAuthSystem()
const livestreamStore = useLivestream()
const { setCart } = useCart()
const { setUser } = usePayment()
const { setAdmin, setAuth } = useAuthSystem()
const { setListLivestream } = useLivestream()

watch(userId, async () => {
  const accessToken = localStorage && localStorage.getItem('accessToken')
  if (!userId.value) {
    localStorage && localStorage.removeItem('accessToken')
    localStorage && localStorage.removeItem('refreshToken')
  } else if (userId.value && !accessToken) {
    isLoading.value = true
    const loginData = await login(userId.value)
    localStorage.setItem('accessToken', loginData?.message.accessToken)
    localStorage.setItem('refreshToken', loginData?.message.refreshToken)
    message.success('Login successfully')

    const isAdmin = await checkAdmin()
    setAdmin(isAdmin.message)
    if (isAdmin.message) router.push('/admin')
    isLoading.value = false
  }

  if (userId.value && accessToken) {
    if (!cartStore.cart) {
      const myCart = await getCart()
      setCart(myCart.message)
    }

    if (!paymentStore.user || !authStore.user) {
      const me = await getMe()
      setUser(me.message)
      setAuth(me.message)
    }

    if (sessionStorage.getItem('isAdmin') == '1') {
      setAdmin(true)
      router.push('/admin')
    } else if (sessionStorage.getItem('isAdmin') == '0') {
      console.log('isAdmin')
    } else {
      isLoading.value = true
      const isAdmin = await checkAdmin()
      sessionStorage.setItem('isAdmin', isAdmin.message ? '1' : '0')
      setAdmin(isAdmin.message)
      if (isAdmin.message) router.push('/admin')
      isLoading.value = false
    }
  }
  if (!livestreamStore.listLivestream) {
    const listStream = await getAllStream()
    setListLivestream(listStream.message)
  }
})

onMounted(async () => {
  const accessToken = localStorage && localStorage.getItem('accessToken')
  if (userId.value && accessToken) {
    if (!cartStore.cart) {
      const myCart = await getCart()
      setCart(myCart.message)
    }

    if (!paymentStore.user || !authStore.user) {
      const me = await getMe()
      setUser(me.message)
      setAuth(me.message)
    }
  }
})
</script>
