import React from 'react'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <div>

            <div 
                className='bg-mist-200 px-4 py-8 flex justify-center items-center bg-cover bg-center'>
                <img
                    className='h-50 rounded-[50%] '
                    src="src\assets\Levi Ackremann.jpg"
                    alt="" />
            </div>

            <Hero />
        </div>
    )
}

export default Home
