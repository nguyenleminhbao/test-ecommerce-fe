import type { IUser } from '@/interfaces/user.interface'
import { defineStore } from 'pinia'

type State = {
  isShopOwner: boolean
  isAdmin: boolean
  user: IUser | null
}

export const useAuthSystem = defineStore('auth', {
  state: () =>
    ({
      isShopOwner: false,
      isAdmin: false,
      user: null
    }) as State,
  getters: {},
  actions: {
    setShopOwner(value: boolean) {
      this.isShopOwner = value
    },
    setAdmin(value: boolean) {
      this.isAdmin = value
    },
    setAuth(user: IUser) {
      this.user = user
    }
  }
})
