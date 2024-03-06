import { useCart } from "../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import css from "./CartForm.module.css";

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
