import React from 'react'

const HeroBoard = (props) => {
    

  return (

    <div
        className='flex flex-col justify-center items-center gap-8 flex-wrap mt-8 rounded-2xl py-8 px-4 font-code lg:flex-row lg:flex-nowrap'>

        <div
            className='bg-background-color px-4 py-4 w-full rounded-xl flex justify-between items-center hover:bg-background-color-light cursor-pointer transition duration-300 ease-in-out hover:scale-103'>
            <h1
                className='text-lg'>
                Projects
            </h1>

            <p
                className=''>
                {props.data.projects}
            </p>
        </div>

        <div
            className='bg-background-color px-4 py-4 w-full rounded-xl flex justify-between items-center hover:bg-background-color-light cursor-pointer transition duration-300 ease-in-out hover:scale-103'>
             <h1
                className='text-lg'>
                Experience
            </h1>

            <p
                className=''>
                +{props.data.experience}
            </p>

        </div>

        <div
            className='bg-background-color px-4 py-4 w-full rounded-xl flex justify-between items-center hover:bg-background-color-light cursor-pointer transition duration-300 ease-in-out hover:scale-103'>
             <h1
                className='text-lg'>
                Technologies
            </h1>

            <p
                className=''>
                {props.data.technologies}
            </p>
        </div>

        <div
            className='bg-background-color px-4 py-4 w-full rounded-xl flex justify-between items-center hover:bg-background-color-light cursor-pointer transition duration-300 ease-in-out hover:scale-103'>
            <h1
                className='text-lg'>
                completion
            </h1>
            <p
                className=''>
                {props.data.completion}%
            </p>

        </div>

        
      
    </div>
  )
}

export default HeroBoard
