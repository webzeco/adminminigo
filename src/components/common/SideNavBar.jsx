import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext';

export default function SideNavBar() {
    const { user,loginHandler} = useContext(UserContext);
    return (
        <div style={{display:user?'contents':'none'}}>
            {/* {user && */}
                <nav id="sidebar" className="sidebar js-sidebar">
                    <div className="sidebar-content js-simplebar">
                        <a className="sidebar-brand" href="/">
                            <span className="align-middle">MiniGo</span>
                        </a>
                        <ul className="sidebar-nav">
                            <li className="sidebar-item active">
                                <Link className="sidebar-link" to="/">
                                    <i className="align-middle" data-feather="home"></i> <span className="align-middle">Dashboard</span>
                                </Link>
                            </li>
                            <li className="sidebar-item ">
                                <a data-bs-target="#Product" data-bs-toggle="collapse" className="sidebar-link">
                                    <i className="align-middle" data-feather="shopping-bag"></i> <span
                                        className="align-middle">Product</span>
                                </a>
                                <ul id="Product" className="sidebar-dropdown collapse" data-bs-parent="#sidebar">
                                   
                                    <li className="sidebar-item"><Link className="sidebar-link" to="/showProduct">All Products</Link></li>
                                     <li className="sidebar-item"><Link className="sidebar-link" to="/categories">Categories</Link></li>
                                    {/* <li className="sidebar-item"><a className="sidebar-link" href="#">P2</a></li>
                    <li className="sidebar-item"><a className="sidebar-link" href="#">P3</a></li> */}
                                </ul>
                            </li>
                            <li className="sidebar-item">
                                {/* <Link to='/order' data-bs-target="#Order" data-bs-toggle="collapse" className="sidebar-link">
                    <i className="align-middle" data-feather="shopping-cart"></i> <span className="align-middle">Order</span>
                </Link> */}
                                <Link className="sidebar-link" to="/orders">
                                <i class="fas fa-shopping-cart"></i> <span className="align-middle">Orders</span>
                                </Link>
                                {/* <ul id="Order" className="sidebar-dropdown collapse" data-bs-parent="#sidebar">
                    <li className="sidebar-item"><a className="sidebar-link" href="#">Order 1</a></li>
                    <li className="sidebar-item"><a className="sidebar-link" href="#">Order 2</a></li>
                    <li className="sidebar-item"><a className="sidebar-link" href="#">Order 3</a></li>
                </ul> */}
                            </li>
                            {user?.role==='admin' && <li className="sidebar-item">
                                <Link className="sidebar-link" to="/staff">
                                <i class="fas fa-users"></i> <span className="align-middle">Staff</span>
                                </Link>
                            </li>}
                            <li className="sidebar-item">
                                <a data-bs-target="#AddProduct" data-bs-toggle="collapse" className="sidebar-link">
                                <i class="fas fa-user-plus"></i> <span className="align-middle">Add
                                        product</span>
                                </a>
                                <ul id="AddProduct" className="sidebar-dropdown collapse" data-bs-parent="#sidebar">
                                    <li className="sidebar-item"><Link className="sidebar-link" to="/addProduct">Add Product</Link></li>
                                </ul>
                            </li>

                            <li className="sidebar-item">
                                <a data-bs-target="#Transactions" data-bs-toggle="collapse" className="sidebar-link">
                                    <i className="align-middle" data-feather="dollar-sign"></i> <span
                                        className="align-middle">Transactions</span>
                                </a>
                                {/* <ul id="Transactions" className="sidebar-dropdown collapse" data-bs-parent="#sidebar">
                    <li className="sidebar-item"><a className="sidebar-link" href="#">Transaction 1</a></li>
                    <li className="sidebar-item"><a className="sidebar-link" href="#">Transaction 2</a></li>
                    <li className="sidebar-item"><a className="sidebar-link" href="#">Transaction 3</a></li>
                </ul> */}
                            </li>

                       

                            <li className="sidebar-item">
                                <a className="sidebar-link" href="/">
                                    <i className="align-middle" data-feather="align-justify"></i> <span
                                        className="align-middle">Reviews</span>
                                </a>
                            </li>

                            <li className="sidebar-item">
                                <a className="sidebar-link" href="pages-profile.html">
                                    <i className="align-middle" data-feather="user"></i> <span className="align-middle">Profile</span>
                                </a>
                            </li>

                            {/* <li className="sidebar-item">
                                <a className="sidebar-link" href="/login">
                                    <i className="align-middle" data-feather="log-in"></i> <span className="align-middle">Sign In</span>
                                </a>
                            </li> */}

                            <li className="sidebar-item" onClick={()=>loginHandler('')}>
                                <Link className="sidebar-link" href="/singUp">
                                <i class="fas fa-sign-out-alt"></i> <span className="align-middle">Logout</span>
                                </Link>
                            </li>

                        </ul>

                    </div>
                </nav>
            {/* } */}
        </div>
    )
}

