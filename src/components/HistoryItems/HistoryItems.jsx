import css from "./HistoryItems.module.css";

const HistoryItem = ({ item }) => {
  return (
    <div className={css.order_item}>
      <img width={100} src={item.drug_image} alt={item.drug_name}></img>
      <div className={css.info}>
        <p>{item.drug_name}</p>
        <p>Price: {item.drug_price} ₴</p>
      </div>
    </div>
  );
};

export default HistoryItem;
