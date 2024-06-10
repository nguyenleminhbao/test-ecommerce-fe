import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'
import type { IComment } from '@/interfaces/comment.interface'

export const getCommentByEtag = async (etag: string | number) => {
  try {
    const { data } = await axiosInstance.get<IResponse<IComment[]>>(`/comment/${etag}`)
    return data
  } catch (err) {
    throw err
  }
}
