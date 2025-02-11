import React from 'react'
import { InteractiveHoverButton } from './ui/interactive-hover-button'
import { Link } from 'react-router-dom'
import { SiVlcmediaplayer } from "react-icons/si";
const Footer = () => {
  return (
    <footer className='flex  justify-around gap-x-4 bg-black text-white py-8
                        max-md:flex-col max-md:gap-4  max-md:py-0 max-md:pb-4'>
        <div className='max-md:py-4'>
            <Link to={"/"}  className='flex items-center pl-4 pt-4 gap-x-2
                                max-md:justify-center max-md:pl-0 max-md:pt-0
                                '>
                <SiVlcmediaplayer className='text-orange-500' />
                <span>Media Player</span>
            </Link>
        </div>
        <div className='flex flex-col gap-2 max-md:pl-4'>
            <h3 className='font-semibold'>Quick Links</h3>
            <ul className='flex flex-col'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2 max-md:pl-4'>
            <h3 className='font-semibold'>Guides</h3>
            <ul>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Motion Animation</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2 max-md:pl-4'> 
            <h3 className='font-semibold'>Contact Us</h3>
            <input type="text"placeholder='Please' className='bg-black border-2 border-gray-300
                                                     px-2 py-1 max-md:w-3/4' />
            <InteractiveHoverButton className='bg-orange-500 max-md:w-1/2 py-2'>
                Subscribe
            </InteractiveHoverButton>
        </div>
    </footer>
  )
}

export default Footer