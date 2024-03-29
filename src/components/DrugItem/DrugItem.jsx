import { FaHeart } from "react-icons/fa";
import { isFavorite } from "../../utils/isFavorite";
import { isInCart } from "../../utils/isInCart";
import { setAddButtonText } from "../../utils/setAddBtnText";
import { useCart } from "../Context/CartContext";
import { useShop } from "../Context/ShopContext";
import css from "./DrugItem.module.css";


const DrugItem = ({ drug, favorites, onFavClick }) => {
  const { currentShop } = useShop();
  const { cartItems, addCartItem, removeCartItem } = useCart();

  const onAddClick = (id, name, price, image) => {
    if (isInCart(id, cartItems)) {
      removeCartItem(id);
    } else {
      addCartItem({
        id: id,
        name,
        price,
        image,
        quantity: 1,
        shop: currentShop,
      });
    }
  };

  return (
    <li className={css.drug_item}>
      <img
        width={230}
        className={css.drug_image}
        src={drug.image}
        alt={drug.name}
      ></img>
      <div className={css.drug_bottom}>
        <div className={css.drug_info}>
          <p>{drug.name}</p>
          <p>{drug.price} ₴</p>
        </div>
        <div className={css.drug_buttons}>
          <button
            type="button"
            className={css.fav_btn}
            onClick={() => onFavClick(drug._id)}
          >
				<FaHeart className={
                isFavorite(drug._id, favorites)
                  ? css.heart_icon_fav
                  : css.heart_icon
              } />
          </button>
          <button
            type="button"
            className={css.add_btn}
            onClick={() =>
              onAddClick(drug._id, drug.name, drug.price, drug.image)
            }
          >
            {setAddButtonText(drug._id, cartItems)}
          </button>
        </div>
      </div>
    </li>
  );
};

export default DrugItem;
