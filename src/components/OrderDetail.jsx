import React, { useState } from 'react'

export default function OrderDetail({ order }) {
    // const [total, setTotal] = useState(0)
    return (
        <div>
            <div className="container-fluid pb-5">
                <div className="display-6 px-3 fw-bold mt-3">Order Detail</div>
                <div className="display-7 px-3">Details for Order ID:<span>{order._id}</span></div>
            </div>
            <div className="container-fluid bg_color pt-3  rounded">
                <div className="card w-auto mx-4  rounded">
                    <div className="row  d-flex justify-content-between bg-light p-3 ">
                        <div className="col-lg-8 col-md-8 col-sm-8">
                            <div className="display-8"><i className="fa fa-calendar" aria-hidden="true"></i>
                                {order.createdAt}</div>
                            <div className="display-9 ">Details for Order ID:<span>{order._id}</span></div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 ">
                            <div className="pad">
                                <div className="row d-flex justify-content-center px-2">
                                    <div className="col-lg-7 col-md-8 col-sm-10 mt-2">
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-light dropdown-toggle"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-mdb-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                change status
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-4 col-sm-2 mt-2">
                                        <button type="button" className="btn btn-success">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row d-flex justify-content-between bg-light pt-2  px-3 ">
                        <div className="col-lg-4 col-md-12 mb-2">
                            <div className="fw-bold mb-2"><i className="fa fa-user mx-1"></i>Customer</div>
                            <div className="display-8">{order.name}</div>
                            <div className="display-8">{order.email}</div>
                            <div className="display-8">{order.contactNo}</div>
                            <a href="/">View Profile</a>
                        </div>
                        <div className="col-lg-4 col-md-12 mb-2">
                            <div className="fw-bold mb-2"><i className="fas fa-truck mx-1"></i>Order Info</div>
                            <div className="display-8">Shipping: {order.shipping.address} {"  "}
                                {order.shipping.province} {"  "} {order.shipping.city} {"  "}
                            </div>
                                <div className="display-8">Zip:{order.shipping.zip}</div>
                            <div className="display-8">Status:{order.shipping.status}</div>
                        </div>

                        <div className="col-lg-4 col-md-12 mb-2">
                            <div className="fw-bold mb-2"><i className="fa fa-location mx-1"></i>Deliver to</div>
                            <div className="display-8">Address: {order.shipping.address} {"  "}
                                {order.shipping.province} {"  "} {order.shipping.city} {"  "}
                                {order.shipping.area}</div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between bg-light">
                        <div className="col-lg-8 col-md-12 p-3">
                            <table className="table">
                                <thead className="bg-info ">
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.products.map((prod, index) => {
                                    console.log(order);
                                        return (

                                            <tr key={index}>
                                                <td>
                                                    <img className="img-fluid" src={`${process.env.REACT_APP_URL}/img/${prod?.product?.img}`}
                                                        height="40px" width="40px" alt="Sender" />
                                                </td>
                                                <td>{prod.product.title}</td>
                                                <td>{prod.basePrice}</td>
                                                <td>{prod.quantity}</td>
                                                <td>{prod.totalProductPrice} Rs</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                            <div style={{ marginLeft: '75%' }} className="ml-5">
                                <h3 className="lead">SubTotal:{order.subtotal}</h3>
                                <h3 className="lead">shippingCharges:{order.shipping.charges}</h3>
                                <h3 className="lead">Totals:{order.subtotal + order.shipping.charges}</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 back  pt-3">
                            <div className="card rounded p-3">
                                <div className="display-7 px-3 fw-bold mb-2">Payment Info</div>
                                <div className="display-9 px-3"><i className={`fab fa-cc-${order.payment.charge.payment_method_details.card.brand}`}></i> {order.payment.charge.payment_method_details.card.brand} Card **** **** {order.payment.charge.payment_method_details.card.last4}</div>
                                <div className="display-9 px-3">Business name: {order.payment.charge.payment_method_details.card.brand}</div>
                                {/* {console.log({name:order.payment.charge.payment_method_details.card})} */}
                                <div className="display-9 px-3">Phone: {order.shipping.contactNo}</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
