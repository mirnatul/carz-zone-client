import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EachCar from './EachCar';

const SubCategoriesTab = () => {

    const [sportsCar, setSportsCar] = useState([]);
    const [serviceCar, setServiceCar] = useState([]);
    const [regularCar, setRegularCar] = useState([]);

    useEffect(() => {
        fetch('https://carz-zone-server.vercel.app/sports-car')
            .then(res => res.json())
            .then(data => setSportsCar(data))
    }, [])

    useEffect(() => {
        fetch('https://carz-zone-server.vercel.app/service-car')
            .then(res => res.json())
            .then(data => setServiceCar(data))
    }, [])

    useEffect(() => {
        fetch('https://carz-zone-server.vercel.app/regular-car')
            .then(res => res.json())
            .then(data => setRegularCar(data))
    }, [])


    return (
        <div className='text-center mt-40 mb-10'>
            <h2 className='lg:text-5xl text-3xl font-bold text-center mb-12'>Sub <span className='text-[#fe565a]'>Category</span></h2>
            <Tabs>
                <TabList>
                    <Tab>Sports Car</Tab>
                    <Tab>Service Car</Tab>
                    <Tab>Regular Car</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex justify-between lg:w-3/4 mx-auto'>
                        {
                            sportsCar.map(eachCar => <EachCar
                                key={eachCar._id}
                                eachCar={eachCar}
                            ></EachCar>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex justify-between lg:w-3/4 mx-auto'>
                        {
                            serviceCar.map(eachCar => <EachCar
                                key={eachCar._id}
                                eachCar={eachCar}
                            ></EachCar>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex justify-between lg:w-3/4 mx-auto'>
                        {
                            regularCar.map(eachCar => <EachCar
                                key={eachCar._id}
                                eachCar={eachCar}
                            ></EachCar>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategoriesTab;