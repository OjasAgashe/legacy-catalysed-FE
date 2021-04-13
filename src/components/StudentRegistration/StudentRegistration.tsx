import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './StudentRegistration.css'

const StudentRegistration = () => {

    const history=useHistory()
    const [studentRegistrationInfo,setStudentRegistrationInfo]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

const [errorsStudentRegistration,setErrorsStudentRegistration]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
})

const validateStudentRegistration=(studentRegistrationInfo:any)=>{

        if(studentRegistrationInfo.firstName.trim()){
            errorsStudentRegistration.firstName=""
          }
    
        if(!studentRegistrationInfo.firstName.trim()){
          errorsStudentRegistration.firstName=""
        }
       else if (!/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(studentRegistrationInfo.firstName.trim())) {
              errorsStudentRegistration.firstName = 'Enter a valid name'
        }

        
        if(studentRegistrationInfo.lastName.trim()){
            errorsStudentRegistration.lastName=""
          }
    
        if(!studentRegistrationInfo.lastName.trim()){
          errorsStudentRegistration.lastName=""
        }
      else if (!/^[a-zA-Z]+$/.test(studentRegistrationInfo.lastName.trim())) {
        errorsStudentRegistration.lastName = 'Enter a valid name'
      }

      if (studentRegistrationInfo.email) {
        errorsStudentRegistration.email = ''
      } 
      if (!studentRegistrationInfo.email) {
        errorsStudentRegistration.email = ''
      } 
      else if (!/\S+@\S+\.\S+/.test(studentRegistrationInfo.email)) {
        errorsStudentRegistration.email = 'Enter valid email address'
      }

      if(studentRegistrationInfo.password){
          errorsStudentRegistration.password=""
      }if(!studentRegistrationInfo.password){
        errorsStudentRegistration.password=""
    }else if(studentRegistrationInfo.password.length<8){
       errorsStudentRegistration.password="Password needs to be 8 characters or more"
      }

     if(studentRegistrationInfo.confirmPassword){
          errorsStudentRegistration.confirmPassword=""
      } if(!studentRegistrationInfo.confirmPassword){
          errorsStudentRegistration.confirmPassword=""
      }else if(studentRegistrationInfo.confirmPassword && studentRegistrationInfo.password.length==0){
        errorsStudentRegistration.confirmPassword="First  fill up the password field"
    }else if(studentRegistrationInfo.confirmPassword !==studentRegistrationInfo.password){
          errorsStudentRegistration.confirmPassword="Password did not match...Check again"
      }

      console.log(errorsStudentRegistration);
      
     
      
}


const  handleStudentRegistrationChange =(e:any) =>{
    const{name,value}=e.target
    setStudentRegistrationInfo({
...studentRegistrationInfo,
[name]:value
    } )
 
  
   
    console.log(studentRegistrationInfo)
} 
const handleStudentRegistrationCapture =(e:any) =>{
    const{name,value}=e.target
    setStudentRegistrationInfo({
...studentRegistrationInfo,
[name]:value
    } )
 
validateStudentRegistration(studentRegistrationInfo)
   
    console.log(studentRegistrationInfo)
} 

const handleStudentRegistrationSubmit=(e:any)=>{
    if(errorsStudentRegistration.firstName.length!==0 ||
        errorsStudentRegistration.lastName.length!==0  ||
        errorsStudentRegistration.email.length!==0||
        errorsStudentRegistration.password.length!==0||
        errorsStudentRegistration.confirmPassword.length!==0      
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
        <form className=" container  mt-4"onSubmit={handleStudentRegistrationSubmit} >
            <span className="d-flex ">
                <span>
                <input type="text" name="firstName" className="form-control organization-registration-form-control form-control-sm first-name overflow-hidden "  
            value={studentRegistrationInfo.firstName} 
        onChange={handleStudentRegistrationChange}
         onBlur={handleStudentRegistrationCapture } 
         placeholder="First Name" required/>
            {
                 errorsStudentRegistration.firstName &&<span className="text-danger">{errorsStudentRegistration.firstName}</span>
             } 
                </span>
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<br/>
            <span>
            <input type="text"
             className="form-control organization-registration-form-control form-control-sm last-name overflow-hidden" placeholder="Last Name"
            name="lastName"
             onChange={handleStudentRegistrationChange}
             onBlur={handleStudentRegistrationCapture }
                 value={studentRegistrationInfo.lastName} 
              required/>
                {
                 errorsStudentRegistration.lastName &&<span className="text-danger ">{errorsStudentRegistration.lastName}</span>
             }
            </span>
            </span>
            <input type="email" className={`form-control organization-registration-form-control form-control-sm  ${errorsStudentRegistration.lastName||errorsStudentRegistration.firstName ? 'mt-2':'mt-3'}`}  placeholder="Your Email Id"
             name="email" 
             onChange={handleStudentRegistrationChange}
        onBlur= {handleStudentRegistrationCapture }
             value={studentRegistrationInfo.email}  
            required/>
              {
                 errorsStudentRegistration.email &&<span className="text-danger">{errorsStudentRegistration.email}</span>
            }
            <br/>

            <input type="password" className="form-control organization-registration-form-control form-control-sm " placeholder="Password"
              value={studentRegistrationInfo.password} 
              onChange={handleStudentRegistrationChange}
              onBlur={handleStudentRegistrationCapture }
             name="password" required/>
               {
                 errorsStudentRegistration.password &&<span className="text-danger">{errorsStudentRegistration.password}</span>
            }
             <br/>

            <input type="password"className="form-control organization-registration-form-control form-control-sm " placeholder="Confirm Password"
            name="confirmPassword"
              value={studentRegistrationInfo.confirmPassword} 
              onChange={handleStudentRegistrationChange}
              onBlur={handleStudentRegistrationCapture }
            required />
                {
                errorsStudentRegistration.confirmPassword && <span className="text-danger">{errorsStudentRegistration.confirmPassword}</span>
              }

            <input type="submit" className="btn btn-sm btn-student text-white  mt-4 w-100" value="Sign Up"/>
  
        </form>
        <p className="mt-3">Do you have an account?  <span  className="text-primary login-click" onClick={()=>{history.push('/login')}} ><u>Click here to login</u></span> </p>
     
        </div>  
        </div>   
        </>
    );
};

export default StudentRegistration;