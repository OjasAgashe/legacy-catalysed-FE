import React from 'react';
import './MissionVision.css'
const MissionVision = () => {
    return (
        <>
            <div className="row mission-vision ">
                
             <div className="col-md-6  d-flex justify-content-center align-items-center  bg-dark  text-white">
                 <div>
              <h2 className="mission-title mt-2">Mission</h2>
              <p className="mission-description mb-5 "><span className="mission-description-quote" >"</span>&nbsp;Equip children in search of guidance and<br/> mentoring with new routes to attain them by<br/> providing them with a platform to collaborate and <br/>connect with mentors and interest groups. <span className="mission-description-quote" >"</span></p>
              </div>
             </div>
             <div className="col-md-6  mt-5  bg-white text-dark">
                 <div>
             <h2 className="vision-title mt-3">Vision</h2>
             <p className="vision-description "><span className="vision-description-quote">"</span>&nbsp;We seek to unlock the potential of the students <br/> by connecting them with the right  opportunities <br/> and the right people.<span className="vision-description-quote">"</span></p>
             </div>
             </div>
            </div>
        </>
    );
};

export default MissionVision;