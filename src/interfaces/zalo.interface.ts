export interface IZaloResopnse {
  amount: number
  codeTransition: string
  orderUrl: string
  qrCode: string
}

export interface IShopCart {
  shopId: string
  variantIds: number[]
}
