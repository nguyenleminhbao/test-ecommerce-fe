import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'

export const deleteReel = async (reelId: string) => {
  const { data } = await axiosInstance.delete<IResponse<string>>(`/news/reel/${reelId}`)
  return data
}

export const deleteFeed = async (feedId: string) => {
  const { data } = await axiosInstance.delete<IResponse<string>>(`/news/feed/${feedId}`)
  return data
}
