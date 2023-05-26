import Aos from 'aos';
import React from 'react';
import Banner from './Banner/Banner';
import Benifits from './Benifits/Benifits';
import Gallary from './Gallary/Gallary';
import SubCategoriesTab from './SubCategoriesTab/SubCategoriesTab';
import Subscription from './Subscription/Subscription';

Aos.init({
    duration: 1200,
})


const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div data-aos='fade-up'>
                <Banner></Banner>
            </div>
            <div data-aos='fade-down'>
                <Gallary></Gallary>
            </div>
            <div data-aos='fade-right'>
                <SubCategoriesTab></SubCategoriesTab>
            </div>
            <div data-aos='fade-left'>
                <Benifits></Benifits>
            </div>
            <div data-aos='fade-up'>
                <Subscription></Subscription>
            </div>
        </div>
    );
};

export default Home;