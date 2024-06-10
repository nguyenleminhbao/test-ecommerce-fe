import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'
import type { IShopCart, IZaloResopnse } from '@/interfaces/zalo.interface'

type CreateOrderZalo = {
  firstName: string
  lastName: string
  phoneNumber: string
  address: string
  paymentMethod: string
  shopCart: IShopCart[]
  amount: number
}

export const createOrderZaloPay = async (_data: CreateOrderZalo) => {
  try {
    const { data } = await axiosInstance.post<IResponse<IZaloResopnse>>('/zalopay/create', _data)
    return data
  } catch (err) {
    throw err
  }
}
