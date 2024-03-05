import { CartProvider } from "./CartContext";
import { ShopProvider } from "./ShopContext";

const MainProvider = ({ children }) => {
  return (
    <ShopProvider>
      <CartProvider>{children}</CartProvider>
    </ShopProvider>
  );
};

export default MainProvider;
