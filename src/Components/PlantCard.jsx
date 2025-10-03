import React from 'react';
import { Link } from 'react-router';

const PlantCard = ({ plant }) => {
    const {id, name, image, price, category} = plant
    return (
        <div className="p-4 bg-white rounded-lg shadow max-w-90 ">
            <img className="rounded-md max-h-50 w-full object-cover" src={image} />
            <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">Nmae : {name}</p>
            <p className="text-gray-500 text-sm my-3 ml-2">Catrgory : {category}</p>
            <p className="text-gray-500 text-sm my-3 ml-2">Price : ${price}</p>
            <div className='flex justify-end '>
                <Link state={plant} to = {`/plantsDetails/${id}`} className='bg-blue-500 rounded-lg  p-2 text-white font-bold'>View More</Link >
            </div>
        </div>
    );
};

export default PlantCard;