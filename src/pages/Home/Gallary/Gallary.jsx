import React from 'react';
import Marquee from 'react-fast-marquee'

const Gallary = () => {
    return (
        <div className='mb-24'>
            <h2 className='my-24 lg:text-5xl text-3xl font-bold text-center'>Our <span className='text-red-500'>Gallery</span></h2>
            <Marquee className='mb-20' speed={20}>
                <div className='flex gap-20'>
                    <img className='w-[200px] h-[120px] lg:h-full lg:w-full' src="https://i.ibb.co/x65h3MT/gal-1.png" alt="" />
                    <img className='w-[200px] h-[120px] lg:h-full lg:w-full' src="https://i.ibb.co/PwcsWft/gal-2.png" alt="" />
                    <img className='w-[200px] h-[120px] lg:h-full lg:w-full' src="https://i.ibb.co/CB3ntPQ/gal-3.png" alt="" />
                </div>
            </Marquee>
            <Marquee direction='right' speed={20}>
                <div className='flex gap-20'>
                    <img className='w-[200px] h-[120px] lg:h-full lg:w-full' src="https://i.ibb.co/x65h3MT/gal-1.png" alt="" />
                    <img className='w-[200px] h-[120px] lg:h-full lg:w-full' src="https://i.ibb.co/PwcsWft/gal-2.png" alt="" />
                    <img className='w-[200px] h-[120px] lg:h-full lg:w-full' src="https://i.ibb.co/CB3ntPQ/gal-3.png" alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default Gallary;