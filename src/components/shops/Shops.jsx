import { useEffect, useState } from "react";
import * as api from "../../servises/api";
import css from "./Shops.module.css";

const Shops = () => {
  const [shops, setShops] = useState([]);
  const [currentShop, setCurrentShop] = useState(null);

  const onShop = (name) => {
    setCurrentShop(name);
  };

  const isCurrent = (name) => {
    if (name === currentShop) return true;
    else return false;
  };

  useEffect(() => {
    api
      .fetchShops()
      .then((response) => {
        //   console.log("shops:", response.data.shops);
        setShops(response.data.shops);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className={css.shops_section}>
      <h2 className={css.shops_title}>Shops</h2>
      <ul className={css.shops_list}>
        {shops.map((shop) => (
          <li
            className={
              isCurrent(shop.name) ? css.shop_item_active : css.shop_item
            }
            key={shop.id}
            onClick={() => onShop(shop.name)}
          >
            <p className={css.shop_name}>{shop.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Shops;
