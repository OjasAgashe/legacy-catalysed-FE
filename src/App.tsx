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
 
  return (
    <div className="App">
      
<UserContext.Provider value={{id,setId}}>
      <Router>
        <Switch>
        <Route path="/organizer">
          <OrganizationRegistration/>
        </Route>
        <Route exact path="/organizationDetail">
         <OrganizationDetail/>
        </Route>
        <Route path="/student">
         <StudentRegistration/>
        </Route>
        <Route path="/editProgram/:userId">
         <EditProgram/>
        </Route>
        <Route path="/mentor">
         <MentorRegistration/>
        </Route>
        <Route path="/welcome">
          <Welcome/>
        </Route>
        <Route path="/homePage">
          <HomepageContainer/>
        </Route>
        <Route path="/programDetail">
          <ProgramDetail/>
        </Route>
        <Route path="/createProgram">
          <CreateProgram  />
        </Route>
        <Route path="/login">
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
