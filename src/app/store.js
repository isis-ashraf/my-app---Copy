import create from 'zustand';

const useStore = create((set) => ({
  cart: [],

  addToCart: (product, quantity) => set((state) => {
    const productIndex = state.cart.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      const updatedCart = state.cart.map((item, index) =>
        index === productIndex ? { ...item, quantity: item.quantity + quantity } : item
      );
      return { cart: updatedCart };
    } else {
      return { cart: [...state.cart, { ...product, quantity }] };
    }
  }),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== productId)
  })),

  decreaseItemQuantity: (productId) => set((state) => {
    const productIndex = state.cart.findIndex((item) => item.id === productId);
    if (productIndex !== -1) {
      const updatedCart = state.cart
        .map((item, index) =>
          index === productIndex ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0); 
      return { cart: updatedCart };
    }
    return state;
  }),

  clearCart: () => set({ cart: [] })
}));

export default useStore;
