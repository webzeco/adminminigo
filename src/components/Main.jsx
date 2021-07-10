import React, { useState } from 'react';
import Home from './Home';
import NavBar from './common/NavBar';
import SideNavBar from './common/SideNavBar';
import { Route, Switch, useHistory } from "react-router-dom";
import AddProduct from './addProductComponent';
import ShowProducts from './ShowProducts';
import { productData } from './data';
import Login from './Login';


export default function Main() {
  
  const history = useHistory();
  const [user, setUser] = useState();
  const loginHandler = (user) => {
    setUser(user);
    history.push('/');
  }
  const signUpHandler = (user) => {
    setUser(user);
    history.push('/');
  }
  const forgotHandler = (user) => {
    ('email sent!!!!');
    history.push('/');
  }
    return (
             <div class="wrapper">
                <SideNavBar />
                <div class="main">
                <NavBar />
                <Switch>
          <Route exact path="/"   component={ Home} />
          <Route
            exact
            path="/addProduct"
            render={(props) => <AddProduct/>}
          />
          <Route
            exact
            path="/showProduct"
            render={(props) => <ShowProducts products={productData}/>}
          />
          <Route
            exact
            path="/login"
            render={(props) => <Login onLogin={loginHandler}/>}
          />
          <Route
            exact
            path="/signUp"
            render={(props) => <Login onLogin={loginHandler}/>}
          />
        </Switch>
                </div>
       
      </div>

    )
}
