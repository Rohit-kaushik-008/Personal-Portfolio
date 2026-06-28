import React from 'react'
import LinkTab from '../components/LinkTab'
import gitHub from '../assets/github.png'
import facebook from '../assets/facebook.png'
import x from '../assets/twitter.png'
import linkedIn from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'

const Contact = () => {

  const Links = [
    {
      title: "GitHub",
      link: "https://github.com/Rohit-kaushik-008",
      logo_url: gitHub,
      alt: "GitHub",
    },
    {
      title: "Facebook",
      link: "https://www.facebook.com/rohitkaushik.bhardwaj/",
      logo_url: facebook,
      alt: "facebook",
    },
    {
      title: "X",
      link: "https://x.com/rohitkaushik008",
      logo_url: x,
      alt: "x",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/rohit-kaushik-797036414/",
      logo_url: linkedIn,
      alt: "linkedin",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/exclusive_rohit_008/",
      logo_url: instagram,
      alt: "instagram",
    }
  ]

  return (


    <div className='flex gap-8 text-white flex-col text-center lg:w-[65vw]'>

      <h2
        className='text-center mt-4 text-lg font-code font-semibold'>
        Email : rohitcodeworks@gmail.com
      </h2>

      <h1
        className='text-lg font-code font-semibold'>
        Contact No. 91+ 8920475704
      </h1>

      <hr />

      <h1
        className='text-3xl font-heading font-bold'>
        Accounts
      </h1>



        {Links.map((items, index) => (
          <LinkTab
            key={index}
            link={items}
          />
        ))}
      

    </div>
  )
}

export default Contact
