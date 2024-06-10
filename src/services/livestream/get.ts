import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '../axios-instance'
import type { ILivestream } from '@/interfaces/livestream.interface'

export const getAllStream = async () => {
  try {
    const { data } = await axiosInstance.get<IResponse<ILivestream[]>>('/livestream')
    return data
  } catch (err) {
    throw err
  }
}
