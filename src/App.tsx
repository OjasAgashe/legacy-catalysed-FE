import React from 'react';
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

function App() {
  return (
    <div className="App">
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
        <Route path="/mentor">
         <MentorRegistration/>
        </Route>
       
        <Route exact path="/">
      <Login/>
        </Route>
        <Route exact path="*">
       <NotFound/>
        </Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
