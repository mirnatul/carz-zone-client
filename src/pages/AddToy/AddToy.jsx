import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'

const AddToy = () => {

    const { user } = useContext(AuthContext)

    const handleAddToy = e => {
        e.preventDefault();
        const form = e.target;

        const newToy = {
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

        fetch('https://carz-zone-server.vercel.app/all-toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                form.reset();
            })
    }

    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <h2 className='text-center text-4xl text-[#fe565a] font-bold'>Add a Toy</h2>
            <form onSubmit={handleAddToy} className="card-body">
                <div className="form-control max-w-[800px] mx-auto">
                    <div className='grid lg:grid-cols-2 lg:gap-4'>
                        <div>
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input name='seller' type="text" placeholder="Seller Name" className="input input-bordered" defaultValue={user.displayName ? user.displayName : ''} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Seller Email" className="input input-bordered" defaultValue={user.email} />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 lg:gap-4'>
                        <div>
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input name='toy' type="text" placeholder="Toy Name" className="input input-bordered" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <input name='sub' type="text" placeholder="Sub Category" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 lg:gap-4'>
                        <div>
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name='price' type="text" placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input name='ratings' type="text" placeholder="Ratings" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 lg:gap-4'>
                        <div>
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input name='quantity' type="text" placeholder="Available Quantity" className="input input-bordered" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input name='url' type="url" placeholder="Picture URL" className="input input-bordered" required />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <textarea name='details' className="textarea textarea-bordered w-full" placeholder="Car Details"></textarea>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#fe565a]">Add Toy</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddToy;