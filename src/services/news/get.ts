import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'
import type { IReel, IFeed } from '@/interfaces/news.interface'

export const getAllReel = async () => {
  const { data } = await axiosInstance.get<IResponse<IReel[]>>('/news/reel')
  return data
}

export const getReelByShop = async (shopId: string) => {
  const { data } = await axiosInstance.get<IResponse<IReel[]>>(`/news/reel/shop/${shopId}`)
  return data
}

export const getReelById = async (reelId: string) => {
  const { data } = await axiosInstance.get<IResponse<IReel>>(`/news/reel/${reelId}`)
  return data
}

// ---Feed------------------------------------------------------------------------
export const getAllFeed = async () => {
  const { data } = await axiosInstance.get<IResponse<IFeed[]>>('/news/feed')
  return data
}

export const getFeedByShop = async (shopId: string) => {
  const { data } = await axiosInstance.get<IResponse<IFeed[]>>(`/news/feed/shop/${shopId}`)
  return data
}

export const getFeedById = async (feedId: string) => {
  const { data } = await axiosInstance.get<IResponse<IFeed>>(`/news/feed/${feedId}`)
  return data
}
