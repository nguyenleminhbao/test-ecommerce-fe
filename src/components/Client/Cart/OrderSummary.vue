<template>
  <section
    class="md:col-span-4 p-6 pt-3 border-[1px] rounded-md border-neutral-600 min-h-[380px] md:max-h-[380px] sticky top-[100px] shadow-lg"
  >
    <span class="text-headline-6">Order summary</span>
    <div class="flex flex-col mt-6">
      <ul class="flex flex-col gap-3">
        <li class="flex items-center justify-between">
          <span class="text-body-2-semibold">Name</span>
          <span>{{ `${form.firstName} ${form.lastName}` }}</span>
        </li>
        <li class="flex items-center justify-between">
          <span class="text-body-2-semibold">Phone</span>
          <span>{{ form.phoneNumber }}</span>
        </li>
        <li class="flex items-start justify-between">
          <span class="text-body-2-semibold">Address</span>
          <span class="max-w-[180px] md:max-w-[200px] two-lines-truncate">{{
            form.shippingAddress
          }}</span>
        </li>
      </ul>
      <span class="h-[1px] w-full bg-slate-300 my-2"></span>
      <div class="flex justify-between items-center">
        <span class="text-body-2-semibold text-neutral-7">Subtotal</span>
        <span class="text-body-2-bold text-neutral-7">{{
          `${formatNumberWithCommas(cartStore.subTotal)} đ`
        }}</span>
      </div>

      <span class="h-[1px] w-full bg-slate-200 my-2"></span>
      <div class="flex justify-between items-center mt-1">
        <span class="text-body-1-semibold text-neutral-7">Total</span>
        <span class="text-body-1-bold text-neutral-7">{{
          `${formatNumberWithCommas(cartStore.subTotal)} đ`
        }}</span>
      </div>
    </div>
    <Button
      type="text"
      html-type="submit"
      class="bg-neutral-7 absolute bottom-5 w-[calc(100%_-_48px)] text-white h-[44px] text-lg mt-6"
      @click="order"
    >
      <Spin v-if="isLoading" class="[&_.ant-spin-dot-item]:bg-black" />
      <span v-else>Order</span>
    </Button>
  </section>
</template>

<script setup lang="ts">
import { Button, Spin } from 'ant-design-vue'
import { useCart } from '@/stores/use-cart'
import { formatNumberWithCommas } from '@/utils'
import type { FormOrderType } from './ClientCart.vue'

const { form, isLoading } = defineProps<{
  form: FormOrderType
  isLoading: boolean
}>()

const cartStore = useCart()
const emit = defineEmits(['order'])
const order = () => {
  emit('order')
}
</script>

<style scoped>
*.nameRadio {
  display: flex;
  justify-content: space-between;

  min-width: 220px;
}

.shippingItem .ant-radio-wrapper-checked {
  background-color: rgb(163, 189, 245);
}
</style>
