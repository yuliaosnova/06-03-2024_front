import css from "./SortComponent.module.css";
import { GoSortAsc } from "react-icons/go";

const SortComponent = ({toggleIsSorted}) => {
  return (
    <div className={css.sort_container}>
      <button
        type="button"
        aria-label="sort/unsort drugs by price"
        className={css.sort_btn}
        onClick={toggleIsSorted}
      >
        <p className={css.text}>sort by price</p>
        <GoSortAsc className={css.icon} aria-label="sort icon" />
      </button>
    </div>
  );
};

export default SortComponent;
