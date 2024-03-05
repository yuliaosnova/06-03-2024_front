export function setAddButtonText(id, collection) {
  const alreadyInCollection = collection.find((item) => item.id === id);
  if (alreadyInCollection) {
    return "REMOVE FROM CART";
  } else {
    return "ADD TO CART";
  }
}
