///* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import Header from '../components/Header'

import { useSelector } from 'react-redux';
import Image from 'next/image';
import { MinusIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";

import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../../../redux/CartReducer';
import { removeFromCart } from '../../../redux/CartReducer';







function Cart() {
    const cart=useSelector((state:any)=> state.cart.cart);
    const total =cart?.map((item:any,index:any)=> item.price*item.quantity) .reduce((prev:any, curr:any) => prev + curr, 0);
    const grandTotal = total + 65;
    const dispatch = useDispatch();
  const increaseQuantity = (item:any) => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item:any) => {
    dispatch(decrementQuantity(item));
  };
  const deleteItem = (item:any) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
    <Header/>
<div className='relative grid grid-cols-8 h-screen bg-gray-200'>

<div className='flex flex-col col-span-5 mt-16 ml-20'>
    {/* leftpart */}
    <h2 className='text-xl font-bold'>Your Shopping Cart</h2>
    {cart?.map((item:any,index:number)=>(
        <div key={index} className='border rounded-md p-3 bg-white shadow-md flex flex-row space-x-4 my-4'>
            <Image
                width={80}
                height={80}
                objectFit={"contain"}
                src={item?.image}
                alt={item?.description}
              />
              <div className='flex-grow'>
                <p className='text-sm line-clamp-2'>{item.title}</p>
                <p className='text-xl font-semibold'>Price:Rs   {item?.price}</p>
                {item.description?(
                    <p className='text-md line-clamp-2 font-normal'> {item?.description}</p>

                ):(
                    <div>
                     <p className='text-sm line-clamp-2 font-normal'>Color: {item?.color}</p>
                     <p className='text-sm line-clamp-2 font-normal'>Size: {item?.Size}</p>
                    </div>
                )}
                <div className='flex flex-row mt-1 space-x-2'>
                <p  onClick={() => deleteItem(item)} className='text-md text-cyan-600 font-semibold cursor-pointer'>Delete</p>
                <p className='text-md text-cyan-600 font-semibold cursor-pointer'>Save For later</p>
                <p className='text-md text-cyan-600 font-semibold cursor-pointer'>See more like this</p>
                <p className='text-md text-cyan-600 font-semibold cursor-pointer'>share</p>
              </div>
              <div className='flex items-center space-x-2 mt-1'>
                <button className='rounded-full bg-gray-500'>
                <MinusIcon   onClick={() => decreaseQuantity(item)} className="h-4 w-4 text-white" />
                </button>
                <span className='text-gray-500'>{item?.quantity}</span>
                <button className='rounded-full bg-gray-500'>
                <PlusIcon onClick={() => increaseQuantity(item)}  className="h-4 w-4 text-white" />
                </button>
              </div>
              </div>
              
        </div>
    ))}

</div>


<div className='col-span-2 mt-16 ml-20'>
{/* rightpart */}
<h3 className='mb-2 text-md  font-semi-bold'>Choose a Delivery Address</h3>
<div>
    <div className='bg-white  p-4 rounded-sm  mt-2'>
        <h4 className='text-md text-gray-500'>
            Select location
        </h4>
        <p className='text-md text-gray-500'>Please select location, so that we can find a place that delivers to you </p>
        <button className='rounded-sm py-1 mt-2 font-semibold text-md text-gray-600'>Add Address</button>
    </div>
</div>
<h3 className='mt-4 text-md font-semi-bold'>
    Offers
</h3>
<div>
    <div className='bg-white  p-4 rounded-sm mt-2'>
        <h4 className='text-md text-gray-500'>Apply Coupons</h4>
        <p className='text-md text-gray-500'>Get Discount with your order</p>
    </div>
</div>
<h3 className='mt-1'>Price Details</h3>
<div className='bg-white rounded-sm mt-2  p-3 space-y-3'>
    <div className='flex items-center justify-between'>
    <h4 className='text-sm '>Sub Total</h4>
    <p className='text-md font-normal'>Rs {total.toFixed(2)}</p>
    </div>
    <div className='flex items-center justify-between'>
    <h4 className='text-sm '>Discount</h4>
    <p className='text-md font-normal'>-</p>
    </div>
    <div className='flex items-center justify-between'>
    <h4 className='text-sm '>Taxes and charges</h4>
    <p className='text-md font-normal'>Rs 65</p>
    </div>
    <hr className='w-full mt-1 decoration-dotted' />
    <div className='flex items-center justify-between'>
    <h4 className='text-sm font-bold '>Grand Total</h4>
    <p className='text-md font-normal'>Rs {grandTotal.toFixed(2)}</p>
    </div>
    <button className='bg-yellow-500 font-normal text-center text-white rounded-md py-2 px-3 w-full'>Place Order</button>
    </div>
</div>




</div>
    </div>
  )
}

export default Cart
