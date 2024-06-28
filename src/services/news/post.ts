import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'
import type { ElasticsearchIndex } from '@/constants/enum/search.enum'

type CreateReelType = {
  video: string
  title: string
  shopId: string
  description: string
}

type UpdateReelType = {
  reelId: string
  idVideoOld: string
  newVideoUrl: string
  title: string
  description: string
}

export const createReel = async (_data: CreateReelType) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/news/reel', _data)
    return data
  } catch (err) {
    throw err
  }
}

export const increateViewReel = async (reelId: string) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/news/reel/increase-view', {
      reelId
    })

    return data
  } catch (err) {
    throw err
  }
}

export const updateReel = async (_data: UpdateReelType) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/news/update-reel', _data)
    return data
  } catch (err) {
    throw err
  }
}

// --Feed-----------------------------------------------------------

type CreateFeedType = {
  thumbnail: string
  title: string
  shopId: string
  content: string
}

type UpdateFeedType = {
  feedId: string
  idImageOld: string
  newImageUrl: string
  title: string
  content: string
}

export const createFeed = async (_data: CreateFeedType) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/news/feed', _data)
    return data
  } catch (err) {
    throw err
  }
}

export const increateViewFeed = async (feedId: string) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/news/feed/increase-view', {
      feedId
    })

    return data
  } catch (err) {
    throw err
  }
}

export const searchNews = async <T>(typeIndex: ElasticsearchIndex, titleSearch: string) => {
  try {
    const { data } = await axiosInstance.post<IResponse<T[]>>('/search', {
      typeIndex,
      titleSearch
    })
    return data
  } catch (err) {
    throw err
  }
}

export const updateFeed = async (_data: UpdateFeedType) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/news/update-feed', _data)
    return data
  } catch (err) {
    throw err
  }
}
