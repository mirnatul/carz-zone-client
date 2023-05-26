import React from 'react';
import { Link } from 'react-router-dom';

const MySingleToy = ({ singleToy, handleDelete }) => {
    const { _id, image, toy_name, sub_category, seller_name, price, available_quantity, details } = singleToy;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="bg-error py-2 px-4 rounded">Delete</button>
            </th>
            <th>
                <Link to={`/update-toy/${_id}`} className="bg-success py-2 px-4 rounded">Update</Link>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squire w-28 h-20 mx-auto">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </td>
            <td className='font-semibold text-slate-500'>{toy_name}</td>
            <td className='font-semibold text-slate-500'>{sub_category}</td>
            <td className='font-semibold text-slate-500'>{seller_name}</td>
            <td className='font-semibold text-slate-500'>${price}</td>
            <td className='font-semibold text-slate-500'>{available_quantity}</td>
            <th>
                <Link to={`/all-toy/${_id}`} className="bg-yellow-400 py-2 px-4 rounded">Details</Link>
            </th>
        </tr>
    );
};

export default MySingleToy;