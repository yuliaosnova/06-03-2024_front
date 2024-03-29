import { useEffect, useState, useMemo } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { sortByPrice } from "../../utils/SortByPrice";
import { replaceFavorites } from "../../utils/replaceFavorites";
import * as api from "../../servises/api";
import SortComponent from "../Sort/SortComponent";
import DrugItem from "../DrugItem/DrugItem";
import css from "./DrugsList.module.css";

const DrugsList = () => {
  const [drugs, setDrugs] = useState([]);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    api
      .fetchDrugs()
      .then((response) => setDrugs(response.data.drugs))
      .catch((error) => console.error("Error fetching drugs:", error));
  }, []);

  const sortedDrugs = useMemo(() => {
    if (!isSorted) return drugs;
    const sorted = sortByPrice([...drugs]);
    return replaceFavorites(sorted, favorites);
  }, [drugs, favorites, isSorted]);

  const onFavClick = (id) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter((favId) => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };

  const toggleIsSorted = () => {
    setIsSorted((prevIsSorted) => !prevIsSorted);
  };

  return (
    <section className={css.drugs_section}>
      <SortComponent toggleIsSorted={toggleIsSorted} />
      <ul className={css.drug_list}>
        {sortedDrugs.map((drug) => (
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
