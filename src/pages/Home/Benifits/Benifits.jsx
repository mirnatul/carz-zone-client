import React from 'react';

const Benifits = () => {
    return (
        <div className='my-20 p-4'>
            <h2 className='lg:text-5xl text-2xl font-semibold text-center mb-10'>Benefits of playing with <span className='text-red-500'>Toy Car</span></h2>
            <div className='lg:flex lg:justify-between lg:gap-6'>
                <div className='text-lg flex flex-col gap-4'>
                    <p>1. Development of fine motor skills: Playing with car toys involves manipulating and controlling the cars, which helps in the development of fine motor skills, such as hand-eye coordination and finger dexterity.</p>
                    <p>2. Imagination and creativity: Car toys provide a platform for children to engage in imaginative play. They can create their own stories, scenarios, and adventures, stimulating their creativity and fostering their imagination.</p>
                    <p>3. Cognitive development: Playing with car toys involves problem-solving, spatial awareness, and cause-and-effect relationships. Children learn to navigate obstacles, plan routes, and understand the consequences of their actions, promoting cognitive development.</p>
                </div>
                <div className=''>
                    <img className='lg:max-w-[600px]' src="https://themilitarywifeandmom.com/wp-content/uploads/2018/12/open-ended-toys-fb-for-christmas.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Benifits;