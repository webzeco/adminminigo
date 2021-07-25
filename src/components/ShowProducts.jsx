import React from 'react'
import CardProduct from './common/CardProduct';

export default function ShowProducts({products}) {
    console.log({products});
    return (
        <div>
        {products.map((prod ,index)=><CardProduct key={index} product={prod} />)}
        </div>
    )
}
