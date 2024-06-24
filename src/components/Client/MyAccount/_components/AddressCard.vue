<template>
  <div class="flex flex-col gap-2 p-4 border-neutral-4 border rounded-lg">
    <button v-if="newAdd" @click="showModal" class="h-full flex justify-center items-center">
      <PlusCircleOutlined />
    </button>
    <div v-else>
      <div class="flex justify-between text-body-2-semibold">
        <div class="flex gap-1 items-center">
          <h1 class="text-body-2-semibold">{{ type }} Address</h1>
          <CheckCircleOutlined v-if="default" class="text-secondary-red" />
        </div>
        <button @click="showModal" class="flex gap-1 items-center text-neutral-4">
          <EditOutlined />
          <span class="text-body-2-semibold">Edit</span>
        </button>
      </div>

      <div class="flex flex-col gap-1 text-caption-1">
        <span>{{ name }}</span>
        <span>{{ phone }}</span>
        <span>{{ address }}</span>
      </div>
    </div>

    <Modal v-model:visible="open" title="Address Infomation" @ok="handleOk">
      <template #footer>
        <Button key="submit" type="primary" :loading="loading" @click="handleOk">Add</Button>
      </template>
      <Form
        :model="formState"
        name="basic"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 20 }"
        autocomplete="off"
      >
        <FormItem label="Name" name="name" :rules="[{ required: true, message: 'Please input!' }]">
          <Input v-model:value="formState.name" />
        </FormItem>

        <FormItem
          label="Phone"
          name="phone"
          :rules="[{ required: true, message: 'Please input!' }]"
        >
          <Input v-model:value="formState.phone" />
        </FormItem>

        <FormItem
          label="Address"
          name="address"
          :rules="[{ required: true, message: 'Please input!' }]"
        >
          <Input v-model:value="formState.address" />
        </FormItem>

        <FormItem label="Type" name="type" :rules="[{ required: true, message: 'Please input!' }]">
          <RadioGroup v-model:value="formState.type">
            <Radio value="Home">Home</Radio>
            <Radio value="Company">Company</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem name="remember" :wrapper-col="{ offset: 5, span: 20 }">
          <Checkbox v-model:checked="formState.default">Set default</Checkbox>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { Modal, Form, FormItem, Input, Checkbox, RadioGroup, Radio, Button } from 'ant-design-vue'
import { PlusCircleOutlined, EditOutlined, CheckCircleOutlined } from '@ant-design/icons-vue'

const props = defineProps<{
  newAdd: boolean
  type?: string
  name?: string
  phone?: string
  address?: string
  default?: boolean
}>()

import { ref, reactive } from 'vue'
const open = ref<boolean>(false)
const loading = ref<boolean>(false)

const showModal = () => {
  open.value = true
}

const handleOk = () => {
  console.log('Success:', formState)

  emit('update:type', formState.type)
  emit('update:name', formState.name)
  emit('update:phone', formState.phone)
  emit('update:address', formState.address)
  emit('update:default', formState.default)

  loading.value = true
  setTimeout(() => {
    loading.value = false
    open.value = false
  }, 2000)
}

interface FormState {
  name: string
  phone: string
  address: string
  type: string
  default: boolean
}

const formState = reactive<FormState>({
  name: props.name ?? 'user',
  phone: props.phone ?? '0123456789',
  address: props.address ?? 'address default',
  type: props.type ?? 'default',
  default: props.default
})

const emit = defineEmits<{
  (e: 'update:type', value: string): void
  (e: 'update:name', value: string): void
  (e: 'update:phone', value: string): void
  (e: 'update:address', value: string): void
  (e: 'update:default', value: boolean): void
}>()
</script>
