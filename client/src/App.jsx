import { useState } from 'react'
import './App.css'
import Navbar from './Shared/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Footer from './Shared/Footer'
import Register from './Pages/Register'
import {Routes,Route} from 'react-router-dom'
import ProtectedRoute from './Pages/ProtectedRoute'
import VerifyOtp from './Pages/VerifyOtp'
import Addfood from './Pages/admin/Addfood'
import Menu from './Pages/Menu'
import { FoodPage } from './Pages/FoodPage'
import Profile from './Pages/Profile'
import ViewCart from './Pages/ViewCart'
import Success from './Pages/Success'
import Cancel from './Pages/Cancel'
import Order from './Pages/Order'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/verifyOtp' element={<VerifyOtp/>}/>
      <Route path='/verifyOtp' element={<ProtectedRoute><VerifyOtp/></ProtectedRoute>}/>
      <Route path='/addfood' element={<ProtectedRoute><Addfood/></ProtectedRoute>}/>
      <Route path='/menu' element={<ProtectedRoute><Menu/></ProtectedRoute>}/>
      <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      <Route path='/menu/:id' element={<ProtectedRoute><FoodPage/></ProtectedRoute>}/>
      <Route path='/viewcart' element={<ProtectedRoute><ViewCart/></ProtectedRoute>}/>
      <Route path='/success' element={<ProtectedRoute><Success/></ProtectedRoute>}/>
      <Route path='/cancel' element={<ProtectedRoute><Cancel/></ProtectedRoute>}/>
      <Route path='/order' element={<ProtectedRoute><Order/></ProtectedRoute>}/>

    </Routes>
   
    <Footer/>
    </>
  )
}

export default App
