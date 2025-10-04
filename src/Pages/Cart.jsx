import React, { useContext } from 'react';
import { CartContext } from '../Providers/CartContext';


const Cart = () => {

    const { cart, setcart } = useContext(CartContext);

    return (
        <div className='w-8/12 mx-auto gap-12 place-items-center grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1'>


            {
                cart?.map(plant =>


                    <div className="p-4 bg-white rounded-lg shadow max-w-90 ">
                        <img className="rounded-md max-h-50 w-full object-cover" src={plant?.image} />
                        <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">Nmae : {plant?.name}</p>
                        <p className="text-gray-500 text-sm my-3 ml-2">Catrgory : {plant?.category}</p>
                        <p className="text-gray-500 text-sm my-3 ml-2">Price : ${plant?.price}</p>
                    </div>
                )
            }

        </div>
    );
};

export default Cart;