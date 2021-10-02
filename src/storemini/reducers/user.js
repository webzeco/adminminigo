import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "user",
  initialState: {
    data: {},
    loading: false,
    lastFetch: null,
  },
  reducers: {
    userRequested: (user, action) => {
      user.loading = true;
    },
    userReceived: (user, action) => {
      user.data = action.payload;
      user.loading = false;
      user.lastFetch = Date.now();
    },
    userRequestFailed: (user, action) => {
      user.loading = false;
    },
    userAddressAdded: (user, action) => {
      user.data = action.payload;
    },
  },
});

const { userReceived, userRequested, userRequestFailed, userAddressAdded } =
  slice.actions;
export default slice.reducer;

// Action Creators

export const loadUser = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.user;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url: "user/me",
      onStart: userRequested.type,
      onSuccess: userReceived.type,
      onError: userRequestFailed.type,
    })
  );
};

// export const login = (data) => (dispatch, getState) => {
//   dispatch(
//     apiCallBegan({
//       url: "user/addAddress",
//       method: "post",
//       data,
//       message: "log in successfully !!!",
//       onStart: userRequested.type,
//       onSuccess: userReceived.type,
//       onError: userRequestFailed.type,
//     })
//   );
// };

export const updateMe = (data) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: "user/updateMe",
      method: "patch",
      data,
      successMessage: " Profile  successfully  updated!!!",
      errorMessage: " Something went Wrong  !!!",
      onSuccess: userReceived.type,
      onError: userRequestFailed.type,
    })
  );
};

// Selector
export const getUserSelector = createSelector(
  (state) => state.entities.user.data,
  (user) => user
);
export const getLoadingSelector = createSelector(
  (state) => state.entities.user.loading,
  (loading) => loading
);

// export const getuserByUser = (userId) =>
//   createSelector(
//     (state) => state.entities.user.data,
//     (user) => user.filter((item) => item.userId === userId)
//   );
