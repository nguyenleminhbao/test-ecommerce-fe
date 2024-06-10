export interface IProduct {
  id: number
  shopId: string
  shopName: string
  title: string
  body_html: string
  vendor: string
  product_type: string
  created_at: string
  tags: string
  status: string
  variants: IVariant[]
  options: IOption[]
  images: IImage[]
}

export interface IVariant {
  id: number
  product_id: number
  title: string
  price: string
  sku: string
  position: number
  created_at: string
  option1: string
  image_id?: number
  variant_image: string
}

export interface IOption {
  id: number
  product_id: number
  name: string
  position: number
  values: string[]
}

export interface IImage {
  id: number
  position: number
  product_id: number
  created_at: string
  src: string
  variant_ids: number[]
}
