export function getNewOrders(orders, orderedDrugs) {
  console.log(orders, orderedDrugs);
  return orders.map((ord) => {
    const updatedItems = ord.items.map((item) => {
      const drug = orderedDrugs.find((drug) => drug._id === item.drug);
      if (drug) {
        return {
          ...item,
          drug_name: drug.name,
          drug_image: drug.image,
          drug_price: drug.price,
        };
      } else {
        return item;
      }
    });
    return {
      ...ord,
      items: updatedItems,
    };
  });
}
