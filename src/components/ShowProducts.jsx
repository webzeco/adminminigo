import React from 'react'
import CardProduct from './common/CardProduct';

export default function ShowProducts({products,deleteProduct}) {
    console.log({products});
    return (
        <div>
        {products?.map((prod ,index)=><CardProduct deleteProduct={deleteProduct} key={index} product={prod} />)}
        </div>
    )
}
