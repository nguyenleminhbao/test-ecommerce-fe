import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'
import type { IReel, IFeed } from '@/interfaces/news.interface'

export const getAllReel = async () => {
  try {
    console.log('fetching reel')
    const { data } = await axiosInstance.get<IResponse<IReel[]>>('/news/reel')
    return data
  } catch (err) {
    throw err
  }
}

// export const getReelByShop = async (shopId: string) => {
//   try {
//     const { data } = await axiosInstance.get<IResponse<IReel[]>>(`/news/reel/shop/${shopId}`)
//     return data
//   } catch (err) {
//     throw err
//   }
// }

export const getReelByShop = async (url: string) => {
  try {
    const { data } = await axiosInstance.get<IResponse<IReel[]>>(url)
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

// ---Feed------------------------------------------------------------------------
export const getAllFeed = async () => {
  try {
    const { data } = await axiosInstance.get<IResponse<IFeed[]>>('/news/feed')
    return data
  } catch (err) {
    throw err
  }
}

// export const getFeedByShop = async (shopId: string) => {
//   try {
//     const { data } = await axiosInstance.get<IResponse<IFeed[]>>(`/news/feed/shop/${shopId}`)
//     return data
//   } catch (err) {
//     throw err
//   }
// }

export const getFeedByShop = async (url: string) => {
  try {
    const { data } = await axiosInstance.get<IResponse<IFeed[]>>(url)
    return data
  } catch (err) {
    throw err
  }
}

export const getFeedById = async (feedId: string) => {
  try {
    const { data } = await axiosInstance.get<IResponse<IFeed>>(`/news/feed/${feedId}`)
    return data
  } catch (err) {
    throw err
  }
}
