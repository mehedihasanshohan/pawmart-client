import React from 'react'
import Slider from '../components/Slider'
import Adopt from '../components/Adopt'
import CategorySection from '../components/CategorySection'
import RecentListings from '../components/RecentListings'
import StateSection from '../components/StateSection'
import HowItWorks from './../components/HowItWorks';
import FAQ from './../components/FAQ';
import Donation from './../components/Donation';
import SuccessStories from './../components/SuccessStories';


const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Slider></Slider>
      <Adopt></Adopt>
      <CategorySection></CategorySection>
      <RecentListings></RecentListings>
      <SuccessStories></SuccessStories>
      <StateSection></StateSection>
      <HowItWorks></HowItWorks>
      <FAQ></FAQ>
      <Donation></Donation>
    </div>
  )
}

export default Home