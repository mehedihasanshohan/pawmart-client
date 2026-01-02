import React from 'react'
import Slider from '../components/Slider'
import Adopt from '../components/Adopt'
import CategorySection from '../components/CategorySection'
import RecentListings from '../components/RecentListings'
import StateSection from '../components/StateSection'
import HowItWorks from './../components/HowItWorks';
import FAQ from './../components/FAQ';


const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Slider></Slider>
      <Adopt></Adopt>
      <CategorySection></CategorySection>
      <RecentListings></RecentListings>
      <StateSection></StateSection>
      <HowItWorks></HowItWorks>
      <FAQ></FAQ>
    </div>
  )
}

export default Home