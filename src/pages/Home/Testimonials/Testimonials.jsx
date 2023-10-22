import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';


const Testimonials = () => {

    const testimonials = [
        {
            "image": "https://images.unsplash.com/photo-1665779912168-c6d48ec98dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            "name": "John Smith",
            "review": "Attending the carz zone community at carz zome was an incredible experience. The workshops were engaging, the instructors were knowledgeable, and I learned so much about toys and their services. Highly recommended!",
            "rating": 4.5
        },
        {
            "image": "https://images.unsplash.com/photo-1653055645127-54ec96add7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            "name": "Emily Johnson",
            "review": "Attending the carz zone community at carz zome was an incredible experience. The workshops were engaging, the instructors were knowledgeable, and I learned so much about toys and their services. Highly recommended!",
            "rating": 4.2
        },
        {
            "image": "https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
            "name": "Michael Rodriguez",
            "review": "Attending the carz zone community at carz zome was an incredible experience. The workshops were engaging, the instructors were knowledgeable, and I learned so much about toys and their services. Highly recommended!",
            "rating": 4.8
        },
        {
            "image": "https://images.unsplash.com/photo-1665779912168-c6d48ec98dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            "name": "Sophia Davis",
            "review": "Attending the carz zone community at carz zome was an incredible experience. The workshops were engaging, the instructors were knowledgeable, and I learned so much about toys and their services. Highly recommended!",
            "rating": 4.0
        },
        {
            "image": "https://images.unsplash.com/photo-1502452213786-a5bc0a67e963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
            "name": "Benjamin Wilson",
            "review": "Attending the carz zone community at carz zome was an incredible experience. The workshops were engaging, the instructors were knowledgeable, and I learned so much about toys and their services. Highly recommended!",
            "rating": 4.1
        },
        {
            "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Olivia Thompson",
            "review": "Attending the carz zone community at carz zome was an incredible experience. The workshops were engaging, the instructors were knowledgeable, and I learned so much about toys and their services. Highly recommended!",
            "rating": 4.7
        }
    ]

    return (
        <div className='my-24'>
            <h2 className='lg:text-5xl text-3xl font-bold text-center mb-12'>Customer<span className='text-[#fe565a]'> Reviews</span></h2>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    testimonials.map((testimonial, index) => <SwiperSlide>
                        <div className='text-center text-slate-700 text-sm md:text-md lg:px-20'>
                            <div className="avatar">
                                <div className="w-24 lg:w-32 rounded-full">
                                    <img src={testimonial.image} />
                                </div>
                            </div>
                            <p className='font-bold text-xl lg:text-3xl mt-4'>{testimonial.name}</p>
                            <div className='flex justify-center my-2'>
                                <Rating
                                    style={{ maxWidth: 180, textAlign: 'center' }}
                                    value={testimonial.rating}
                                    readOnly
                                />
                            </div>
                            <p className='text-md lg:text-lg mb-10'>{testimonial.review}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;