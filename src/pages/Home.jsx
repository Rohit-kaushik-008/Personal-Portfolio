import React, { useState } from 'react'
import Hero from '../components/Hero'
import levi from "../assets/Levi Ackremann.jpg"

const Home = () => {

    const [projects, setProjects] = useState(3);
    const [experience, setExperience] = useState(1);
    const [technologies, setTechnologies] = useState(8);
    const [completion, setCompletion] = useState(100);

    return (
        <div className='p-4 lg:w-full w-full'>

            <div 
                className='px-4 py-8 flex justify-center items-center bg-cover bg-center'>
                <img
                    className='h-50 rounded-[50%] profile-image'
                    src={levi}
                    alt="" />
            </div>

            <Hero projects={projects} experience={experience} technologies={technologies} completion={completion}/>

        </div>
    )
}

export default Home
