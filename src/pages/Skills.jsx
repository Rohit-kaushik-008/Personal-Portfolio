import React from 'react';
import SkillCard from '../components/SkillCard.jsx';

import languages from '../assets/Prog-lang.png'
import frontend from '../assets/Frontend.png'
import backend from '../assets/backend.png'
import tools from '../assets/tools.png'
import deployement from '../assets/deploy.png'


const Skills = () => {

  const skillSet = [
    {
      category: "Programming Languages",
      image_url: languages,
      skills: [
        {
          name: "Python",
          icon: "/python.png"
      },
        {
          name: "C++",
          icon: "/C++.svg"
      },
        {
          name: "JavaScript",
          icon: "/js.png"
      },
        {
          name: "C",
          icon: "/C.svg"
      }
      ]
    },

    {
      category: "Frontend",
      image_url: frontend,
      skills: [
        {
          name: "HTML",
          icon: "/html-5.png"
      },
        {
          name: "CSS",
          icon: "/css-3.png"
      },
        {
          name: "React",
          icon: "/React.png"
      },
        {
          name: "Tailwind",
          icon: "/TailwindCSS.svg"
      }
      ]
    },

    {
      category: "Backend",
      image_url: backend,
      skills: [
        {
          name: "Node.js",
          icon: "/nodejs-icon.svg"
      },
        {
          name: "MongoDB",
          icon: "/mongobg.svg"
      },
        {
          name: "Express.js",
          icon: "/Express.svg"
      },
        {
          name: "Firebase",
          icon: "/firebase.svg"
      }
      ]
    },

    {
      category: "Tools & Technologies",
      image_url: tools,
      skills: [
        {
          name: "Git",
          icon: "/git.svg"
      },
        {
          name: "GitHub",
          icon: "/github.svg"
      },
        {
          name: "VS Code",
          icon: "/vs-code.svg"
      },
        {
          name: "Figma",
          icon: "/figma.svg"
      },
        {
          name: "ChatGPT",
          icon: "/chatgpt-icon.svg"
      },
        {
          name: "Gemini",
          icon: "/google-gemini-icon.svg"
      }
      ]
    },

    {
      category: "Deployment",
      image_url: deployement,
      skills: [
        {
          name: "Vercel",
          icon: "/vercel-logo.webp"
      },
        {
          name: "Netlify",
          icon: "/netlify.svg"
      }
      ]
    }
  ];

  return (

    <div
      className='text-white lg:w-[65vw] flex flex-col gap-7'>

      {skillSet.map((items, index) => (
        <SkillCard
          key={index}
          skills={items}
        />
      ))}


    </div>
  )
}

export default Skills
