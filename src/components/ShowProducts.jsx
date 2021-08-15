import React from 'react'
import CardProduct from './common/CardProduct';

export default function ShowProducts({products,deleteProduct}) {
    // console.log({products});
    return (
        <div>
            <div className="container">
            <div class="display-6 px-3 fw-bold mt-3">All Products</div>
            </div>
        {products?.map((prod ,index)=><CardProduct deleteProduct={deleteProduct} key={index} product={prod} />)}
        </div>
    )
}
