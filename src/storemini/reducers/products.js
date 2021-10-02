import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";
import { paginate } from "../../utils/paginate";
import { sortBy } from "../../utils/sort";
import { filterByPrice } from "../../utils/filter";
const slice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    editProduct: {},
    filtered: [],
    pagination: {
      currentPage: 1,
      itemsCount: 0,
      pageSize: 5,
    },
    sort: "sort",
    priceFilter: "All",
  },
  reducers: {
    productsRequested: (products, action) => {
      products.loading = true;
    },
    productsReceived: (products, action) => {
      products.list = action.payload;
      products.loading = false;
      products.lastFetch = Date.now();
      products.filtered = paginate(
        products.list,
        products.pagination.currentPage,
        products.pagination.pageSize
      );
      products.pagination.itemsCount = products.list?.length;
    },
    productsRequestFailed: (products, action) => {
      products.loading = false;
    },
    pageChanged: (products, action) => {
      products.pagination.currentPage = action.payload;
      products.filtered = paginate(
        products.list,
        products.pagination.currentPage,
        products.pagination.pageSize
      );
    },
    productsSorted: (products, action) => {
      products.sort = action.payload;
      products.list = sortBy(products.list, products.sort);
      products.filtered = paginate(
        products.list,
        products.pagination.currentPage,
        products.pagination.pageSize
      );
    },
    priceFiltered: (products, action) => {
      products.priceFilter = action.payload;
      // products.categoryProducts = products.list.filter(
      //   (prod) => prod.bestSeller
      // );
      products.filtered = filterByPrice(products.list, products.priceFilter);
      products.pagination.itemsCount = products.filtered?.length;
      products.pagination.currentPage = 1;
      products.filtered = paginate(
        products.filtered,
        products.pagination.currentPage,
        products.pagination.pageSize
      );
    },
    editProductAdded: (products, action) => {
      products.editProduct = action.payload;
    },
  },
});
const {
  productsReceived,
  productsRequested,
  productsRequestFailed,
  pageChanged,
  productsSorted,
  priceFiltered,
  editProductAdded,
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/product";
// get all products in apiCallBegan  middleware request
export const loadProducts = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.products;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url: `${url}/allProducts`,
      onStart: productsRequested.type,
      onSuccess: productsReceived.type,
      onError: productsRequestFailed.type,
    })
  );
};

export const updateProduct = (id, data) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `${url}/update/${id}`,
      data: data,
      onStart: productsRequested.type,
      onSuccess: productsReceived.type,
      onError: productsRequestFailed.type,
    })
  );
};

export const changePage = (page) => (dispatch, getState) => {
  dispatch(pageChanged(page));
};
export const addEditProduct = (product) => (dispatch, getState) => {
  dispatch(editProductAdded(product));
};
export const sortProducts = (path) => (dispatch, getState) => {
  dispatch(productsSorted(path));
};
export const filterPrice = (path) => (dispatch, getState) => {
  dispatch(priceFiltered(path));
};

// Selector

export const getAllProductsSelector = createSelector(
  (state) => state.entities.products.list,
  (list) => list
);
export const getEditProductSelector = createSelector(
  (state) => state.entities.products.editProduct,
  (editProduct) => editProduct
);
// export const getCategoryProductsSelector = createSelector(
//   (state) => state.entities.products.categoryProducts,
//   (categoryProducts) => categoryProducts
// );
// export const getProductsWithCategorySelector = (category) =>
//   createSelector(
//     (state) => state.entities.products.list,
//     (list) => list.filter((product) => product.category === category)
//   );
