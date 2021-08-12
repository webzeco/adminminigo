import React from 'react';
import './styles/ordercard.css';
export default function OrderCard({order,index,setOrderForDetail}) {
    console.log({order});
    return (
        <div>
            <div class="container ">
                <div class="card mx-3 w-100 ">
                    <div class="row text-center d-flex .align-items-center justify-content-around bg-light pt-3 transCard">
                        <div class="col-sm-2 col-md-1 col-lg-1 mt-3 ">
                            <div class="pad">
                                <h4 class="lead fw-bold">{index}</h4>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-2 col-lg-2 mt-3 ">
                            <div class="pad">
                                <h4 class="lead">{order?.name}</h4>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-2 col-lg-2 mt-3 ">
                            <div class="pad">
                                <h4 class="lead">{order?.email}</h4>
                            </div>
                        </div>

                        <div class="col-sm-2 col-md-1 col-lg-1 mt-3">
                            <div class="pad">
                                <p>{order.total}<sub>Rs</sub></p>
                            </div>
                        </div>

                        <div class=" col-sm-2 col-md-1 col-lg-1 mt-3 ">
                            <div class="pad">
                                <h4 class="status_look pt-2 pb-2 ">{order.status}</h4>
                            </div>
                        </div>


                        <div class=" col-sm-4  col-md-2  col-lg-2 mt-3">
                            <div class="pad">
                                <p>{order.createdAt.substring(0,10)}</p>
                            </div>
                        </div>



                        <div class=" col-sm-4  col-md-2 col-lg-2">
                            <div class="pad">
                                <div class="row d-grid gap-1 justify-content-center">
                                    <div class="col-lg-4 col-md-6">
                                        <button
                                            type="button"
                                            onClick={()=>setOrderForDetail(order)}
                                            class="btn btn-sm btn-success   btn-block ">Detail
                                        </button>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                    <button
                                            type="button"
                                            onClick={()=>setOrderForDetail(order)}
                                            class="btn btn-sm btn-danger  btn-block ">Delete
                                        </button>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                    <button
                                            type="button"
                                            onClick={()=>setOrderForDetail(order)}
                                            class="btn btn-sm btn-info  btn-block ">Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
