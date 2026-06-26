import React from 'react'
import { Link } from 'react-router-dom'

const HeroButtons = () => {
  return (
    <div 
        className='m-4 flex gap-4 justify-center items-center font-code font-semibold'>

        <button
            className='bg-primary-color px-4 py-2 rounded-md active:scale-95 cursor-pointer text-sm'>
            <Link to='/projects'>View Projects</Link>
        </button>

        <button
            className='border bg-background-color px-4 py-2 rounded-md active:scale-95 cursor-pointer text-sm'>
            <Link to='/contact'>Contact Me</Link>
        </button>
      
    </div>
  )
}

export default HeroButtons
