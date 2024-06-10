import { defineStore } from 'pinia'
import type { ICart, ICartItem } from '@/interfaces/cart.interface'
import { getCartItemByShop } from '@/utils'

export interface IShopName {
  shopId: string
  shopName: string
  cartItems: ICartItem[]
}

type State = {
  cart: ICart | null
  selectedCartItem: number[]
  shopCart: IShopName[]
  subTotal: number
  user: {
    name: string
    phone: string
    address: string
  }
}

export const useCart = defineStore('cart', {
  state: () =>
    ({
      cart: null,
      selectedCartItem: [],
      shopCart: [],
      subTotal: 0,
      user: {
        name: '',
        phone: '',
        address: ''
      }
    }) as State,
  getters: {},
  actions: {
    setCart(cart: ICart) {
      this.cart = cart
      this.shopCart = getCartItemByShop(this.cart)
    },

    addToCart(cartItem: ICartItem) {
      if (this?.cart?.cartItems?.some((ele) => ele?.variantId == cartItem?.variantId)) {
        const tempCart = { ...this?.cart }
        const idx = this?.cart?.cartItems?.findIndex((e) => e?.variantId == cartItem?.variantId)
        tempCart.cartItems[idx] = {
          ...tempCart.cartItems[idx],
          quantity: tempCart.cartItems[idx].quantity + cartItem.quantity
        }

        this.cart = tempCart
      } else {
        this.cart = {
          ...this?.cart,
          cartItems: [...(this?.cart?.cartItems ?? []), cartItem]
        }
      }

      this.shopCart = getCartItemByShop(this.cart)
    },
    removeFromCart(variantId: number) {
      const tempCartItem = this?.cart?.cartItems.filter((e) => {
        return e?.variantId != variantId
      })
      this.cart = {
        ...this.cart,
        cartItems: tempCartItem ?? []
      }

      this.shopCart = getCartItemByShop(this.cart)
    },
    increaseQuantityCartItem(variantId: number) {
      const tempCart = this.cart as ICart
      const idx = this?.cart?.cartItems?.findIndex((e) => e?.variantId == variantId) as number

      tempCart.cartItems[idx] = {
        ...tempCart?.cartItems[idx],
        quantity: tempCart?.cartItems[idx].quantity + 1
      }

      this.cart = tempCart
      this.shopCart = getCartItemByShop(this.cart)
      this.getSubTotal()
    },
    decreaseQuantityCartItem(variantId: number) {
      const tempCart = this.cart as ICart
      const idx = this.cart?.cartItems?.findIndex((e) => e?.variantId == variantId) as number
      tempCart.cartItems[idx] = {
        ...tempCart?.cartItems[idx],
        quantity: tempCart?.cartItems[idx]?.quantity - 1
      }

      this.cart = tempCart
      this.shopCart = getCartItemByShop(this.cart)
      this.getSubTotal()
    },
    pushOrPopSelectedVariant(variantId: number) {
      if (this.selectedCartItem.includes(variantId)) {
        this.selectedCartItem = this.selectedCartItem?.filter((e) => e != variantId)
      } else {
        this.selectedCartItem = [...this.selectedCartItem, variantId]
      }

      this.getSubTotal()
    },
    setSelectedItems(variantIds: number[]) {
      this.selectedCartItem = variantIds
    },
    getSubTotal() {
      let subToTotal: number = 0
      this.selectedCartItem.map((variantId) => {
        const cartItem = this.cart?.cartItems.find((item) => item.variantId == variantId)
        subToTotal += cartItem ? cartItem?.quantity * cartItem?.price : 0
      })
      this.subTotal = subToTotal
    }
  }
})
