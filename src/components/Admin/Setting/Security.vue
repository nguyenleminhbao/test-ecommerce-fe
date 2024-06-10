<template>
  <div class="flex flex-col gap-6">
    <h1 class="text-headline-6">Two-factor Authentication</h1>
    <div class="flex gap-2">
      <Switch v-model:checked="checked" />
      <p>Enable or disable two factor authentication</p>
    </div>

    <h1 class="text-headline-6">Change Password</h1>
    <Form
      :model="formState"
      name="basic"      
      layout="vertical"
      :label-col="{ span: 3 }"
      :wrapper-col="{ span: 8 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <FormItem
        label="Current Password"
        name="current password"
        :rules="[{ required: true, message: 'Please input your current password!' }]"
      >
        <InputPassword v-model:value="formState.password" />
      </FormItem>

      <FormItem
        label="New Password"
        name="new password"
        :rules="[{ required: true, message: 'Please input your new password!' }]"
      >
        <InputPassword v-model:value="formState.newPassword" />
      </FormItem>
    </Form>
  </div>
</template>

<script lang="ts" setup>
import { Switch, Form, FormItem, InputPassword } from 'ant-design-vue'
import { ref, reactive } from 'vue'
const checked = ref<boolean>(true)

interface FormState {
  password: string
  newPassword: string
}

const formState = reactive<FormState>({
  password: '',
  newPassword: ''
})
const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>
