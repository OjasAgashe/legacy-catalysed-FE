
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './OrganizationRegistration.css'

const OrganizationRegistration = () => {

const history= useHistory()
const [values,setValues]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
const [isSubmitting,setIsSubmitting]=useState(false)
const [errors,setErrors]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
})

const validateInfo=(values:any)=>{

        if(values.firstName.trim()){
            errors.firstName=""
          }
    
        if(!values.firstName.trim()){
          errors.firstName=""
        }
        else if (!/^[a-z ,.'-]+$/i.test(values.firstName.trim())) {
              errors.firstName = 'Enter a valid name'
        }

        
        if(values.lastName.trim()){
            errors.lastName=""
          }
    
        if(!values.lastName.trim()){
          errors.lastName=""
        }
      else if (!/^[a-zA-Z]+$/.test(values.lastName.trim())) {
        errors.lastName = 'Enter a valid name'
      }

      if (values.email) {
        errors.email = ''
      } 
      if (!values.email) {
        errors.email = ''
      } 
      else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Enter valid email address'
      }

      if(values.password){
          errors.password=""
      }if(!values.password){
        errors.password=""
    }else if(values.password.length<6){
       errors.password="Password needs to be 6 characters or more"
      }

     if(values.confirmPassword){
          errors.confirmPassword=""
      } if(!values.confirmPassword){
          errors.confirmPassword=""
      }else if(values.confirmPassword !==values.password){
          errors.confirmPassword="Passwords did not match...Check again"
      }

      console.log(errors);
      
}


const  handleChange =(e:any) =>{
    const{name,value}=e.target
    setValues({
...values,
[name]:value
    } )
 
  
   
    console.log(values)
} 
const handleCapture =(e:any) =>{
    const{name,value}=e.target
    setValues({
...values,
[name]:value
    } )
 
validateInfo(values)
   
    console.log(values)
} 

const handleSubmit=(e:any)=>{
     e.preventDefault()
}
    
    return (
        <>
         <div  className="d-flex justify-content-center organization-registration-mother-container " >
            <div className="organization-registration-container container-fluid  my-auto bg-white">
            <h1>Create an account</h1> 
        <form className=" container mt-4" onSubmit={handleSubmit} >
            <div className="d-flex   ">
            <input type="text" className="form-control organization-registration-form-control form-control-sm first-name overflow-hidden" name="firstName"
             value={values.firstName} 
            onChange={handleChange}
         onSelectCapture={handleCapture}
             placeholder="First Name"
             required/>
             {
                 errors.firstName &&<p className="text-danger">{errors.firstName}</p>
             } 
             &nbsp;<br/>
            <input type="text" className="form-control organization-registration-form-control form-control-sm last-name  overflow-hidden "
             name="lastName" 
             placeholder="Last Name"
             onChange={handleChange}
         onSelectCapture={handleCapture}
             value={values.lastName} 
            required/>
             {
                 errors.lastName &&<p>{errors.lastName}</p>
             } 
            </div><br/>
            <input type="text" className="form-control organization-registration-form-control form-control-sm " placeholder="Your Official Email Id"
             name="email" 
             onChange={handleChange}
            onSelectCapture={handleCapture}
             value={values.email} 
             required/>
            <br/>
            {
                 errors.email &&<p>{errors.email}</p>
            }
            <input type="password" className="form-control organization-registration-form-control form-control-sm " placeholder="Password" 
             value={values.password} 
             onChange={handleChange}
             onBlur={handleCapture}
            name="password" required/>
            {
                 errors.password &&<p>{errors.password}</p>
            }
            <br/>
            <input type="password"
             name="confirmPassword" 
             className="form-control organization-registration-form-control form-control-sm "
              placeholder="Confirm Password"
            value={values.confirmPassword} 
              onChange={handleChange}
              onBlur={handleCapture}
              required />
              {
                errors.confirmPassword && <p>{errors.confirmPassword}</p>
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