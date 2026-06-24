import React from 'react'
import { Link } from 'react-router-dom'

const Navlist = () => {
    return (
        <div
            className='flex flex-col gap-4 text-lg p-4'>

            <div className='bg-mist-100 flex justify-start items-center hover:bg-violet-100 hover:text-blue-700  px-4 py-2 rounded-xl transition-all duration-200 ease-in'>
                <img className='h-5' src="src\assets\Home Icon.svg" alt="" />

                <Link
                    className='hover:bg-violet-100 hover:text-blue-700 font-semibold px-4 py-2 rounded transition-all duration-200 ease-in w-full'
                    to='/'>
                    Home
                </Link>
            </div>

            <div className='bg-mist-100 flex justify-start items-center hover:bg-violet-100 hover:text-blue-700  px-4 py-2 rounded-xl transition-all duration-200 ease-in'>
                <img className='h-5' src="src\assets\Project Icon.svg" alt="" />

                <Link
                    className='hover:bg-violet-100 hover:text-blue-700 font-semibold px-4 py-2 rounded transition-all duration-200 ease-in w-full'
                    to='/projects'>
                    Projects
                </Link>
            </div>

            <div className='bg-mist-100 flex justify-start items-center hover:bg-violet-100 hover:text-blue-700  px-4 py-2 rounded-xl transition-all duration-200 ease-in'>
                <img className='h-5' src="src\assets\Skills Icon.svg" alt="" />

                <Link
                    className='hover:bg-violet-100 hover:text-blue-700 font-semibold px-4 py-2 rounded transition-all duration-200 ease-in w-full'
                    to='skills'>
                    Skills
                </Link>
            </div>

            <div className='bg-mist-100 flex justify-start items-center hover:bg-violet-100 hover:text-blue-700  px-4 py-2 rounded-xl transition-all duration-200 ease-in'>
                <img className='h-5' src="src\assets\About2 Icon.svg" alt="" />

                <Link
                    className='hover:bg-violet-100 hover:text-blue-700 font-semibold px-4 py-2 rounded transition-all duration-200 ease-in w-full'
                    to='/about'>
                    About
                </Link>
            </div>

            <div className='bg-mist-100 flex justify-start items-center hover:bg-violet-100 hover:text-blue-700  px-4 py-2 rounded-xl transition-all duration-200 ease-in'>
                <img className='h-5' src="src\assets\Contact2 Icon.svg" alt="" />

                <Link
                    className='hover:bg-violet-100 hover:text-blue-700 font-semibold px-4 py-2 rounded transition-all duration-200 ease-in w-full'
                    to='/contact'>
                    Contact
                </Link>
            </div>

        </div>
    )
}

export default Navlist
