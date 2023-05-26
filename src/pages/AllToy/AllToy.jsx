import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToy from './SingleToy';

const AllToy = () => {

    const [allToy, setAllToy] = useState([])
    const [showAll, setShowAll] = useState(false);

    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        fetch('https://carz-zone-server.vercel.app/search-toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(searchValue)

        })
    }, [])

    let url = 'https://carz-zone-server.vercel.app/twenty-toy'

    if (showAll) {
        url = 'https://carz-zone-server.vercel.app/all-toy'
    }
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllToy(data))
    }, [showAll])

    return (
        <div className='max-w-7xl mx-auto mb-20'>
            <h2 className='text-5xl text-center font-bold my-12'>All <span className='text-red-500'>Toys</span></h2>
            <div>
                <div className='max-w-[500px] mx-auto mb-8'>
                    <p className='font-semibold mb-2'>Search by name:</p>
                    <input type="text" placeholder="Type here" className="input w-full max-w-lg bg-yellow-200" />
                    <button onClick={(e) => setSearchValue(e.target.value)} className='btn'>Search</button>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full text-center">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-lg text-slate-500'>Picture</th>
                                <th className='text-lg text-slate-500'>Toy Name</th>
                                <th className='text-lg text-slate-500'>Sub Category</th>
                                <th className='text-lg text-slate-500'>Seller</th>
                                <th className='text-lg text-slate-500'>Price</th>
                                <th className='text-lg text-slate-500'>Available</th>
                                <th className='text-lg text-slate-500'>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allToy.map(singleToy => <SingleToy
                                    key={singleToy._id}
                                    singleToy={singleToy}
                                ></SingleToy>)
                            }
                        </tbody>
                    </table>
                    {
                        !showAll ?
                            <div className='text-center my-6 text-white'>
                                <button onClick={() => setShowAll(!showAll)} className='bg-red-500 px-4 py-2 font-bold text-lg'>Show All</button>
                            </div> :
                            ''
                    }
                </div>
            </div>
        </div>
    );
};

export default AllToy;