import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiveback-rqwx6.kinsta.app/api/",
  withCredentials: true,
});

export default newRequest;
