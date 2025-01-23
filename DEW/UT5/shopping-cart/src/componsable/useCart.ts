import { useCartStore } from '@/stores/cart';

export function useCart() {
  const cartStore = useCartStore();

  const addProductToCart = (product: any, quantity: number) => {
    if (quantity > product.stock) {
      throw new Error('Quantity exceeds stock!');
    }
    cartStore.addProduct(product, quantity);
  };

  const calculateIGIC = () => {
    return cartStore.totalPrice * 0.07;
  };

  return {
    cart: cartStore,
    addProductToCart,
    calculateIGIC,
  };
}
