import React, { useState } from 'react';
import { useHistory } from 'react-router';

const MentorRegistration = () => {
    const history=useHistory()
    const [mentorRegistrationInfo,setMentorRegistrationInfo]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

const [errorsMentorRegistration,setErrorsMentorRegistration]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
})

const validateMentorRegistration=(mentorRegistrationInfo:any)=>{

        if(mentorRegistrationInfo.firstName.trim()){
            errorsMentorRegistration.firstName=""
          }
    
        if(!mentorRegistrationInfo.firstName.trim()){
          errorsMentorRegistration.firstName=""
        }
       else if (!/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(mentorRegistrationInfo.firstName.trim())) {
              errorsMentorRegistration.firstName = 'Enter a valid name'
        }

        
        if(mentorRegistrationInfo.lastName.trim()){
            errorsMentorRegistration.lastName=""
          }
    
        if(!mentorRegistrationInfo.lastName.trim()){
          errorsMentorRegistration.lastName=""
        }
      else if (!/^[a-zA-Z]+$/.test(mentorRegistrationInfo.lastName.trim())) {
        errorsMentorRegistration.lastName = 'Enter a valid name'
      }

      if (mentorRegistrationInfo.email) {
        errorsMentorRegistration.email = ''
      } 
      if (!mentorRegistrationInfo.email) {
        errorsMentorRegistration.email = ''
      } 
      else if (!/\S+@\S+\.\S+/.test(mentorRegistrationInfo.email)) {
        errorsMentorRegistration.email = 'Enter valid email address'
      }

      if(mentorRegistrationInfo.password){
          errorsMentorRegistration.password=""
      }if(!mentorRegistrationInfo.password){
        errorsMentorRegistration.password=""
    }else if(mentorRegistrationInfo.password.length<8){
       errorsMentorRegistration.password="Password needs to be 8 characters or more"
      }

     if(mentorRegistrationInfo.confirmPassword){
          errorsMentorRegistration.confirmPassword=""
      } if(!mentorRegistrationInfo.confirmPassword){
          errorsMentorRegistration.confirmPassword=""
      }else if(mentorRegistrationInfo.confirmPassword && mentorRegistrationInfo.password.length==0){
        errorsMentorRegistration.confirmPassword="First  fill up the password field"
    }else if(mentorRegistrationInfo.confirmPassword !==mentorRegistrationInfo.password){
          errorsMentorRegistration.confirmPassword="Password did not match...Check again"
      }

      console.log(errorsMentorRegistration);
      
     
      
}


const  handleMentorRegistrationChange =(e:any) =>{
    const{name,value}=e.target
    setMentorRegistrationInfo({
...mentorRegistrationInfo,
[name]:value
    } )
 
  
   
    console.log(mentorRegistrationInfo)
} 
const handleMentorRegistrationCapture=(e:any) =>{
    const{name,value}=e.target
    setMentorRegistrationInfo({
...mentorRegistrationInfo,
[name]:value
    } )
 
validateMentorRegistration(mentorRegistrationInfo)
   
    console.log(mentorRegistrationInfo)
} 

const handleMentorRegistrationSubmit=(e:any)=>{
    if(errorsMentorRegistration.firstName.length!==0 ||
        errorsMentorRegistration.lastName.length!==0  ||
        errorsMentorRegistration.email.length!==0||
        errorsMentorRegistration.password.length!==0||
        errorsMentorRegistration.confirmPassword.length!==0      
      ){
      alert("Fill up all the fields carefully first....")
    }else{
      alert("You have been registered successfully....")
    
    }
    e.preventDefault()
}

    return (
        <>
              <div  className="d-flex justify-content-center organization-registration-mother-container " >
            <div className="organization-registration-container container-fluid  my-auto bg-white">
            <h1>Create an account</h1> 
            <form className=" container  mt-4"onSubmit={handleMentorRegistrationSubmit} >
            <span className="d-flex ">
                <span>
                <input type="text" name="firstName" className="form-control organization-registration-form-control form-control-sm first-name overflow-hidden "  
            value={mentorRegistrationInfo.firstName} 
        onChange={handleMentorRegistrationChange}
         onBlur={handleMentorRegistrationCapture } 
         placeholder="First Name" required/>
            {
                 errorsMentorRegistration.firstName &&<span className="text-danger">{errorsMentorRegistration.firstName}</span>
             } 
                </span>
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<br/>
            <span>
            <input type="text"
             className="form-control organization-registration-form-control form-control-sm last-name overflow-hidden" placeholder="Last Name"
            name="lastName"
             onChange={handleMentorRegistrationChange}
             onBlur={handleMentorRegistrationCapture }
                 value={mentorRegistrationInfo.lastName} 
              required/>
                {
                 errorsMentorRegistration.lastName &&<span className="text-danger ">{errorsMentorRegistration.lastName}</span>
             }
            </span>
            </span>
            <input type="email" className={`form-control organization-registration-form-control form-control-sm  ${errorsMentorRegistration.lastName||errorsMentorRegistration.firstName ? 'mt-2':'mt-3'}`}  placeholder="Your Email Id"
             name="email" 
             onChange={handleMentorRegistrationChange}
        onBlur= {handleMentorRegistrationCapture }
             value={mentorRegistrationInfo.email}  
            required/>
              {
                 errorsMentorRegistration.email &&<span className="text-danger">{errorsMentorRegistration.email}</span>
            }
            <br/>

            <input type="password" className="form-control organization-registration-form-control form-control-sm " placeholder="Password"
              value={mentorRegistrationInfo.password} 
              onChange={handleMentorRegistrationChange}
              onBlur={handleMentorRegistrationCapture }
             name="password" required/>
               {
                 errorsMentorRegistration.password &&<span className="text-danger">{errorsMentorRegistration.password}</span>
            }
             <br/>

            <input type="password"className="form-control organization-registration-form-control form-control-sm " placeholder="Confirm Password"
            name="confirmPassword"
              value={mentorRegistrationInfo.confirmPassword} 
              onChange={handleMentorRegistrationChange}
              onBlur={handleMentorRegistrationCapture }
            required />
                {
                errorsMentorRegistration.confirmPassword && <span className="text-danger">{errorsMentorRegistration.confirmPassword}</span>
              }

            <input type="submit" className="btn btn-sm btn-success text-white  mt-4 w-100" value="Sign Up"/>
  
        </form>
        <p className="mt-3">Do you have an account?  <span  className="text-primary login-click" onClick={()=>{history.push('/login')}} ><u>Click here to login</u></span> </p>
     
        </div>  
        </div>   
        </>
    );
};

export default MentorRegistration;