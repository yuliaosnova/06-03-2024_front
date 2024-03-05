import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [currentShop, setCurrentShop] = useState("Drugs_24");

  const changeCurrentShop = (name) => {
    setCurrentShop(name);
  };

  return (
    <ShopContext.Provider
      value={{
        currentShop,
        changeCurrentShop,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
