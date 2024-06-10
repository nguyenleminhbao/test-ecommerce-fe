import type { IUser } from '@/interfaces/user.interface'
import axiosInstance from '../axios-instance'
import type { IResponse } from '@/interfaces/response.interface'

export const getAllCustomer = async () => {
  try {
    const { data } = await axiosInstance.get<IResponse<IUser[]>>('/customer')
    return data
  } catch (err) {
    throw err
  }
}
