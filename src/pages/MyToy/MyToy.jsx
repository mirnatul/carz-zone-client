import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MySingleToy from './MySingleToy';
import Swal from 'sweetalert2'


const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [myToy, setMyToy] = useState([])

    const url = `https://carz-zone-server.vercel.app/my-toy?email=${user.email}`


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://carz-zone-server.vercel.app/my-toy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'The toy has been deleted.',
                                'success'
                            )
                            const remaining = myToy.filter(toy => toy._id !== id)
                            setMyToy(remaining);
                        }
                    })
            }
        })
    }


    return (
        <div className='max-w-7xl mx-auto mb-20'>
            <h2 className='text-5xl text-center font-bold my-12'>My <span className='text-red-500'>Toys</span></h2>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full text-center">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-lg text-slate-500'>Delete</th>
                                <th className='text-lg text-slate-500'>Update</th>
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
                                myToy.map(singleToy => <MySingleToy
                                    key={singleToy._id}
                                    singleToy={singleToy}
                                    handleDelete={handleDelete}
                                ></MySingleToy>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToy;