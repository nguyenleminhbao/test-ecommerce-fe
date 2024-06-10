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
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/cart/add-to-cart', _data)
    return data
  } catch (err) {
    throw err
  }
}

export const updateQuantity = async (_data: { quantity: number; variantId: number }) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/cart/update-quantity', _data)
    return data
  } catch (err) {
    throw err
  }
}

export const deleteCartItem = async (variantId: number) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/cart/delete-cart-item', {
      variantId
    })
    return data
  } catch (err) {
    throw err
  }
}

export const deleteAll = async () => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/cart/delete-all')
    return data
  } catch (err) {
    throw err
  }
}
