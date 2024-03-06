import { useEffect, useState } from "react";
import UserForm from "../components/UserForm/UserForm";
import css from "./Pages.module.css";
import CartForm from "../components/CartForm/CartForm";
import { useCart } from "../components/Context/CartContext";
import { useShop } from "../components/Context/ShopContext";
import useLocalStorage from "../hooks/useLocalStorage";
import * as api from "../servises/api";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { formInitialValues } from "../const/formInitialValue";

const ShoppingCartPage = () => {
  const { cartItems } = useCart();
  const { currentShop } = useShop();
  const [total, setTotal] = useState();

  const [formData, setFormData, removeValue] = useLocalStorage(
    "formData",
    formInitialValues
  );

  useEffect(() => {
    setTotal(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      customer: {
        username: formData.name,
        email: formData.email,
        phone: formData.phone,
        adress: formData.address,
      },
      items: cartItems.map((item) => ({
        drug: item.id,
        amount: item.quantity,
      })),
      shop: currentShop,
      total,
    };

    api
      .addOrder(order)
      .then(() => {
        toast.success("We`ve got your order and will connect with your soon!");
        removeValue();
      })
      .catch((error) => {
        toast.error("Something went wrong :(");
        console.log(error);
      });
  };
  return (
    <section className={css.shopping_cart}>
      <form className={css.form} onSubmit={handleSubmit}>
        <UserForm formData={formData} setFormData={setFormData} />
        {cartItems?.length > 0 ? (
          <div className={css.right_block}>
            <CartForm />
            <div className={css.form_submit}>
              <p>Total price: {total}</p>
              <button type="submit">Submit</button>
            </div>
          </div>
        ) : (
          <p>Shopping cart is empty</p>
        )}
      </form>
    </section>
  );
};

export default ShoppingCartPage;
