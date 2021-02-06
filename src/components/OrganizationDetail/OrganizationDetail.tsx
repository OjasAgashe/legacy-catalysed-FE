import React from 'react';
import './OrganizationDetail.css'

const OrganizationDetail = () => {
    return (
        <>
                <div  className="d-flex justify-content-center organization-registration-mother-container " >
            <div className="organization-registration-container container-fluid  my-auto bg-white">
           <input type="text" className="form-control mt-2 organization-detail-input form-control-sm first-name " placeholder="Organization name"/>
            <textarea name="" className="form-control mt-3 mb-3 organization-detail-textarea" id="" cols={5} rows={5}  placeholder="Organization detail *"/>
            <h6><u>Guidelines</u></h6>
          
       
      
     
        </div>  
        </div> 
        </>
    );
};

export default OrganizationDetail;