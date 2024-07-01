import axiosInstance from '../axios-instance'

export const deleteFile = async (publicId: string) => {
  const { data } = await axiosInstance.delete(`/upload/delete-file/${publicId}`)
  return data
}
