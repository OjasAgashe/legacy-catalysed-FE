import React from 'react';
import './PersonalizedProfile.css';
import rabbit from '../../../images/rabbit.png'
const PersonalizedProfile = () => {
    return (
        <>
        <div className="row personalized-profile w-100 ">
            <div className="col-md-4  p-0">
                <img src={rabbit} className="w-100 h-100 p-0"/>
            </div>
            <div className="col-md-8   personalized-profile-background   justify-content-center ">
            <div className="mt-5">
                <h2 className=" personalized-profile-title mt-2 text-center">Personalized Profile <br/> Builder</h2>
          
                <p className="personalized-profile-description text-center mb-5 fw-normal mt-5">
                Our personalized profile builder is filled with amusing<br/> questions and queries to gauge your interests and <br/> hobbies. Helping us in this is our fine-tuned NLP<br/> engine to identify and decode features that don't meet<br/> the eye. Privacy of data is one of our main concerns <br/>and we tackle that through homomorphic encryption, <br/>eliminating the scenario of unsecured data.
            
                </p>
                </div>
            </div>
        </div>
    </>
    );
};

export default PersonalizedProfile;