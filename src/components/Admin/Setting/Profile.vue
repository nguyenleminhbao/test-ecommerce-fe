<template>
  <div class="flex flex-col gap-6">
    <h1 class="text-headline-6">Profile Details</h1>
    <div class="flex flex-col gap-6">
      <div class="flex justify-center">
        <Avatar :size="150" class="flex justify-center items-center">
          <template #icon><UserOutlined /></template>
        </Avatar>
      </div>
      <Form
        :model="formState"
        v-bind="layout"
        name="nest-messages"
        :wrapper-col="{ span: 8 }"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <FormItem :name="['user', 'name']" label="Name" :rules="[{ required: true }]">
          <Input v-model:value="formState.user.name" />
        </FormItem>
        <FormItem
          :name="['user', 'email']"
          label="Email"
          :rules="[{ required: true, type: 'email' }]"
        >
          <Input v-model:value="formState.user.email" />
        </FormItem>
        <FormItem :name="['user', 'phone']" label="Phone Number" :rules="[{ required: true }]">
          <Input v-model:value="formState.user.phone" />
        </FormItem>
        <!-- <FormItem :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <Button type="primary" html-type="submit">Submit</Button>
        </FormItem> -->
      </Form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Avatar, Form, FormItem, Input, InputNumber, Textarea, Button } from 'ant-design-vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { reactive } from 'vue'
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
}

const formState = reactive({
  user: {
    name: '',
    email: '',
    phone: ''
  }
})
const onFinish = (values: any) => {
  console.log('Success:', values)
}
</script>
