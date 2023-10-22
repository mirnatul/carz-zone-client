import React, { useEffect, useState } from 'react';

const Offered = () => {

    const [offeredToy, setOfferedToy] = useState([])

    useEffect(() => {
        fetch('https://carz-zone-server.vercel.app/all-toy')
            .then(res => res.json())
            .then(data => setOfferedToy(data.slice(8, 12)))
    }, [])

    console.log(offeredToy);

    return (
        <div className='my-20'>
            <div className='mb-10'>
                <h2 className='lg:text-5xl text-3xl font-bold text-center mb-2'>Special<span className='text-[#fe565a]'> Offers</span></h2>
            </div>

            <div className='grid lg:grid-cols-4 gap-3'>
                {
                    offeredToy.map(singleToy => <div className="card bg-base-100 shadow-xl rounded-none">
                        <figure>
                            <img src={singleToy.image} alt="Shoes" />
                            <p className='z-10 absolute -left-1 top-2 py-2 px-4 bg-gradient-to-r from-[#fe565a] to-red-900 text-white shadow-5xl'>Offered Toy</p>
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="card-title mx-auto">{singleToy.toy_name}</h2>
                            <p>Seller: <span className='font-semibold'>{singleToy.seller_name}</span></p>
                            <div className='flex gap-4 mt-3 justify-center'>
                                <del className='text-slate-500'>${singleToy.price}</del>
                                <ins className='text-xl text-[#fe565a] font-semibold'>${(singleToy.price * (80 / 100)).toPrecision(4)}</ins>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Offered;