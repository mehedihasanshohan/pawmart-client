import React from 'react'
import Slider from '../components/Slider'
import Adopt from '../components/Adopt'
import CategorySection from '../components/CategorySection'
import RecentListings from '../components/RecentListings'

const Home = () => {
  return (
    <div>
      {/* <Slider></Slider> */}
      {/* <Adopt></Adopt> */}
      <CategorySection></CategorySection>
      <RecentListings></RecentListings>
    </div>
  )
}

export default Home