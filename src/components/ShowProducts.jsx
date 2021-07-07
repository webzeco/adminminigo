import React from 'react'
import CardProduct from './common/CardProduct';

export default function ShowProducts({products}) {
    return (
        <div>
        {products.map(prod=><CardProduct product={prod} />)}
        </div>
    )
}
