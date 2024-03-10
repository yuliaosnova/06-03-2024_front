import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";

const ShoppingCart = lazy(() => import("./pages/ShoppingCartPage"));
const History = lazy(() => import("./pages/HistoryPage"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="history" element={<History />}></Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
