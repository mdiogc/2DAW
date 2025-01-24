import { useCartStore } from '@/stores/cart';

export const useCart = () => {
  const cartStore = useCartStore();

  const addToCart = (flower: any) => {
    if (flower.quantity > 0) {
      cartStore.addToCart(flower);
      alert(`Añadido "${flower.name}" al carrito`);
    } else {
      alert(`Lo sentimos, "${flower.name}" está agotado.`);
    }
  };

  const removeFromCart = (id: number) => {
    cartStore.removeFromCart(id);
    alert(`Producto eliminado del carrito.`);
  };

  const clearCart = () => {
    cartStore.clearCart();
  };

  return {
    addToCart,
    removeFromCart, // Aquí se agrega la función
    clearCart,
    cartItems: cartStore.items,
    totalItems: cartStore.totalItems,
    totalPrice: cartStore.totalPrice,
  };
};
