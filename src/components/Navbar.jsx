import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { StatContextCustom } from '../contexts/StatContext';
import { Link } from 'react-router-dom';

function Navbar() {
    const {search,setSearch,stat:{carts}} = StatContextCustom();
    console.log(carts);
  return (
    <div className='flex justify-between p-10'>
      <div className="brand">
        <h5 className='text-3xl font-bold'>Shop</h5>
      </div>
      <div className="flex justify-between">
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className=' outline-none border-b-2 border-b-black ' />
          <Link to={"/add-to-cart"} className='flex justify-between'>
          <AiOutlineShoppingCart className=' text-3xl'></AiOutlineShoppingCart>
          <span className=' bg-cyan-300 text-center text-white  rounded-[100%] p-1 w-7'>{carts.length}</span>
          </Link>
      </div>
    </div>
  )
}

export default Navbar