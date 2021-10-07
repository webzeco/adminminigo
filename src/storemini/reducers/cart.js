import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "cart",
  initialState: {
    list: [
      // { estimatedProcessingTime , selectedVariants, customWriting   , customDate ,qty,product }
    ],
    numberOfItems:0,
    subtotal: 0,
    shipping:null,
    bucket: null,
    checkout: false,
    payment:null,
    loading: false,
    lastFetch: null,
  },
  reducers: {
    itemAdded: (cart, action) => {
      // cart.subtotal+= action.payload.product.price*action.payload.qty;
      cart.numberOfItems+=1;
      cart.subtotal += action.payload.product.price;
      cart.list.push(action.payload);
    },
    cartRequested: (cart, action) => {
      cart.loading = true;
    },
    cartReceived: (cart, action) => {
      cart.list = action.payload;
      cart.loading = false;
      cart.lastFetch = Date.now();
    },
    cartRequestFailed: (cart, action) => {
      cart.loading = false;
    },
    quantityChanged: (cart, action) => {
      const { id, qty } = action.payload;
      const index = cart.list.findIndex((item) => item.product.id === id);
      cart.list[index].qty = qty;
      cart.subtotal = cart.list.reduce(function (acc, obj) {
        return acc + obj.qty * obj.product.price;
      }, 0);
      if(cart.bucket) cart.subtotal+=cart.bucket.price*1;
    },
    itemRemoved: (cart, action) => {
      const { id } = action.payload;
      cart.numberOfItems-=1;
      cart.list=cart.list.filter((item) => item.product.id !== id);
      cart.subtotal = cart.list.reduce(function (acc, obj) {
        return acc + obj.qty * obj.product.price;
      }, 0);
    },
    bucketAdded: (cart, action) => {
      const {_id,image,price,title}=action.payload;
      if (cart.bucket&&cart.subtotal>0) cart.subtotal-=(cart.bucket.price*1);
      cart.subtotal+=(action.payload.price*1);
      cart.bucket={_id,image,price,title};
    },
    shippingAdded: (cart, action) => {
      cart.shipping=action.payload;
    },
    paymentAdded: (cart, action) => {
      cart.payment=action.payload;
    },
  },
});

const {
  cartReceived,
  itemAssignedToUser,
  itemAdded,
  quantityChanged,
  itemRemoved,
  bucketAdded,
  shippingAdded,
  paymentAdded,
  cartRequested,
  cartRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/cart";

export const addItem = (item) => (dispatch, getState) => {
  dispatch(itemAdded(item));
};

export const changeQuantity = (id, qty) => (dispatch, getState) => {
  dispatch(quantityChanged({ id, qty }));
};

export const removeItem = (id) => (dispatch, getState) => {
  dispatch(itemRemoved({ id }));
};

export const addBucket = (bucket) => (dispatch, getState) => {
  console.log(bucket);
  dispatch(bucketAdded( bucket ));
};
export const addShipping = (shipping) => (dispatch, getState) => {
  dispatch(shippingAdded( shipping ));
};
export const addPayment = (payment) => (dispatch, getState) => {
  dispatch(paymentAdded( payment ));
};

export const loadCart = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.cart;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url,
      onStart: cartRequested.type,
      onSuccess: cartReceived.type,
      onError: cartRequestFailed.type,
    })
  );
};


export const assignitemToUser = (itemId, userId) =>
  apiCallBegan({
    url: `${url}/${itemId}`,
    method: "patch",
    data: { userId },
    onSuccess: itemAssignedToUser.type,
  });

// Selector
export const getCart = createSelector(
  (state) => state.entities.cart,
  (cart) => cart
);
export const getNumberOfCartItems= createSelector(
  (state) => state.entities.cart.numberOfItems,
  (numberOfItems) =>numberOfItems 
);
export const getSelectedBucket = createSelector(
  (state) => state.entities.cart.bucket,
  (bucket) => bucket
);

export const getCartByUser = (userId) =>
  createSelector(
    (state) => state.entities.cart.list,
    (cart) => cart.filter((item) => item.userId === userId)
  );
