import React, { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Register = () => {
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
    }
    catch(error){
      console.log(error)

    }
  }

  console.log(image)

  const navigate=useNavigate()

  const handleOnSubmit=(event)=>{
    event.preventDefault()
    const form=event.target
    const name=form.name.value
    const email=form.email.value
    const password=form.password.value
    const passwordConfirm=form.confirmPassword.value
    const profileImage=image?.url
    const userData={name,email,password,passwordConfirm,profileImage}
    console.log(userData)
    fetch('http://localhost:3000/api/vl/user/register',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(userData)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.success){
        localStorage.setItem("token",data.data.token),
        toast.success(data.message)
        form.reset()
        navigate('/')
      }
      else{
        toast.error(data.message)
      }
    })
  }


  return (

    <div className="register">
      <div className="w-full mx-auto pt-[16vh]">
        <form className="ease-in duaration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-max mx-auto  rounded-md px-8 py-5" onSubmit={handleOnSubmit}>
          <label htmlFor="file-upload" className="custom-file-upload">
            <img
              src={image?.url || `https://food-hunt-client.vercel.app/assets/profile-__6uew1z.png`}
              alt=""
              className="h-32 w-32 bg-contain rounded-full mx-auto cursor-pointer"
            />
            {/* <img
              src={image?.url || avater}
              alt=""
              className="h-32 bg-contain rounded-full mx-auto cursor-pointer"
            /> */}
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

          <div className="mb-3">
            <label className="block text-gray-700 text-sm mb-2">Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3  text-gray-700 loading-tight focus:outline-nome focus:shadow-outline"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 text-sm mb-2">Email</label>

            <input
              type="email"
              name="email"
              className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3  text-gray-700 loading-tight focus:outline-nome focus:shadow-outline"
              placeholder="Enter your Email"
            />
          </div>

          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="mb-3">
              <label className="block text-gray-700 text-sm mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3  text-gray-700 loading-tight focus:outline-nome focus:shadow-outline"
                placeholder="*********"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3  text-gray-700 loading-tight focus:outline-nome focus:shadow-outline"
                placeholder="*********"
              />
            </div>
          </div>

           <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center mt-5 mb-3" type='submit'>Register</button>


                <Link to='/login' className='text-[#fdc55e] text-center font-semiboldw-full mb-3 py-2 px-4 rounded'>
                    Already have an account
                </Link>
                <ToastContainer/>
        </form>
      </div>
    </div>
  );
};

export default Register;
