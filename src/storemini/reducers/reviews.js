import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { createSelector } from 'reselect';
import { apiCallBegan } from '../api';

const slice = createSlice({
  name: 'reviews',
  initialState: {
    list: [],
    productReviews:[],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    reviewsRequested: (reviews, action) => {
      reviews.loading = true;
    },
    reviewsReceived: (reviews, action) => {
      reviews.list = action.payload;
      reviews.loading = false;
      reviews.lastFetch = Date.now();
    },
    reviewsRequestFailed: (reviews, action) => {
      reviews.loading = false;
    },
    reviewAdded: (reviews, action) => {
      reviews.list.push(action.payload);
    },
    productReviewsAdded: (reviews, action) => {
      reviews.productReviews=reviews.list.filter(rev=>rev.product._id===action.payload);
    },
  },
});

const {
  reviewsReceived,
  reviewAdded,
  reviewsRequested,
  reviewsRequestFailed,
 productReviewsAdded
} = slice.actions;
export default slice.reducer;

// Action Creators

export const loadReviews = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.reviews;
  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url:"review/allReviews",
      onStart: reviewsRequested.type,
      onSuccess: reviewsReceived.type,
      onError: reviewsRequestFailed.type,
    })
  );
};
export const getAllReviews = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.reviews;
  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url:"review/allReviews",
      onStart: reviewsRequested.type,
      onSuccess: reviewsReceived.type,
      onError: reviewsRequestFailed.type,
    })
  );
};

export const addReview = (review) =>(dispatch, getState) =>{
  dispatch(apiCallBegan({
    url:"review/addReview",
    method: 'post',
    data: review,
    message:"Thanks Your Review added successfully !!!",
    onSuccess: reviewAdded.type,
    onError: reviewsRequestFailed.type,
  }));
}
  

export const addProductsReviews = (id) =>(dispatch, getState) =>{
  dispatch(productReviewsAdded(id));
};
// export const resolvereview = (id) =>
//   apiCallBegan({
//     url: `${url}/${id}`,
//     method: 'patch',
//     data: { resolved: true },
//     onSuccess: reviewResolved.type,
//   });

// Selector
export const getAllReviewsSelector = createSelector(
  (state) => state.entities.reviews.list,
  (list) => list 
);

export const getProductReviewsSelector = createSelector(
  (state) => state.entities.reviews.productsReviews,
  (list) => list 
);