
import DrugsList from "../components/DrugsList/DrugsList";
import Shops from "../components/Shops/Shops";
import css from "./Pages.module.css"

const HomePage = () => {
  return (
    <div className={css.container}>
      <Shops />
      <DrugsList />
    </div>
  );
};

export default HomePage;
