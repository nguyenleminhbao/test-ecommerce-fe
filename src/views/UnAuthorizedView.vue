<template>
  <Result v-if="isSignedIn" status="500" title="401" sub-title="Sorry, you must login again.">
    <template #extra>
      <Button type="primary" @click="onSignOut">Sign out</Button>
    </template>
  </Result>
</template>

<script setup lang="ts">
import { Result, Button, message } from 'ant-design-vue'
import { useClerk, useAuth } from 'vue-clerk'
import { useRouter } from 'vue-router'
const router = useRouter()

const { signOut } = useClerk()
const { isSignedIn } = useAuth()

const onSignOut = async () => {
  await signOut()
  message.success('Sign out successfully')
  router.push('/')
}

if (!isSignedIn.value) router.push('/')
</script>
