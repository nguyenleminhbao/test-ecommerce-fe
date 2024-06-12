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

type UpdateReelType = {
  reelId: string
  idVideoOld: string
  newVideoUrl: string
  title: string
  description: string
}

export const updateBanner = async (_data: UpdateBannerType) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/upload/update-banner', _data)
    return data
  } catch (err) {
    throw err
  }
}

export const updateShopAvatar = async (_data: UpdateShopAvatarType) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>(
      '/upload/update-shop-avatar',
      _data
    )
    return data
  } catch (err) {
    throw err
  }
}

export const updateReel = async (_data: UpdateReelType) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/upload/update-reel', _data)
    return data
  } catch (err) {
    throw err
  }
}
