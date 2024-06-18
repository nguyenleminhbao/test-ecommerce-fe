import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'

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
