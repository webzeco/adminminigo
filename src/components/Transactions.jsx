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
                <div className="display-6 px-3 fw-bold mt-3 ">All Transactions</div>
            </div>
             <div class="table-responsive">
            <table class="table mt-3 mx-4">
               
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
                            <td  style={{width:"10%"}}>{charge.id}</td>
                            <td style={{width:"10%"}}>Rs.{charge.amount}</td>
                            <td style={{width:"10%"}}><i className={`fab fa-cc-${charge.payment_method_details.card.brand} fa-3x`}></i> {charge.payment_method_details.card.brand}</td>
                            
                            <td style={{width:"10%"}}>{order.createdAt.substring(0, 10)}</td>
                            <td  style={{width:"10%"}}><div class="d-grid gap-1 mx-auto">
                                <button class="btn btn-sm btn-info" onClick={()=>setOrderForDetail(order)} type="button">Detail</button>
                                <button  class="btn btn-sm btn-danger" type="button">Delate</button>
                            </div></td>
                        </tr>
                    );
                })}
            </table>
        </div>
        </div>
    )
}
