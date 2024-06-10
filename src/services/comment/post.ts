import type { TYPE_COMMENT } from '@/constants/enum/comment.enum'
import axiosInstance from '../axios-instance'
import type { IResponse } from '@/interfaces/response.interface'

type CreateCommentType = {
  content: string
  numOfStar?: number
  optionProduct?: string
  imageUrls?: string[]
  typeComment: TYPE_COMMENT
  etag: string | number // id of reel, feed, product
}

export const createComment = async (_data: CreateCommentType) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/comment', _data)
    return data
  } catch (err) {
    throw err
  }
}
