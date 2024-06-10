import type { ICartItem } from './cart.interface'

export enum STATUS_ORDER {
  FULFILLED = 'FULFILLED',
  UNFULFILLED = 'UNFULFILLED'
}

export interface IOrder {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  avatarUser: string
  email: string
  address: string
  paymentMethod: string
  cartItems: string
  amount: number
  status: STATUS_ORDER
  userId: string
  createdAt: string
  orderItems?: ICartItem[] // FOR ADMIN ONLY
}
