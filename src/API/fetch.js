import axios from "axios";

const publicFetch = axios.create({
  baseURL: process.env.APP_URL,
});
export default { publicFetch };
