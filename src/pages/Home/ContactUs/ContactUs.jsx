import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaPhoneAlt, FaAddressBook, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const formInputs = e.target;

        emailjs.sendForm('service_ku36vc7', 'template_cgjidpa', form.current, 'qmpxcd5n3RJFU_YTD')
            .then((result) => {
                Swal.fire(
                    'Thank You!',
                    'Email send successfully!',
                    'success'
                )
                formInputs.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='mb-20'>
            <div className='mb-10'>
                <h2 className='lg:text-5xl text-3xl font-bold text-center mb-2'><span className='text-[#fe565a]'>Contact</span> Us</h2>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-20 glass p-4 lg:p-10'>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='grid grid-cols-2 gap-2 lg:gap-5 my-2 lg:my-6'>
                            <div className=''>
                                <input type="text" name="from_name" id="" placeholder='Your Name...' className='w-full p-4 border-[1px] border-[#fe565a] rounded-md' />
                            </div>
                            <div className=''>
                                <input type="email" name="from_email" id="" placeholder='Your Email...' className='w-full p-4 border-[1px] border-[#fe565a] rounded-md' />
                            </div>
                        </div>
                        <div className='my-3 lg:my-6'>
                            <input type="text" name="from_subject" id="" placeholder='Email Subject...' className='w-full p-4 border-[1px] border-[#fe565a] rounded-md' />
                        </div>
                        <div className='mt-3 lg:mt-6 mb-4'>
                            <textarea name="message" id="" placeholder='Write your message here...' rows={5} className='w-full p-4 border-[1px] border-[#fe565a] rounded-md'></textarea>
                        </div>
                        <div className='text-center'>
                            <input type="submit" value="Send Email" className='btn glass bg-[#fe565a] hover:bg-[#fe565a]' />
                        </div>
                    </form>
                    <div className="divider my-3 lg:my-6">OR</div>
                    <div className='text-center text-[#fe565a]'>
                        <h2 className='text-lg lg:text-xl'>Don't like form? Send me an <a href='mailto:mdmirnatulislam@gmail.com' className='text-slate-800 underline cursor-pointer text-2xl lg:text-3xl font-extrabold'>Email.</a></h2>
                    </div>
                </div>
                <div>
                    <iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=Badda,%20Dhaka+(summerSports)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.maps.ie/population/">Population mapping</a>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;