import { useCart } from "../Context/CartContext";
import css from "./CartForm.module.css";
import CartItem from "../CartItem/CartItem";

const CartForm = () => {
  const { cartItems } = useCart();

  return (
    <ul className={css.cart_list}>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CartForm;
