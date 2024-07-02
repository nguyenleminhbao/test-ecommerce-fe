<template>
  <div
    class="p-6 pt-3 border-[1px] rounded-md border-neutral-600 shadow-lg [&_.ant-form-item]:!mb-0"
  >
    <span class="text-headline-7">Payment method</span>
    <div class="w-full gap-4 mt-5">
      <FormItem
        name="payMethod"
        :rules="[{ required: true, message: 'Please select payment method' }]"
      >
        <RadioGroup class="flex flex-col gap-3" v-model:value="localForm.payMethod">
          <li
            class="shippingItem p-2 rounded-md border-[1px] border-neutral-600 flex justify-between items-center w-full"
          >
            <Radio :value="PAYMENT_TYPE.DELIVERY" class="w-full">
              <span class="text-md font-medium">Payment on Delivery</span></Radio
            >
          </li>
          <li
            class="shippingItem p-2 rounded-md border-[1px] border-neutral-600 flex justify-between items-center w-full"
          >
            <Radio :value="PAYMENT_TYPE.ZALOPAY" class="w-full">
              <span class="text-md font-medium">Pay by ZaloPay</span>
            </Radio>
          </li>
          <li
            class="shippingItem p-2 rounded-md border-[1px] border-neutral-600 flex justify-between items-center w-full"
          >
            <Radio :value="PAYMENT_TYPE.CREDIT" class="w-full">
              <span class="text-md font-medium"> Pay by Card Credit </span>
            </Radio>
          </li>
        </RadioGroup>
      </FormItem>
      <FormItem name="bank" class="hidden">
        <Input v-model:value="localForm.bankCode" />
      </FormItem>
      <div
        v-if="form.payMethod == PAYMENT_TYPE.CREDIT"
        class="h-[1px] w-full bg-slate-300 my-6 duration-300"
      ></div>
      <div
        v-if="form.payMethod == PAYMENT_TYPE.CREDIT"
        class="w-full grid grid-cols-3 md:grid-cols-5 gap-4 duration-5ss00 ease-linear"
      >
        <div
          class="rounded-md flex flex-col items-center shadow-lg cursor-pointer py-2 max-h-[88px]"
          :class="bankNum == index ? 'border-neutral-500 border-[2px]' : ''"
          v-for="(bank, index) in banks"
          :key="index"
          @click="selectBank(index)"
        >
          <img
            :src="width < 450 ? bank.url : '../src/assets/images/' + bank.image"
            class="w-[50px] aspect-square object-contain"
          />

          <span class="font-semibold text-[12px] md:text-[15px]">{{ bank.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FormItem, Radio, RadioGroup, Input } from 'ant-design-vue'
import { ref, reactive } from 'vue'
import { banks } from '@/constants/bank'
import type { FormOrderType } from '../index.vue'
import { PAYMENT_TYPE } from '@/constants/enum/payment.enum'
import { useWindowSize } from '@vueuse/core'

const props = defineProps<{
  form: FormOrderType
}>()

const localForm = reactive({ ...props.form })
const { width } = useWindowSize()
const bankNum = ref<number>(-1)

const selectBank = (index: number) => {
  bankNum.value = index
  const bank = banks.find((bank, id) => id == index)
  localForm.bankCode = bank?.bankCode
}
</script>

<style scoped>
.shippingItem .ant-radio-wrapper-checked {
  width: 100%;
}
</style>
