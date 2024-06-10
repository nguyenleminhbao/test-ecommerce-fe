<template>
  <div
    class="p-6 pt-3 border-[1px] rounded-md border-neutral-600 shadow-lg [&_.ant-form-item]:!mb-0"
  >
    <span class="text-headline-7">Contact Information</span>
    <div class="w-full grid grid-cols-2 gap-4 mt-5">
      <FormItem
        name="firstName"
        :rules="[{ required: true, message: 'Please input your first name!' }]"
      >
        <span class="text-body-2-semibold text-neutral-4"
          >First Name <span class="text-red-600 text-lg">*</span></span
        >
        <Input v-model:value="form.firstName" class="mt-2" placeholder="Nguyen Van" />
      </FormItem>
      <FormItem
        name="lastName"
        :rules="[{ required: true, message: 'Please input your last name!' }]"
      >
        <span class="text-body-2-semibold text-neutral-4"
          >Last Name <span class="text-red-600 text-lg">*</span></span
        >
        <Input v-model:value="form.lastName" class="mt-2" placeholder="A" />
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
        <Input v-model:value="form.phoneNumber" class="mt-2" placeholder="0398841271" />
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
          v-model:value="form.shippingAddress"
          placeholder="please select your zone"
          class="mt-2"
        >
          <SelectOption value="default">Zone one</SelectOption>
          <SelectOption value="option">Zone two</SelectOption>
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
      <FormItem class="col-span-2" name="street">
        <span class="text-body-2-semibold text-neutral-4"
          >Street Address <span class="text-red-600 text-lg">*</span></span
        >
        <Input
          v-model:value="formAddress.street"
          required
          class="mt-2"
          placeholder="12 Le Duan, Quan 1, tp Ho Chi Minh"
        />
      </FormItem>

      <FormItem class="col-span-2" name="city">
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
import { Form, FormItem, Input, Select, SelectOption, Modal } from 'ant-design-vue'
import { PlusCircleOutlined } from '@ant-design/icons-vue'
import { ref, watchEffect } from 'vue'
import type { FormOrderType } from '../index.vue'

const { form } = defineProps<{
  form: FormOrderType
}>()

const open = ref<boolean>(false)
const showModal = () => {
  open.value = true
}

const handleOk = (e: MouseEvent) => {
  open.value = false
}

const formAddress = ref<{
  street: string
  city: string
}>({
  street: '',
  city: ''
})
</script>
