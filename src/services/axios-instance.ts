import axios from 'axios'
import { refreshTokenFunc } from './auth/post'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
})

instance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${localStorage && localStorage.getItem('accessToken')}`
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

instance.interceptors.response.use(
  async (response) => {
    return response
  },
  async (error) => {
    if (error?.response?.status == 401) {
      const token = localStorage && localStorage?.getItem('refreshToken')
      const config = error?.response?.config
      if (token == undefined) {
        window.location.href = '/unauthorized'
      } else if (token != 'undefined') {
        const config = error?.response?.config
        const data = await refreshTokenFunc(token as string)
        if (data) {
          localStorage.setItem('accessToken', data?.message.accessToken)
          localStorage.setItem('refreshToken', data?.message.refreshToken)
          config.headers.Authorization = `Bearer ${
            localStorage && localStorage.getItem('accessToken')
          }`
          return axiosInstance(config)
        }
      }
    } else if (error?.response?.status === 403) {
      window.location.href = '/forbidden'
    }
  }
)

const axiosInstance = instance

export default axiosInstance
