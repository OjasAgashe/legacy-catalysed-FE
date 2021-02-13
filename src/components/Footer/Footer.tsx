import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="row">
            <div className="col-md-4 bg-dark">
             <h1 className="text-white">Contact Us</h1>
            </div>
            <div className="col-md-4 bg-dark">
            <h1 className="text-white">About Us</h1>
            </div>
            <div className="col-md-4 bg-dark">
            <h1 className="text-white"> FAQ</h1>
            </div>
            </div>
        </>
    );
};

export default Footer;