<template>
  <section
    class="col-span-3 p-6 pt-3 border-[1px] rounded-md border-neutral-600 max-h-[400px] sticky top-[100px] shadow-lg"
  >
    <span class="text-headline-6">Cart summary</span>
    <div class="flex flex-col mt-6">
      <RadioGroup class="flex flex-col gap-3" v-model:value="value">
        <li
          class="shippingItem p-2 rounded-md border-[1px] border-neutral-600 flex justify-between items-center"
        >
          <Radio :value="1" class="w-full">
            <div class="nameRadio">
              <span class="block text-black">Free shipping</span>
              <span class="block text-black">0 đ</span>
            </div>
          </Radio>
        </li>
        <li
          class="shippingItem p-2 rounded-md border-[1px] border-neutral-600 flex justify-between items-center"
        >
          <Radio :value="2">
            <div class="nameRadio">
              <span class="block text-black">Express shipping</span>
              <span class="block text-black">0 đ</span>
            </div>
          </Radio>
        </li>
        <li
          class="shippingItem p-2 rounded-md border-[1px] border-neutral-600 flex justify-between items-center"
        >
          <Radio :value="3">
            <div class="nameRadio">
              <span class="block text-black">Pick Up</span>
              <span class="block text-black">0 đ</span>
            </div></Radio
          >
        </li>
      </RadioGroup>

      <div class="flex justify-between items-center mt-4">
        <span class="text-body-2-semibold text-neutral-7">Subtotal</span>
        <span class="text-body-2-bold text-neutral-7">{{
          `${formatNumberWithCommas(cartStore.subTotal)} đ`
        }}</span>
      </div>

      <span class="h-[1px] w-full bg-slate-300 my-2"></span>
      <div class="flex justify-between items-center mt-1">
        <span class="text-body-1-semibold text-neutral-7">Total</span>
        <span class="text-body-1-bold text-neutral-7">{{
          `${formatNumberWithCommas(cartStore.subTotal)} đ`
        }}</span>
      </div>

      <Button type="text" class="bg-neutral-7 text-white h-[44px] text-lg mt-6" @click="checkout"
        >Check out</Button
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Radio, RadioGroup, Button } from 'ant-design-vue'
import { useCart } from '@/stores/use-cart'
import { formatNumberWithCommas } from '@/utils'
const value = ref<number>(1)
const emit = defineEmits(['checkout'])

const cartStore = useCart()

const checkout = () => {
  emit('checkout')
}
</script>

<style scoped>
*.nameRadio {
  display: flex;
  justify-content: space-between;

  min-width: 220px;
}

/* .shippingItem .ant-radio-wrapper-checked {
  background-color: rgb(163, 189, 245);
} */
</style>
