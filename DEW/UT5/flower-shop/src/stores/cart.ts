import { defineStore } from 'pinia';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) =>
      state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2),
  },
  actions: {
    addToCart(flower: CartItem) {
      const existingItem = this.items.find((item) => item.id === flower.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ ...flower, quantity: 1 });
      }
    },
    removeFromCart(id: number) {
      this.items = this.items.filter((item) => item.id !== id);
    },
    updateQuantity(id: number, quantity: number) {
      const item = this.items.find((item) => item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      } else {
        this.removeFromCart(id);
      }
    },
    clearCart() {
      this.items = [];
    },
  },
});
