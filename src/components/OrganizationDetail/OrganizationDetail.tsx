import React from 'react';
import './OrganizationDetail.css'

const OrganizationDetail = () => {
    return (
        <>
                <div  className="d-flex justify-content-center organization-registration-mother-container " >
            <div className="organization-registration-container container-fluid  my-auto bg-white">
           <input type="text" className="form-control mt-2 organization-detail-input form-control-sm  " placeholder="Organization name"/>
            <textarea name="" className="form-control mt-3 mb-3 organization-detail-textarea" id="" cols={5} rows={5}  placeholder="Write about your organization  *"/>
            <input type="url" className="form-control mt-2 organization-detail-input form-control-sm " placeholder="Social Media Page"/>
            <input type="url" className="form-control mt-2 organization-detail-input form-control-sm " placeholder="Organization Website" /><br/>
            <h3><u>Guidelines</u></h3>
          
       
      
     
        </div>  
        </div> 
        </>
    );
};

export default OrganizationDetail;