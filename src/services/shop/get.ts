import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'
import type { IShop } from '@/interfaces/shop.interface'

export const getAllShopName = async () => {
  const { data } = await axiosInstance.get<
    IResponse<
      {
        shopId: string
        shopName: string
      }[]
    >
  >('/shop/get-shop-name')
  return data
}

export const getOneShop = async (shopId: string) => {
  const { data } = await axiosInstance.get<IResponse<IShop>>(`/shop/get-shop/${shopId}`)
  return data
}

export const getShopAdmin = async () => {
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
}

export const getAllShop = async () => {
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
}

export const randomBanner = async () => {
  const { data } = await axiosInstance.get<IResponse<string[]>>('/shop/random-banner')
  return data
}

export const getBanners = async () => {
  const { data } = await axiosInstance.get<
    IResponse<
      {
        shopName: string
        banner: string
      }[]
    >
  >('/shop/get-banners')
  return data
}

export const getBannerPromotion = async () => {
  const { data } = await axiosInstance.get<IResponse<string[]>>('/shop/get-banner-promotion')
  return data
}
