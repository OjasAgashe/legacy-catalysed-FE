import React from 'react';

import './HomePageContainer.css'
import girl from '../../images/girl.png';
import boy from '../../images/boy.png';
import rabbit from '../../images/rabbit.png';
import tv from '../../images/tv.png';
import building from '../../images/building.png';
import calendar from '../../images/calendar.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const HomepageContainer = () => {
    return (
        <div className="home-page-container d-block ">
          <Header/>
          {/* <CatalysedTitle/> */}
          <div className=" text-center catalysed-background container-fluid w-100  p-0">
                  <span className="catalysed-title text-center container">CATALYSED</span>
                  </div> 
             {/* <CatalysedTitle/> */}
          {/* <AboutUs/> */}
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
        {/* <AboutUs/> */}
          {/* <MissionVision/> */}
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
                {/* <MissionVision/> */}
          {/* <PersonalizedProfile/> */}
          <div className="row personalized-profile w-100 ">
            <div className="col-md-4  p-0">
                <img src={rabbit} className="w-100 h-100 p-0"/>
            </div>
            <div className="col-md-8 align-items-center d-flex personalized-profile-background   justify-content-center ">
            <div className="">
                <h2 className=" personalized-profile-title  text-center">Personalized Profile <br/> Builder</h2>
          
                <p className="personalized-profile-description text-center text-justify fw-normal mt-5">
                Our personalized profile builder is filled with amusing<br/> questions and queries to gauge your interests and <br/> hobbies. Helping us in this is our fine-tuned NLP<br/> engine to identify and decode features that don't meet<br/> the eye. Privacy of data is one of our main concerns <br/>and we tackle that through homomorphic encryption, <br/>eliminating the scenario of unsecured data.
            
                </p>
                </div>
            </div>
        </div>
        {/* <PersonalizedProfile/> */}
          {/* <SearchRecommendation/> */}
          <div className=" row w-100 ">
                <div className="col-md-8 d-flex justify-content-center align-items-center search-recommendation-background">
                    <div className="">
                    <h2 className="search-recommendation-title d-flex justify-content-center container">Search and<br/> Recommendation</h2>
                   <p className="search-recommendation-description text-center text-justify mt-5">The student can search for mentors and show intent to connect.<br/> The search is made seamless assisted by Elasticsearch. The<br/> recommendation system powered by a hybrid of collaborative <br/>and content based filtering uses the profile questions to match<br/> similar students and mentors.
                   </p>
                    </div>
                  
                </div>
                <div className="col-md-4 p-0">
                    <img src={tv} className="w-100 h-100 "/>
                </div>
            </div>
             {/* <SearchRecommendation/> */}
          {/* <ProgramsInterest/> */}
          <div className="row w-100">
                <div className="col-md-4 p-0">
                    <img src={building} className="w-100 h-100 "/>
                </div>
                <div className="col-md-8 d-flex justify-content-center align-items-center programs-interest-background">
                    <div className="">
                    <h2 className="programs-interest-title">Programs and <br/>Interest Groups</h2>
                    <p className="  programs-interest-description my-auto mt-5">The platform quickly learns your interests and<br/> preference and introduces to you to programs and <br/>interest groups best for you. Our collaboration with<br/> multiple not-for-profit organizations and accomplished <br/>mentors enable us to pioneer fellowships that provide <br/>students with leadership development, cross-cultural<br/> experience and the opportunity to make a progressive<br/> social impact not only on themselves but the world at<br/> large.</p>
                    </div>
                   
                </div>
            </div>
             {/* <ProgramsInterest/> */}
          {/* <PlanSchedule/> */}
          <div className="row w-100">
                <div className="col-md-8 plan-schedule-background d-flex justify-content-center align-items-center">
                    <div className="">
                   <h1 className="plan-schedule-title">Plan, Schedule and<br/> Document</h1>
                   <p  className="mt-5 plan-schedule-description mb-5">Our stack behind the platform makes it effortless for all<br/> users involved to carry on with their communication without<br/> worrying about the nitty-gritty of it. We offer a range of built<br/> in tools to plan and keep track of the valued interactions <br/>taking place on the platform, as well as the option to <br/>continue them on third-party services outside the platform. <br/>Special nudges designed using behavioural architecture<br/> principles are blended into the interface assisting every <br/>student at each step to achieve his/her goals.</p>
                   </div>
                </div>
                <div className="col-md-4 calendar-image-container p-0 ">
                    <img src={calendar} className="calendar-image w-100 h-100 "/>
                </div>
            </div>
            {/* <PlanSchedule/> */}
          <Footer/>
        </div>
    );
};

export default HomepageContainer;