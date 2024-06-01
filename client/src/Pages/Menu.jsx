import React, { useState ,useEffect} from 'react'
import {useFoodContext} from '../../context/foodContext'
import axios from 'axios'
import { FaHeart, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
const Menu = () => {
  const {food ,setFood}=useFoodContext()
  const [active,setActive]=useState(0)
  const [value,setValue]=useState('all')

  const category=[
    {
      id:0,
      name:'All',
      value:'all' 
    },
    {
      id:1,
      name:'Rice',
      value:'Rice' 
    },
    {
      id:2,
      name:'Desert',
      value:'Desert' 
    },
    {
      id:3,
      name:'Drinks',
      value:'Drinks' 
    },
    {
      id:4,
      name:'Fruits',
      value:'Fruits' 
    },
    {
      id:5,
      name:'Vegetables',
      value:'Vegetables' 
    },
    
  ]
  const handleBtn=(btn)=>{
    setActive(btn.id)
    setValue(btn.value)
  }

  
  const getFood=async()=>{
    try{
      const res=await axios.get(`http://localhost:3000/api/vl/food/getAllFood?category=${value}`)

    if(res.data.success){
      setFood(res.data.data.food)
    }
  
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getFood()
  },[value])
  // console.log(food)
  const {addToCart}=useCartContext()
  return (
    <div className="pt-[16vh]">
      <div className="container mx-auto py-8">
        <div className="p-5 mb-14">
          <div className="flex flex-wrap justify-center mb-8 gap-5">
            {
              category?.map(btn=>(
                <button className={active=== btn.id? "text-xl px-4  py-3 text-center text-white bg-red-500 border-red-500 border-2 rounded-sm justify-center font-medium" : "text-xl px-4 py-3 text-red-500 border-red-500 border-2 font-medium"} 
                onClick={()=>{
                  handleBtn(btn)
                }}
                >{btn.name}</button>
              ))
            }
          </div>
              <div className="grid py-6 gap-8 lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 ">
                {food?.map((curElem)=>(
                    <div className="food-cart bg-red-500/10 rounded-xl flex flex-col cursor-pointer items-center p-5 py-10 ">
                    <div className="relative mb-3">
                        <Link to={`/menu/${curElem?._id}`}>
                        <img src={curElem?.foodImage} alt="Food" className='h-40 w-40 rounded-full '/>
                        </Link>
                        <div className='absolute -top-5 -left-5 '>
                            <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                                <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
                            </button>
                        </div>

                        <div className="absolute -bottom-4 -right-4">
                            <button className='shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative'>
                                <div className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>${curElem?.price}</div>
                            </button>
                        </div>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <p className="text-xl text-center font-bold text-[#f54748]">
                            {curElem?.name}
                        </p>
                        <div className="flex text-sm space-x-2 cursor-pointer ">
                            <span className='font-normal text-[#fdc55e]'>4.3</span>
                            <FaStar size={16} className='text-[#fdc55e]'/>
                            <span className='font-medium'>({curElem?.reviews?.length})</span>
                        </div>
                    </div> 

                    <button className="bg-[#f54748] active:scale-90 translate duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white " onClick={()=>addToCart(curElem)}>Add to cart</button>

                </div>
                ))}
                </div>
        </div>

      </div>
    </div>
  )
}

export default Menu

const Foods=({curElem})=>{

                <div className="food-cart bg-red-500/10 rounded-xl flex flex-col cursor-pointer items-center p-5 py-10 ">
                    <div className="relative mb-3">
                        <img src="https://th.bing.com/th/id/OIP.CqcxlHP9zJZDIH3lAnIskgHaLH?rs=1&pid=ImgDetMain" alt="" className='h-40 w-40 rounded-full '/>

                        <div className='absolute -top-5 -left-5 '>
                            <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                                <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
                            </button>
                        </div>

                        <div className="absolute -bottom-4 -right-4">
                            <button className='shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative'>
                                <div className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>$10</div>
                            </button>
                        </div>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <p className="text-xl text-center font-bold text-[#f54748]">
                            Kebab
                        </p>
                        <div className="flex text-sm space-x-2 cursor-pointer ">
                            <span className='font-normal text-[#fdc55e]'>4.3</span>
                            <FaStar size={16} className='text-[#fdc55e]'/>
                            <span className='font-medium'>{4}</span>
                        </div>
                    </div>

                    <button className="bg-[#f54748] active:scale-90 translate duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white ">Add to cart</button>

                </div>



}