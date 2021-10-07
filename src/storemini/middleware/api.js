import axios from "axios";
import { Redirect, useHistory } from "react-router";
import { toast } from "react-toastify";
import * as actions from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    const {
      url,
      method,
      data,
      onStart,
      onSuccess,
      onError,
      successMessage,
      errorMessage,
    } = action.payload;
    console.log({ name: action.payload });
    if (onStart) dispatch({ type: onStart });
    next(action);
    try {
      let response;
      if (url === "/order/addOrder") {
        response = await axios.request({
          baseURL: `${process.env.REACT_APP_URL}/api/v1`,
          url,
          method,
          data: { data: data.order, user: data.user },
        });
        const { _id, total } = response.data.data;
        data.payment.price = (total / 164) * 100;
        response = await axios.request({
          baseURL: `${process.env.REACT_APP_URL}/api/v1`,
          url: "/order/payment",
          method,
          data: { data: data.payment, id: _id },
        });
      } else {
        response = await axios.request({
          baseURL: `${process.env.REACT_APP_URL}/api/v1`,
          url,
          method,
          data,
        });
      }
      if (method === "post" || method === "patch") {
        toast.success(successMessage, {
          position: "top-center",
          closeOnClick: true,
        });
        window.scrollTo(0, 0);
      }
      console.log({ cust: response.data });
      dispatch(actions.apiCallSuccess(response.data.data)); //apiCallSuccess created in actions by action creator
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data.data });
    } catch (error) {
      if (errorMessage)
        toast.error(errorMessage, {
          position: "top-center",
          closeOnClick: true,
        });
      dispatch(actions.apiCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
