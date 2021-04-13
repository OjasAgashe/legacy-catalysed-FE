
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './OrganizationRegistration.css'

const OrganizationRegistration = () => {

const history= useHistory()
const [organizationRegistrationInfo,setOrganizationRegistrationInfo]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

const [errorsOrganizerRegistration,setErrorsOrganizerRegistration]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
})

const validateOrganizationRegistration=(organizationRegistrationInfo:any)=>{

        if(organizationRegistrationInfo.firstName.trim()){
            errorsOrganizerRegistration.firstName=""
          }
    
        if(!organizationRegistrationInfo.firstName.trim()){
          errorsOrganizerRegistration.firstName=""
        }
        else if (!/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(organizationRegistrationInfo.firstName.trim())) {
              errorsOrganizerRegistration.firstName = 'Enter a valid name'
        }

        
        if(organizationRegistrationInfo.lastName.trim()){
            errorsOrganizerRegistration.lastName=""
          }
    
        if(!organizationRegistrationInfo.lastName.trim()){
          errorsOrganizerRegistration.lastName=""
        }
      else if (!/^[a-zA-Z]+$/.test(organizationRegistrationInfo.lastName.trim())) {
        errorsOrganizerRegistration.lastName = 'Enter a valid name'
      }

      if (organizationRegistrationInfo.email) {
        errorsOrganizerRegistration.email = ''
      } 
      if (!organizationRegistrationInfo.email) {
        errorsOrganizerRegistration.email = ''
      } 
      else if (!/\S+@\S+\.\S+/.test(organizationRegistrationInfo.email)) {
        errorsOrganizerRegistration.email = 'Enter valid email address'
      }

      if(organizationRegistrationInfo.password){
          errorsOrganizerRegistration.password=""
      }if(!organizationRegistrationInfo.password){
        errorsOrganizerRegistration.password=""
    }else if(organizationRegistrationInfo.password.length<8){
       errorsOrganizerRegistration.password="Password needs to be 8 characters or more"
      }

     if(organizationRegistrationInfo.confirmPassword){
          errorsOrganizerRegistration.confirmPassword=""
      } if(!organizationRegistrationInfo.confirmPassword){
          errorsOrganizerRegistration.confirmPassword=""
      }else if(organizationRegistrationInfo.confirmPassword && organizationRegistrationInfo.password.length==0){
        errorsOrganizerRegistration.confirmPassword="First  fill up the password field"
    }else if(organizationRegistrationInfo.confirmPassword !==organizationRegistrationInfo.password){
          errorsOrganizerRegistration.confirmPassword="Password did not match...Check again"
      }

      console.log(errorsOrganizerRegistration);
      
     
      
}


const  handleOrganizationRegistrationChange =(e:any) =>{
    const{name,value}=e.target
    setOrganizationRegistrationInfo({
...organizationRegistrationInfo,
[name]:value
    } )
 
  
   
    console.log(organizationRegistrationInfo)
} 
const handleOrganizationRegistrationCapture =(e:any) =>{
    const{name,value}=e.target
    setOrganizationRegistrationInfo({
...organizationRegistrationInfo,
[name]:value
    } )
 
validateOrganizationRegistration(organizationRegistrationInfo)
   
    console.log(organizationRegistrationInfo)
} 

const handleOrganizationRegistrationSubmit=(e:any)=>{
    if(errorsOrganizerRegistration.firstName.length!==0 ||
        errorsOrganizerRegistration.lastName.length!==0  ||
        errorsOrganizerRegistration.email.length!==0||
        errorsOrganizerRegistration.password.length!==0||
        errorsOrganizerRegistration.confirmPassword.length!==0      
      ){
      alert("Fill up all the fields carefully first....")
    }else{
      alert("You have registered successfully....Press OK to go the next page")
      history.push('organizationDetail')
    }
    e.preventDefault()
}
    
    return (
        <>
         <div  className="d-flex justify-content-center organization-registration-mother-container " >
            <div className="organization-registration-container container-fluid  my-auto bg-white">
            <h1>Create an account</h1> 
        <form className=" container mt-4" onSubmit={handleOrganizationRegistrationSubmit} >
            <span className="d-flex   ">
              <span>
            <input type="text" className="form-control organization-registration-form-control form-control-sm first-name overflow-hidden" name="firstName"
             value={organizationRegistrationInfo.firstName} 
            onChange={handleOrganizationRegistrationChange}
         onBlur={handleOrganizationRegistrationCapture }
             placeholder="First Name"
             required/>
              {
                 errorsOrganizerRegistration.firstName &&<span className="text-danger">{errorsOrganizerRegistration.firstName}</span>
             } 
             </span>
            
             &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; <br/>
            
            
             <span >  
            <input type="text" className="form-control organization-registration-form-control form-control-sm last-name  overflow-hidden "
             name="lastName" 
             placeholder="Last Name"
             onChange={handleOrganizationRegistrationChange}
         onBlur={handleOrganizationRegistrationCapture }
             value={organizationRegistrationInfo.lastName} 
            required/>
             {
                 errorsOrganizerRegistration.lastName &&<span className="text-danger ">{errorsOrganizerRegistration.lastName}</span>
             }
             </span>
              
            </span>
            <input type="email" className={`form-control organization-registration-form-control form-control-sm  ${errorsOrganizerRegistration.lastName||errorsOrganizerRegistration.firstName ? 'mt-1':'mt-3'}`} placeholder="Your Official Email Id"
             name="email" 
             onChange={handleOrganizationRegistrationChange}
        onBlur= {handleOrganizationRegistrationCapture }
             value={organizationRegistrationInfo.email} 
             required/>
              {
                 errorsOrganizerRegistration.email &&<span className="text-danger">{errorsOrganizerRegistration.email}</span>
            }
            <br/>
           
            <input type="password" className="form-control organization-registration-form-control form-control-sm " placeholder="Password" 
             value={organizationRegistrationInfo.password} 
             onChange={handleOrganizationRegistrationChange}
             onBlur={handleOrganizationRegistrationCapture }
            name="password" required/>
            {
                 errorsOrganizerRegistration.password &&<span className="text-danger">{errorsOrganizerRegistration.password}</span>
            }
            <br/>
            <input type="password"
             name="confirmPassword" 
             className="form-control organization-registration-form-control form-control-sm "
              placeholder="Confirm Password"
            value={organizationRegistrationInfo.confirmPassword} 
              onChange={handleOrganizationRegistrationChange}
              onBlur={handleOrganizationRegistrationCapture }
              required />
              {
                errorsOrganizerRegistration.confirmPassword && <span className="text-danger">{errorsOrganizerRegistration.confirmPassword}</span>
              }
            <input type="submit" className="btn btn-success mt-4 w-100" value="Register now"/>
  
        </form>
        <p className="mt-3">Do you have an account?  <span  className="text-primary login-click"  onClick={()=>{history.push('/login')}} ><u>Click here to login</u></span> </p>
     
        </div>  
        </div>   
        </>
    );
};

export default OrganizationRegistration;