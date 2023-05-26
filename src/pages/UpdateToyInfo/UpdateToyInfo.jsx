import React from 'react';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdateToyInfo = () => {

    const myToy = useLoaderData();
    const { _id, seller_name, seller_email, toy_name, sub_category, available_quantity, price, ratings, image, details } = myToy;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;

        const updatedToy = {
            seller_name: form.seller.value,
            seller_email: form.email.value,
            toy_name: form.toy.value,
            sub_category: form.sub.value,
            available_quantity: form.quantity.value,
            price: form.price.value,
            ratings: form.ratings.value,
            image: form.url.value,
            details: form.details.value
        }

        // send data to server side
        fetch(`https://carz-zone-server.vercel.app/my-toy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }


    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <h2 className='text-center text-4xl text-red-500 mt-10 font-bold'>Update Toy</h2>
            <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control max-w-[800px] mx-auto">
                    <div className='grid lg:grid-cols-2 lg:gap-4'>
                        <div>
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input name='seller' defaultValue={seller_name} type="text" placeholder="Seller Name" className="input input-bordered" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input name='email' defaultValue={seller_email} type="email" placeholder="Seller Email" className="input input-bordered" />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 lg:gap-4'>
                        <div>
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input name='toy' defaultValue={toy_name} type="text" placeholder="Toy Name" className="input input-bordered" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <input name='sub' defaultValue={sub_category} type="text" placeholder="Sub Category" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 lg:gap-4'>
                        <div>
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name='price' defaultValue={price} type="text" placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input name='ratings' defaultValue={ratings} type="text" placeholder="Ratings" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 lg:gap-4'>
                        <div>
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input name='quantity' defaultValue={available_quantity} type="text" placeholder="Available Quantity" className="input input-bordered" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input name='url' defaultValue={image} type="url" placeholder="Picture URL" className="input input-bordered" required />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <textarea defaultValue={details} name='details' className="textarea textarea-bordered w-full" placeholder="Car Details"></textarea>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Toy</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateToyInfo;