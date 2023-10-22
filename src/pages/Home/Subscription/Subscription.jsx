import React from 'react';

const Subscription = () => {
    return (
        <div className='mb-20'>
            <h2 className='text-center font-semibold lg:text-5xl text-3xl my-16'>Check Our <span className='text-[#fe565a]'>Subscription</span></h2>
            <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto p-6">
                <div class="shadow p-5 rounded-lg border-t-4 border-[#fe565a] bg-white">
                    <p class="uppercase text-sm font-medium text-gray-500">
                        Starter
                    </p>
                    <p class="mt-4 text-3xl text-gray-700 font-medium">
                        Free
                    </p>
                    <div class="mt-8">
                        <ul class="grid grid-cols-1 gap-4">
                            <li class="inline-flex items-center text-gray-600">
                                <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                1 days only
                            </li>
                            <li class="inline-flex items-center text-gray-600">
                                <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                Check our playground
                            </li>
                            <li class="inline-flex items-center text-gray-600">
                                <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                Access 300+ toy
                            </li>
                        </ul>
                    </div>
                    <div class="mt-8">
                        <button class="bg-[#fe565a] hover:bg-gray-500 px-3 py-2 rounded-lg w-full text-white">
                            Create Free Listing
                        </button>
                    </div>
                </div>
                <div class="shadow p-5 rounded-lg border-t-4 border-[#fe565a] bg-white">
                    <p class="uppercase text-sm font-medium text-gray-500">
                        Standard
                    </p>
                    <p class="mt-4 text-3xl text-gray-700 font-medium">
                        $30 <span class="text-base font-normal">/listing</span>
                    </p>
                    <div class="mt-8">
                        <ul class="grid grid-cols-1 gap-4">
                            <li class="inline-flex items-center text-gray-600">
                                <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                7 days only
                            </li>
                            <li class="inline-flex items-center text-gray-600">
                                <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                Offer 40%
                            </li>
                            <li class="inline-flex items-center text-gray-600">
                                <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                Access 500+ toy
                            </li>
                        </ul>
                    </div>
                    <div class="mt-8">
                        <button class="bg-[#fe565a] hover:bg-gray-500 px-3 py-2 rounded-lg w-full text-white">
                            Create Standard Listing
                        </button>
                    </div>
                </div>
                <div class="shadow p-5 rounded-lg border-t-4 border-[#fe565a] bg-white">
                    <p class="uppercase text-sm font-medium text-gray-500">
                        Premium
                    </p>
                    <p class="mt-4 text-3xl text-gray-700 font-medium">
                        $50 <span class="text-base font-normal">/listing</span>
                    </p>
                    <div class="mt-8">
                        <ul class="grid grid-cols-1 gap-4">
                            <li class="inline-flex items-center text-gray-600">
                                <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                30 days only
                            </li>
                            <li class="inline-flex items-center text-gray-600">
                                <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                Offer 30% + extra service
                            </li>
                            <li class="inline-flex items-center text-gray-600">
                                <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                Access 100+ toy
                            </li>
                        </ul>
                    </div>
                    <div class="mt-8">
                        <button class="bg-[#fe565a] hover:bg-gray-500 px-3 py-2 rounded-lg w-full text-white">
                            Create Premium Listing
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;