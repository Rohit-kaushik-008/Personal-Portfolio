import React from 'react'

const Contact = () => {
  return (
    <div className='flex gap-8 text-white flex-col text-center'>

      <h2
        className='text-center mt-4'>
          Email : example123@gmail.com
        </h2>

      <h1
        className=''>
          Contact No. 91+ 9988776655
      </h1>

      <hr />

      <h1
        className=''>
          Links
      </h1>


      <div
        className='flex gap-8 justify-center items-center py-4 px-8'>



        <a
          href="https://github.com/Rohit-kaushik-008"
          target='_blank'>
          <img
            className='h-10 invert'
            src="src\assets\github.png"
            alt="GitHub" />
        </a>

        <a
          href="https://www.facebook.com/rohitkaushik.bhardwaj/"
          target='_blank'>
          <img
            className='h-10'
            src="src\assets\facebook.png"
            alt="Facebook" />
        </a>

        <a
          href="https://x.com/rohitkaushik008"
          target='_blank'>
          <img
            className='h-10 invert'
            src="src\assets\twitter.png"
            alt="X" />
        </a>

        <a
          href="https://www.linkedin.com/in/rohit-kaushik-797036414/"
          target='_blank'>
          <img
            className='h-10'
            src="src\assets\linkedin.png"
            alt="LinkedIn" />
        </a>

        <a
          href="https://www.instagram.com/exclusive_rohit_008/"
          target='_blank'>
          <img
            className='h-10'
            src="src\assets\instagram.png"
            alt="Instagram" />
        </a>



      </div>


    </div>
  )
}

export default Contact
