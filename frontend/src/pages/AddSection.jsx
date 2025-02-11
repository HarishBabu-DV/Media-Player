import React from 'react'
import AddHeroSection from '../sections/AddSections/AddHeroSection'
import AllVideoSection from '../sections/AddSections/AllVideoSection'

const AddSection = () => {
  return (
    <main className='min-h-[100vh]'>
      <AddHeroSection />
      <AllVideoSection />
    </main>
  )
}

export default AddSection