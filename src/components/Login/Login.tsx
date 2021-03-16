import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
interface AxiosRequestConfig {
    email:any;
    password:any;
    headers:any;
    jwt:any;
    setItem:any;
    
  
   
  
}


const Login = () => {
   const history=useHistory()
  const[state,setState]=useState(
    {
        email:'bira@gmail.com',
         password:'pass'
     }
  )
const click=()=>{
    axios.post<AxiosRequestConfig>('https://catalysed-iteration1.el.r.appspot.com/authenticate',
  
  state,
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
        
   
}
    
    return (
        <>
        <form>
          <input type="email" placeholder="Type your email"/> 
          <input type="password" placeholder="Type your password"/>
          
        </form>
        <input type="button" value="Submit" onClick={()=>click()}/>
        </>
    );
};

export default Login;