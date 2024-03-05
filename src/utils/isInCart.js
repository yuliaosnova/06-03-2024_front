export const isInCart = (id, cartItems) => {
  return cartItems.find((product) => product.id === id);
};
