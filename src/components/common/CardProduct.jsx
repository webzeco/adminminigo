import React from "react";
import "../styles/card.css";
const CardProduct = ({product}) => {
  return (
    <>
      <div className="container card mx-3 w-auto ">
        <div className="row text-center d-flex justify-content-around bg-light pt-3 transCard">
          <div className="col-sm-4 col-md-2 col-lg-2  ">
            <div className="pad text-center">
              <img
                className="img-fluid w-50"
                src={"https://www.freeiconspng.com/uploads/women-bag-png-32.png"} 
                alt="Sender"
              />
             
            </div>
          </div>
          <div className="col-sm-4 col-md-2 col-lg-2 mt-3 ">
            <div className="pad">
            <h4 className="lead">{product.title}</h4>
            </div>
          </div>

          <div className="col-sm-4 col-md-2 col-lg-2 mt-3">
            <div className="pad">
            
              <p>
                {product.price}
                <sub>Rs</sub>
              </p>
            </div>
          </div>

          <div className=" col-sm-4  col-md-2 col-lg-2 mt-3">
            <div className="pad">
            
              <p className="status_look pt-1 pb-1">Active</p>
            </div>
          </div>


          <div className=" col-sm-4  col-md-2  col-lg-2 mt-3">
            <div className="pad">
            
              <p>
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
       
       

          <div className=" col-sm-4  col-md-2 col-lg-2">
            <div className="pad">
              <div className="row">
                <div className="col-12">
            <button
                type="button"
                className="btn btn-success   btn-block "
                // onClick={}
              >
                Edit
              </button>
              </div>
              <div className="col-12">
              <button
                type="button"
                className="btn btn-white btn-block "
                // onClick={}
              >
             
                Delete
              </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardProduct;
