import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import { getAllOrders } from '../services/orderServices';
import { deleteReview, getAllReviews, updateReview } from '../services/reviewServices';

export default function Transactions({ orders ,setOrderForDetail}) {
    // const [transactions , setTransactions] = useState([]);
    // const getAllOrdersHandler = async () => {
    //     const { data } = await getAllOrders();
    //     console.log(data);
    // }
    useEffect(() => {
        // getAllOrders();
        return () => {
            console.log("clean up reviews");
        }
    }, [])
    return (
        <div>
            <div className="container">
                <div className="display-4 ">All Transactions</div>
            </div>
            <table class="table caption-top mx-3">
                <caption>List of latest transaction</caption>
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Paid</th>
                        <th scope="col">Method</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {orders && orders.map((order, index) => {
                    const {charge}=order.payment;
                    console.log(charge.amount);
                    return (
                        <tr>
                            <th scope="row">{charge.id}</th>
                            <td>Rs.{charge.amount}</td>
                            <td><i className={`fab fa-cc-${charge.payment_method_details.card.brand} fa-3x`}></i> {charge.payment_method_details.card.brand}</td>
                            
                            <td>{order.createdAt.substring(0, 10)}</td>
                            <td><div class="d-grid gap-1 col-1 mx-auto">
                                <button class="btn btn-info" onClick={()=>setOrderForDetail(order)} type="button">Detail</button>
                                <button  class="btn btn-danger" type="button">Delate</button>
                            </div></td>
                        </tr>
                    );
                })}
            </table>
        </div>
    )
}
