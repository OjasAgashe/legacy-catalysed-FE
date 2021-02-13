import React from 'react';
import './PlanSchedule.css';
import  calendar from '../../images/calendar.png'
const PlanSchedule = () => {
    return (
        <>
            <div className="row w-100">
                <div className="col-md-8 plan-schedule-background">
                    <div className="mt-5">
                   <h1 className="plan-schedule-title">Plan, Schedule and<br/> Document</h1>
                   <p  className="mt-5 plan-schedule-description mb-5">Our stack behind the platform makes it effortless for all<br/> users involved to carry on with their communication without<br/> worrying about the nitty-gritty of it. We offer a range of built<br/> in tools to plan and keep track of the valued interactions <br/>taking place on the platform, as well as the option to <br/>continue them on third-party services outside the platform. <br/>Special nudges designed using behavioural architecture<br/> principles are blended into the interface assisting every <br/>student at each step to achieve his/her goals.</p>
                   </div>
                </div>
                <div className="col-md-4 calendar-image-container p-0 ">
                    <img src={calendar} className="calendar-image w-100 h-100 "/>
                </div>
            </div>
        </>
    );
};

export default PlanSchedule;