import React from 'react'
// import { ToastContainer } from 'react-toastify'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
       {/* <ToastContainer position='top-right' autoClose={1000}></ToastContainer> */}
    </div>
  )
}

export default MainLayout