import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const HomeLayout = () => {
  const navigate =useNavigation()
  return (
    <>
    <Navbar/>   
    <section class="mt-20 mx-40">
    {navigate.state === "loading" ? <h2>Loading..</h2> : <Outlet/>} 
      </section> 
    
    </>
  )
}

export default HomeLayout