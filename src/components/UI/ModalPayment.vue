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
    <div class="min-h-[450px] grid grid-cols-2">
      <section class="object-center flex flex-col">
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
        <div class="mt-4 flex flex-col gap-3 object-center">
          <StatisticCountdown
            :value="deadline"
            @finish="onFinish"
            class="[&_.ant-statistic-content-value]:text-body-1-semibold [&_.ant-statistic-content-value]:!text-[25px] [&_.ant-statistic-content-value]:!text-red-600"
          />
          <!-- <div class="flex items-start max-w-[300px]">
            <ExclamationCircleOutlined class="text-red-600 mr-3 text-xl" />
            <span class="text-hairline-1">
              Payment time is only 15 minutes, if you do not pay, your order will be canceled</span
            >
          </div> -->
        </div>
      </section>
      <section class="relative">
        <img class="w-full h-full object-cover !rounded-r-2xl" src="@/assets/images/payment.png " />
        <div class="absolute top-0 left-0 w-full h-full flex flex-col p-4">
          <span class="text-headline-4 text-white">E-payment</span>
        </div>
      </section>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import type { IZaloResopnse } from '@/interfaces/zalo.interface'
import { Modal, Button, QRCode, StatisticCountdown } from 'ant-design-vue'
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
