import type { TYPE_COMMENT } from '@/constants/enum/comment.enum'

export interface IComment {
  id: string
  userId: string
  content: string
  numOfStar: number
  optionProduct: string
  imageUrls: string[]
  createdAt: string
  updatedAt: string
  typeComment: TYPE_COMMENT
  etag: string
  user: {
    name: string
    avatar: string
  }
}
