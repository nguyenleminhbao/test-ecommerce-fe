import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'
import type { IReel } from '@/interfaces/news.interface'

export const getAllReel = async () => {
  try {
    console.log('fetching reel')
    const { data } = await axiosInstance.get<IResponse<IReel[]>>('/news/reel')

    return data
  } catch (err) {
    throw err
  }
}

export const getReelByShop = async (shopId: string) => {
  try {
    const { data } = await axiosInstance.get<IResponse<IReel[]>>(`/news/reel/shop/${shopId}`)
    return data
  } catch (err) {
    throw err
  }
}

export const getReelById = async (reelId: string) => {
  try {
    const { data } = await axiosInstance.get<IResponse<IReel>>(`/news/reel/${reelId}`)
    return data
  } catch (err) {
    throw err
  }
}
