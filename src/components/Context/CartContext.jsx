import { createContext, useContext, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("shoppingCart", []);

  const getQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const addCartItem = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const changeQuantity = (id, number) => {
    setCartItems((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, quantity: number } : item
      )
    );
  };

  const removeCartItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getQuantity,
        addCartItem,
        removeCartItem,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
