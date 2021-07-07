import React from 'react'
import { Link } from 'react-router-dom'

export default function SideNavBar() {
  return (
    <nav id="sidebar" class="sidebar js-sidebar">
    <div class="sidebar-content js-simplebar">
        <a class="sidebar-brand" href="/">
            <span class="align-middle">MiniGo</span>
        </a>
        <ul class="sidebar-nav">
            <li class="sidebar-item active">
                <Link class="sidebar-link" href="/">
                    <i class="align-middle" data-feather="home"></i> <span class="align-middle">Dashboard</span>
                </Link>
            </li>
            <li class="sidebar-item ">
                <a data-bs-target="#Product" data-bs-toggle="collapse" class="sidebar-link">
                    <i class="align-middle" data-feather="shopping-bag"></i> <span
                        class="align-middle">Product</span>
                </a>
                <ul id="Product" class="sidebar-dropdown collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item"><Link class="sidebar-link" to="/showProduct">All Products</Link></li>
                    {/* <li class="sidebar-item"><a class="sidebar-link" href="#">P2</a></li>
                    <li class="sidebar-item"><a class="sidebar-link" href="#">P3</a></li> */}
                </ul>
            </li>

            <li class="sidebar-item">
                <a data-bs-target="#Order" data-bs-toggle="collapse" class="sidebar-link">
                    <i class="align-middle" data-feather="shopping-cart"></i> <span
                        class="align-middle">Order</span>
                </a>
                <ul id="Order" class="sidebar-dropdown collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item"><a class="sidebar-link" href="#">Order 1</a></li>
                    <li class="sidebar-item"><a class="sidebar-link" href="#">Order 2</a></li>
                    <li class="sidebar-item"><a class="sidebar-link" href="#">Order 3</a></li>
                </ul>
            </li>

            <li class="sidebar-item">
                <a data-bs-target="#Saller" data-bs-toggle="collapse" class="sidebar-link">
                    <i class="align-middle" data-feather="archive"></i> <span
                        class="align-middle">Sellers</span>
                </a>
                <ul id="Saller" class="sidebar-dropdown collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item"><a class="sidebar-link" href="#">Saller 1</a></li>
                    <li class="sidebar-item"><a class="sidebar-link" href="#">Saller 2</a></li>
                    <li class="sidebar-item"><a class="sidebar-link" href="#">Saller 3</a></li>
                </ul>
            </li>

            <li class="sidebar-item">
                <a data-bs-target="#AddProduct" data-bs-toggle="collapse" class="sidebar-link">
                    <i class="align-middle" data-feather="plus-square"></i> <span class="align-middle">Add
                        product</span>
                </a>
                <ul id="AddProduct" class="sidebar-dropdown collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item"><Link class="sidebar-link" to="/addProduct">Add Product</Link></li>
                   </ul>
            </li>

            <li class="sidebar-item">
                <a data-bs-target="#Transactions" data-bs-toggle="collapse" class="sidebar-link">
                    <i class="align-middle" data-feather="dollar-sign"></i> <span
                        class="align-middle">Transactions</span>
                </a>
                <ul id="Transactions" class="sidebar-dropdown collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item"><a class="sidebar-link" href="#">Transaction 1</a></li>
                    <li class="sidebar-item"><a class="sidebar-link" href="#">Transaction 2</a></li>
                    <li class="sidebar-item"><a class="sidebar-link" href="#">Transaction 3</a></li>
                </ul>
            </li>

            <li class="sidebar-item">
                <a data-bs-target="#Account" data-bs-toggle="collapse" class="sidebar-link">
                    <i class="align-middle" data-feather="user"></i> <span class="align-middle">Account</span>
                </a>
                <ul id="Account" class="sidebar-dropdown collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item"><a class="sidebar-link" href="#">Account 1</a></li>
                    <li class="sidebar-item"><a class="sidebar-link" href="#">Account 2</a></li>
                    <li class="sidebar-item"><a class="sidebar-link" href="#">Account 3</a></li>
                </ul>
            </li>

            <li class="sidebar-item">
                <a class="sidebar-link" href="/">

                    <i class="align-middle" data-feather="align-justify"></i> <span
                        class="align-middle">Reviews</span>
                </a>
            </li>

            <li class="sidebar-item ">
                <a class="sidebar-link" href="/">

                    <i class="align-middle" data-feather="star"></i> <span class="align-middle">Brand</span>
                </a>
            </li>
            <li class="sidebar-item">
                <a class="sidebar-link" href="pages-profile.html">
                    <i class="align-middle" data-feather="user"></i> <span class="align-middle">Profile</span>
                </a>
            </li>

            <li class="sidebar-item">
                <a class="sidebar-link" href="pages-sign-in.html">
                    <i class="align-middle" data-feather="log-in"></i> <span class="align-middle">Sign In</span>
                </a>
            </li>

            <li class="sidebar-item">
                <a class="sidebar-link" href="pages-sign-up.html">
                    <i class="align-middle" data-feather="user-plus"></i> <span class="align-middle">Sign
                        Up</span>
                </a>
            </li>

        </ul>
    </div>
</nav>

  )
}

