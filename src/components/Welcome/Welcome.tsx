import axios from 'axios';
import React, { useState } from 'react';
interface AxiosRequestConfig2{
    headers:any;
  innerHTML:any;
    setWelcome:any;
  
    
}
const Welcome = () => {

    const[welcome,setWelcome]=useState<any>(null)
  
    axios.get<AxiosRequestConfig2>('https://catalysed-iteration1.el.r.appspot.com/user',{
      
        headers:
        {
        'Content-Type':'application/json',
        Authorization: `Bearer ${localStorage.getItem(`token`)}`
              }
        }
    )
    .then((res)=>{
      
    console.log(res.data);
  
    setWelcome(res.data);
        
    })
    .catch(err=>{
        
    })


    return (
        <>
        <div dangerouslySetInnerHTML={{__html:welcome}}/>
           
        </>
    );
};

export default Welcome;