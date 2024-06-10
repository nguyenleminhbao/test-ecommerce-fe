import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'
import type { IOrder } from '@/interfaces/order.interface'

export const getAllOrder = async () => {
  try {
    const { data } = await axiosInstance.get<IResponse<IOrder[]>>('/order')
    return data
  } catch (err) {
    throw err
  }
}

export const getAllOrderSystem = async () => {
  try {
    const { data } = await axiosInstance.get<IResponse<IOrder[]>>('/order/get-all-order')
    return data
  } catch (err) {
    throw err
  }
}

export const getOneOrderSystem = async (orderId: string) => {
  try {
    const { data } = await axiosInstance.get<IResponse<IOrder>>(`/order/get-one-order/${orderId}`)
    return data
  } catch (err) {
    throw err
  }
}
