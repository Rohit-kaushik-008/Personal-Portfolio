import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {


  const Projects = [
    {
      title: "Project 1",
      project_img: "hello project 1",
      description: "this is description",
      category: "Full Stack",
      source_code: "https://www.facebook.com",
      link: "https://www.github.com",
      technologies: [
        "React",
        "Tailwind",
        "node.js",
      ]
    },
    {
      title: "Project 2",
      project_img: "hello project 2",
      description: "this is description",
      category: "Frontend",
      source_code: "https://www.facebook.com",
      link: "https://www.github.com",
      technologies: [
        "React",
        "Tailwind",
        "JavaScript",
      ]
    },
    {
      title: "Project 3",
      project_img: "hello project",
      description: "this is description",
      category: "Backend",
      source_code: "https://www.facebook.com",
      link: "https://www.github.com",
      technologies: [
        "node.js",
        "Express.js",
        "Rest Api",
      ]
    },
  ]


  return (

    <div
      className='lg:w-[65vw] text-white'>


      {Projects.map((project, index) => (
          <ProjectCard 
            key={index}
            project={project}
          />
        ))}

    </div>

  )
}

export default Projects
