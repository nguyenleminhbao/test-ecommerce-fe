import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'
import type { ICart } from '@/interfaces/cart.interface'

export const getCart = async () => {
  const { data } = await axiosInstance.get<IResponse<ICart>>('/cart/get-cart')
  return data
}
