import { STATUS_ORDER } from '@/constants/enum/status-order.enum'
import type { IOrder } from '@/interfaces/order.interface'

export const calcOrder = (orders: IOrder[]) => {
  const success = orders.length
  const failed = 0
  let total = 0
  let pending = 0

  orders.map((order) => {
    if (order.status == STATUS_ORDER.FULFILLED) {
      total += order.amount
    }
    if (order.status == STATUS_ORDER.UNFULFILLED) {
      pending += order.amount
    }
  })

  return {
    success,
    failed,
    total,
    pending
  }
}
