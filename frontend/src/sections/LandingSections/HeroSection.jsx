import React from 'react'
import { InteractiveHoverButton } from '../../components/ui/interactive-hover-button'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section>
        <div className='flex  px-8 max-md:flex-col-reverse'>
            <div className='flex flex-col items-center justify-evenly gap-0 w-1/2
                            max-md:gap-4 max-md:py-8 max-md:w-full'>
                <h2 className='text-5xl font-semibold max-lg:text-3xl max-md:text-2xl'>
                    Welcome to 
                    <span className='text-orange-500'> Media Player</span>
                </h2>
                <p className='font-thin max-md:text-[.9rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quia odio unde 
                    adipisci animi sint alias nam itaque deleniti doloremque minus ullam sed, ut 
                    illo magnam iste accusantium numquam! Repellendus.
                </p>
                <Link to={"/add"}>
                <InteractiveHoverButton className='text-black bg-orange-500
                                            max-md:text-[.85rem]'>
                        Get started
                </InteractiveHoverButton>
                </Link>
                
               
            </div>
            <div className='w-1/2 p-10 max-md:w-full max-md:pb-0'>
             <img src="https://media1.tenor.com/m/_ghn0Sr3fh0AAAAd/music.gif" alt="" className='w-full h-full' />
            </div>
        </div>
            {/* <div className='flex gap-4 max-md:flex-col max-md:items-center px-8 py-6 max-md:px-0'>
                <div className='max-md:w-full max-md:text-center font-semibold'>
                    <h2 className='text-5xl  font-semibold'>Welcome to 
                        <span className='text-orange-500'>Media Player</span>
                    </h2>
                    <p className='mt-5 font-thin max-md:text-xl py-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor hic, dolores voluptatem a
                        impedit autem beatae. Iure perspiciatis architecto, beatae provident cum temporibus esse 
                        quae aperiam. Et optio unde ea?
                    </p>
                   
                </div>
                <div className='w-1/2 max-md:w-full max-md:text-center'>
                    <img src="https://media1.tenor.com/m/_ghn0Sr3fh0AAAAd/music.gif" alt="" />
                </div>
            </div> */}
    </section>
  )
}

export default HeroSection