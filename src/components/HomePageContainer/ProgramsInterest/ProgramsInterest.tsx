import React from 'react';
import './ProgramsInterest.css'
import building from '../../../images/building.png'
const ProgramsInterest = () => {
    return (
        <>
           <div className="row w-100">
                <div className="col-md-4 p-0">
                    <img src={building} className="w-100 h-100 "/>
                </div>
                <div className="col-md-8 programs-interest-background">
                    <div className="mt-5">
                    <h2 className="programs-interest-title">Programs and <br/>Interest Groups</h2>
                    <p className=" mt-5 mb-2 programs-interest-description my-auto mb-5">The platform quickly learns your interests and<br/> preference and introduces to you to programs and <br/>interest groups best for you. Our collaboration with<br/> multiple not-for-profit organizations and accomplished <br/>mentors enable us to pioneer fellowships that provide <br/>students with leadership development, cross-cultural<br/> experience and the opportunity to make a progressive<br/> social impact not only on themselves but the world at<br/> large.</p>
                    </div>
                   
                </div>
            </div>  
        </>
    );
};

export default ProgramsInterest;