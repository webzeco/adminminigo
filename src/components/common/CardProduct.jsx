import React from "react";
const CardProduct = ({product}) => {
  return (
    <>
      <div className="container card">
        <div className="row text-center d-flex justify-content-around bg-light pt-4 transCard">
          <div className="col-sm-6 col-md-4 col-lg-2">
            <div className="pad">
              <img
                className="img"
                src={`https://arcane-meadow-07029.herokuapp.com/img/users/${product.images[0]}`}
                alt="Sender"
              />
              <p>{product.title}</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 ">
            <div className="pad">
              <h5>Price</h5>
              <p>
                {product.price}
                <sub>Rs</sub>
              </p>
            </div>
          </div>
          <div className="col-sm-6  col-md-4  col-lg-2">
            <div className="pad">
              <h5>Date</h5>
              <p>
                {new Date(product.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 ">
            <div className="pad">
              <h5>Time</h5>
              <p>
                {new Date(product.createdAt).toLocaleTimeString()}
              </p>
            </div>
          </div>
          <div className="col-sm-6  col-md-4 col-lg-2 ">
            <div className="pad">
              <h5>Type</h5>
              <p>{product.method}</p>
            </div>
          </div>
          <div className="col-sm-6  col-md-4 col-lg-2">
            <div className="pad">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block "
                // onClick={}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardProduct;
