import React from 'react'
import { NavLink,Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCartContext } from '../../context/cartContext';
const Order = () => {
    const {cartItems ,removeItems,addToCart}=useCartContext()
    const itemsPrice=cartItems.reduce((a,c)=>a+c.qty+c.price,0)
    const taxPrice=itemsPrice*0.14.toFixed(2);
    const taxPriceLength=taxPrice.toFixed(2)
    const shippingPrice=itemsPrice > 2000 ?0 :20
    const totalPrice=itemsPrice+shippingPrice+parseInt(taxPriceLength)
  return (
    <div className="h-screen pt-[16vh]">
            <form className='ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-[28rem] mx-auto flex flex-col 
            items-center rounded-md px-8 py-5 '>
                <NavLink to='/'>
                    <img src="https://thumbs.dreamstime.com/b/restaurant-abstract-emblem-image-illustration-design-84981561.jpg" alt="Logo" className='logo mb-6 text-center h-20 cursor-pointer rounded-lg'/>
                </NavLink>

                <div className="text-xl text-[#2e2e2e] mb-3 ">
                    items Price : <span className='text-[#f54748]'>${itemsPrice}</span>
                </div>
                <div className="text-xl text-[#2e2e2e] mb-3 ">
                    Tax Price : <span className='text-[#f54748]'>${taxPriceLength}</span>
                </div>
                <div className="text-xl text-[#2e2e2e] mb-3 ">
                    Shipping Price : <span className='text-[#f54748]'>${shippingPrice}</span>
                </div>
                <div className="text-xl text-[#2e2e2e] mb-3 ">
                    Total Price : <span className='text-[#f54748]'>${totalPrice}</span>
                </div>

                <Link to='/success'>
                <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center" type='submit'>Pay ${totalPrice}</button>
                </Link>
                <ToastContainer/>
            </form>
        </div>
  )
}

export default Order
