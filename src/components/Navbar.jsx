import React, { useState } from 'react'
import Navlist from './Navlist';

const navbar = (state) => {


  const closeSidebar = () => {
    state.openNav(false)
  }

  return (
    <div className={`h-screen bg-background-color border-primary-color border-2 fixed top-0 left-0 w-full z-10 transform transition-transform duration-500 ease-in-out lg:relative lg:w-[35vw] lg:top-0 lg:left-0 lg:translate-0 ${state.isOpen ? "translate-x-0 " : "-translate-x-full"}`}>

      <div className='flex justify-between items-center bg-background-color-dark py-4 px-4 text-primary-color-shade-light shadow-primary-color-shade-light shadow-xs'>

        <h2
          className='text-3xl font-bold font-code'>
          GamerKrown
        </h2>

        <button
          onClick={closeSidebar}>
          <img
            className='h-10 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100 ease-in invert lg:hidden'
            src="src/assets/sidebar.png"
            alt="" />
        </button>

      </div>

      <div
        onClick={closeSidebar}>
        <Navlist state={state} />
      </div>


    </div>
  )
}

export default navbar
