import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import * as api from "../servises/api";
import { getNewOrders } from "../utils/getOrderedDrugs";
import HistoryForm from "../components/HistoryForm/HistoryForm";
import HistoryList from "../components/HistoryList/HistoryList";
import css from "./Pages.module.css";

const HistoryPage = () => {
  const [email, setEmail] = useState(null);
  const [orders, setOrders] = useState([]);
  const [orderedDrugs, setOrderedDrugs] = useState([]);
  const newOrders = getNewOrders(orders, orderedDrugs);

  useEffect(() => {
    const fetchData = async () => {
      if (!email) return;
      try {
        const response = await api.fetchOrderByCustomer(email);
        setOrders(response);
        const ids = response.flatMap((order) =>
          order.items.map((item) => item.drug)
        );
        const uniqIdsSet = new Set([...ids]);
        const uniqIdsArr = [...uniqIdsSet];

        if (uniqIdsArr?.length > 0) {
          const drugsResponse = await api.fetchDrugsByIds(uniqIdsArr);
          setOrderedDrugs(drugsResponse);
        }
      } catch (error) {
        toast.error("nothing found");
        console.log(error);
      }
    };
    fetchData();
  }, [email]);

  return (
    <div className={css.history_page}>
      <HistoryForm setEmail={setEmail} />
      <HistoryList orders={newOrders} />
    </div>
  );
};

export default HistoryPage;
