import React from 'react';
import SkillCard from '../components/SkillCard.jsx';
import { FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';


const Skills = () => {

  const skillSet = [
    {
      category: "Programming Languages",
      image_url: "public/images/SkillsIcons/Prog-lang.png",
      skills: [
        {
          name: "Python",
          icon: "public/images/SkillsIcons/python.png"
      },
        {
          name: "C++",
          icon: "public/images/SkillsIcons/C++.svg"
      },
        {
          name: "JavaScript",
          icon: "public/images/SkillsIcons/js.png"
      },
        {
          name: "C",
          icon: "public/images/SkillsIcons/C.svg"
      }
      ]
    },

    {
      category: "Frontend",
      image_url: "/images/SkillsIcons/Frontend.png",
      skills: [
        {
          name: "HTML",
          icon: "public/images/SkillsIcons/html-5.png"
      },
        {
          name: "CSS",
          icon: "public/images/SkillsIcons/css-3.png"
      },
        {
          name: "React",
          icon: "public/images/SkillsIcons/React.png"
      },
        {
          name: "Tailwind",
          icon: "public/images/SkillsIcons/TailwindCSS.svg"
      }
      ]
    },

    {
      category: "Backend",
      image_url: "/images/SkillsIcons/backend.png",
      skills: [
        {
          name: "Node.js",
          icon: "public/images/SkillsIcons/nodejs-icon.svg"
      },
        {
          name: "MongoDB",
          icon: "public/images/SkillsIcons/mongobg.svg"
      },
        {
          name: "Express.js",
          icon: "public/images/SkillsIcons/python.png"
      },
        {
          name: "Firebase",
          icon: "public/images/SkillsIcons/firebase.svg"
      }
      ]
    },

    {
      category: "Tools & Technologies",
      image_url: "/images/SkillsIcons/tools.png",
      skills: [
        {
          name: "Git",
          icon: "public/images/SkillsIcons/git.svg"
      },
        {
          name: "GitHub",
          icon: "public/images/SkillsIcons/github.svg"
      },
        {
          name: "VS Code",
          icon: "public/images/SkillsIcons/vs-code.svg"
      },
        {
          name: "Figma",
          icon: "public/images/SkillsIcons/figma.svg"
      },
        {
          name: "ChatGPT",
          icon: "public/images/SkillsIcons/chatgpt-icon.svg"
      },
        {
          name: "Gemini",
          icon: "public/images/SkillsIcons/google-gemini-icon.svg"
      }
      ]
    },

    {
      category: "Deployment",
      image_url: "/images/SkillsIcons/tools.png",
      skills: [
        {
          name: "Vercel",
          icon: "public/images/SkillsIcons/vercel-logo.webp"
      },
        {
          name: "Netlify",
          icon: "public/images/SkillsIcons/netlify.svg"
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
