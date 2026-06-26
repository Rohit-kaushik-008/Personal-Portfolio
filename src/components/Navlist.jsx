import React from 'react'
import { Link } from 'react-router-dom'

const Navlist = () => {
    return (
        <div
            className='flex flex-col gap-6 text-lg px-6 py-8 text-mist-300'>

            <div className='bg-primary-color-shade-dark flex justify-start items-center hover:bg-primary-color-shade-light hover:text-white  px-4 py-2 rounded-xl transition-all duration-200 ease-in'>
                <img className='h-5 invert' src="src\assets\Home Icon.svg" alt="" />

                <Link
                    className='hover:bg-primary-color-shade-light font-semibold px-4 py-2 rounded transition-all duration-200 ease-in w-full'
                    to='/'>
                    Home
                </Link>
            </div>

            <div className='bg-primary-color-shade-dark flex justify-start items-center hover:bg-primary-color-shade-light hover:text-white  px-4 py-2 rounded-xl transition-all duration-200 ease-in'>
                <img className='h-5 invert' src="src\assets\Project Icon.svg" alt="" />

                <Link
                    className='hover:bg-primary-color-shade-light  font-semibold px-4 py-2 rounded transition-all duration-200 ease-in w-full'
                    to='/projects'>
                    Projects
                </Link>
            </div>

            <div className='bg-primary-color-shade-dark flex justify-start items-center hover:bg-primary-color-shade-light hover:text-white px-4 py-2 rounded-xl transition-all duration-200 ease-in'>
                <img className='h-5 invert' src="src\assets\Skills Icon.svg" alt="" />

                <Link
                    className='hover:bg-primary-color-shade-light font-semibold px-4 py-2 rounded transition-all duration-200 ease-in w-full'
                    to='skills'>
                    Skills
                </Link>
            </div>

            <div className='bg-primary-color-shade-dark flex justify-start items-center hover:bg-primary-color-shade-light hover:text-white px-4 py-2 rounded-xl transition-all duration-200 ease-in'>
                <img className='h-5 invert' src="src\assets\About2 Icon.svg" alt="" />

                <Link
                    className='hover:bg-primary-color-shade-light font-semibold px-4 py-2 rounded transition-all duration-200 ease-in w-full'
                    to='/about'>
                    About
                </Link>
            </div>

            <div className='bg-primary-color-shade-dark flex justify-start items-center hover:bg-primary-color-shade-light hover:text-white px-4 py-2 rounded-xl transition-all duration-200 ease-in'>
                <img className='h-5 invert' src="src\assets\Contact2 Icon.svg" alt="" />

                <Link
                    className='hover:bg-primary-color-shade-light font-semibold px-4 py-2 rounded transition-all duration-200 ease-in w-full'
                    to='/contact'>
                    Contact
                </Link>
            </div>

        </div>
    )
}

export default Navlist
