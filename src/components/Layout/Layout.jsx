import React, { Suspense } from "react";
import css from "./Layout.module.css";
import { NavLink, Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { DNA } from "react-loader-spinner";

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
        <Suspense
          fallback={
				<p>Loading...</p>
            // <DNA
            //   visible={true}
            //   height="80"
            //   width="80"
            //   ariaLabel="dna-loading"
            //   wrapperStyle={{}}
            //   wrapperClass="dna-wrapper"
            // />
          }
        >
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
