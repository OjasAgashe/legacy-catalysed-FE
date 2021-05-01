import React, { createContext, useState ,FC} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OrganizationRegistration from './components/OrganizationRegistration/OrganizationRegistration';
import OrganizationDetail from './components/OrganizationDetail/OrganizationDetail';
import StudentRegistration from './components/StudentRegistration/StudentRegistration';
import MentorRegistration from './components/MentorRegistration/MentorRegistration';
import NotFound from './components/NotFound/NotFound';

import HomepageContainer from './components/HomePageContainer/HomepageContainer';
import CreateProgram from './components/CreateProgram/CreateProgram';
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import ProgramDetail from './components/ProgramDetail/ProgramDetail';
import { Flip, ToastContainer } from 'react-toastify';
import EditProgram from './components/EditProgram/EditProgram';
export const UserContext=createContext<any>(null||Boolean||String) 
const  App:FC=()=> {
const[id,setId]=useState()
const[givenDate,setGivenDate]=useState()
 
  return (
    <div className="App">
      
<UserContext.Provider value={{id,setId,givenDate,setGivenDate}}>
      <Router>
        <Switch>
        <Route exact path="/organizer">
          <OrganizationRegistration/>
        </Route>
        <Route exact path="/organizationDetail">
         <OrganizationDetail/>
        </Route>
        <Route exact path="/student">
         <StudentRegistration/>
        </Route>
        <Route path="/editProgram/:userId">
         <EditProgram/>
        </Route>
        <Route exact path="/mentor">
         <MentorRegistration/>
        </Route>
        <Route exact path="/welcome">
          <Welcome/>
        </Route>
        <Route exact path="/homePage">
          <HomepageContainer/>
        </Route>
        <Route exact path="/programDetail">
          <ProgramDetail/>
        </Route>
        <Route exact path="/createProgram">
          <CreateProgram  />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/">
      <CreateProgram/>
        </Route>
        <Route exact path="*">
       <NotFound/>
        </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
