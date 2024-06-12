import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'

export const deleteReel = async (reelId: string) => {
  try {
    const { data } = await axiosInstance.delete<IResponse<string>>(`/news/reel/${reelId}`)
    return data
  } catch (err) {
    throw err
  }
}
