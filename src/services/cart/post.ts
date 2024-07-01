import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'

type AddToCartType = {
  variantId: number
  image: string
  price: number
  quantity: number
  title: string
}

export const addToCart = async (_data: AddToCartType) => {
  const { data } = await axiosInstance.post<IResponse<string>>('/cart/add-to-cart', _data)
  return data
}

export const updateQuantity = async (_data: { quantity: number; variantId: number }) => {
  const { data } = await axiosInstance.post<IResponse<string>>('/cart/update-quantity', _data)
  return data
}

export const deleteCartItem = async (variantId: number) => {
  const { data } = await axiosInstance.post<IResponse<string>>('/cart/delete-cart-item', {
    variantId
  })
  return data
}

export const deleteAll = async () => {
  const { data } = await axiosInstance.post<IResponse<string>>('/cart/delete-all')
  return data
}
