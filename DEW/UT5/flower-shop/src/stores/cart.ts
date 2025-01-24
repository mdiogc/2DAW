import { defineStore } from 'pinia'

interface CartItem extends Flower {
  cartQuantity: number // Cantidad en el carrito
}

export interface CartState {
  items: CartItem[]
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: [],
  }),
  getters: {
    total: (state) => state.items.reduce((sum, item) => sum + item.price * item.cartQuantity, 0),
    itemCount: (state) => state.items.length,
  },
  actions: {
    addToCart(product: Flower) {
      const existingItem = this.items.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.cartQuantity++
      } else {
        this.items.push({ ...product, cartQuantity: 1 })
      }
    },
    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId)
    },
    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find((item) => item.id === productId)
      if (item) item.cartQuantity = quantity
    },
    clearCart() {
      this.items = []
    },
  },
})
