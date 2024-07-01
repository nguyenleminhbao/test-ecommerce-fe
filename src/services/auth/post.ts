import type { IResponse } from '@/interfaces/response.interface'
import axiosInstance from '@/services/axios-instance'

export const login = async (userId: string) => {
  const { data } = await axiosInstance.post<
    IResponse<{
      accessToken: string
      refreshToken: string
    }>
  >('/auth/login', {
    userId
  })
  return data
}

export const refreshTokenFunc = async (refreshToken: string) => {
  const { data } = await axiosInstance.post<
    IResponse<{
      accessToken: string
      refreshToken: string
    }>
  >('/auth/refresh-token', {
    refreshToken
  })
  return data
}
