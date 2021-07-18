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

export default function Main() {
  const history = useHistory();
  const [user, setUser] = useState();
  const loginHandler = async (user) => {
    try {
      const { data } = await login(user)
      localStorage.setItem("jwt", data.token);
      setUser(data.user);
      toast.success("logged in successfully !!!", {
        position: toast.POSITION.TOP_CENTER
      });
      console.log(data.user);
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
  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
    return () => {
      console.log('clean up');
    }
  }, [user]);
  const forgotHandler = (user) => {
    ('email sent!!!!');

    history.push('/');
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
              render={(props) => <AddProduct />}
            />
            <Route
              exact
              path="/showProduct"
              render={(props) => <ShowProducts products={productData} />}
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
              render={(props) => <Orders />}
            />
            <Route
              exact
              path="/staff"
              render={(props) => <Staff />}
            />
            <Route
              exact
              path="/categories"
              render={(props) => <Categories />}
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
