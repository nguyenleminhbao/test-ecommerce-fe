import { getAllReel, getReelByShop } from '@/services/news/get'
import useSWRV from 'swrv'
import { configSWRV } from './swrv'
import { computed } from 'vue'
import type { IReel } from '@/interfaces/news.interface'

export const useReel = () => {
  const { data, isValidating: isLoading, error, mutate } = useSWRV('reels', getAllReel, configSWRV)

  const reels = computed(() => {
    if (!data?.value || !data.value.message) return []
    return data.value.message as IReel[]
  })

  return {
    data: reels,
    isLoading,
    error,
    mutate
  }
}

type OptionType = {
  shopId: string
}

export const useShopReel = ({ shopId }: OptionType) => {
  const {
    data,
    isValidating: isLoading,
    error,
    mutate
  } = useSWRV(`/news/reel/shop/${shopId}`, () => getReelByShop(shopId), configSWRV)

  const reels = computed(() => {
    if (!data?.value || !data.value.message) return []
    return data.value.message as IReel[]
  })

  return {
    data: reels,
    isLoading,
    error,
    mutate
  }
}
