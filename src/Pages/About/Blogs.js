import React from 'react';
import comming_pic1 from '../../assets/images/comming-pic.png'
import comming_pic2 from '../../assets/images/comming-pic1.png'
import comming_pic3 from '../../assets/images/comming-pic2.png'

const Blogs = () => {
    return (
        <div>
            <h2 className='text-black font-bold text-xl py-10'>Comming Soon</h2>
           <div className='flex align-items-center justify-content-center gap-5 '>
                
            <img class="object-none object-center bg-yellow-300 ..."  src={comming_pic1} alt="" />
           {/*  <img class="object-none object-center bg-yellow-300 ..."  src={comming_pic2} alt="" />
            <img class="object-none object-center bg-yellow-300 ..."  src={comming_pic3} alt="" />
         */}
           </div>
        </div>
    );
};

export default Blogs;