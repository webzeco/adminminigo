import React, { useState } from 'react'

export default function OrderDetail({order}) {
// const [total, setTotal] = useState(0)
    return (
        <div>
            <div class="container-fluid pb-5">
                <div class="display-4 px-3 fw-bold">Order Detail</div>
                <div class="display-7 px-3">Details for Order ID:<span>{order._id}</span></div>
            </div>
            <div class="container-fluid bg_color pt-3  rounded">
                <div class="card w-auto mx-4  rounded">
                    <div class="row  d-flex justify-content-between bg-light p-3 ">
                        <div class="col-lg-8 col-md-8 col-sm-8">
                            <div class="display-8"><i class="fa fa-calendar" aria-hidden="true"></i>
                               {order.createdAt}</div>
                            <div class="display-9 ">Details for Order ID:<span>{order._id}</span></div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 ">
                            <div class="pad">
                                <div class="row d-flex justify-content-center px-2">
                                    <div class="col-lg-7 col-md-8 col-sm-10 mt-2">
                                        <div class="dropdown">
                                            <button
                                                class="btn btn-light dropdown-toggle"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-mdb-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                change status
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul> 
                                        </div>
                                    </div>
                                    <div class="col-lg-5 col-md-4 col-sm-2 mt-2">
                                        <button type="button" class="btn btn-success">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row d-flex justify-content-between bg-light pt-2  px-3 ">
                        <div class="col-lg-4 col-md-12 mb-2">
                            <div class="fw-bold mb-2"><i class="fa fa-user mx-1"></i>Customer</div>
                            <div class="display-8">{order.orderBy.name}</div>
                            <div class="display-8">{order.orderBy.email}</div>
                            <div class="display-8">{order.orderBy.contactNo}</div>
                            <a href="#">View Profile</a>
                        </div>
                        <div class="col-lg-4 col-md-12 mb-2">
                            <div class="fw-bold mb-2"><i class="fas fa-truck mx-1"></i>Order Info</div>
                            <div class="display-8">Shipping: {order.shipping.address} {"  "}
                             {order.shipping.province} {"  "} {order.shipping.city} {"  "} 
                             {order.shipping.area}</div>
                            <div class="display-8">Pay method:Card</div>
                            <div class="display-8">Status:{order.shipping.status}</div>
                        </div>

                        <div class="col-lg-4 col-md-12 mb-2">
                            <div class="fw-bold mb-2"><i class="fa fa-location mx-1"></i>Deliver to</div>
                            <div class="display-8">Address: {order.shipping.address} {"  "}
                             {order.shipping.province} {"  "} {order.shipping.city} {"  "} 
                             {order.shipping.area}</div>
                        </div>
                    </div>

                    <div class="row d-flex justify-content-between bg-light">
                        <div class="col-lg-8 col-md-12 p-3">
                            <table class="table">
                                <thead class="bg-info ">
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col"></th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {order.items.map((prod,index)=>{
                                    
                                    return (
                                        
                                        <tr key={index}>
                                        <td>
                                            <img class="img-fluid" src={prod?.item?.images[0]} height="40px" width="40px" alt="Sender" />
                                        </td>
                                        <td>{prod.item.title}</td>
                                        <td>{prod.price}</td>
                                        <td>{prod.quantity}</td>
                                        <td>{prod.price* prod.quantity} Rs</td>
                                    </tr>
                                    )
                                })}
                                   
                                </tbody>
                            </table>
                                <div style={{marginLeft:'75%'}} className="ml-5">
                                <h3 className="lead">SubTotal:{order.subtotal}</h3>
                                <h3 className="lead">shippingCharges:{order.shipping.charges}</h3>
                                <h3 className="lead">Totals:{order.subtotal+order.shipping.charges}</h3>
                                </div>
                        </div>
                        <div class="col-lg-4 col-md-12 back  pt-3">
                            <div class="card rounded p-3">
                                <div class="display-7 px-3 fw-bold mb-2">Payment Info</div>
                                <div class="display-9 px-3"><i class="fab fa-cc-mastercard"></i> Master Card **** **** 4768</div>
                                <div class="display-9 px-3">Business name: Grand Market LLC</div>
                                <div class="display-9 px-3">Phone: +1 (800) 555-154-52</div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
