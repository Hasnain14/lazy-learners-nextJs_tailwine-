import React from 'react';
import UnderDevelopment from '../components/underDevelopment/UnderDevelopment';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const setting = () => {
    return (
        <div>
            <Navbar></Navbar>
            <UnderDevelopment></UnderDevelopment>
            <Footer></Footer>
        </div>
    );
};

export default setting;