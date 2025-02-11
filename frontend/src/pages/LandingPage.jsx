import AboutSection from '../sections/LandingSections/AboutSection'
import FeatureSection from '../sections/LandingSections/FeatureSection'
import HeroSection from '../sections/LandingSections/HeroSection'
import React from 'react'

const LandingPage = () => {
  return (
   <section className='w-full'>
      <HeroSection />
      <FeatureSection />
      <AboutSection />
   </section>
  )
}

export default LandingPage