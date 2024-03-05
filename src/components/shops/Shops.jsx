import { useContext, useEffect, useState } from "react";
import * as api from "../../servises/api";
import css from "./Shops.module.css";
import { useShop } from "../Context/ShopContext";
// import {
//   currentShop,
//   changeCurrentShop,
// } from "../../components/Context/ShopContext";
// import ShopContext from "../../components/Context/ShopContext"

const Shops = () => {
  const [shops, setShops] = useState([]);
//   const [currentShop, setCurrentShop] = useState(null);
const { currentShop, changeCurrentShop } = useShop();
//   const [currentShop, changeCurrentShop] = useContext(ShopContext);
  console.log("current shop: ", currentShop)

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

  const onShopClick = (name) => {
   //  setCurrentShop(name);
	changeCurrentShop(name)
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
