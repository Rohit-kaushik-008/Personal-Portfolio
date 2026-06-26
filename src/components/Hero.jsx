import React from 'react'
import HeroButtons from './HeroButtons'
import HeroBoard from './HeroBoard'

const Hero = (props) => {    

    return (

        <div
            className='bg-background-color-dark h-full p-4  py-8 mt-4 rounded-2xl text-white text-center'>

            <p
                className='text-primary-color font-semibold pl-2'>
                HELLO, I'M
            </p>

            <h1
                className='text-5xl font-bold font-code pb-4 pt-2'>
                ROHIT KAUSHIK
            </h1>

            <h2
                className='text-2xl font-semibold pb-2 text-primary-color-shade-light font-heading'>
                Full Stack Developer
            </h2>

            <p
                className='text-white-2 font-semibold font-heading'>
                I'm a passionate frontend <br /> developer who loves turning ideas <br /> into real world web applications.
            </p>

            <p
                className='text-white-2 py-2 font-heading font-semibold'>
                I build modern, responsive and <br /> scalable web applications with clean <br /> code and great user experiences.
            </p>

            <HeroButtons />

            <HeroBoard data={props}/>

            

        </div>
    )
}

export default Hero
