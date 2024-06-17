<template>
  <div
    class="h-[60px] px-[24px] mx-auto flex justify-end items-center bg-white z-50 gap-5 text-[24px]"
    style="width: -webkit-fill-available"
  >
    <BellOutlined />

    <ClerkLoading>
      <LoadingOutlined className="h-5 w-5 text-muted-foreground animate-spin" />
    </ClerkLoading>
    <ClerkLoaded>
      <SignedIn>
        <UserButton afterSignOutUrl="/"></UserButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
    </ClerkLoaded>
  </div>
</template>

<script setup lang="ts">
import { BellOutlined, LoadingOutlined } from '@ant-design/icons-vue'

import { SignInButton, UserButton, ClerkLoading, ClerkLoaded, SignedOut, SignedIn } from 'vue-clerk'
</script>
