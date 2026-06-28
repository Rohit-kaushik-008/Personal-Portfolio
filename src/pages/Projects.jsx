import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {


  const Projects = [
    {
      title: "Mini Search Engine",
      project_img: "public/images/projects/Project1.png",
      description: "this is description",
      category: "Full Stack",
      source_code: "https://github.com/",
      link: "https://animoshow.netlify.app/",
      technologies: [
        "React",
        "Tailwind",
        "node.js",
      ]
    },
    {
      title: "Image Gallery",
      project_img: "public/images/projects/Project2.png",
      description: "this is description",
      category: "Frontend",
      source_code: "https://github.com/",
      link: "https://imagogallery.netlify.app/",
      technologies: [
        "React",
        "Tailwind",
        "JavaScript",
      ]
    },
    {
      title: "Personal Portfolio",
      project_img: "public/images/projects/Project3.png",
      description: "this is description",
      category: "Backend",
      source_code: "https://github.com/",
      link: "https://krownportfolio.netlify.app/",
      technologies: [
        "node.js",
        "Express.js",
        "Rest Api",
      ]
    },
  ]


  return (

    <div
      className='text-white flex flex-col md:flex-row flex-wrap gap-2 justify-center'>


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
