import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const TopToys = () => {

    const [allToy, setAllToy] = useState([])

    useEffect(() => {
        fetch('https://carz-zone-server.vercel.app/all-toy')
            .then(res => res.json())
            .then(data => setAllToy(data.slice(0, 6)))
    }, [])

    console.log(allToy);

    return (
        <div className='my-20'>
            <div className='mb-10'>
                <h2 className='lg:text-5xl text-3xl font-bold text-center mb-2'><span className='text-[#fe565a]'>Top Toys</span> of our store</h2>
                <p className='text-center'>Discover the most popular toy of our store</p>
            </div>

            {/* all card */}
            <div className='grid lg:grid-cols-3 gap-6 lg:gap-10'>

                {
                    allToy.map(singleToy => <div
                        className="card bg-base-100 shadow-xl rounded-md"
                    >
                        <figure>
                            <img src={singleToy.image} alt="Shoes" />
                        </figure>
                        <div className="card-body absolute bg-[#00000060] z-10 h-full w-full text-white rounded-md">
                            <h2 className="card-title">{singleToy.toy_name}</h2>
                            <p className='text-sm'>{singleToy.details.slice(0, 140)}...</p>
                            <p><Rating
                                style={{ maxWidth: 120 }}
                                value={singleToy.ratings}
                                readOnly
                            /></p>
                            <div className="card-actions justify-start">
                                <Link to={`/all-toy/${singleToy._id}`} className="bg-[#fe565a] py-2 px-4 rounded">Details</Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default TopToys;