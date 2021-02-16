import React from 'react';
import './AboutUs.css';
import girl from '../../../images/girl.png';
import boy from'../../../images/boy.png'
const AboutUs = () => {
    return (
        <>
        <div className="row w-auto mw-auto p-0">
            <div className="col-md-3 p-0">
            <img src={girl} className=" w-100 h-100 girl" />
            </div>
            <div className="col-md-6 mw-auto d-flex justify-content-center align-items-center about-us-background">
               <div className="">
             <h1 className="about-us-title "> <span className="about-us ">About Us</span> </h1>
             <h4 className="about-us-title-second text-secondary  mt-4">Give every child's dream a better chance</h4>
             <p className="about-us-description text-secondary text-justify mt-5">We aim to help every child colour the world by <br/>facilitating easy and streamlined access to quality guidance<br/> and education by providing them with a platform that helps<br/> them unveil their potential and introduce them to phenomenal<br/> and unforeseen opportunities.</p>
             </div>
            </div>
            <div className="col-md-3 p-0">
          <img src={boy} className="w-100 h-100 boy " />
            </div>
        </div>
            
        </>
    );
};

export default AboutUs;