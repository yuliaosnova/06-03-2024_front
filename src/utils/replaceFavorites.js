/**
 * Replaces the objects array with favorites objects first
 * @param {Array<Object>} objects - array of objects
 * @param {Array<string>} favorites - array of ids
 * @returns {Array<Object>}
 */

export function replaceFavorites(objects, favorites) {
  const favoritesArr = objects.filter((obj) => favorites.includes(obj._id));
  const notFavoritesArr = objects.filter((obj) => !favorites.includes(obj._id));
  return favoritesArr.concat(notFavoritesArr);
}
