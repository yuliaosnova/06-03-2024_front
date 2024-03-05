import axios from "axios";

const axiosBaseUrl= "http://localhost:3002/api";

axios.defaults.baseURL = axiosBaseUrl; 

export default axios;