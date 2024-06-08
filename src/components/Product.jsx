import React from 'react'
import { StatContextCustom } from '../contexts/StatContext';

function Product(props) {
   const {id,thumbnail,title,description,price} = props;
   const {dispatch} = StatContextCustom();
  return (
    <div>
      <div className="card bg-slate border p-10">
        <div className="img p-4 mb-4">
            <img src={thumbnail} className=' w-[200px] h-[200px]' alt="" />
        </div>
        <h4>{title}</h4>
        <p className=''>{description.substr(0,40)}</p>
        <small>${price}</small>
        <div className="">
            <button className='text-white bg-teal-500 p-2 shadow rounded'>Detail</button>
            <button onClick={()=> dispatch({type:"ADD_CARTS",payload:props})} className='text-white bg-teal-500 p-2 shadow rounded m-4'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
