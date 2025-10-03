import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import LoadingSpinner from '../Components/LoadingSpinner';

const RootLayout = () => {

    const navigation = useNavigation()

    return (
        <div>
            <Navbar/>
          {
            navigation?.state === 'loading' ? (<LoadingSpinner/>) : (
                 <main className='min-h-[clac(100vh-285px)] p-15' >
            <Outlet>
                <div className=''>
                    <Contact/>
                </div>
                <div>
                   <About/>
                </div>
            </Outlet>
           </main>
            )
          }
           <Footer/>
        </div>
    );
};

export default RootLayout;