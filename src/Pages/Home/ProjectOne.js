import React from 'react';
import pic1 from '../../assets/images/Capture.PNG'
import pic2 from '../../assets/images/projectOnePic1.PNG'
import pic3 from '../../assets/images/projectOnePic2.PNG'

const ProjectOne = () => {
    return (
        <div>
            
            <div className='grid  sm:grid-cols-1 lg:grid-cols-3 gap-10 px-10 py-10'>
            <div>
                <div><img src={pic1} alt="" /></div>
            </div>
           
            <div>
                <div><img src={pic3} alt="" /></div>
            </div>
            <div>
                <div><img src={pic2} alt="" /></div>
            </div>
            </div>
            <div className='grid place-items-center h-screen' >

                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic1} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Agriculture Manufacturer </h2>
                        <div className='text-left'>
                            <p>● This is a full stack web project and this is a responsive website.</p>
                            <p>● You can add a tool, review and will give order etc.</p>
                            <p>● There also has authentication system.</p>
                            <p>● Have a require page if you don't login you can't visit it.</p>
                            <p>● There has a dashboard which is separate admin and user.</p>
                            <p>● If you are admin you can see five section. User see three section.</p>
                            <p>● My profile section will see both user and admin.</p>


                            <h1 className='text-black font-bold text-xl'>To know more about my project click the button</h1>
                        </div>
                        <div class="card-actions justify-center">
                            <a href="https://agriculture-manufact-assign-12.web.app/"><button class="btn btn-primary">Live Site</button></a>
                            <a href="https://github.com/abdurrahaman4363/manufacturer-client-assign-12"> <button class="btn btn-primary">Client Side</button></a>
                            <a href="https://github.com/abdurrahaman4363/manufacturer-server-assign-12"> <button class="btn btn-primary">Server Side</button></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectOne;