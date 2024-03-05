import { createContext, useContext, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("shoppingCart", []);

  const addCartItem = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const increaseQuantity = (id) => {
    setCartItems((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevState) => {
      const itemToUpdate = prevState.find((item) => item.id === id);
      if (!itemToUpdate || itemToUpdate.quantity === 1) return prevState;

      return prevState.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const removeCartItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCartItem,
        removeCartItem,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
