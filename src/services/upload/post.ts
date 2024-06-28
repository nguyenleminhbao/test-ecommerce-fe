import type { IResponse } from '@/interfaces/response.interface'
import axios from 'axios'

export const deleteFileV2 = async (publicId: string) => {
  const { data } = await axios.post<IResponse<string>>(
    `${import.meta.env.VITE_HOST_SUB_UPLOAD_MODULE}/upload/delete-file-v2`,
    publicId
  )
  return data
}
