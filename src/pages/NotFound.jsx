import React from 'react'
import { Link } from 'react-router'
import errorImg from '/error-404.png'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const NotFound = () => {
  return (
    <div>
    <div className='min-h-screen flex flex-col justify-center items-center gap-6'>
      <img src={errorImg} alt="" />
      <h2 className='font-bold text-2xl'>Oops! page not found!</h2>
      <p className='font-normal '>The page you are looking is not available</p>
      <Link to={-1} className='btn btn-info'>Go Back!</Link>
    </div>
    </div>
  )
}

export default NotFound