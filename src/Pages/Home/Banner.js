import React from 'react';
import pic1 from '../../assets/images/linkedin-pic.jpeg'
import resume from '../../assets/document/Abdur Rahaman-update-resume.pdf'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
         <a href={pic1} download>
         <img src={pic1} class="max-w-sm rounded-lg shadow-2xl" alt='' />
         </a>
          <div>
            <h1 class="text-5xl font-bold">Hello, I'M <span className='text-orange-500'>Abdur Rahaman</span></h1>
            <p class="py-6">Knack of building applications with front and back end operations.</p>
            <button class="btn btn-primary"><a href={resume} download >Get Resume</a></button>
            
          </div>
        </div>
      </div>
    );
};

export default Banner;