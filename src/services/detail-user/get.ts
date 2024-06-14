import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'
import type { IAddress } from '@/interfaces/user.interface'

export const getAllAddress = async () => {
  try {
    const { data } = await axiosInstance.get<IResponse<IAddress[]>>('/detail-user/address')
    return data
  } catch (err) {
    throw err
  }
}
