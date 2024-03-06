import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/HomePage"));
const ShoppingCart = lazy(() => import("./pages/ShoppingCartPage"));
const History = lazy(() => import("./pages/HistoryPage"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="history" element={<History />}></Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
