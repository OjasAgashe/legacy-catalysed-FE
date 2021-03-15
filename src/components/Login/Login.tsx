import React, { useState } from 'react';
import axios from 'axios';

declare module 'axios'{
    export interface AxiosRequestConfig{
        email:string;
        password:string;
    }
}

const Login = () => {



const click=()=>{
    axios.post<any>('https://catalysed-iteration1.el.r.appspot.com/authenticate',{
       
        headers: {'Content-Type': 'application/json'}
      
      
           
    },{
       email:'bira@gmail.com',
        password:'pass'
    }
    )
    .then((res)=>{
        
        console.log(res)}
    ).catch(err=>console.log(err) )
        
   
    
    
       

 
        
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