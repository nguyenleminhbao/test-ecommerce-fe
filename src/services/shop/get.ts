import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'
import type { IShop } from '@/interfaces/shop.interface'

export const getAllShopName = async () => {
  try {
    const { data } = await axiosInstance.get<
      IResponse<
        {
          shopId: string
          shopName: string
        }[]
      >
    >('/shop/get-shop-name')
    return data
  } catch (err) {
    throw err
  }
}

export const getOneShop = async (shopId: string) => {
  try {
    const { data } = await axiosInstance.get<IResponse<IShop>>(`/shop/get-shop/${shopId}`)
    return data
  } catch (err) {
    throw err
  }
}

export const getShopAdmin = async () => {
  try {
    const { data } = await axiosInstance.get<
      IResponse<{
        shopId: string
        userId: string
        shopName: string
        shopAvatar: string
        shopBanners: string[]
        isShopOwner: boolean
      }>
    >(`/shop/get-shop-admin`)
    return data
  } catch (err) {
    throw err
  }
}

export const getAllShop = async () => {
  try {
    const { data } = await axiosInstance.get<
      IResponse<
        {
          id: string
          shopName: string
          shopAvatar: string
          user: {
            name: string
            avatar: string
          }
        }[]
      >
    >('/shop')
    return data
  } catch (err) {
    throw err
  }
}
