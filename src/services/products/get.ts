import type { IProduct } from '@/interfaces/product.interface'
import axiosInstance from '../axios-instance'
import type { IResponse } from '@/interfaces/response.interface'

export const getAllProducts = async (page?: number) => {
  try {
    console.log('fetching')
    const { data } = await axiosInstance.get<IResponse<IProduct[]>>('/products', {
      params: {
        page
      }
    })
    return data
  } catch (err) {
    throw err
  }
}

export const getOneProduct = async (productId: string) => {
  try {
    const { data } = await axiosInstance.get<IResponse<IProduct>>(`/products/${productId}`)

    return data
  } catch (err) {
    throw err
  }
}

export const getShopProducts = async (shopId: string) => {
  try {
    const { data } = await axiosInstance.get<IResponse<IProduct[]>>(
      `/products/get-shop-product/${shopId}`
    )

    return data
  } catch (err) {
    throw err
  }
}
