import React from 'react';
import { useHistory } from 'react-router-dom';
import './OrganizationRegistration.css'

const OrganizationRegistration = () => {

    const history= useHistory<any>()

    const onGoingNext=()=>{
        history.push('/organizationDetail')
    }
    return (
        <>
         <div  className="d-flex justify-content-center organization-registration-mother-container " >
            <div className="organization-registration-container container-fluid  my-auto bg-white">
            <h1>Create an account</h1> 
        <form className=" container  mt-4" >
            <div className="d-flex   ">
            <input type="text" className="form-control form-control-sm first-name overflow-hidden " placeholder="First Name"required/> &nbsp;<br/>
            <input type="text" className="form-control form-control-sm last-name  overflow-hidden " placeholder="Last Name"required/>
            </div><br/>
            <input type="email" className="form-control form-control-sm " placeholder="Your Official Email Id"required/><br/>
            <input type="password" className="form-control form-control-sm " placeholder="Password"required/><br/>
            <input type="password"className="form-control form-control-sm " placeholder="Confirm Password"required />
            <input type="submit" onClick={onGoingNext} className="btn btn-success mt-4 w-100" value="Register now"/>
  
        </form>
        <p className="mt-3">Do you have an account?  <span  className="text-primary login-click"><u>Click here to login</u></span> </p>
     
        </div>  
        </div>   
        </>
    );
};

export default OrganizationRegistration;