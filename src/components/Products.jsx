import React from 'react'
import Product from './Product'
import { StatContextCustom } from '../contexts/StatContext'

function Products() {

    const {stat:{products}} =StatContextCustom();

  return (
    
      <div className="cards grid grid-cols-4 gap-4 p-10">

       {products.map(product =>{

        return (

        <Product key={product.id} {...product}  />

        )

        })}

      </div>

  )
}

export default Products
