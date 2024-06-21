import { getAllProducts, getOneProduct, getShopProducts } from '@/services/products/get'
import { configSWRV } from './swrv'
import useSWRV from 'swrv'
import { computed, onMounted, ref } from 'vue'
import type { IProduct } from '@/interfaces/product.interface'

type OptionType1 = {
  key?: string
  page?: number
  productId?: string
}

export const useProduct = (options?: OptionType1) => {
  const {
    data,
    isValidating: isLoading,
    error,
    mutate
  } = useSWRV(options?.key ?? 'products', () => getAllProducts(options?.page), configSWRV)

  const products = computed(() => {
    if (!data?.value || !data.value.message) return []
    return data.value.message as IProduct[]
  })

  return {
    data: products,
    isLoading,
    error,
    mutate
  }
}

type OptionType2 = {
  productId: string
}

export const useProductDetail = ({ productId }: OptionType2) => {
  const product = ref<IProduct>()
  const isLoading = ref<boolean>(false)

  onMounted(async () => {
    isLoading.value = true
    const data = await getOneProduct(productId)
    product.value = data.message
    isLoading.value = false
  })

  return {
    data: product,
    isLoading
  }
}

type OptionType3 = {
  shopId: string
}

export const useShopProduct = ({ shopId }: OptionType3) => {
  const products = ref<IProduct[]>([])
  const isLoading = ref<boolean>(false)

  onMounted(async () => {
    isLoading.value = true
    const data = await getShopProducts(shopId)
    products.value = data.message
    isLoading.value = false
  })

  return {
    data: products,
    isLoading
  }
}
