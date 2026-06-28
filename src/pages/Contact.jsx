import React from 'react'
import LinkTab from '../components/LinkTab'

const Contact = () => {

  const Links = [
    {
      title: "GitHub",
      link: "https://github.com/Rohit-kaushik-008",
      logo_url: "src/assets/github.png",
      alt: "GitHub",
    },
    {
      title: "Facebook",
      link: "https://www.facebook.com/rohitkaushik.bhardwaj/",
      logo_url: "src/assets/facebook.png",
      alt: "facebook",
    },
    {
      title: "X",
      link: "https://x.com/rohitkaushik008",
      logo_url: "src/assets/twitter.png",
      alt: "x",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/rohit-kaushik-797036414/",
      logo_url: "src/assets/linkedin.png",
      alt: "linkedin",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/exclusive_rohit_008/",
      logo_url: "src/assets/instagram.png",
      alt: "instagram",
    }
  ]

  return (


    <div className='flex gap-8 text-white flex-col text-center lg:w-[65vw]'>

      <h2
        className='text-center mt-4 text-lg font-code font-semibold'>
        Email : example123@gmail.com
      </h2>

      <h1
        className='text-lg font-code font-semibold'>
        Contact No. 91+ 9988776655
      </h1>

      <hr />

      <h1
        className='text-2xl font-heading font-bold'>
        Links
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
