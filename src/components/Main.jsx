import React, { useEffect, useState } from 'react';
import Home from './Home';
import NavBar from './common/NavBar';
import SideNavBar from './common/SideNavBar';
import { Route, Switch, useHistory } from "react-router-dom";
import AddProduct from './addProductComponent';
import ShowProducts from './ShowProducts';
import { productData } from './data';
import Login from './Login';
import Orders from './Orders';
import { UserContext } from './contexts/UserContext';
import NotFound from './NotFound';
import Staff from './Staff';
import Categories from './Categories';
import { ToastContainer, toast } from 'react-toastify';
import { login } from '../services/authService';
import { addNewProduct, getAllProducts } from '../services/productServices';
import { getMe } from '../services/UsersService';
import { getAllOrders } from '../services/orderServices';
import OrderDetail from './OrderDetail';
import { createSubCategory, deleteSubCategory, getAllCategories } from '../services/categoryService';

export default function Main() {
  const history = useHistory();
  const [user, setUser] = useState();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [OrderForDetail, setOrderForDetail] = useState();
  const [categories, setCategories] = useState();


  useEffect(() => {
    if (!user) {
      // history.push('/login');
    }
    return () => {
      console.log('clean up');
    }
  }, [user]);

  useEffect(() => {
    getAllProductHandler();
    getMeHandler();
    getAllOrderHandler();
    getAllCategoriesHandler();
    return () => {
      console.log('clean up');
    }
  }, []);
  
  const loginHandler = async (user) => {
    try {
      const { data } = await login(user)
      localStorage.setItem("jwt", data.token);
      toast.success("logged in successfully !!!",{
        position: toast.POSITION.TOP_CENTER
      });
      history.push('/');
    } catch (error) {
      toast.error("Incorrect username or password", {
        position: toast.POSITION.TOP_CENTER,
      });

    }
  }

  const signUpHandler = (user) => {
    setUser(user);
    history.push('/');
  }
  const forgotHandler = (user) => {

    history.push('/');
  }
  const getAllOrderHandler = async () => {
    const { data } = await getAllOrders();
    setOrders(data.data);
  }
  const getMeHandler = async () => {
    const { data } = await getMe();
    // console.log({ data });
    setUser(data);
  }
  const getAllCategoriesHandler = async () => {

    const { data } = await getAllCategories();
    // console.log({ data });
    setCategories(data);
  }
  const getAllProductHandler = async () => {
    try {
      const { data } = await getAllProducts();
      setProducts(data.data);
    } catch (error) {
      toast.error("something went wrong to get all products", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    console.log(products);
  }

  const setOrderForDetailHandler = (order) => {
setOrderForDetail(order)
console.log(order);
    history.push('/orderDetail');
  }
  
  const addProductHandler=async (product)=>{
    console.log(product);
    addNewProduct(product);
  }
  const createSubCategoryHandler=async (data)=>{
    createSubCategory(data);
    getAllCategoriesHandler();
  }
  const deleteSubCategoryHandler=async (data)=>{
    deleteSubCategory(data);
    getAllCategoriesHandler();
  }
  return (
    <UserContext.Provider value={{ user: user, loginHandler }}>
      <div class="wrapper">
        <ToastContainer style={{ width: "322px" }} />
        {/* {user &&  <SideNavBar /> } */}
        <SideNavBar />
        <div class="main">
          {/* {user &&  <NavBar /> } */}
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/addProduct"
              render={(props) => <AddProduct addProduct={addProductHandler} />}
            />
            <Route
              exact
              path="/showProduct"
              render={(props) => <ShowProducts products={products} />}
            />
           
            <Route
              exact
              path="/login"
              render={(props) => <Login onLogin={loginHandler} />}
            />
            <Route
              exact
              path="/signUp"
              render={(props) => <Login onLogin={loginHandler} />}
            />
            <Route
              exact
              path="/orders"
              render={(props) => <Orders  orders={orders} setOrderForDetail={setOrderForDetailHandler}/>}
            />
             <Route
              exact
              path="/orderDetail"
              render={(props) => <OrderDetail order={OrderForDetail} />}
            />
            <Route
              exact
              path="/staff"
              render={(props) => <Staff />}
            />
            <Route
              exact
              path="/categories"
              render={(props) => <Categories deleteSubCategory={deleteSubCategoryHandler} createSubCategory={createSubCategoryHandler} categories={categories} />}
            />
            <Route
              exact
              path="*"
              render={(props) => <NotFound />}
            />
          </Switch>
        </div>

      </div>
    </UserContext.Provider>

  )
}
