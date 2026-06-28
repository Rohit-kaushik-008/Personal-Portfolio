import React from 'react'

const LinkTab = (prop) => {


    return (
        
        <div
            className='flex gap-16 justify-between items-center py-4 px-12 bg-background-color-lighter rounded-xl'>


            <a
                href={prop.link.link}
                target='_blank'>
                <img
                    className='h-10'
                    src={prop.link.logo_url}
                    alt={prop.link.alt} />
            </a>

            <h1
                className='text-xl font-semibold font-heading sm:text-2xl'>
                {prop.link.title}
            </h1>


        </div>

    )
}

export default LinkTab
