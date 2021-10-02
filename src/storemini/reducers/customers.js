import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "customers",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    customersRequested: (customer, action) => {
      customer.loading = true;
    },
    customersReceived: (customer, action) => {
      console.log(action.payload);
      customer.list = action.payload;
      customer.loading = false;
      customer.lastFetch = Date.now();
    },
    customerRequestFailed: (customer, action) => {
      customer.loading = false;
    },
    customerAddressAdded: (customer, action) => {
      customer.list = action.payload;
    },
  },
});

const { customersReceived, customersRequested, customerRequestFailed, customerAddressAdded } =
  slice.actions;
export default slice.reducer;

// Action Creators

export const loadCustomers = () => (dispatch, getState) => {
  // const { lastFetch } = getState().entities.customers;
  // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  // if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url: "user/getAllCustomer",
      onStart: customersRequested.type,
      onSuccess: customersReceived.type,
      onError: customerRequestFailed.type,
    })
  );
};

// export const login = (list) => (dispatch, getState) => {
//   dispatch(
//     apiCallBegan({
//       url: "customer/addAddress",
//       method: "post",
//       list,
//       message: "log in successfully !!!",
//       onStart: customerRequested.type,
//       onSuccess: customersReceived.type,
//       onError: customerRequestFailed.type,
//     })
//   );
// };

// export const addCustomerAddress = (customer, payment) => (dispatch, getState) => {
//   dispatch(
//     apiCallBegan({
//       url: "customer/addAddress",
//       method: "post",
//       list: { customer, payment },
//       message: "Your Address added successfully !!!",
//       onSuccess: customerAddressAdded.type,
//       onError: customerRequestFailed.type,
//     })
//   );
// };

// Selector
export const getAllCustomersSelector = createSelector(
  (state) => state.entities.customers.list,
  (customers) => customers
);
export const getLoadingSelector = createSelector(
  (state) => state.entities.customer.loading,
  (loading) => loading
);

// export const getcustomerBycustomer = (customerId) =>
//   createSelector(
//     (state) => state.entities.customer.list,
//     (customer) => customer.filter((item) => item.customerId === customerId)
//   );
