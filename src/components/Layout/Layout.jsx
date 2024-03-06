import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <NavLink to="/" className={css.nav_item}>
            Shop
          </NavLink>
          <NavLink to="/shopping-cart" className={css.nav_item}>
            Shopping cart
          </NavLink>
          <NavLink to="/history" className={css.nav_item}>
            History
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
      <ToastContainer
        style={{ width: "250px", fontSize: "12px" }}
        position="top-center"
        autoClose={2500}
        theme="light"
      />
    </>
  );
};

export default Layout;
