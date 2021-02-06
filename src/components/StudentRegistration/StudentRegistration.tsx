import React from 'react';
import './StudentRegistration.css'

const StudentRegistration = () => {
    return (
        <>
              <div  className="d-flex justify-content-center organization-registration-mother-container " >
            <div className="organization-registration-container container-fluid  my-auto bg-white">
            <h1>Create an account</h1> 
        <form className=" container  mt-4" >
            <div className="d-flex ">
            <input type="text" className="form-control form-control-sm first-name " placeholder="First Name"/> &nbsp;<br/>
            <input type="text" className="form-control form-control-sm last-name" placeholder="Last Name"/>
            </div><br/>
            <input type="email" className="form-control form-control-sm " placeholder="Your  Email Id"/><br/>
            <input type="password" className="form-control form-control-sm " placeholder="Password"/><br/>
            <input type="password"className="form-control form-control-sm " placeholder="Confirm Password" />
            <input type="button" className="btn btn-sm btn-student text-white  mt-4 w-100" value="Sign Up"/>
  
        </form>
        <p className="mt-3">Do you have an account?  <span  className="text-primary login-click"><u>Click here to login</u></span> </p>
     
        </div>  
        </div>   
        </>
    );
};

export default StudentRegistration;