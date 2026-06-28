import React from 'react';
import SkillCard from '../components/SkillCard.jsx';


const Skills = () => {

  const skillSet = [
    {
      category: "Programming Languages",
      image_url: "src/assets/Prog-lang.png",
      skills: [
        {
          name: "Python",
          icon: "src/assets/python.png"
      },
        {
          name: "C++",
          icon: "src/assets/C++.svg"
      },
        {
          name: "JavaScript",
          icon: "src/assets/js.png"
      },
        {
          name: "C",
          icon: "src/assets/C.svg"
      }
      ]
    },

    {
      category: "Frontend",
      image_url: "src/assets/Frontend.png",
      skills: [
        {
          name: "HTML",
          icon: "src/assets/html-5.png"
      },
        {
          name: "CSS",
          icon: "src/assets/css-3.png"
      },
        {
          name: "React",
          icon: "src/assets/React.png"
      },
        {
          name: "Tailwind",
          icon: "src/assets/TailwindCSS.svg"
      }
      ]
    },

    {
      category: "Backend",
      image_url: "src/assets/backend.png",
      skills: [
        {
          name: "Node.js",
          icon: "src/assets/nodejs-icon.svg"
      },
        {
          name: "MongoDB",
          icon: "src/assets/mongobg.svg"
      },
        {
          name: "Express.js",
          icon: "src/assets/express.svg"
      },
        {
          name: "Firebase",
          icon: "src/assets/firebase.svg"
      }
      ]
    },

    {
      category: "Tools & Technologies",
      image_url: "src/assets/tools.png",
      skills: [
        {
          name: "Git",
          icon: "src/assets/git.svg"
      },
        {
          name: "GitHub",
          icon: "src/assets/github.svg"
      },
        {
          name: "VS Code",
          icon: "src/assets/vs-code.svg"
      },
        {
          name: "Figma",
          icon: "src/assets/figma.svg"
      },
        {
          name: "ChatGPT",
          icon: "src/assets/chatgpt-icon.svg"
      },
        {
          name: "Gemini",
          icon: "src/assets/google-gemini-icon.svg"
      }
      ]
    },

    {
      category: "Deployment",
      image_url: "src/assets/tools.png",
      skills: [
        {
          name: "Vercel",
          icon: "src/assets/vercel-logo.webp"
      },
        {
          name: "Netlify",
          icon: "src/assets/netlify.svg"
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
