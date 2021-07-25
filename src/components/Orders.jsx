import React from 'react'
import OrderCard from './common/OrderCard';

export default function Orders({orders,setOrderForDetail}) {

    return (
        <div>
                <div className="container">
                <div className="display-4 px-3">Order List</div>
            </div>
            <div className="container ">
                <div className="card mx-3 w-auto  ">
                    <div className="row text-center d-flex justify-content-between bg-light pt-3 transCard">
                        <div className="col-sm-12 col-md-12 col-lg-4 m-2 pb-2 ">
                            <div className="form-outline">
                                <input type="search" id="form1" className="form-control form-control-lg" placeholder="Search"
                                    aria-label="Search" />
                            </div>
                        </div>




                        <div className=" col-sm-12  col-md-12 col-lg-6">
                            <div className="pad">
                                <div className="row d-flex justify-content-between">
                                    <div className="col-6">
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-light dropdown-toggle"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-mdb-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Dropdown button
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-light dropdown-toggle"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-mdb-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Dropdown button
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header */}
              <div class="container ">
                <div class="card mx-3 w-auto fs-3">
                    <div class="row text-center d-flex justify-content-around bg-light pt-3 transCard">
                        <div class="col-sm-2 col-md-1 col-lg-1 mt-3 ">
                            <div class="pad">
                                <h4 class="lead fs-5 pad  text-gray">No.</h4>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-2 col-lg-2 mt-3 ">
                            <div class="pad">
                                <h4 class="lead fs-5  ">Name</h4>
                            </div>
                        </div>

                        <div class="col-sm-4 col-md-2 col-lg-2 mt-3 ">
                            <div class="pad">
                                <h4 class="lead fs-5  ">Email</h4>
                            </div>
                        </div>

                        <div class="col-sm-2 col-md-1 col-lg-1 mt-3">
                            <div class="pad fs-5  ">
                                <p>Total</p>
                            </div>
                        </div>

                        <div class=" col-sm-2 col-md-1 col-lg-1 mt-3">
                            <div class="pad">
                                <h4 class="lead fs-5  pt-1 pb-1">Status</h4>
                            </div>
                        </div>


                        <div class=" col-sm-4  col-md-2  col-lg-2 mt-3">
                            <div class="pad fs-5  ">
                                <p>Date</p>
                            </div>
                        </div>
                        <div class=" col-sm-4  col-md-2  col-lg-2 mt-3">
                            <div class="pad fs-5">
                                <p>Action</p>
                            </div>
                        </div>
                     </div>
                </div>

            </div>
        
            {/* end header */}
            {/* <h1 className='display-3 text-center' >Order page here</h1> */}
        {orders.map((order ,index)=><OrderCard key={index} order={order} setOrderForDetail={setOrderForDetail} index={index+1}/>)}
        </div>
    )
}
