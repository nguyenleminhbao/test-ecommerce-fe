import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'
import type { IAddress } from '@/interfaces/user.interface'

export const getAllAddress = async () => {
  const { data } = await axiosInstance.get<IResponse<IAddress[]>>('/detail-user/address')
  return data
}
