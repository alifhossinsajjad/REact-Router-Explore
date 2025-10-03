// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../Components/PlantCard';




const Home = () => {

    

    const {plants} = useLoaderData();
    

    return (
        <div>
            <h1 className=' text-4xl font-bold text-center mb-10'>Welcome to my {plants.length} plants </h1>

            <div className='w-8/12  mx-auto grid  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 '>
                {
                    plants.map(plant => <div key={plant?.id}>

                       <PlantCard  plant = {plant}/>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;