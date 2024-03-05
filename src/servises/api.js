import axios from "../const/axiosBaseUrl";

export async function fetchShops() {
  const response = await axios.get(`/shops`);
  return response;
}

export async function fetchDrugs() {
  const response = await axios.get(`/drugs`);
  console.log("drugs:", response);
  return response;
}

export async function fetchDrugsByIds(ids) {
  const response = await axios.post(`/drugs`, ids);
  console.log("drugsById:", response);
  return response;
}

export async function fetchOrders() {
  const response = await axios.get(`/orders`);
  console.log("orders:", response);
  return response;
}

export async function fetchOrderByCustomer(username) {
  const response = await axios.get(`/orders/${username}`);
  console.log("orders:", response);
  return response;
}

export async function addOrder(order) {
  try {
    const response = await axios.post("/orders", order);
    console.log("added! ", response);
    //  return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
