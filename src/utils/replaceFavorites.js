export function replaceFavorites(objects, favorites) {
  const favoritesArr = objects.filter((obj) => favorites.includes(obj._id));
  const notFavoritesArr = objects.filter((obj) => !favorites.includes(obj._id));
  return favoritesArr.concat(notFavoritesArr);
}
