import React, { FC, useContext, useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
interface AxiosRequestConfig {
    email:any;
    password:any;
    headers:any;
    jwt:any;
    setItem:any;  
  }

const Login :FC= () => {

    
   const history=useHistory()
  const[userInfo,setUserInfo]=useState(
    {
        email:'',
         password:''
     }
  )


  
    const handleBlur=(e:any)=>{
        if(e.target.name==='email'){
        const newUserInfo={...userInfo}
        newUserInfo.email=e.target.value
        setUserInfo(newUserInfo)
        }
        if(e.target.name==='password'){
            const newUserInfo={...userInfo}
            newUserInfo.password=e.target.value
            setUserInfo(newUserInfo)
        
        }
    }
  
const click=(r:any)=>{
    axios.post<AxiosRequestConfig>('https://catalysed-iteration1.el.r.appspot.com/authenticate',
  
  userInfo,
          {
              headers:{'Content-Type': 'application/json'}
          }
    
    
           
    
    )
    .then((res)=>{
        
        console.log(res)
        if(res.status=== 200){
            localStorage.setItem('token',`${res.data.jwt}`)
            history.push('/welcome')
        
           
        }
    
       


        }   
    )
    
    .catch(err=>{
        alert('Check your Email and Password again....')
        localStorage.clear()
    }
       
       
         
         )
        
   r.preventDefault()
}
    
    return (
        <>
        <div className="d-flex login-mother-container">
           <div className="login-form-container my-auto  container-fluid bg-white">
               <h2 className="text-center">Login to your account</h2>
             <form onSubmit={click}>
                   <div className="w-100">
                   <label className="d-flex justify-content-start">
                    Email
                 </label>
          <input type="email" name="email" className="form-control form-control-sm "
            placeholder="Type your email"  onBlur={handleBlur} required/> 
                   </div>
      <br/> 
      <div>
     <label className="d-flex justify-content-start">
     Password
     </label>
    <input type="password" name="password" onBlur={handleBlur} className="form-control form-control-sm" placeholder="Type your password" required/>
    </div>
    <input type="submit"  className="btn btn-success btn-sm mt-5 w-100" value="Login"/>
  </form>
           </div>
        </div>
{/*        
        <input type="button" value="Submit" onClick={()=>click()}/> */}
        </>
    );
};

export default Login;