import React from 'react'
import { dummyMusicDetails } from './FeatureSection'

const AboutSection = () => {
  return (
    <section className='flex px-[10%] justify-center py-8 max-md:px-2 max-md:w-full landing-page-section-container'>       
        <div className='flex items-center border-4
                             border-orange-500 px-8 py-8 rounded-md 
                             max-lg:flex-col-reverse max-lg:h-[50%]
                             max-md:px-4 max-md:border-2'>
            <div className='border-r-2 border-black pr-[.5rem] w-1/2 max-lg:w-full max-lg:border-0'>
                <h1 className='text-orange-500 text-5xl font-bold
                                max-md:text-2xl'>Simple and Powerful</h1>
                
                {   
                    dummyMusicDetails.map((detail,index)=>
                    <div key={index} className='flex flex-col gap-y-2 mt-4 '>
                        <h2 className='font-semibold text-xl max-md:text-sm'>{detail.title}</h2>
                        <p className='text-[.85rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Eius, minus, nostrum expedita ut perspiciatis earum ullam
                             officia assumenda commodi dolorum sunt sint aliquam? 
                             Quidem facere aliquam accusamus unde nulla doloribus?
                        </p>
                    </div>
                    )
                }
              
            </div>
            <div className='pl-4 w-1/2 h-1/2 max-lg:w-3/4 max-lg:h-[50%]'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/LPeZOE8ZIHI?si=BBVnLxkTlre6o7uE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </section>
  )
}

export default AboutSection