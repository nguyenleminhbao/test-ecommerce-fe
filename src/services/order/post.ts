import type { IShopCart } from '@/interfaces/zalo.interface'
import axiosInstance from '../axios-instance'
import type { IResponse } from '@/interfaces/response.interface'
import type { IOrder } from '@/interfaces/order.interface'

type CreateOrder = {
  firstName: string
  lastName: string
  phoneNumber: string
  address: string
  paymentMethod: string
  shopCart: IShopCart[]
  amount: number
}

export const createOrder = async (_data: CreateOrder) => {
  const { data } = await axiosInstance.post<IResponse<IOrder>>('/order', _data)
  return data
}
