import { useCart } from "../Context/CartContext";
import css from "./CartItem.module.css";
import { MdDelete } from "react-icons/md";

const CartItem = ({ item }) => {
  const { getQuantity, changeQuantity, removeCartItem } = useCart();
  return (
    <li className={css.cart_item}>
      <MdDelete
        className={css.delete_icon}
        onClick={() => removeCartItem(item.id)}
      />
      <img
        width={200}
        className={css.cart_image}
        src={item.image}
        alt={item.name}
      ></img>
      <div className={css.cart_info}>
        <p className={css.product_name}>{item.name}</p>
        <p>{item.price} ₴</p>
        <input
          type="number"
          value={getQuantity(item.id)}
          onChange={(e) => {
            changeQuantity(item.id, Number(e.target.value));
          }}
        />
      </div>
    </li>
  );
};

export default CartItem;
