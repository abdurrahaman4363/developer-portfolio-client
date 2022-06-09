import React from 'react';
import developer from '../../assets/images/developer-pic.png'

const About = () => {
    return (
        <div>
            
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={developer} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">About Me</h1>
                        {/* <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        <p className='py-6'>Let me introduce myself. My name is <span className='text-orange-500'>Abdur Rahaman</span>, and I'm a front end developer with six month experience. I'd never written about my experience despite all the help I've received from wonderful resources like Medium, Stack Overflow, and Reddit's programming subreddits.</p>
                        <button class="btn btn-primary">See Projects</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;