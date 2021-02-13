import React from 'react';
import './AboutUs.css';
import girl from '../../images/girl.png';
import boy from'../../images/boy.png'
const AboutUs = () => {
    return (
        <>
        <div className="row w-100">
            <div className="col-md-3  p-0">
            <img src={girl} className=" w-md-100 girl" />
            </div>
            <div className="col-md-6 w-md-100 about-us-background">
             <h1 className="about-us-title w-md-auto">About <span className="us">Us</span> </h1>
             <h4 className="about-us-title-second mt-4">Give every child's dream a better chance</h4>
             <p className="about-us-description text-justify mt-3">We aim to help every child colour the world by facilitating easy and streamlined access to quality guidance and education by providing them with a platform that helps them unveil their potential and introduce them to phenomenal and unforeseen opportunities.</p>
            </div>
            <div className="col-md-3  p-0">
          <img src={boy} className="w-md-100 boy " />
            </div>
        </div>
            
        </>
    );
};

export default AboutUs;