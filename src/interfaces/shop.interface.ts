import type { IReel } from './news.interface'

export interface IShop {
  shopId: string
  shopName: string
  shopAvatar: string
  shopBanners: string[]
  reels: IReel[]
}
