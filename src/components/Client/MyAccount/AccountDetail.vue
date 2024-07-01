<template>
  <Form
    ref="formRef"
    name="edit-account"
    class="w-full flex flex-col gap-10"
    layout="vertical"
    autocomplete="off"
    :model="formState"
    :rules="rules"
    @finish="handleFinish"
    @validate="handleValidate"
  >
    <div class="flex flex-col gap-6">
      <h1 class="text-body-1-semibold">Account Details</h1>
      <div>
        <FormItem label="First name" name="firstName" class="text-hairline-2 text-neutral-4">
          <Input v-model:value="formState.firstName" />
        </FormItem>

        <FormItem label="Last name" name="lastName" class="text-hairline-2 text-neutral-4">
          <Input v-model:value="formState.lastName" />
        </FormItem>

        <FormItem label="Display name" name="displayName" class="text-hairline-2 text-neutral-4">
          <Input v-model:value="formState.displayName" />
        </FormItem>

        <FormItem label="Email" name="email" class="text-hairline-2 text-neutral-4">
          <Input v-model:value="formState.email" />
        </FormItem>
      </div>
    </div>

    <div class="flex flex-col gap-6">
      <h1 class="text-body-1-semibold">Password</h1>
      <div>
        <FormItem label="Old Password" name="oldPass" class="text-hairline-2 text-neutral-4">
          <InputPassword v-model:value="formState.oldPass" />
        </FormItem>
        <FormItem
          has-feedback
          label="New Password"
          name="pass"
          class="text-hairline-2 text-neutral-4"
        >
          <InputPassword v-model:value="formState.pass" />
        </FormItem>
        <FormItem
          has-feedback
          label="Confirm Password"
          name="checkPass"
          class="text-hairline-2 text-neutral-4"
        >
          <InputPassword v-model:value="formState.checkPass" type="password" />
        </FormItem>
      </div>
      <div>
        <Button size="large" type="primary" html-type="submit">Save changes</Button>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form, FormItem, Input, InputPassword, Button } from 'ant-design-vue'
import { ref } from 'vue'
import type { Rule } from 'ant-design-vue/es/form'
import type { FormInstance } from 'ant-design-vue'
import { useAuthSystem } from '@/stores/use-auth'
interface FormState {
  firstName: string
  lastName: string
  displayName: string
  email: string
  oldPass: string
  pass: string
  checkPass: string
}

const authStore = useAuthSystem()
const formRef = ref<FormInstance>()
const formState = ref<FormState>({
  firstName: authStore.user?.firstName ?? '',
  lastName: authStore.user?.lastName ?? '',
  displayName: authStore.user?.name ?? '',
  email: '',
  oldPass: '',
  pass: '',
  checkPass: ''
})
const validatePass = async (_rule: Rule, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the password')
  } else {
    if (formRef.value && formState.value.checkPass !== '') {
      formRef.value.validateFields('checkPass')
    }
    return Promise.resolve()
  }
}
const validateCheckPass = async (_rule: Rule, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the password again')
  } else if (value !== formState.value.pass) {
    return Promise.reject("Two inputs don't match!")
  } else {
    return Promise.resolve()
  }
}

const rules: Record<string, Rule[]> = {
  firstName: [{ required: true, message: 'Please input!' }],
  lastName: [{ required: true, message: 'Please input!' }],
  displayName: [{ required: true, message: 'Please input!' }],
  email: [{ required: true, message: 'Please input!' }],
  oldPass: [{ required: true, message: 'Please input password!' }],
  pass: [{ required: true, validator: validatePass, trigger: 'change' }],
  checkPass: [{ required: true, validator: validateCheckPass, trigger: 'change' }]
}

const handleFinish = (values: FormState) => {
  console.log(values, formState)
}

const handleValidate = (...args: any) => {
  console.log(args)
}
</script>
