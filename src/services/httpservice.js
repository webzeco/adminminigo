import axios from "axios";
import { toast } from "react-toastify";
const token = localStorage.getItem('jwt')
 if (token) {
    axios.defaults.headers.common['x-token'] = `${token}`;
  }
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    // console.log("logging the error", error);
    // alert("An unexpected error occurred.");
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete
};
