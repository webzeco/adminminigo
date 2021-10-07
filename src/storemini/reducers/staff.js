import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "staff",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    staffRequested: (staff, action) => {
      staff.loading = true;
    },
    staffReceived: (staff, action) => {
      console.log(action.payload);
      staff.list = action.payload;
      staff.loading = false;
      staff.lastFetch = Date.now();
    },
    staffRequestFailed: (staff, action) => {
      staff.loading = false;
    },
    staffAddressAdded: (staff, action) => {
      staff.list = action.payload;
    },
  },
});

const { staffReceived, staffRequested, staffRequestFailed, staffAddressAdded } =
  slice.actions;
export default slice.reducer;

// Action Creators

export const loadStaff = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.staff;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url: "user/staff",
      onStart: staffRequested.type,
      onSuccess: staffReceived.type,
      onError: staffRequestFailed.type,
    })
  );
};

// export const login = (list) => (dispatch, getState) => {
//   dispatch(
//     apiCallBegan({
//       url: "staff/addAddress",
//       method: "post",
//       list,
//       message: "log in successfully !!!",
//       onStart: staffRequested.type,
//       onSuccess: staffReceived.type,
//       onError: staffRequestFailed.type,
//     })
//   );
// };

// export const addstaffAddress = (staff, payment) => (dispatch, getState) => {
//   dispatch(
//     apiCallBegan({
//       url: "staff/addAddress",
//       method: "post",
//       list: { staff, payment },
//       message: "Your Address added successfully !!!",
//       onSuccess: staffAddressAdded.type,
//       onError: staffRequestFailed.type,
//     })
//   );
// };

// Selector
export const getStaffSelector = createSelector(
  (state) => state.entities.staff.list,
  (staff) => staff
);
export const getLoadingSelector = createSelector(
  (state) => state.entities.staff.loading,
  (loading) => loading
);

// export const getstaffBystaff = (staffId) =>
//   createSelector(
//     (state) => state.entities.staff.list,
//     (staff) => staff.filter((item) => item.staffId === staffId)
//   );
