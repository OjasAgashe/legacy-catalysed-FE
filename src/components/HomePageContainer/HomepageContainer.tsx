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
             <p className="about-us-description text-secondary text-justify mt-5 m-auto w-50">We aim to help every child colour the world by facilitating easy and streamlined access to quality guidance and education by providing them with a platform that helps them unveil their potential and introduce them to phenomenal and unforeseen opportunities.</p>
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
                 <p className="mission-description w-75 m-auto mb-5 "><span className="mission-description-quote" >"</span>Equip children in search of guidance and mentoring with new routes to attain them by providing them with a platform to collaborate and connect with mentors and interest groups.<span className="mission-description-quote " >"</span></p>
                 </div>
                </div>
                <div className="col-md-6    bg-white text-dark">
                    <div>
                <h2 className="vision-title mt-5">Vision</h2>
                <p className="vision-description w-75 m-auto mt-4 mb-5 "><span className="vision-description-quote">"</span>We seek to unlock the potential of the students by connecting them with the right  opportunities and the right people.<span className="vision-description-quote">"</span></p>
                </div>
                </div>
               </div>
                {/* <MissionVision/> */}
          {/* <PersonalizedProfile/> */}
          <div className="row w-auto personalized-profile ">
            <div className="col-md-4  p-0">
                <img src={rabbit} className="w-100 h-100"/>
            </div>
            <div className="col-md-8 align-items-center d-flex personalized-profile-background   justify-content-center ">
            <div className="">
                <h2 className=" personalized-profile-title  text-center">Personalized Profile <br/> Builder</h2>
          
                <p className="personalized-profile-description text-justify fw-normal mt-5  w-50 m-auto ">
                Our personalized profile builder is filled with amusing questions and queries to gauge your interests and  hobbies. Helping us in this is our fine-tuned NLP engine to identify and decode features that don't meet the eye. Privacy of data is one of our main concerns and we tackle that through homomorphic encryption, eliminating the scenario of unsecured data.
            
                </p>
                </div>
            </div>
        </div>
        {/* <PersonalizedProfile/> */}
          {/* <SearchRecommendation/> */}
          <div className=" row w-auto ">
                <div className="col-md-8 d-flex justify-content-center align-items-center search-recommendation-background">
                    <div className="">
                    <h2 className="search-recommendation-title d-flex justify-content-center container text-justify">Search and<br/> Recommendation</h2>
                   <p className="search-recommendation-description  w-50 m-auto mt-5">
                       The student can search for mentors and show intent to connect.The search is made seamless assisted by Elasticsearch. The recommendation system powered by a hybrid of collaborative and content based filtering uses the profile questions to match similar students and mentors.
                   </p>
                    </div>
                  
                </div>
               <div className="col-md-4 p-0">
                    <img src={tv} className="w-100 h-100 "/>
                </div>
            </div>
             {/* <SearchRecommendation/> */}
          {/* <ProgramsInterest/> */}
          <div className="row w-auto">
                <div className="col-md-4 p-0">
                    <img src={building} className="w-100 h-100 "/>
                </div>
                <div className="col-md-8 d-flex justify-content-center align-items-center programs-interest-background">
                    <div className="" style={{}}>
                    <h2 className="programs-interest-title">Programs and <br/>Interest Groups</h2>
                    <p className="  programs-interest-description m-auto mt-5 w-50 ">The platform quickly learns your interests and preference and introduces to you to programs and interest groups best for you. Our collaboration with multiple not-for-profit organizations and accomplished mentors enable us to pioneer fellowships that provide students with leadership development, cross-cultural experience and the opportunity to make a progressive social impact not only on themselves but the world at large.</p>
                    </div>
                   
                </div>
            </div>
             {/* <ProgramsInterest/> */}
          {/* <PlanSchedule/> */}
          <div className="row w-auto">
                <div className="col-md-8 plan-schedule-background d-flex justify-content-center align-items-center ">
                    <div className="">
                   <h1 className="plan-schedule-title mt-3">Plan, Schedule and<br/> Document</h1>
                   <p  className="mt-5 plan-schedule-description m-auto w-50 text-justify ps-2 mb-5">Our stack behind the platform makes it effortless for all users involved to carry on with their communication without worrying about the nitty-gritty of it. We offer a range of built in tools to plan and keep track of the valued interactions taking place on the platform, as well as the option to continue them on third-party services outside the platform. Special nudges designed using behavioural architecture principles are blended into the interface assisting every student at each step to achieve his/her goals.</p>
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