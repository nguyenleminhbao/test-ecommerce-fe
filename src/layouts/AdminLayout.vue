<template>
  <div v-if="authStore.isAdmin">
    <div class="flex">
      <Slidebar class="fixed top-0 w-[200px]" />
      <div class="flex-1 overflow-auto ml-[200px] bg-neutral-2 min-h-screen">
        <HeaderAdmin class="fixed top-0" />
        <div class="p-[24px] mt-[60px]">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
  <Skeleton
    :paragraph="{
      rows: 15
    }"
    v-if="isLoading"
    :active="true"
  />
</template>
<script setup lang="ts">
import HeaderAdmin from '@/components/common/HeaderAdmin.vue'
import Slidebar from '@/components/common/Slidebar.vue'
import { checkAdmin } from '@/services/auth/get'
import { login } from '@/services/auth/post'
import { useAuthSystem } from '@/stores/use-auth'
import { ref, watch } from 'vue'
import { useAuth } from 'vue-clerk'
import { useRoute, useRouter } from 'vue-router'
import { Skeleton } from 'ant-design-vue'

const { userId } = useAuth()
const authStore = useAuthSystem()
const { setAdmin } = useAuthSystem()
const router = useRouter()
const route = useRoute()
const isLoading = ref<boolean>(false)

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

    const isAdmin = await checkAdmin()
    setAdmin(isAdmin.message)
    if (isAdmin.message) router.push('/admin')
    isLoading.value = false
  }

  if (userId.value && accessToken) {
    isLoading.value = true
    const isAdmin = await checkAdmin()
    setAdmin(isAdmin.message)
    if (isAdmin.message) router.push(route.path.includes('admin') ? route.path : 'admin')
    isLoading.value = false
  }

  if (!authStore.isAdmin) {
    router.push('/forbidden')
  }
})
</script>
