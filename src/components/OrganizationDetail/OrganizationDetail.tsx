import React from 'react';
import './OrganizationDetail.css'

const OrganizationDetail = () => {
    return (
        <>
                <div  className="d-flex justify-content-center organization-registration-mother-container " >
            <div className="organization-registration-container container-fluid  my-auto bg-white">
               <div className="d-flex ">
                   <p className="my-auto">Name</p>
                   <input type="text" className="form-control mt-2 organization-detail-input form-control-sm  " placeholder="Organization name"/>
               </div>
          
               <div className="d-flex ">
                   <p className="my-auto">About</p>
            <textarea name="" className="form-control mt-3 mb-3 organization-detail-textarea" id="" cols={5} rows={5}  placeholder="Write about your organization  *"/>
            </div>
            <div className="d-flex ">
                   <p className="my-auto">Social Media Page</p>
            <input type="url" className="form-control mt-2 organization-detail-input form-control-sm " placeholder="Social Media Page"/>
            </div>
            <div className="d-flex ">
                   <p className="my-auto">Organization Website</p>
            <input type="url" className="form-control mt-2 organization-detail-input form-control-sm " placeholder="Organization Website" />
            </div><br/>
            <input type="submit" className="btn btn-success mt-4 w-100" value="Submit"/>
   
          
       
      
     
        </div>  
        </div> 
        </>
    );
};

export default OrganizationDetail;