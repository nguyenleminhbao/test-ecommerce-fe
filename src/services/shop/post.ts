import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'

type UpdateBannerType = {
  numOfBanner: number
  idImageOld: string
  shopId: string
  newImageUrl: string
}

type UpdateShopAvatarType = {
  idImageOld: string
  shopId: string
  newImageUrl: string
}

export const updateBannerMarketPlace = async (banners: string[]) => {
  const { data } = await axiosInstance.post<IResponse<string>>('/shop/update-banner-marketplace', {
    banners
  })
  return data
}

export const updateBanner = async (_data: UpdateBannerType) => {
  const { data } = await axiosInstance.post<IResponse<string>>('/shop/update-banner', _data)
  return data
}

export const updateShopAvatar = async (_data: UpdateShopAvatarType) => {
  const { data } = await axiosInstance.post<IResponse<string>>('/shop/update-shop-avatar', _data)
  return data
}
