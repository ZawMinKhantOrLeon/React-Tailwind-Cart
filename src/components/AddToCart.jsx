import React, { useState } from 'react'
import { StatContextCustom } from '../contexts/StatContext';
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io';
import Cart from './Cart';
import { useEffect } from 'react';
import { AiFillShop, AiFillShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function AddToCart() {

    const {stat:{carts}} =StatContextCustom();
    const [mainTotal,setMainTotal] =useState(0);

    useEffect(()=> {
        setMainTotal(Total);
    },[])

    const increaseTotal = (price) => {
        setMainTotal(mainTotal+price);
    }
    const decreaseTotal = (price) => {
        setMainTotal(mainTotal - price);
    }
    const Total = carts?.reduce((pv,iv) => pv + iv.price,0);
  return (
        
     carts.length > 0 ? (
        <div>
            <div className='flex flex-col mt-20'>
            {carts?.map(cart => {
                return(
                    <Cart key={cart.id} item={cart} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal}></Cart>
                )
            })}
        </div>
        <hr className=" w-[60%] mx-auto" />
        <div className=' flex justify-around mb-20' >
            <p>Total</p>
            <p>${mainTotal.toFixed(2)}</p>
        </div>
    </div>
    ) : 
    <div className='flex flex-col items-center'>
        <p className=' text-zinc-700 text-2xl p-5 text-center'>There Is No Cart</p>
        <Link to="/" className='p-2 rounded bg-cyan-500'>
          <AiFillShopping className=' text-black text-2xl rounded'/>
        </Link>

    </div>

  )
}

export default AddToCart