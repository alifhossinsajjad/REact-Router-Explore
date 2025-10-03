import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center my-40'>
            <HashLoader/>
        </div>
    );
};

export default LoadingSpinner;