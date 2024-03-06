import axios from "../const/axiosBaseUrl";

export async function fetchShops() {
  const response = await axios.get(`/shops`);
  return response;
}

export async function fetchDrugs() {
  const response = await axios.get(`/drugs`);
  return response;
}

export async function fetchDrugsByIds(ids) {
  const response = await axios.post(`/drugs`, ids);
  return response.data;
}

export async function fetchOrders() {
  const response = await axios.get(`/orders`);
  return response;
}

export async function fetchOrderByCustomer(email) {
  const response = await axios.get(`/orders/customer/${email}`);
  return response.data;
}

export async function addOrder(order) {
  try {
    const response = await axios.post("/orders", order);
  } catch (error) {
    console.log(error.message);
  }
}
