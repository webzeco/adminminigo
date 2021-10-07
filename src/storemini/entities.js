import { combineReducers } from "@reduxjs/toolkit";
import products from "./reducers/products";
import reviews from "./reducers/reviews";
import cart from "./reducers/cart";
import orders from "./reducers/order";
import categories from "./reducers/categories";
import user from "./reducers/user";
import customers from "./reducers/customers";
import staff from "./reducers/staff";
export default combineReducers({
  products,
  reviews,
  cart,
  orders,
  categories,
  user,
  customers,
  staff,
  // projects: projectsReducer,
  // users: usersReducer,
});
