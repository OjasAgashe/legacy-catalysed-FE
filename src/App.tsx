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
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home">
          <OrganizationRegistration/>
        </Route>
        <Route exact path="/">
       <OrganizationRegistration/>
        </Route>
      </Router>
  
    </div>
  );
}

export default App;
