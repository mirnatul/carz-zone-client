import Aos from 'aos';
import React from 'react';
import Banner from './Banner/Banner';
import Benifits from './Benifits/Benifits';
import ContactUs from './ContactUs/ContactUs';
import Events from './Events/Events';
import Gallary from './Gallary/Gallary';
import SubCategoriesTab from './SubCategoriesTab/SubCategoriesTab';
import Subscription from './Subscription/Subscription';
import Testimonials from './Testimonials/Testimonials';
import TopToys from './TopToys/TopToys';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

Aos.init({
    duration: 1200,
})


const Home = () => {
    return (
        <div className='max-w-7xl mx-auto p-2'>
            <div data-aos='fade-up'>
                <Banner></Banner>
            </div>
            <div data-aos='fade-up'>
                <Gallary></Gallary>
            </div>
            <div data-aos='fade-up'>
                <TopToys></TopToys>
            </div>
            <div data-aos='fade-up'>
                <SubCategoriesTab></SubCategoriesTab>
            </div>
            <div data-aos='fade-up'>
                {/* special offers */}
            </div>
            <div data-aos='fade-up'>
                <Events></Events>
            </div>
            <div data-aos='fade-up'>
                <WhyChooseUs></WhyChooseUs>
            </div>
            <div data-aos='fade-up'>
                <Subscription></Subscription>
            </div>
            <div data-aos='fade-up'>
                <Testimonials></Testimonials>
            </div>
            <div data-aos='fade-up'>
                <Benifits></Benifits>
            </div>
            <div data-aos='fade-up'>
                <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Home;