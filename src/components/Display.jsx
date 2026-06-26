import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import About from '../pages/About'
import Contact from '../pages/Contact'

const Display = (state) => {

    const openSidebar = () => {
        state.openNav(true);
    }

    return (

        <div className='bg-background-color h-screen overflow-auto border-primary-color border-2'>

            <div className='flex justify-between items-center bg-background-color-dark py-4 px-6 shadow-primary-color-shade-light shadow-2xs'>

                <button>

                    <img
                        onClick={openSidebar}
                        className='h-10 invert cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100 ease-in'
                        src="src/assets/open sidebar.png"
                        alt="" />

                </button>

                <button
                    className='text-white bg-primary-color rounded active:scale-95 cursor-pointer py-1'>

                    <Link to='/'
                        className='px-2 py-1'>
                        Home
                    </Link>

                </button>

            </div>

            <div className='p-4'>

                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />

                </Routes>
            </div>

        </div>
    )
}

export default Display
