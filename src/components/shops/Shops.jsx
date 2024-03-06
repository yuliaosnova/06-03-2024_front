import { useEffect, useState } from "react";
import * as api from "../../servises/api";
import css from "./Shops.module.css";
import { useShop } from "../Context/ShopContext";

const Shops = () => {
  const [shops, setShops] = useState([]);
  const { currentShop, changeCurrentShop } = useShop();

  useEffect(() => {
    api
      .fetchShops()
      .then((response) => {
        setShops(response.data.shops);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onShopClick = (name) => {
    changeCurrentShop(name);
  };

  const isCurrent = (name) => {
    if (name === currentShop) return true;
    else return false;
  };

  return (
    <section className={css.shops_section}>
      <h2 className={css.shops_title}>Shops</h2>
      <ul className={css.shops_list}>
        {shops.map((shop) => (
          <li
            key={shop._id}
            className={
              isCurrent(shop.name) ? css.shop_item_active : css.shop_item
            }
            onClick={() => onShopClick(shop.name)}
          >
            <p className={css.shop_name}>{shop.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Shops;
