export function sortByPrice(arr) {
	return arr.sort((a, b) => (a.price > b.price ? 1 : -1));
 }