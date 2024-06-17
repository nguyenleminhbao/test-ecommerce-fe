<template>
  <div class="flex flex-col gap-[24px]">
    <h1 class="ml-[24px] text-headline-5">Order Lists</h1>
    <Spin :spinning="!summary || !orders" />
    <Statistic
      v-if="summary && orders"
      :success="summary.success"
      :failed="summary?.failed"
      :total="summary.total"
      :pending="summary.pending"
    />
    <div v-if="summary && orders" class="bg-white p-[24px] rounded-lg">
      <Table :orders="orders" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Spin } from 'ant-design-vue'
import type { IOrder } from '@/interfaces/order.interface'
import Statistic from './Statistic.vue'
import Table from './Table.vue'
import { onMounted, ref } from 'vue'
import { getAllOrderSystem } from '@/services/order/get'
import { calcOrder } from '@/utils/calc-order'

const orders = ref<IOrder[]>([])
const summary = ref<{
  success: number
  failed: number
  total: number
  pending: number
}>()

onMounted(async () => {
  const data = await getAllOrderSystem()
  orders.value = data.message.map((order) => {
    return {
      ...order,
      cartItems: JSON.parse(order.cartItems)
    }
  })
  summary.value = calcOrder(data.message)
})
</script>
