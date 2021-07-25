import React from 'react';
import './styles/ordercard.css';
export default function OrderCard({order,index,setOrderForDetail}) {
    return (
        <div>
            <div class="container ">
                <div class="card mx-3 w-auto  ">
                    <div class="row text-center d-flex justify-content-around bg-light pt-3 transCard">
                        <div class="col-sm-2 col-md-1 col-lg-1 mt-3 ">
                            <div class="pad">
                                <h4 class="lead">{index}</h4>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-2 col-lg-2 mt-3 ">
                            <div class="pad">
                                <h4 class="lead">{order.orderBy.name}</h4>
                            </div>
                        </div>

                        <div class="col-sm-4 col-md-2 col-lg-2 mt-3 ">
                            <div class="pad">
                                <h4 class="lead">{order.orderBy.email}</h4>
                            </div>
                        </div>

                        <div class="col-sm-2 col-md-1 col-lg-1 mt-3">
                            <div class="pad">
                                <p>{order.total}<sub>Rs</sub></p>
                            </div>
                        </div>

                        <div class=" col-sm-2 col-md-1 col-lg-1 mt-3">
                            <div class="pad">
                                <h4 class="status_look pt-1 pb-1">{order.status}</h4>
                            </div>
                        </div>


                        <div class=" col-sm-4  col-md-2  col-lg-2 mt-3">
                            <div class="pad">
                                <p>{order.createdAt.substring(0,10)}</p>
                            </div>
                        </div>



                        <div class=" col-sm-4  col-md-2 col-lg-2">
                            <div class="pad">
                                <div class="row d-flex justify-content-between">
                                    <div class="col-6">
                                        <button
                                            type="button"
                                            onClick={()=>setOrderForDetail(order)}
                                            class="btn btn-success   btn-block ">Detail
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <div class="dropdown">
                                            <button
                                                class="btn btn-light dropdown-toggle"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-mdb-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                ...
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a class="dropdown-item" href="#">View Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Edit info</a></li>
                                                <li><a class="dropdown-item" href="#">Delete</a></li>
                                            </ul>
                                        </div>
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
