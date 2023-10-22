import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const toyData = useLoaderData();
    const { image, toy_name, seller_name, seller_email, price, ratings, available_quantity, details } = toyData;
    return (
        <div className='lg:max-w-7xl mx-auto p-6 mb-10'>
            <h2 className='text-4xl font-semibold text-center mb-8'>Car Details</h2>
            <div className='grid lg:grid-cols-2 lg:gap-20 gap-5 items-center'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-lg font-bold text-red-500'>{toy_name}</p>
                    <p>Seller: <span className='font-bold'>{seller_name}</span></p>
                    <p>{seller_email}</p>
                    <p className='font-bold'>${price}</p>
                    <p>Ratings: <span className='font-bold text-orange-500'>{ratings}</span></p>
                    <p className='mb-6'>Available: <span className='font-bold'>{available_quantity}</span></p>
                    <p className='text-lg font-bold'>Car Details:</p>
                    <p className='text-slate-600'>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;