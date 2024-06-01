import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Addfood = () => {
  const [image,setImage]=useState({})
  const [uploading,setUploading]=useState(false)
   const handleImage=async(e)=>{
    const file=e.target.files[0]
    let formData=new FormData()
    formData.append('image',file)
    setUploading(true)
    try{
      const {data}=await axios.post('http://localhost:3000/api/vl/all/upload-image',formData);
      setUploading(false)
      setImage({
        url:data.url,
        public_id:data.public_id
      })
      if(uploading===false)
      {
        toast.success("Successfully uploaded")

      }
    }
    catch(error){
      console.log(error)

    }
  }
  
  const handleSubmit=async(event)=>{
    event.preventDefault()
    const form=event.target
    const name=form.name.value
    const price=form.price.value
    const category=form.category.value
    const weight=form.weight.value
    const location=form.location.value
    const description=form.description.value
    const foodImage=image?.url
    const foodData={name,price,foodImage,location,category,weight,description};

    const res=await axios.post("http://localhost:3000/api/vl/food/addfood",{name,price,foodImage,location,category,weight,description},{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    })

    if(res.data.success){
      toast.success(res.data.message)
    }
    else{
      toast.error(res.data.message)
    }

  }
  return (
    <div className="addfood">
       <div className="w-full mx-auto pt-[16vh] ">
        <form className="ease-in duaration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-max mx-auto  rounded-md px-8 py-5 "  onSubmit={handleSubmit}>
          {/* <label htmlFor="file-upload" className="custom-file-upload">
            <img
              src={image?.url || `https://food-hunt-client.vercel.app/assets/profile-__6uew1z.png`}
              alt=""
              className="h-32 w-32 bg-contain rounded-full mx-auto cursor-pointer"
            />
           
          </label>
          <label
            htmlFor=""
            className="block text-center text-gray-900 text-base mb-2"
          >
            Profile Picture
          </label>
          <input
            type="file"
            label="Image"
            name="myFile"
            id="file-upload"
            className="hidden"
            accept=" .jpeg, .png, .jpg" onChange={handleImage} 
          /> 
          */}

           <NavLink to='/'>
              <img src="https://thumbs.dreamstime.com/b/restaurant-abstract-emblem-image-illustration-design-84981561.jpg" alt="Logo" className='logo mx-auto mb-6 text-center h-20 cursor-pointer rounded-lg justify-center '/>
          </NavLink>
           
          < div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">

            <input
              type="text"
              name="name"
              placeholder="Enter Food Name"
              className="input input-bordered shadow-sm bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700 loading-tight focus:outline-nome focus:shadow-outline"
            />
        
          <input type="file"  accept=" .jpeg, .png, .jpg" name="myFile" className="file-input file-input-bordered  bg-red-500 text-white
          file-input-md w-full" onChange={handleImage}/>

            <input
              type="Number"
              name="price"
              placeholder="Enter Price"
              className="shadow-sm bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700 loading-tight focus:outline-nome focus:shadow-outline"
            />

          <select className="select bg-red-500 text-white select-md w-full max-w-xs " name='category'>
            <option disabled selected>Category</option>
            <option>Rice</option>
            <option>Desert</option>
            <option>Drinks</option>
            <option>Fruits</option>
            <option>Vegetables</option>
          </select>

          <input
              type="Number"
              name="weight"
              placeholder="Enter Weight"
              className="shadow-sm bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700 loading-tight focus:outline-nome focus:shadow-outline"
            />

            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              className="shadow-sm bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700 loading-tight focus:outline-nome focus:shadow-outline"
            />

            <textarea className="textarea textarea-ghost shadow-sm bg-white appearance-none border rounded col-span-2 w-full py-3 px-3  text-gray-700 loading-tight focus:outline-nome focus:shadow-outline" name='description' placeholder="Description"></textarea>
          </div>

           <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center mt-5 mb-3" type='submit'>Add Food</button>  
            <ToastContainer/>
        </form>
      </div>
    </div>
  )
}

export default Addfood