<template>
  <div
    class="p-6 pt-3 border-[1px] rounded-md border-neutral-600 shadow-lg [&_.ant-form-item]:!mb-0"
  >
    <span class="text-headline-7">Contact Information</span>
    <div class="w-full grid grid-cols-2 gap-4 mt-5">
      <FormItem
        name="firstName"
        :rules="[{ required: true, message: 'Please input your first name!' }]"
        class="col-span-2 md:col-span-1"
      >
        <span class="text-body-2-semibold text-neutral-4"
          >First Name <span class="text-red-600 text-lg">*</span></span
        >
        <Input v-model:value="localForm.firstName" class="mt-2" placeholder="Nguyen Van" />
      </FormItem>
      <FormItem
        name="lastName"
        :rules="[{ required: true, message: 'Please input your last name!' }]"
        class="col-span-2 md:col-span-1"
      >
        <span class="text-body-2-semibold text-neutral-4"
          >Last Name <span class="text-red-600 text-lg">*</span></span
        >
        <Input v-model:value="localForm.lastName" class="mt-2" placeholder="A" />
      </FormItem>
      <FormItem
        class="col-span-2"
        name="phoneNumber"
        :rules="[
          {
            required: true,
            pattern: /^(\+?84|0)([3|5|7|8|9]{1})([0-9]{8})$/,
            message: 'Please input correct your phone number!'
          }
        ]"
      >
        <span class="text-body-2-semibold text-neutral-4"
          >Phone number <span class="text-red-600 text-lg">*</span></span
        >
        <Input v-model:value="localForm.phoneNumber" class="mt-2" placeholder="0398841271" />
      </FormItem>

      <FormItem
        class="col-span-2"
        name="shippingAddress"
        :rules="[{ required: true, message: 'Please input your shipping address!' }]"
      >
        <div class="flex items-center">
          <span class="text-body-2-semibold text-neutral-4"
            >Shipping Address <span class="text-red-600 text-lg">*</span></span
          >
          <span class="object-center ml-3 text-lg cursor-pointer" @click="showModal"
            ><PlusCircleOutlined
          /></span>
        </div>

        <Select
          v-model:value="localForm.shippingAddress"
          placeholder="please select your zone"
          class="mt-2"
        >
          <SelectOption
            v-for="(address, index) in listAddress"
            :key="index"
            :value="`${address.streetAddress}, ${address.city}`"
            >{{ `${address.streetAddress}, ${address.city}` }}</SelectOption
          >
        </Select>
      </FormItem>
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
import { Form, FormItem, Input, Select, SelectOption, Modal, message } from 'ant-design-vue'
import { PlusCircleOutlined } from '@ant-design/icons-vue'
import { onMounted, ref } from 'vue'
import type { FormOrderType } from '../TheCart.vue'
import type { IAddress } from '@/interfaces/user.interface'
import { getAllAddress } from '@/services/detail-user/get'
import { createAddress } from '@/services/detail-user/post'

const props = defineProps<{
  form: FormOrderType
}>()

const localForm = ref<FormOrderType>({ ...props.form })

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
