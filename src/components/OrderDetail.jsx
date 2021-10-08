import React, { Component } from 'react';
import { connect } from 'react-redux';
import ntcjs, { name } from "ntcjs";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { toast } from 'react-toastify';
import { changeOrderStatus } from '../storemini/reducers/order';
import Loader from 'react-loader-spinner';
class OrderDetail extends Component {

    state = {
        error: [],
        variants: [],
        status: 'Pending'
    }
    addVariants = async (variant) => {
        await this.setState({ variants: [...this.state.variants, variant] });
    }
    filterTags = () => {
        // console.log(this.props.order.products);
        const variantsArray = [];
        const errorArray = [];


        this.props.order.products.map(orderProduct => {
            const { qty, product } = orderProduct;
            orderProduct.selectedVariants.map(orderVar => {
                orderProduct.product.variants.map(productVar => {
                    if (orderVar.variantType === productVar.selectedOption) {
                        productVar.tags.map(tag => {
                            if (tag._id == orderVar.tag._id) {
                                if (qty > tag.qty) {
                                    // const temp = [...this.state.error];
                                    variantsArray.push({ product, option: orderVar.variantType, tag, sold: true });
                                    errorArray.push({ product, option: orderVar.variantType, tag, sold: true });
                                    // this.setState({ error: temp });
                                } else {
                                    const { ...tempTag } = tag;
                                    // tempTag.qty = tempTag.qty - qty;
                                    variantsArray.push({ product, option: orderVar.variantType, tag: tempTag, sold: false });
                                }
                            }
                        }
                        );
                    }
                });
            });
            // console.log(orderProduct.product.variants);
            // console.log(orderProduct.selectedVariants);
            // const {selectedVariants,_id,qty}=orderProduct;
            // const product=this.props.products.find({_id});
            // console.log({pr:product});
        });
        this.setState({ variants: variantsArray })
    }
    setStatus = (e) => {
        this.setState({ status: e })
    }
    onchangeStatusHandler = () => {
        if (this.state.error.length > 0) return toast.warn("Some Product is not available");
        console.log(this.props.order._id, this.state.status);
        this.props.changeOrderStatus(this.props.order._id, { status: this.state.status });
    };
    componentDidMount() {
        // alert(JSON.stringify(this.props.order));
        if (!this.props.order)
            this.props.history.push('/');
        this.filterTags();
    }
    render() {
        return (
            <>
                {this.props.order && (
                    <div>
                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <Loader visible={this.props.loading} type="Puff" color="#e61523" height={80} width={80} />
                                    <button type="button" class="btn btn-secondary text-center" data-bs-dismiss="modal">{this.state.status}</button>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="display-6 px-3 fw-bold mt-3">Order Detail</div>
                            <div className="display-7 px-3">Details for Order ID:<span>{this.props.order._id}</span></div>
                        </div>

                        <div className="container bg_color pt-3  rounded">
                            <div className="card w-auto mx-2  rounded">
                                <div className="row  d-flex justify-content-between bg-light p-3 ">
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <div className="display-8"><i className="fa fa-calendar pe-1" aria-hidden="true"></i>
                                            {this.props.order.createdAt}</div>
                                        <div className="display-9 ">Details for Order ID:<span>{this.props.order._id}</span></div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 ">
                                        <div className="pad">
                                            <div className="row d-flex justify-content-center px-2">
                                                <div className="col-lg-7 col-md-8 col-sm-10 mt-2">
                                                    {/*  */}
                                                    <div className="dropdown d-flex justify-content-center message_look">
                                                        <DropdownButton
                                                            variant="light"
                                                            alignRight
                                                            title={this.state.status}
                                                            id="dropdown-menu-align-right "
                                                            onSelect={this.setStatus}
                                                        >
                                                            <Dropdown.Item eventKey="pending">Pending</Dropdown.Item>
                                                            <Dropdown.Item eventKey="confirmed">
                                                                Confirmed
                                                            </Dropdown.Item>
                                                            <Dropdown.Item eventKey="delivered">
                                                                Delivered
                                                            </Dropdown.Item>
                                                        </DropdownButton>
                                                    </div>
                                                    {/*  */}
                                                </div>
                                                <div className="col-lg-5 col-md-4 col-sm-2 mt-2">
                                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={this.onchangeStatusHandler}>Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-between bg-light pt-2  px-3 ">
                                    <div className="col-lg-4 col-md-12 mb-2">
                                        <div className="fw-bold mb-2"><i className="fa fa-user mx-1"></i>Customer</div>
                                        <div className="display-8">{this.props.order.name}</div>
                                        <div className="display-8">{this.props.order.email}</div>
                                        <div className="display-8">{this.props.order.contactNo}</div>
                                        <a href="/">View Profile</a>
                                    </div>
                                    <div className="col-lg-4 col-md-12 mb-2">
                                        <div className="fw-bold mb-2"><i className="fas fa-truck mx-1"></i>Order Info</div>
                                        <div className="display-8">Shipping: {this.props.order.shipping.address} {"  "}
                                            {this.props.order.shipping.province} {"  "} {this.props.order.shipping.city} {"  "}
                                        </div>
                                        <div className="display-8">Zip:{this.props.order.shipping.zip}</div>
                                        <div className="display-8">Status:{this.props.order.shipping.status}</div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 mb-2">
                                        <div className="fw-bold mb-2"><i className="fas fa-location-arrow mx-1"></i>Deliver to</div>
                                        <div className="display-8">Address: {this.props.order.shipping.address} {"  "}
                                            {this.props.order.shipping.province} {"  "} {this.props.order.shipping.city} {"  "}
                                            {this.props.order.shipping.area}</div>
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-between bg-light">
                                    <div className="col-lg-12 col-md-12 p-3">
                                        <table className="table">
                                            <thead className="bg-info ">
                                                <tr>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Variants</th>

                                                    <th scope="col">Unit Price</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {this.props.order.products.map((prod, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <img className="img-fluid" src={`${process.env.REACT_APP_URL}/img/${prod?.product?.images[0]}`}
                                                                    height="100px" width="100px" alt="Sender" />
                                                            </td>
                                                            <td>{prod.product.title}</td>

                                                            <td>
                                                                {/*  */}
                                                                <table class="table">

                                                                    <tbody>
                                                                        {console.log(this.state.variants)}
                                                                        {this.state.variants.map((veri, index) => {
                                                                            console.log(veri.product.title, prod.product.title);
                                                                            if (veri.product._id === prod.product._id) {
                                                                                if (veri.option === 'Color') {
                                                                                    return <tr>
                                                                                        <td key={index} className={`lead lh-sm fs-6 p-0 m-0 ${veri.tag.qty < 30 ? "text-danger" : ""}`} key={index}>{ntcjs.name(veri.tag.text)[1]}</td>
                                                                                        <td className={veri.tag.qty < 30 ? "text-danger" : ""}>{veri.tag.qty}</td>
                                                                                    </tr>
                                                                                }
                                                                                return (
                                                                                    <tr>
                                                                                        <td key={index} className={`lead lh-sm fs-6 p-0 m-0 ${veri.tag.qty < 30 ? "text-danger" : ""}`} >
                                                                                            {veri.tag.text}
                                                                                        </td>
                                                                                        <td className={veri.tag.qty < 30 ? "text-danger" : ""}>{veri.tag.qty}</td>
                                                                                    </tr>
                                                                                );
                                                                            }
                                                                        })
                                                                        }

                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td>{prod.price}</td>
                                                            <td>{prod.qty}</td>
                                                            <td>{prod.totalProductPrice} Rs</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                        <div style={{ marginLeft: '75%' }} className="ml-5">
                                            <h3 className="lead">SubTotal:{this.props.order.subtotal}</h3>
                                            <h3 className="lead">shippingCharges:{this.props.order.shipping.charges}</h3>
                                            <h3 className="lead">Totals:{this.props.order.subtotal + this.props.order.shipping.charges}</h3>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-8 col-md-12 back px-3 pt-3">
                                    {console.log(this.props.order.payment.charge.paid)}
                                    <div className="card rounded p-3">
                                        <div className="display-7 px-3 fw-bold mb-2">Payment Info</div>
                                        <div className="display-7 px-3 fw-bold mb-2">{this.props.order.payment.charge.paid ? "Payment Successful" : "Payment Failed"}</div>
                                        <div className="display-7 px-3"> Amount: Rs. {this.props.order.payment.charge.amount}</div>
                                        <div className="display-9 px-3"><i className={`fab fa-cc-${this.props.order.payment?.charge.payment_method_details.card.brand}`}></i> {this.props.order.payment?.charge.payment_method_details.card.brand} Card **** **** {this.props.order.payment?.charge.payment_method_details.card.last4}</div>
                                        <div className="display-9 px-3">Business name: {this.props.order.payment?.charge.payment_method_details.card.brand}</div>
                                        {/* {console.log({name:this.props.order.payment.charge.payment_method_details.card})} */}
                                        <div className="display-9 px-3">Phone: {this.props.order.shipping.contactNo}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    order: state.entities.orders.detailedOrder,
    loading: state.entities.orders.loading,

    // products:state.entities.products.list
});
const mapDispatchToProps = (dispatch) => ({
    changeOrderStatus: (id, data) => dispatch(changeOrderStatus(id, data))
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);