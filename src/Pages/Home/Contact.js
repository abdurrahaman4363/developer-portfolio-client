import React from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const  sendEmail = e =>{
              e.preventDefault();
              emailjs.sendForm('service_7bh1rae','template_u4s495g',e.target,'jSXOPqI75q82IEdwW').then(res =>{
                  console.log(res);
                  alert('successfully store your infomation');

              }).catch(err => console.log(err));
    }
    return (
        <div className='bg-base-200'>
            <h2 className='text-black font-bold text-xl py-10'>Contact Me</h2>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Contact Me</h1>
                        <p class="py-6">I'd love to help! I pride myself in Communication There are a million people out there who know how to code. Not everybody knows how to listen to your needs..................................</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div class="card-body">
                            <div className='text-left'>


                                <h1 className='text-black text-primary font-bold text-xl'>Contact Form</h1>

                                <form onSubmit={sendEmail}>


                                    <label>Name</label>
                                    <input name='name' type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs mt-2" />

                                    <label>Email</label>
                                    <input name="user_email" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs mt-2" />

                                    <label>Message</label>
                                    <textarea name="message" class="textarea textarea-bordered w-full max-w-xs mt-2" placeholder=""></textarea> 

                                    <input type="submit" value="Send Email" className='btn btn-primary w-full max-w-xs mt-2' />

                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;