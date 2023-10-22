import React from 'react';
import Countdown from 'react-countdown';

const Events = () => {

    const Completionist = () => <span>You are good to go!</span>;

    return (
        <div className='my-24'>
            <div className='mb-20'>
                <h2 className='lg:text-5xl text-3xl font-bold text-center'>😲Top<span className='text-[#fe565a]'> Events</span> and <span className='text-[#fe565a]'> Giveaway😲</span></h2>
            </div>

            <div className='grid lg:grid-cols-2 gap-6 lg:gap-10'>
                <div>
                    <iframe className='w-full h-[360px]' src="https://www.youtube.com/embed/IzqLGu1qeX8?si=Iu9XuxkcitAzgkmS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <p className='text-lg'>Are you ready to get your engines revved up? We're excited to announce our upcoming toy car event and giveaway! This free event is open to all ages and will feature a variety of fun activities, including:</p>
                    <ul className='list-disc list-inside my-3 text-sm'>
                        <li>A toy car race track where you can race your own toy car against other participants</li>
                        <li>A toy car decorating station where you can customize your toy car with stickers, markers, and other fun supplies</li>
                        <li>A toy car giveaway where you'll have the chance to win a brand new toy car!</li>
                    </ul>
                    <p>To participate in the toy car giveaway, simply register at the event and complete all of the activities. At the end of the event, we'll draw one winner from all of the registered participants.</p>
                    <hr className='border-2 my-3' />
                    <div className='mt-4 flex gap-6 items-center'>
                        <div>
                            <button className='btn bg-[#fe565a] hover:bg-error'>Register Now!!</button>
                        </div>
                        <div className='text-lg lg:text-xl'>
                            Registration ends in:
                            <div className='font-semibold text-lg lg:text-3xl text-[#fe565a]'>
                                <Countdown date={Date.now() + 7200000}>
                                    <Completionist />
                                </Countdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;