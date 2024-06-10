<template>
  <div
    class="h-[60px] px-[24px] mx-auto flex justify-between items-center bg-white z-50"
    style="width: -webkit-fill-available"
  >
    <form class="w-1/4">
      <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          class="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search"
          required
        />
      </div>
    </form>

    <div class="flex gap-5 items-center text-[24px]">
      <span> <BellOutlined /> </span>
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
  </div>
</template>

<script setup lang="ts">
import { BellOutlined, LoadingOutlined } from '@ant-design/icons-vue'

import { SignInButton, UserButton, ClerkLoading, ClerkLoaded, SignedOut, SignedIn } from 'vue-clerk'
</script>
