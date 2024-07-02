<template>
  <List item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <ListItem>
        <template #actions>
          <Switch v-model:checked="item.checked" />
        </template>
        <ListItemMeta :description="item.description">
          <template #title>
            <p class="text-body-2-semibold">{{ item.title }}</p>
          </template>
        </ListItemMeta>
      </ListItem>
    </template>
  </List>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { List, ListItem, ListItemMeta, Switch } from 'ant-design-vue'

const data = reactive([
  {
    title: 'Personalized Offers',
    description: 'Receive offers made special for you',
    checked: true
  },
  {
    title: 'Online Webinars',
    description: 'Get notified about upcoming webinars',
    checked: true
  },
  {
    title: 'New Features',
    description: 'Updates about new features and product releases',
    checked: true
  },
  {
    title: 'Security and Billing',
    description: 'Account security and notifications about billing',
    checked: false
  },
  {
    title: 'Marketing',
    description: 'Receive marketing newsletters about our new products.',
    checked: false
  }
])
</script>
