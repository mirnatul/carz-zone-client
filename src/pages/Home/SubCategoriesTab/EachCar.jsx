import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../../provider/AuthProvider';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const EachCar = ({ eachCar }) => {
    const { user } = useContext(AuthContext)
    const { _id, toy_name, price, ratings, image } = eachCar
    const handleViewDetails = () => {
        if (!user) {
            Swal.fire({
                title: 'Error!',
                text: 'You have to log in first to see details data',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }
    return (
        <div className='mt-8 text-lg'>
            <div className=''>
                <img className='w-3/4 mx-auto' src={image} alt="" />
            </div>
            <p className='font-bold text-red-700 mt-4'>{toy_name}</p>
            <p className=' my-1'>Price: <span className='font-bold'>{price}</span></p>
            <p className='font-bold text-red-500 my-1'>
                <Rating
                    style={{ maxWidth: 120, margin: 'auto' }}
                    value={ratings}
                    readOnly
                />
            </p>
            <div onClick={handleViewDetails} className='mt-4'><Link to={`/all-toy/${_id}`} className='btn bg-[#fe565a]'>View Details</Link></div>
        </div>
    );
};

export default EachCar;