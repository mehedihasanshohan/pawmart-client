import React from 'react'
import Slider from '../components/Slider'
import Adopt from '../components/Adopt'
import CategorySection from '../components/CategorySection'
import RecentListings from '../components/RecentListings'
import StateSection from '../components/StateSection'


const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Slider></Slider>
      <Adopt></Adopt>
      <CategorySection></CategorySection>
      <RecentListings></RecentListings>
      <StateSection></StateSection>
    </div>
  )
}

export default Home