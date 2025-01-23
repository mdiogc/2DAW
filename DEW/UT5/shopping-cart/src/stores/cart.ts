import { defineStore } from 'pinia';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  stock: number;
  color: string;
  size: string;
}

interface CartItem extends Product {
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    itemCount: (state) => state.items.length,
  },
  actions: {
    addProduct(product: Product, quantity: number) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ ...product, quantity });
      }
    },
    removeProduct(id: string) {
      this.items = this.items.filter((item) => item.id !== id);
    },
    updateQuantity(id: string, quantity: number) {
      const item = this.items.find((item) => item.id === id);
      if (item) item.quantity = quantity;
    },
    clearCart() {
      this.items = [];
    },
  },
});
