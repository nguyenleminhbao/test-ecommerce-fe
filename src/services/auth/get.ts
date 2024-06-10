import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'
import type { IUser } from '@/interfaces/user.interface'

export const getMe = async () => {
  try {
    const { data } = await axiosInstance.get<IResponse<IUser>>('/auth/get-me')
    return data
  } catch (err) {
    throw err
  }
}

export const checkAdmin = async () => {
  try {
    const { data } = await axiosInstance.get<IResponse<boolean>>('/auth/check-admin')
    return data
  } catch (err) {
    throw err
  }
}
