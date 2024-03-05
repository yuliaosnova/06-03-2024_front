import css from "./DrugItem.module.css";
import sprite from "../../assets/sprite.svg";
import { isFavorite } from "../../utils/isFavorite";

const DrugItem = ({ drug, favorites, onFavClick }) => {
  return (
    <li className={css.drug_item}>
      <img
        width={270}
        className={css.drug_image}
        src={drug.image}
        alt={drug.name}
      ></img>
      <div className={css.drug_info}>
        <p>{drug.name}</p>
        <p>{drug.price} грн</p>
      </div>
      <div className={css.drug_buttons}>
        <button
          type="button"
          className={css.fav_btn}
          onClick={() => onFavClick(drug._id)}
        >
          <svg
            width={30}
            height={20}
            className={
              isFavorite(drug._id, favorites)
                ? css.heart_icon_fav
                : css.heart_icon
            }
          >
            <use href={`${sprite}#icon-heart`}></use>
          </svg>
        </button>
        <button type="button" className={css.add_btn}>
          ADD TO CART
        </button>
      </div>
    </li>
  );
};

export default DrugItem;
