import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
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

        <div>

            <div className='flex justify-between items-center bg-mist-200 py-4 px-4'>

                <button>

                    <img
                        onClick={openSidebar}
                        className='h-10 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100 ease-in'
                        src="src/assets/open sidebar.png"
                        alt="" />

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
