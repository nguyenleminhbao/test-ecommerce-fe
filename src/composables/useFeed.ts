import { getAllFeed, getFeedByShop } from '@/services/news/get'
import useSWRV from 'swrv'
import { configSWRV } from './swrv'
import { computed } from 'vue'
import type { IFeed } from '@/interfaces/news.interface'

export const useFeed = () => {
  const { data, isValidating: isLoading, error, mutate } = useSWRV('feeds', getAllFeed, configSWRV)

  const feeds = computed(() => {
    if (!data?.value || !data.value.message) return []
    return data.value.message as IFeed[]
  })

  return {
    data: feeds,
    isLoading,
    error,
    mutate
  }
}

type OptionType = {
  shopId: string
}

export const useShopFeed = ({ shopId }: OptionType) => {
  const {
    data,
    isValidating: isLoading,
    error,
    mutate
  } = useSWRV(`/news/feed/shop/${shopId}`, () => getFeedByShop(shopId), configSWRV)

  const feeds = computed(() => {
    if (!data?.value || !data.value.message) return []
    return data.value.message as IFeed[]
  })

  return {
    data: feeds,
    isLoading,
    error,
    mutate
  }
}
