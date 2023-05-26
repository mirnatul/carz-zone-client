import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='my-8 relative h-[80vh]'>
            <img className='w-full h-full' src="https://i.ibb.co/HBbWp0M/banner.png" alt="" />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-slate-800 w-full h-full'>
                <div className='h-full flex items-center text-white lg:p-10 p-6'>
                    <div>
                        <h2 className='text-red-500 text-4xl lg:text-6xl font-bold mb-10'>Carz Zone</h2>
                        <h4 className='text-xl font-semibold mb-10 text-yellow-300'>Let your child explore the cars world</h4>
                        <p className='mt-8 text-slate-100'>A toy is an object that's made for a child to play with. Your favorite childhood toy might have been a dollhouse, a stuffed animal, or a set of blocks. Some toys are specifically designed for play, like a small wooden train set or a baby's shape sorter. You can also make toys out of everyday objects and materials—a piece of paper can take the shape of a toy airplane, and a saucepan can become a toy drum. Very small dogs are another kind of toy, like a toy poodle. When you use it as a verb, toy means "move or handle absent-mindedly."</p>
                        <div className='mt-10'>
                            <Link to='/all-toy' className='btn btn-warning mr-6'>Explore Store</Link>
                            <button className='btn btn-outline btn-warning'>Join Community</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;