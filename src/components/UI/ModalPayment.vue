<template>
  <Modal
    v-model:open="open"
    @ok="handleOk"
    :destroyOnClose="true"
    :footer="null"
    :width="750"
    :centered="true"
    :closable="false"
    class="[&_.ant-modal-content]:!p-0 [&_.ant-modal-content]:!rounded-2xl"
  >
    <div
      class="min-h-[450px] flex flex-col md:grid md:grid-cols-10 gap-5 md:gap-10 object-center p-6"
    >
      <section class="flex flex-col md:col-span-4 h-[300px]">
        <div
          class="qr-code-container w-[230px] aspect-square border-[3px] border-black object-center"
        >
          <QRCode
            error-level="H"
            :size="200"
            class="!bg-white fixed top-0"
            bgColor="#fff"
            :value="zaloResponse?.qrCode"
            icon="https://www.antdv.com/assets/logo.1ef800a8.svg"
          />
          <div class="scanline"></div>
        </div>
        <div class="mt-4 flex gap-3 object-center w-[230px]">
          <span class="font-semibold text-[15px] inline-block"
            >The time to scan the QR code for payment is still</span
          >
          <StatisticCountdown
            :value="deadline"
            format="mm:ss"
            @finish="onFinish"
            class="[&_.ant-statistic-content-value]:text-body-1-semibold [&_.ant-statistic-content-value]:!text-[20px] [&_.ant-statistic-content-value]:!text-blue-600 [&_.ant-statistic-content-value]:italic"
          />
        </div>
      </section>
      <section class="md:col-span-6 md:h-[300px]">
        <h1 class="flex text-headline-7 font-bold md:text-headline-6 !text-black">
          <span class="mr-2">Pay with</span>
          <img
            src="@/assets/images/zalopay.png"
            class="w-[50px] md:w-[72px] h-6 md:h-8 md:translate-y-[2px]"
          />
          <span>using QR code</span>
        </h1>
        <div class="flex flex-col mt-5 md:mt-10 ml-5 text-[17px]">
          <span class="font-semibold text-black">Payment Guide</span>
          <ul class="flex flex-col mt-2">
            <li>Step 1: Open <span class="font-semibold">ZaloPay</span> application</li>
            <li>
              Step 2: Select "<span class="font-semibold">Payment</span>" and scan the qr code
            </li>
            <li>
              Step 3: Click <span class="font-semibold">Confirm</span> payment to complete the order
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import type { IZaloResopnse } from '@/interfaces/zalo.interface'
import { Modal, QRCode, StatisticCountdown } from 'ant-design-vue'
import type { Socket } from 'socket.io-client'
import { ref } from 'vue'

const open = ref<boolean>(false)
const zaloResponse = ref<IZaloResopnse>()
const deadline = Date.now() + 15 * 60 * 1000

const showModal = () => {
  open.value = true
}

const closeModal = (socket?: Socket) => {
  open.value = false
  if (socket) socket.disconnect()
}

const assignZaloResponse = (data: IZaloResopnse) => {
  zaloResponse.value = data
  console.log(zaloResponse)
}

const handleOk = (e: MouseEvent) => {
  console.log(e)
  open.value = false
}

const onFinish = () => {
  console.log('finished!')
}

defineExpose({
  showModal,
  closeModal,
  assignZaloResponse
})
</script>

<style scoped></style>
