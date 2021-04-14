import React, { useState } from 'react';
import './OrganizationDetail.css'

const OrganizationDetail = () => {
    const [organizationDetailInfo,setOrganizationDetailInfo]=useState({
        organizationName:'',
        about:'',
        socialMediaPage:'',
        organizationWebsite:''
       
    })
    const [errorsOrganizationDetail,setErrorsOrganizationDetail]=useState({
       about:''
    })
    const validateOrganizationDetailInfo = (organizationDetailInfo:any)=>{
        if(organizationDetailInfo.about.trim()){
            errorsOrganizationDetail.about=""
          }
    
        if(!organizationDetailInfo.about.trim()){
          errorsOrganizationDetail.about=""
        }
       else if (!/^.{10,}$/.test(organizationDetailInfo.about.trim())) {
            errorsOrganizationDetail.about= 'Minimum 10 characters are required here'
      }
      console.log(errorsOrganizationDetail);
      
    }


    const  handleOrganizationDetailChange =(e:any) =>{
        const{name,value}=e.target
        setOrganizationDetailInfo({
    ...organizationDetailInfo,
    [name]:value
        } )
     console.log(organizationDetailInfo)
    } 



    const  handleOrganizationDetailBlur=(e:any)=>{
        // if(e.target.name=="about"){
        //     if(!/^.{10,}$/.test(e.target.value.trim()) && e.target.value.length!==0){
        //         alert("Minimum 10 characters are required here")
        //     }
        // }
        const{name,value}=e.target
    setOrganizationDetailInfo({
...organizationDetailInfo,
[name]:value
    } )
  
    console.log(organizationDetailInfo);
    validateOrganizationDetailInfo(organizationDetailInfo)
    }


   
    return (
        <>
                <div  className="d-flex justify-content-center organization-registration-mother-container " >
            <div className="organization-detail-container container-fluid  my-auto bg-white">
                <form>
               <div className=" mt-2 mb-2">
               <h6 className=" text-start m-0"> <label >Organization Name</label></h6>
                   <input type="text" className="form-control  organization-detail-input form-control-md  " placeholder="Type your organization name here"required/>
             </div>
          
               <div className={`${errorsOrganizationDetail.about||errorsOrganizationDetail.about ? '':'mb-2'}`}>
               <h6 className=" text-start m-0"> <label >About</label></h6>
                   
         <textarea name="about" onBlur={handleOrganizationDetailBlur} onChange={handleOrganizationDetailChange} className="form-control  organization-detail-textarea" id="" cols={5} rows={5}  placeholder="Write about your organization  *"required/>
         {
                 errorsOrganizationDetail.about &&<span className="text-danger">{errorsOrganizationDetail.about}</span>
             } 
            </div>
            <div className={`${errorsOrganizationDetail.about||errorsOrganizationDetail.about ? 'mb-2':'mt-2 mb-2'}`} >
            <h6 className=" text-start m-0"> <label >Social Media Page</label></h6>
            <input type="url" className="form-control organization-detail-input  form-control-md " placeholder="Type your social media page link here"required/>
            </div>
            <div className=" ">
            <h6 className=" text-start m-0"> <label >Organization Website</label></h6>

            <input type="url" className="form-control  organization-detail-input form-control-md " placeholder="Type your organization website link here" required/>
            </div><br/>
            <input type="submit" className="btn btn-success  w-100" value="Submit"/>
            </form>
   
          
       
      
     
        </div>  
        </div> 
        </>
    );
};

export default OrganizationDetail;