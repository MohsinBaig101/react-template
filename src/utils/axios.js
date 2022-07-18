import axios from "axios";
// import logOut from "./services/utills/Logout";

const token = window.localStorage.getItem("authorization");

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

if (token) {
  instance.defaults.headers.common.authorization = token;
}

instance.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    if (error.response.status === 401) {
      //   logOut();
      window.location.reload(true);
    }
    return Promise.reject(error);
  }
);

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
