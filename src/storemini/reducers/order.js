// import { createSlice } from "@reduxjs/toolkit";
// import moment from "moment";
// import { createSelector } from "reselect";
// import { apiCallBegan } from "../api";

// const slice = createSlice({
//   name: "orders",
//   initialState: {
//     list: [
//       // { estimatedProcessingTime , 
//       // selectedVariants, customWriting   , customDate ,qty,order }
//     ],
//     loading: false,
//     lastFetch: null,
//   },
//   reducers: {
//     ordersRequested: (orders, action) => {
//       orders.loading = true;
//     },
//     ordersReceived: (orders, action) => {
//       orders.list = action.payload;
//       orders.loading = false;
//       orders.lastFetch = Date.now();
//     },
//     ordersRequestFailed: (orders, action) => {
//       orders.loading = false;
//     },
//     orderAdded: (reviews, action) => {
//       reviews.list.push(action.payload);
//     },
//   },
// });

// const {
//   ordersReceived,
//   ordersRequested,
//   orderAdded,
//   ordersRequestFailed,
// } = slice.actions;
// export default slice.reducer;

// // Action Creators
// const url = "/order";

// export const loadOrders = () => (dispatch, getState) => {
//   // const { lastFetch } = getState().entities.orders;
//   // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
//   // if (diffInMinutes < 10) return;
//   dispatch(
//     apiCallBegan({ 
//       url:`${url}/userOrders`,
//       onStart: ordersRequested.type,
//       onSuccess: ordersReceived.type,
//       onError: ordersRequestFailed.type,
//     })
//   );
// };

// export const addOrder = (order,payment,user) =>(dispatch, getState) =>{
 
//   dispatch(apiCallBegan({
//     url:`${url}/addOrder`,
//     method: 'post',
//     data: {order,payment,user},
//     message:"Order added successfully !!! check your mail for further detail!!!",
//     onSuccess: orderAdded.type,
//     onError: ordersRequestFailed.type,
//   }));
// };
  

// // Selector
// export const getOrdersByUserSelector = createSelector(
//   (state) => state.entities.orders.list,
//   (orders) => orders
// );
// export const getLoadingSelector = createSelector(
//   (state) => state.entities.orders.loading,
//   (loading) => loading
// );

// // export const getOrdersByUser = (userId) =>
// //   createSelector(
// //     (state) => state.entities.orders.list,
// //     (orders) => orders.filter((item) => item.userId === userId)
// //   );

import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";
import { paginate } from "../../utils/paginate";
import { sortBy } from "../../utils/sort";
import { filterByPrice } from "../../utils/filter";
// import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

const slice = createSlice({
  name: "orders",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    detailedOrder:{},
    filtered: [],
    pagination: {
      currentPage: 1,
      itemsCount: 0,
      pageSize: 5,
    },
    sort: "sort",
    priceFilter:"All"
  },
  reducers: {
    ordersRequested: (orders, action) => {
      orders.loading = true;
    },
    ordersReceived: (orders, action) => {
      orders.list = action.payload;
      orders.loading = false;
      orders.lastFetch = Date.now();
      orders.filtered = paginate(
        orders.list,
        orders.pagination.currentPage,
        orders.pagination.pageSize
      );
      orders.pagination.itemsCount = orders.list?.length;
    },
    ordersRequestFailed: (orders, action) => {
      orders.loading = false;
    },
    pageChanged: (orders, action) => {
      orders.pagination.currentPage = action.payload;
      orders.filtered = paginate(
        orders.list,
        orders.pagination.currentPage,
        orders.pagination.pageSize
      );
    },
    ordersSorted: (orders, action) => {
      orders.sort = action.payload;
      orders.list = sortBy(orders.list, orders.sort);
      orders.filtered = paginate(
        orders.list,
        orders.pagination.currentPage,
        orders.pagination.pageSize
      );
    },
    priceFiltered: (orders, action) => {
      orders.priceFilter = action.payload;
      // orders.categoryorders = orders.list.filter(
      //   (prod) => prod.bestSeller
      // );
      orders.filtered = filterByPrice(orders.list, orders.priceFilter);
      orders.pagination.itemsCount = orders.filtered?.length;
      orders.pagination.currentPage=1;
      orders.filtered = paginate(
        orders.filtered,
        orders.pagination.currentPage,
        orders.pagination.pageSize
      );
    },
    detailedOrderAdded: (orders, action) => {
      orders.detailedOrder = action.payload;
    },
  },
});
const {
  ordersReceived,
  ordersRequested,
  ordersRequestFailed,
  pageChanged,
  ordersSorted,
  priceFiltered,
  detailedOrderAdded
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/order";
// get all orders in apiCallBegan  middleware request
export const loadOrders = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.orders;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url:  `${url}/allOrders`,
      onStart: ordersRequested.type,
      onSuccess: ordersReceived.type,
      onError: ordersRequestFailed.type,
    })
  );
};



export const changePage = (page) => (dispatch, getState) => {
  dispatch(pageChanged(page));
};
export const sortOrders = (path) => (dispatch, getState) => {
  dispatch(ordersSorted(path));
};
export const filterPrice = (path) => (dispatch, getState) => {
  dispatch(priceFiltered(path));
};

export const addDetailedOrder = (order) => (dispatch, getState) => {
  dispatch(detailedOrderAdded(order));
};

export const changeOrderStatus = (id,data) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url:`${url}/changeStatus/${id}`,
      data:data,
      method:"patch",
      onStart: ordersRequested.type,
      onSuccess: ordersRequestFailed.type,
      onError: ordersRequestFailed.type,
    })
  );
};

// Selector

export const getAllOrdersSelector = createSelector(
  (state) => state.entities.orders.list,
  (list) => list
);
export const getDetailedOrderSelector = createSelector(
  (state) => state.entities.orders.detailedOrder,
  (order) => order
);



// export const getCategoryordersSelector = createSelector(
//   (state) => state.entities.orders.categoryorders,
//   (categoryorders) => categoryorders
// );
// export const getordersWithCategorySelector = (category) =>
//   createSelector(
//     (state) => state.entities.orders.list,
//     (list) => list.filter((order) => order.category === category)
//   );
