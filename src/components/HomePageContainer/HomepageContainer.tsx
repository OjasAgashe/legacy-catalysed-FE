import React from 'react';
import Header from "./Header/Header"
import './HomePageContainer.css'
import Footer from './Footer/Footer';
import PlanSchedule from './PlanSchedule/PlanSchedule';
import ProgramsInterest from './ProgramsInterest/ProgramsInterest';
import SearchRecommendation from './SearchRecommendation/SearchRecommendation';
import PersonalizedProfile from './PersonalizedProfile/PersonalizedProfile';
import MissionVision from './MissionVision/MissionVision';
import AboutUs from './AboutUs/AboutUs';
import CatalysedTitle from './CatalysedTitle/CatalysedTitle';
import NavHome from'../NavHome/NavHome';
const HomepageContainer = () => {
    return (
        <div className="home-page-container d-block ">
          <Header/>
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

export default HomepageContainer;