<template>
  <div class="flex flex-col gap-2 p-4 border-neutral-4 border rounded-lg">
    <div class="flex justify-between text-body-2-semibold">
      <h1 class="text-body-2-semibold">Address #{{ id }}</h1>
      <Button
        type="text"
        @click="showModal"
        class="flex gap-1 items-center text-neutral-4 text-body-2-semibold"
        :icon="h(EditOutlined)"
      >
        Edit
      </Button>
    </div>

    <div class="flex flex-col gap-1 text-caption-1">
      <span>{{ street }}</span>
      <span>{{ city }}</span>
    </div>
  </div>

  <Modal
    v-model:open="open"
    title="Edit address shipping"
    @ok="handleOk"
    class="[&_.ant-modal-title]:text-headline-6"
  >
    <template #footer>
      <Button key="back" type="primary" :loading="loadingDel" @click="handleDel" danger>
        Delete
      </Button>
      <Button key="submit" type="primary" :loading="loadingEdit" @click="handleOk">Edit</Button>
    </template>

    <Form class="w-full grid grid-cols-2 gap-3" :model="formAddress">
      <FormItem
        class="col-span-2"
        name="streetAddress"
        :rules="[{ required: true, message: 'Please input your street!' }]"
      >
        <span class="text-body-2-semibold text-neutral-4"
          >Street Address <span class="text-red-600 text-lg">*</span></span
        >
        <Input
          v-model:value="formAddress.streetAddress"
          required
          class="mt-2"
          placeholder="12 Le Duan, Quan 1"
        />
      </FormItem>

      <FormItem
        class="col-span-2"
        name="city"
        :rules="[{ required: true, message: 'Please input your city!' }]"
      >
        <span class="text-body-2-semibold text-neutral-4"
          >City <span class="text-red-600 text-lg">*</span></span
        >
        <Input
          v-model:value="formAddress.city"
          required
          class="mt-2"
          placeholder="Tp Ho Chi Minh"
        />
      </FormItem>
    </Form>
  </Modal>
</template>

<script setup lang="ts">
import { Modal, Form, FormItem, Input, Button, message } from 'ant-design-vue'
import { EditOutlined } from '@ant-design/icons-vue'
import { onMounted, ref, watchEffect, h } from 'vue'
import type { IAddress } from '@/interfaces/user.interface'
import { createAddress } from '@/services/detail-user/post'

const { id, street, city } = defineProps<{
  id: number
  street: string
  city: string
}>()

const loadingEdit = ref<boolean>()
const loadingDel = ref<boolean>()
const open = ref<boolean>(false)
const showModal = () => {
  open.value = true
}

const formAddress = ref<{
  streetAddress: string
  city: string
}>({
  streetAddress: '',
  city: ''
})

const handleOk = async (e: MouseEvent) => {
  if (!formAddress.value.streetAddress || !formAddress.value.city) {
    message.error('Please fill in all information')
  } else {
    loadingEdit.value = true
    await createAddress({
      streetAddress: formAddress.value.streetAddress,
      city: formAddress.value.city
    })
    loadingEdit.value = false
    message.success('Edit address successfully')
    open.value = false
  }
}

const handleDel = async (e: MouseEvent) => {
  loadingDel.value = true

  await createAddress({
    streetAddress: formAddress.value.streetAddress,
    city: formAddress.value.city
  })
  loadingDel.value = false
  message.success('Delete address successfully')
}
</script>
