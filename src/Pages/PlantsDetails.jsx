// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation, } from 'react-router';

const PlantsDetails = () => {

    // const {id} = useParams ()
   

    // const [plant, setPlant] = useState([]);

    // useEffect(() => {
    //     // fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    //     // .then(res => res.json())
    //     // .then(data => setPlant(data?.plants))


    //     // fetch with axios


    //     axios(`https://openapi.programming-hero.com/api/plant/${id}`)
        
    //     .then(data => setPlant(data?.data.plants))

        
    // }, [id])

    const location = useLocation();
    console.log(location);

    const {data} = useLoaderData()

    const {name, description, category, price, image} = data.plants

    return (
        <div className="p-4 bg-white  rounded-lg mx-auto shadow max-w-xl">
            <p className="text-gray-900 text-xl font-semibold uppercase mb-2">Name : {name}</p>
            <p className=" text-md font-bold mb-2">Category : {category}</p>
            <p className="text-black font-semibold text-md mb-3">Description : <span className='text-gray-500'>{description}</span></p>
            <p className="text-gray-900 font-semibold text-sm mb-3">Price : {price}</p>
            <img className="rounded-md h-90 w-full object-cover" src={image} alt="" />
            <div className='flex justify-end mt-5'>
                <Link  className='bg-blue-500 rounded-lg  p-2 text-white font-bold'>Add to Cart</Link >
            </div>
        </div>
    );
};

export default PlantsDetails;