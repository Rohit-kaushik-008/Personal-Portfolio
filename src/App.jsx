import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import About from './pages/About'
import Contact from './pages/Contact'
import Display from './components/Display'

const App = () => {

    const [isOpen,setIsOpen] =  useState(false)

    return (
        <div className='h-screen bg-mist-90 cursor-default'>

            <Navbar isOpen={isOpen} openNav={setIsOpen} />

            <Display openNav={setIsOpen} />


        </div>
    )
}

export default App
