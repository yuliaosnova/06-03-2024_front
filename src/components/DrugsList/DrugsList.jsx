import { useEffect, useState } from "react";
import * as api from "../../servises/api";
import css from "./DrugsList.module.css";
import DrugItem from "../DrugItem/DrugItem";
import useLocalStorage from "../../hooks/useLocalStorage";

const DrugsList = () => {
  const [drugs, setDrugs] = useState([]);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  useEffect(() => {
    api
      .fetchDrugs()
      .then((response) => {
        console.log("drugs:", response.data.drugs);
        setDrugs(response.data.drugs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onFavClick = (id) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter((favId) => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };

  return (
    <section className={css.drugs_section}>
      <ul className={css.drug_list}>
        {drugs.map((drug) => (
          <DrugItem
            key={drug._id}
            drug={drug}
            favorites={favorites}
            onFavClick={onFavClick}
          />
        ))}
      </ul>
    </section>
  );
};

export default DrugsList;
