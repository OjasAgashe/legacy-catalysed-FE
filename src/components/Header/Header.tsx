import React, { FC, useState } from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import { useHistory } from 'react-router';
import NavHome from '../NavHome/NavHome';

const Header :FC= () => {
const history=useHistory()
let token= localStorage.getItem('token')
const[loggedInUser,setLoggedInUser]=useState(true)

    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid ">
  <img src={logo} className="logo"/>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ml-3" id="navbarSupportedContent">
      <ul className="navbar-nav  ml-5 mb-2 mb-lg-0">
        
       
       
       
      </ul>
      <div className="m-auto  d-flex">
      <li className="nav-item  btn-md me-3  btn-warning list-unstyled">
          <a className="nav-link text-dark" aria-current="page" href="#">Organization</a>
        </li>
      <li className="nav-item dropdown  ml-2 btn-md mr-5 btn-primary list-unstyled ">
          <a className="nav-link dropdown-toggle btn btn-primary" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Programs
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item " href="#">Browse by category</a></li>
            <li><a className="dropdown-item" href="#">Browse by organizer </a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            <li><a className="dropdown-item" href="#">All programs</a></li>
          </ul>
        </li>
      </div>
    
      <div className="d-flex ">
      <li className="nav-item dropdown list-unstyled  me-2 ">
          <a className="nav-link dropdown-toggle btn btn-primary" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Register
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-center" href="/organizer">Organizer</a></li>
            <li><a className="dropdown-item text-center" href="/mentor">Mentor </a></li>
           
            <li><a className="dropdown-item text-center" href="/student">Student</a></li>
          </ul>
        </li>
        {
          token  ?
          <button className="btn btn-outline-danger me-2" onClick={()=>{localStorage.clear();setLoggedInUser(!loggedInUser)}}  type="submit">Log Out</button>
           :
          //  <button className="btn btn-outline-success me-2" onClick={()=>{history.push('/login')}} type="submit">Login</button>
   ''
        }
        {
          loggedInUser?
          ''

          :
          <button className="btn btn-outline-success me-2" onClick={()=>{history.push('/login')}} type="submit">Login</button>
        }
        
      </div>
    </div>
  </div>
</nav>
   <NavHome/>    
   </>
    );
};

export default Header;