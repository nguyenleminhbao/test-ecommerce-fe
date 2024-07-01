import type { IProduct } from '@/interfaces/product.interface'
import axiosInstance from '../axios-instance'
import type { IResponse } from '@/interfaces/response.interface'
import type { ElasticsearchIndex } from '@/constants/enum/search.enum'

export const searchProduct = async (typeIndex: ElasticsearchIndex, titleSearch: string) => {
  const { data } = await axiosInstance.post<IResponse<IProduct[]>>('/search', {
    typeIndex,
    titleSearch
  })
  return data
}
