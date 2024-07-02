<template>
  <div class="flex flex-col gap-[19px]">
    <h1 class="text-body-1-semibold flex gap-2">
      Address
      <Button
        class="flex justify-center items-center bg-neutral-7 text-white"
        @click="showModal"
        :icon="h(PlusCircleOutlined)"
        >New</Button
      >
    </h1>

    <Spin
      class="[&_.ant-spin-dot-item]:bg-black [&_.ant-spin-dot-item]:text-xl"
      :spinning="!listAddress"
      size="large"
    />
    <div class="grid grid-cols-2 max-lg:grid-cols-1 gap-[23px]">
      <AddressCard
        v-for="(address, index) in listAddress"
        :key="index"
        :id="index"
        :street="address.streetAddress"
        :city="address.city"
      />
    </div>
  </div>

  <Modal
    v-model:open="open"
    title="New address shipping"
    @ok="handleOk"
    okText="Add"
    class="[&_.ant-modal-title]:text-headline-6"
  >
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
import AddressCard from './_components/AddressCard.vue'
import { Form, FormItem, Input, Button, Modal, Spin, message } from 'ant-design-vue'
import { PlusCircleOutlined } from '@ant-design/icons-vue'
import { onMounted, ref, h } from 'vue'
import type { IAddress } from '@/interfaces/user.interface'
import { getAllAddress } from '@/services/detail-user/get'
import { createAddress } from '@/services/detail-user/post'

const listAddress = ref<IAddress[]>([])

const open = ref<boolean>(false)
const showModal = () => {
  open.value = true
}

const handleOk = async () => {
  if (!formAddress.value.streetAddress || !formAddress.value.city) {
    message.error('Please fill in all information')
  } else {
    await createAddress({
      streetAddress: formAddress.value.streetAddress,
      city: formAddress.value.city
    })
    const data = await getAllAddress()
    listAddress.value = data.message
    message.success('Create new address successfully')
    open.value = false
  }
}

const formAddress = ref<{
  streetAddress: string
  city: string
}>({
  streetAddress: '',
  city: ''
})

onMounted(async () => {
  const data = await getAllAddress()
  listAddress.value = data.message
})
</script>
