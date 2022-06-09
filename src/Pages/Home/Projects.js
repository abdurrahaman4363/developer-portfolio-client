import React from 'react';
import pic1 from '../../assets/images/Capture.PNG'
import pic2 from '../../assets/images/Capture1.PNG'
import pic3 from '../../assets/images/Capture2.PNG'

const Projects = () => {
    return (
        <div className='bg-base-200'>
            <h2 className='text-black font-bold text-xl py-10'>My Projects</h2>

            <div className='grid  sm:grid-cols-1 lg:grid-cols-3 gap-4 px-10'>

                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic1} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Agriculture Manufacturer </h2>
                        <div className='text-left'>
                        <p>● This is a full stack web project and this is a responsive website.</p>
                        <p>● You can add a tool, review and will give order etc.</p>
                        <p>● There also has authentication system.</p>
                        <h1 className='text-black font-bold text-xl'>To know more about my project click the button</h1>
                        </div>
                        <div class="card-actions justify-end">
                            <a href="https://agriculture-manufact-assign-12.web.app/"><button class="btn btn-primary">Live Site</button></a>
                            <a href="https://github.com/abdurrahaman4363/manufacturer-client-assign-12"> <button class="btn btn-primary">Client Side</button></a>
                           <a href="https://github.com/abdurrahaman4363/manufacturer-server-assign-12"> <button class="btn btn-primary">Server Side</button></a>
                           
                        </div>
                    </div>
                </div>


                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Book Store</h2>
                       <div className='text-left'>
                       <p>● This is also a full stack web project and That's I created a few days Ago.</p>
                       <p>● You can increase and decrease book quantity and remove a book.</p>
                       <p>● There also has authentication system and email verification system.</p>
                       <h1 className='text-black font-bold text-xl'>To know more about my project click the button</h1>
                       </div>
                        <div class="card-actions justify-end">
                        <a href="https://warehouse-assignment-11.web.app/"><button class="btn btn-primary">Live Site</button></a>
                            <a href="https://github.com/abdurrahaman4363/warehouse-client-assignment-11"> <button class="btn btn-primary">Client Side</button></a>
                           <a href="https://github.com/abdurrahaman4363/warehouse-server-assignment-11"> <button class="btn btn-primary">Server Side</button></a>
                        </div>
                    </div>
                </div>


                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Gym Center</h2>
                        <div className='text-left'>
                        <p>● Home page have picture, name, button and description.</p>
                        <p>● After clicking the name you will go a protected page.</p>
                        <p>● There has authentication system.</p>
                        <h1 className='text-black font-bold text-xl'>To know more about my project click the button</h1>
                        </div>
                        <div class="card-actions justify-end">
                        <a href="https://service-provider-assign-10.web.app/"><button class="btn btn-primary">Live Site</button></a>
                            <a href="https://github.com/abdurrahaman4363/service-provider-assignments-10"> <button class="btn btn-primary">Code Link</button></a>
                           
                        </div>
                    </div>
                </div>


              </div>

            </div>
            );
};

            export default Projects;