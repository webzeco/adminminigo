import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { createSelector } from 'reselect';
import { apiCallBegan } from '../api';

const slice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    selected:null,
    loading: false,
    lastFetch: null,
  },

  reducers: {
    categoriesRequested: (categories, action) => {
      categories.loading = true;
    },
    categoriesReceived: (categories, action) => {
      categories.list = action.payload;
      categories.loading = false;
      categories.lastFetch = Date.now();
    },
    categoriesRequestFailed: (categories, action) => {
      categories.loading = false;
    },
    categoryAdded: (categories, action) => {
      categories.list.push(action.payload);
    },
    categorySated: (categories, action) => {
      categories.selected=action.payload;
    },
  },
});

const {
  categoriesReceived,
  categorySated,
  categoryAdded,
  categoriesRequested,
  categoriesRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action Creators

export const loadCategories = () => (dispatch, getState) => {
  console.log({test:getState().entities});
  const { lastFetch } = getState().entities.categories;
  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url:"category/allCategories",
      onStart: categoriesRequested.type,
      onSuccess: categoriesReceived.type,
      onError: categoriesRequestFailed.type,
    })
  );
};
export const getAllCategories = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.categories;
  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url:"category/allCategories",
      onStart: categoriesRequested.type,
      onSuccess: categoriesReceived.type,
      onError: categoriesRequestFailed.type,
    })
  );
};

export const setCategory = (category) => (dispatch, getState) => {
dispatch(categorySated(category));
};

export const addCategory = (category) =>(dispatch, getState) =>{
  dispatch(apiCallBegan({
    url:"category/addCategory",
    method: 'post',
    data: category,
    message:"Thanks Your category added successfully !!!",
    onSuccess: categoryAdded.type,
    onError: categoriesRequestFailed.type,
  }));
}
  

// export const resolveCategory = (id) =>
//   apiCallBegan({
//     url: `${url}/${id}`,
//     method: 'patch',
//     data: { resolved: true },
//     onSuccess: categoryResolved.type,
//   });

// Selector
export const getAllCategoriesSelector = createSelector(
  (state) => state.entities.categories.list,
  (list) => list 
);

export const getSelectedCategorySelector = createSelector(
  (state) => state.entities.categories.selected,
  (selected) => selected 
);
