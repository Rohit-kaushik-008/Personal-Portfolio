import React from 'react'
import openLink from "../assets/Open link.png"
import gitHubicon from "../assets/github.png"


const ProjectCard = ({ project }) => {


    return (
        <div className='text-white p-4 '>

            <div
                className='bg-background-color-lighter rounded-xl'>

                <div
                    className='p-4  pb-0'>

                    <img
                        className='h-40 w-full sm:h-60 md:h-40 xl:h-50 rounded-t-lg'
                        src={project.project_img}
                        alt="" />
                </div>

                <div
                    className='py-4'>

                    <div
                        className='flex gap-4 justify-between items-center px-4'>

                        <h1
                            className='font-code font-bold text-2xl overflow-hidden'>
                            {project.title}

                        </h1>
                        <h2
                            className='font-heading font-semibold bg-primary-color py-1 px-4 rounded-md'>
                            {project.category}
                        </h2>
                    </div>

                    <h2
                        className='pt-6 px-4 text-white-2'>
                        {project.description}
                    </h2>

                    <div
                        className='flex gap-4 py-2 px-4 justify-between items-center'>

                        {project.technologies}

                        <div
                            className='flex gap-4'>
                            <a
                                href={project.link}
                                target='_blank'>
                                <img
                                    className='h-6 invert'
                                    src={openLink}
                                    alt="github" />
                            </a>
                            <a
                                href={project.source_code}
                                target='_blank'>
                                <img
                                    className='h-6 invert'
                                    src={gitHubicon}
                                    alt="github" />
                            </a>

                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default ProjectCard
