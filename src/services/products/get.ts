import type { IProduct } from '@/interfaces/product.interface'
import axiosInstance from '../axios-instance'
import type { IResponse } from '@/interfaces/response.interface'

export const getAllProducts = async (page?: number) => {
  const { data } = await axiosInstance.get<IResponse<IProduct[]>>('/products', {
    params: {
      page
    }
  })
  return data
}

export const getOneProduct = async (productId: string) => {
  const { data } = await axiosInstance.get<IResponse<IProduct>>(`/products/${productId}`)

  return data
}

export const getShopProducts = async (shopId: string) => {
  const { data } = await axiosInstance.get<IResponse<IProduct[]>>(
    `/products/get-shop-product/${shopId}`
  )

  return data
}
