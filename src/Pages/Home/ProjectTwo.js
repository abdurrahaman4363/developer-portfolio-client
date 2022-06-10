import React from 'react';
import pic2 from '../../assets/images/Capture1.PNG'
import pic3 from '../../assets/images/projectTwoPic1.PNG'
import pic4 from '../../assets/images/projectTwoPic2.PNG'

const ProjectTwo = () => {
    return (
        <div>
             <div className='grid  sm:grid-cols-1 lg:grid-cols-3 gap-10 px-10 py-10'>
            <div>
                <div><img src={pic2} alt="" /></div>
            </div>
           
            <div>
                <div><img src={pic3} alt="" /></div>
            </div>
            <div>
                <div><img src={pic4} alt="" /></div>
            </div>
            </div>
        <div className='grid place-items-center h-screen'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={pic2} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Book Store</h2>
                    <div className='text-left'>
                        <p>● This is also a full stack web project and That's I created a few days Ago.</p>
                        <p>● You can increase and decrease book quantity and remove a book.</p>
                        <p>● There also has authentication system and email verification system.</p>
                        <p>● Have a require page and don't do redirect. </p>
                        <p>● Home page has a banner which is moveable. </p>
                        <p>● There has password reset system. If forgot your password you can reset it. </p>
                        <h1 className='text-black font-bold text-xl'>To know more about my project click the button</h1>
                    </div>
                    <div class="card-actions justify-center">
                        <a href="https://warehouse-assignment-11.web.app/"><button class="btn btn-primary">Live Site</button></a>
                        <a href="https://github.com/abdurrahaman4363/warehouse-client-assignment-11"> <button class="btn btn-primary">Client Side</button></a>
                        <a href="https://github.com/abdurrahaman4363/warehouse-server-assignment-11"> <button class="btn btn-primary">Server Side</button></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProjectTwo;