import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import LoadingSpinner from '../Components/LoadingSpinner';
import { CartContext } from '../Providers/CartContext';








const RootLayout = () => {

    const [cart, setCart] = useState([])

    const navigation = useNavigation()


    return (
        <CartContext.Provider value={{cart,setCart}}>
            <Navbar />
            {
                navigation?.state === 'loading' ? (<LoadingSpinner />) : (
                    <main className='min-h-[clac(100vh-285px)] p-15' >
                        <Outlet>
                            <div className=''>
                                <Contact />
                            </div>
                            <div>
                                <About />
                            </div>
                        </Outlet>
                    </main>
                )
            }
            <Footer />
        </CartContext.Provider>
    );
};

export default RootLayout;