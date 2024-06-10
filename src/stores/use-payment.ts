import type { IUser } from '@/interfaces/user.interface'
import type { IZaloResopnse } from '@/interfaces/zalo.interface'
import { defineStore } from 'pinia'

type State = {
  user: IUser | null
  paymentSession: IZaloResopnse | null
}

export const usePayment = defineStore('payment', {
  state: () =>
    ({
      user: null,
      paymentSession: null
    }) as State,
  getters: {},
  actions: {
    setUser(user: IUser) {
      this.user = user
    },
    setPaymentSession(res: IZaloResopnse | null) {
      this.paymentSession = res
    }
  }
})
