import React from 'react';
import { FaGift, FaShippingFast } from 'react-icons/fa'
import { BiSolidHappyAlt } from 'react-icons/bi'

const WhyChooseUs = () => {
    return (
        <div className='mb-20'>

            <div className='mb-10'>
                <h2 className='lg:text-5xl text-3xl font-bold text-center mb-2'>Why<span className='text-[#fe565a]'> Choose</span> Us</h2>
                <p className='text-center'>Discover the reasons why Carz Zone is perfect for you to buy toys</p>
            </div>

            {/* cards */}
            <div className='grid lg:grid-cols-3 mt-20 gap-6 lg:gap-10'>
                <div className="card bg-base-100 shadow-xl rounded-lg hover:scale-105 duration-300">
                    <figure className='text-[#fe565a] py-8'><FaShippingFast size={100}></FaShippingFast></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fast Shipping</h2>
                        <p>Get your favorite toy in just two days or even more soon. We are now providing fast delivery with a quality product. Choose, buy and forget.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl rounded-lg hover:scale-105 duration-300">
                    <figure className='text-[#fe565a] py-8'><FaGift size={100}></FaGift></figure>
                    <div className="card-body">
                        <h2 className="card-title">Exclusive Gifts</h2>
                        <p>We are now providing gift system delivery. So not only just you can buy toys for your child but also you can give as a gift to others with a gift wrapper.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl rounded-lg hover:scale-105 duration-300">
                    <figure className='text-[#fe565a] py-8'><BiSolidHappyAlt size={100}></BiSolidHappyAlt></figure>
                    <div className="card-body">
                        <h2 className="card-title">Customer Satisfactions</h2>
                        <p>Customer satisfactions is always our first priority that why we have easy return policies. You can change your broken product with in one day. So be relaxed.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;