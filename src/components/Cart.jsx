import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { StatContextCustom } from '../contexts/StatContext';

function Cart({item,increaseTotal,decreaseTotal}) {
    console.log(item);
    const [quantity,setQuantity] = useState(1);
    const {dispatch} =StatContextCustom();
    const oneItemPrice =item.price * quantity;

    const increase =()  =>{
        setQuantity(quantity +1);
        increaseTotal(item.price);
        
    }
    const decrease =() =>{
        if(quantity > 1){
            setQuantity(quantity - 1);
            decreaseTotal(item.price);
        }
    }

    const removeCart=()=>{
        dispatch({type:"REMOVE_CART",payload:item.id});
        decreaseTotal(oneItemPrice);
    }


  return (
    <div className='flex justify-around'>
        <div className="flex gap-7 items-center mb-20">
            <img src={item.thumbnail} className=' w-[100px] h-[100px]' alt="" />
            <div className="">
                <p className=' text-gray-500  font-semibold'>{item.title}</p>
                <p>${oneItemPrice.toFixed(2)}</p>
                <p onClick={removeCart} className='text-red-500 cursor-pointer'>
                    Remove
                </p>
            </div>
        </div>
        <div className=" flex flex-col justify-start  items-center">
            <p className='cursor-pointer' onClick={() => increase()}>
                <IoIosArrowUp />
            </p>
            <p className=' select-none'>
                {quantity}
            </p>
            <p className=' cursor-pointer' onClick={() => decrease()}>
                <IoIosArrowDown />
            </p>
        </div>
    </div>
  )
}

export default Cart