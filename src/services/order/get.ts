import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'
import type { IOrder } from '@/interfaces/order.interface'

export const getAllOrder = async () => {
  const { data } = await axiosInstance.get<IResponse<IOrder[]>>('/order')
  return data
}

export const getAllOrderSystem = async () => {
  const { data } = await axiosInstance.get<IResponse<IOrder[]>>('/order/get-all-order')
  return data
}

export const getOneOrderSystem = async (orderId: string) => {
  const { data } = await axiosInstance.get<IResponse<IOrder>>(`/order/get-one-order/${orderId}`)
  return data
}
