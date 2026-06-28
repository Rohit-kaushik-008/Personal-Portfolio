import React from 'react'
import ProjectCard from '../components/ProjectCard'

import Project1  from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";

const Projects = () => {


  const Projects = [
  {
    title: "Mini Search Engine",
    project_img: Project1,
    description: "A full-stack search engine that allows users to find and explore content efficiently.",
    category: "Full Stack",
    source_code: "https://github.com/",
    link: "https://animoshow.netlify.app/",
    technologies: [
      {
        name: "React",
        icon: "src/assets/React.svg"
      },
      {
        name: "Tailwind",
        icon: "src/assets/TailwindCSS.svg"
      },
      {
        name: "node.js",
        icon: "src/assets/nodejs-icon.svg"
      },
    ]
  },
  {
    title: "Image Gallery",
    project_img: Project2,
    description: "A responsive image gallery for browsing and managing visual collections.",
    category: "Frontend",
    source_code: "https://github.com/",
    link: "https://imagogallery.netlify.app/",
    technologies: [
      {
        name: "React",
        icon: "src/assets/React.svg"
      },
      {
        name: "Tailwind",
        icon: "src/assets/TailwindCSS.svg"
      },
      {
        name: "JavaScript",
        icon: "src/assets/js.png"
      },
    ]
  },
  {
    title: "Personal Portfolio",
    project_img: Project3,
    description: "A personal portfolio website showcasing skills, projects, and professional journey.",
    category: "Backend",
    source_code: "https://github.com/",
    link: "https://krownportfolio.netlify.app/",
    technologies: [
      {
        name: "node.js",
        icon: "src/assets/nodejs-icon.svg"
      },
      {
        name: "Express.js",
        icon: "src/assets/express.svg"
      },
      {
        name: "Rest Api",
        icon: "src/assets/fastAPi.svg"
      },
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
