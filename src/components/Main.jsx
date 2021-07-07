import React from 'react';
import Home from './Home';
import NavBar from './common/NavBar';
import SideNavBar from './common/SideNavBar';
import { Route, Switch } from "react-router-dom";
import AddProduct from './addProductComponent';
import ShowProducts from './ShowProducts';
import { productData } from './data';

export default function Main() {
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
        </Switch>
                </div>
       
      </div>

    )
}
