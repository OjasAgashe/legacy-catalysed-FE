import axios from 'axios';
import React from 'react';
interface AxiosRequestConfig2{
    headers:any;
    
}
const Welcome = () => {
  
    axios.get<AxiosRequestConfig2>('https://catalysed-iteration1.el.r.appspot.com/user',{
   
        headers:
        {
      'Content-Type':'application/json',
      Authorization: `Bearer ${localStorage.getItem(`token`)}`
              }
        }
    )
    .then((res)=>{
    console.log(res);
        
    })
    .catch(err=>{
        
    })


    return (
        <>
            
        </>
    );
};

export default Welcome;