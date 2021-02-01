import React from 'react';
import './OrganizationRegistration.css'

const OrganizationRegistration = () => {
    return (
        <>
         <div  className="d-flex justify-content-center registration-mother-container " >
            <div className="registration-container container my-auto bg-white">
            <h1>Create an account</h1> 
        <form className=" container  mt-4" >
            <div className="d-flex ">
            <input type="text" className="form-control form-control-sm first-name " placeholder="First Name" required/> &nbsp;<br/>
            <input type="text" className="form-control form-control-sm last-name" placeholder="Last Name" required/>
            </div><br/>
            <input type="email" className="form-control form-control-sm " placeholder="Your Official Email Id" required/><br/>
            <input type="password" className="form-control form-control-sm " placeholder="Password" required/><br/>
            <input type="password"className="form-control form-control-sm " placeholder="Confirm Password" required />
            <input type="submit" className="btn btn-danger mt-4 w-100" value="Register now"/>
  
        </form>
        <p className="mt-3">Do you have an account?  <span  className="text-primary login-click"><u>Click here to login</u></span> </p>
     
        </div>  
        </div>   
        </>
    );
};

export default OrganizationRegistration;