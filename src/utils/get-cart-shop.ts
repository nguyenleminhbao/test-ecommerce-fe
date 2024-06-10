import type { ICart, ICartItem } from '@/interfaces/cart.interface'

export const getCartItemByShop = (cart: ICart) => {
  let listShopName: string[] = []
  cart?.cartItems?.forEach((cartItem) => {
    if (!listShopName.includes(cartItem.shopId as string)) {
      listShopName.push(cartItem.shopId as string)
    }
  })

  return listShopName.map((shopId) => {
    const listCartOfShop = cart?.cartItems?.filter((item) => item.shopId == shopId)
    return {
      shopId: shopId,
      shopName: listCartOfShop[0].shopName as string,
      cartItems: listCartOfShop as ICartItem[]
    }
  })
}
