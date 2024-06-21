<template>
  <div class="flex flex-col gap-[24px]">
    <h1 class="text-headline-5">Setting</h1>

    <div class="bg-white p-[24px] rounded-lg">
      <Tabs v-model:activeKey="activeKey" type="card">
        <TabPane key="1" tab="Profile"><Profile /></TabPane>
        <TabPane key="2" tab="Notifications"><Notifications /></TabPane>
        <TabPane key="3" tab="Security"><Security /></TabPane>
      </Tabs>
    </div>

    <div class="flex gap-2 justify-end">
      <Button type="primary" size="large">Save</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Tabs, TabPane, Button } from 'ant-design-vue'
import Profile from './Profile.vue'
import Notifications from './Notifications.vue'
import Security from './Security.vue'

const activeKey = ref('1')
</script>
