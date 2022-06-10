import React from 'react';
import pic3 from '../../assets/images/Capture2.PNG'
import pic4 from '../../assets/images/projectThreePic1.PNG'
import pic5 from '../../assets/images/projectThreePic2.PNG'

const ProjectThree = () => {
    return (
        <div>
            <div className='grid  sm:grid-cols-1 lg:grid-cols-3 gap-4 px-10 py-10'>
            <div>
                <div><img src={pic3} alt="" /></div>
            </div>
           
            <div>
                <div><img src={pic4} alt="" /></div>
            </div>
            <div>
                <div><img src={pic5} alt="" /></div>
            </div>
            </div>
        <div className='grid place-items-center h-screen'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={pic3} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Gym Center</h2>
                    <div className='text-left'>
                        <p>● Home page have picture, name, button and description.</p>
                        <p>● After clicking the name you will go a protected page.</p>
                        <p>● There has authentication system.</p>
                        <p>● I am creating navbar and set react route.</p>
                        <p>● About component have my personal information.</p>
                        <h1 className='text-black font-bold text-xl'>To know more about my project click the button</h1>
                    </div>
                    <div class="card-actions justify-center">
                        <a href="https://service-provider-assign-10.web.app/"><button class="btn btn-primary">Live Site</button></a>
                        <a href="https://github.com/abdurrahaman4363/service-provider-assignments-10"> <button class="btn btn-primary">Code Link</button></a>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProjectThree;