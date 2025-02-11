import React from 'react'
import { Link } from 'react-router-dom'
import { SiVlcmediaplayer } from "react-icons/si";
const Header = () => {
    return (
        <nav className='w-full border-b border-black pb-4'>
          <Link to={"/"} className='flex items-center pl-4 pt-4 gap-x-2'>
            <SiVlcmediaplayer className='text-orange-500' />
            <span>Media Player</span>
          </Link>
        </nav>
  )
}

export default Header