import type { STATUS } from '@/constants/enum/status.enum'
import type { IComment } from './comment.interface'

export interface IReel {
  id: string
  view: number
  video: string
  title: string
  description: string
  shopId: string
  createdAt: string
  updatedAt: string
  status: STATUS
  shop: {
    id: string
    shopName: string
    shopAvatar: string
  }
  comments: IComment[]
}

export interface IFeed {
  id: string
  title: string
  thumbnail: string
  content: string
  shopId: string
  createdAt: string
  updatedAt: string
  status: STATUS
  shop: {
    id: string
    shopName: string
    shopAvatar: string
  }
}
