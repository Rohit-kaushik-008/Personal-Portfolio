import React from 'react'

const skillCard = (elems) => {
    

    return (

        <div
            className='border-primary-color border rounded-xl'>

            <div
                className='flex justify-start items-center gap-4 rounded-t-xl bg-background-color-dark py-3 px-4'>

                <div
                    className='border-primary-color-shade-light p-2 border rounded-[50%] shadow-primary-color-shade-light shadow-sm'>
                    <img
                        className='h-4 invert '
                        src={elems.skills.image_url}
                        alt="backend" />
                </div>

                <h1
                    className='font-code text-xl sm:text-2xl'>
                    {elems.skills.category}
                </h1>

            </div>


            <div
                className='bg-background-color-lighter  py-4 px-4 rounded-b-xl flex gap-8' >
                {elems.skills.skills.map((item, key) => (
                    <img key={key}
                        className='h-8'
                        src={item.icon} 
                        alt={item.name} />
                ))}
            </div>

        </div>


    )
}

export default skillCard
