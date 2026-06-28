import React from 'react'
import { Link } from 'react-router-dom'

import Home from "../assets/Home-Icon.svg";
import Projects from "../assets/Project-Icon.svg";
import Skills from "../assets/Skills-Icon.svg";
import About from "../assets/About2-Icon.svg";
import Contact from "../assets/Contact2-Icon.svg";

const Navlist = () => {
    return (

        <div
            className='flex flex-col gap-6 text-lg px-6 py-8 text-mist-300'>

            <div className='bg-primary-color-shade-dark flex justify-start items-center hover:bg-primary-color-shade-light hover:text-white  px-4 py-2 rounded-xl transition-all duration-200 ease-in'>
                <img className='h-5 invert' src={Home} alt="" />

                <Link
                    className='hover:bg-primary-color-shade-light font-semibold px-4 py-2 rounded transition-all duration-200 ease-in w-full'
                    to='/'>
                    Home
                </Link>
            </div>

            <div className='bg-primary-color-shade-dark flex justify-start items-center hover:bg-primary-color-shade-light hover:text-white  px-4 py-2 rounded-xl transition-all duration-200 ease-in'>
                <img className='h-5 invert' src={Projects} alt="" />

                <Link
                    className='hover:bg-primary-color-shade-light  font-semibold px-4 py-2 rounded transition-all duration-200 ease-in w-full'
                    to='/projects'>
                    Projects
                </Link>
            </div>

            <div className='bg-primary-color-shade-dark flex justify-start items-center hover:bg-primary-color-shade-light hover:text-white px-4 py-2 rounded-xl transition-all duration-200 ease-in'>
                <img className='h-5 invert' src={Skills} alt="" />

                <Link
                    className='hover:bg-primary-color-shade-light font-semibold px-4 py-2 rounded transition-all duration-200 ease-in w-full'
                    to='skills'>
                    Skills
                </Link>
            </div>

            <div className='bg-primary-color-shade-dark flex justify-start items-center hover:bg-primary-color-shade-light hover:text-white px-4 py-2 rounded-xl transition-all duration-200 ease-in'>
                <img className='h-5 invert' src={About} alt="" />

                <Link
                    className='hover:bg-primary-color-shade-light font-semibold px-4 py-2 rounded transition-all duration-200 ease-in w-full'
                    to='/about'>
                    About
                </Link>
            </div>

            <div className='bg-primary-color-shade-dark flex justify-start items-center hover:bg-primary-color-shade-light hover:text-white px-4 py-2 rounded-xl transition-all duration-200 ease-in'>
                <img className='h-5 invert' src={Contact} 
                alt="" />

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
