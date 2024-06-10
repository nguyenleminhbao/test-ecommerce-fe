import type { IShopCart } from '@/interfaces/zalo.interface'
import type { IShopName } from '@/stores/use-cart'

export const getVariantIdSelectedInShop = (
  shopCart: IShopName[],
  selectedVariantIds: number[]
): IShopCart[] => {
  return shopCart.map((ele) => {
    return {
      shopId: ele.shopId,
      variantIds: ele.cartItems
        .filter((cartItem) => selectedVariantIds.includes(cartItem.variantId))
        .map((ele) => ele.variantId)
    }
  })
}
