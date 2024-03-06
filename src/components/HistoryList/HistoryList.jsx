import HistoryItem from "../HistoryItems/HistoryItems";
import css from "./HistoryList.module.css";

const HistoryList = ({ orders }) => {
  return (
    <ul>
      {orders.map((order) => (
        <li key={order._id} className={css.history}>
          <p>Total price: {order.total} ₴</p>
          {order.items.map((item) => (
            <HistoryItem key={item._id} item={item} />
          ))}
        </li>
      ))}
    </ul>
  );
};

export default HistoryList;
