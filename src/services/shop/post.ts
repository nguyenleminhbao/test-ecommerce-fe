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
  try {
    const { data } = await axiosInstance.post<IResponse<string>>(
      '/shop/update-banner-marketplace',
      {
        banners
      }
    )
    return data
  } catch (err) {
    throw err
  }
}

export const updateBanner = async (_data: UpdateBannerType) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/shop/update-banner', _data)
    return data
  } catch (err) {
    throw err
  }
}

export const updateShopAvatar = async (_data: UpdateShopAvatarType) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/shop/update-shop-avatar', _data)
    return data
  } catch (err) {
    throw err
  }
}
