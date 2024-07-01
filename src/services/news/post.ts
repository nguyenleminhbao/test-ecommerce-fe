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
  const { data } = await axiosInstance.post<IResponse<string>>('/news/reel', _data)
  return data
}

export const increateViewReel = async (reelId: string) => {
  const { data } = await axiosInstance.post<IResponse<string>>('/news/reel/increase-view', {
    reelId
  })

  return data
}

export const updateReel = async (_data: UpdateReelType) => {
  const { data } = await axiosInstance.post<IResponse<string>>('/news/update-reel', _data)
  return data
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
  const { data } = await axiosInstance.post<IResponse<string>>('/news/feed', _data)
  return data
}

export const increateViewFeed = async (feedId: string) => {
  const { data } = await axiosInstance.post<IResponse<string>>('/news/feed/increase-view', {
    feedId
  })

  return data
}

export const searchNews = async <T>(typeIndex: ElasticsearchIndex, titleSearch: string) => {
  const { data } = await axiosInstance.post<IResponse<T[]>>('/search', {
    typeIndex,
    titleSearch
  })
  return data
}

export const updateFeed = async (_data: UpdateFeedType) => {
  const { data } = await axiosInstance.post<IResponse<string>>('/news/update-feed', _data)
  return data
}
