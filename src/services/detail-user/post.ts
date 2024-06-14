import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'

type CreateAddressType = {
  streetAddress: string
  city: string
}

export const createAddress = async (_data: CreateAddressType) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/detail-user/address', _data)
    return data
  } catch (err) {
    throw err
  }
}
