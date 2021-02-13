import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import CatalysedTitle from '../CatalysedTitle/CatalysedTitle';
import Footer from '../Footer/Footer';
import MissionVision from '../MissionVision/MissionVision';
import NavHeader from '../NavHeader/NavHeader';
import PersonalizedProfile from '../PersonalizedProfile/PersonalizedProfile';
import PlanSchedule from '../PlanSchedule/PlanSchedule';
import ProgramsInterest from '../ProgramsInterest/ProgramsInterest';
import SearchRecommendation from '../SearchRecommendation/SearchRecommendation';
import './HomePage.css'
const Homepage = () => {
    return (
        <div className="home-page-container ">
          <NavHeader/>
          <CatalysedTitle/>
          <AboutUs/>
          <MissionVision/>
          <PersonalizedProfile/>
          <SearchRecommendation/>
          <ProgramsInterest/>
          <PlanSchedule/>
          <Footer/>
        </div>
    );
};

export default Homepage;