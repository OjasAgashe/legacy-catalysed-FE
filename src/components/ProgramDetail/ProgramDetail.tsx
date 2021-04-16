import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProgramDetail.css'
import { UserContext } from '../../App';
import Collapsible from 'react-collapsible';
import axios from 'axios';

const ProgramDetail = () => {


  const {id}=  useContext(UserContext)

const[programDetails,setProgramDetails]=useState<any>()

useEffect(()=>{

  axios.get<any>(`https://catalysed-iteration1.el.r.appspot.com/program/${id}`)
  .then((res)=>{
console.log(res.data.id);
  setProgramDetails(res.data);


  })
},[])

    return (
        <>
        <div className="container-fluid">
                <h1>{programDetails?.title} </h1>
    
           

            <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Program Details</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Invitations</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Participants</button>
  </li>
</ul>
<div className="tab-content " id="myTabContent">
  <div className="tab-pane fade show active  border border-dark pt-1 pb-3 text-break" id="home" role="tabpanel" aria-labelledby="home-tab">
  <Link style={{textDecoration:'none'}} to={`/editProgram/${id}`}>

<Button variant="contained" color="primary">Edit</Button>
</Link>

<Button variant="contained" className="ms-2" color="secondary">Publish</Button>

<i className="fas fa-info-circle ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Publish the program, few fields will not be editable after publish"></i>

<div className ="d-flex justify-content-start w-auto ">
<div className="ms-2">
    <div className="row">
    <div className="col-md-7 ">
    <div className="d-flex ">

<h5 className="">Title:</h5>
<p className="  ms-1 text-secondary"><b>{programDetails?.title}</b></p>
</div>


<p className="text-secondary  text-start mt-1"><h5 className="d-inline text-dark">Description:</h5>
{programDetails?.description}
</p> 


<div className="d-flex row">
<div className="d-flex col-md-6 ">
<h5 className=""><span className="d-flex">Tentative Start  :</span> Date</h5>
<p className="text-secondary">{programDetails?.tentativeStartDate}</p>
</div> 

<div className="d-flex col-md-6 ">
<h5> &nbsp; Duration :</h5>
<p className="mt-1 text-secondary">  &nbsp;{programDetails?.durationInMonths} months</p>
</div>
</div>  

<div className="d-flex row">
<div className="col-md-6">
<div className="d-flex ">
<h5 className="">Mode :</h5>
<p className="text-secondary">{programDetails?.mode}</p>
</div>
</div>

<div className="d-flex col-md-6">
<h5 className=""><span className= "d-flex">Language   :</span> Requirements</h5>
<p className="text-secondary ms-2">{programDetails?.languageRequirements}</p>
</div>
</div> 

<div className="d-flex ">
<h5 className="">Age<span className= "">:</span>  <br/>Limit</h5>

<p className="text-secondary ms-2">{programDetails?.ageLimit?.from} <span className="text-dark">to</span>  {programDetails?.ageLimit?.to}</p>
</div>
    </div>
    <div className="col-md-5 container">
      <div className="card program-detail-card ms-4 w-auto bg-light">
        <div className="card-body">
         
          <div className="d-flex ">
            <p className="d-flex">
            <h5>Program Link </h5>
            <h5>:</h5>
            </p>
            <h6 className="mt-1 ms-1" ><u>{programDetails?.programLink}</u></h6>
          </div>
     <div className="d-flex justify-content-center">
     <div className="mt-5">
          <h3 className=' mb-5 text-center'>
            Co-ordinator details
          </h3>
         
          <div className="d-flex ms-5 text-center">
            <h5>Name:</h5>
            <h6 className="mt-1 ms-1">{programDetails?.coordinator?.name}</h6>
          </div>
          <div className="d-flex ms-5">
            <h5>Email:</h5>
            <h6 className="mt-1 ms-1">{programDetails?.coordinator?.email}</h6>
          </div>
          <div className="d-flex ms-5">
            <h5>Phone:</h5>
            <h6 className="mt-1 ms-1">{programDetails?.coordinator?.phoneExtension} {programDetails?.coordinator?.phoneNumber}</h6>
          </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  </div>




<div className="d-flex justify-content-start w-100">
  <div>
<Collapsible className="container w-auto  program-detail-collapsible-mentor-field bg-light mt-2 pb-2 w-100 h-auto collapsible" open={true}overflowWhenOpen="visible" openedClassName="container  program-detail-collapsible-mentor-field   collapsible bg-light pb-2  mt-2 " triggerTagName="div"triggerWhenOpen={<p className="text-start mt-3"> <b>^ </b>Mentor Fields &nbsp;<span className="bg-secondary text-white"><i className="fas fa-info-circle"></i>(This field is only visible for mentors)</span></p>} trigger={<p className="text-start mt-3 "> <b className="sign-left">&gt;</b> Mentor Fields &nbsp;<span className="bg-secondary text-white "><i className="fas fa-info-circle"></i>(This field is only visible for mentors)</span></p>} 
       >
    
<div className="bg-white p-2">
<div className=" d-flex justify-content-start">
<div className="d-flex ">

<h6 className="text-start"> Skills/Subject requirements:</h6>
<p className=" text-start me-2">{programDetails?.mentorFields?.subjectRequirements}</p>
</div>
</div>
<div className="d-flex justify-content-start mt-3">
<div>
<div className=" d-flex  ">
       
<h6 className=" text-start m-0"> <label >Number of openings:</label></h6>
 <p className="ms-1"> {programDetails?.mentorFields?.openings} </p>      
        
      </div>    
<div className="d-flex">

<h6 className="text-start">
<label >Application End Date:</label>
</h6>
<p className="ms-1">
{programDetails?.mentorFields?.applyBy}
</p>
   </div> 
     </div>
</div>
       
       
     
      <div className="d-flex  justify-content-start ">
        <div className="w-100 text-start d-flex flex-column">
        <h6 className=""><span>Instructions</span>
        <span>:</span>
         </h6>
      <p className=" text-start program-detail-mentor-generalInstructions">{programDetails?.mentorFields?.generalInstructions}</p>
        </div>
     
      </div>
      </div>
  </Collapsible>
</div>
</div>
<div className="d-flex justify-content-start">
  <div>
  <Collapsible className="container collapsible-student-field bg-light mt-2  collapsible" open={true}overflowWhenOpen="visible" openedClassName="container  collapsible-student-field  collapsible bg-light  pb-2 mt-2 " triggerTagName="div"triggerWhenOpen={<p className="text-start mt-3"> <b>^ </b>Student Fields &nbsp;<span className="bg-secondary text-white"><i className="fas fa-info-circle"></i>(This field is only visible for students)</span></p>} trigger={<p className="text-start mt-3 "> <b className="sign-left">&gt;</b> Student Fields &nbsp;<span className="bg-secondary text-white "><i className="fas fa-info-circle"></i>(This field is only visible for students)</span></p>} 
       >
        <div className="bg-white p-2">
<div className=" d-flex justify-content-start ">
  <div className="d-flex ">

<h6 className=" text-start "> Skills/Subject requirements :</h6>
<p className="text-start me-2">{programDetails?.studentFields?.subjectRequirements}</p>
</div>
</div>
<div className="  mt-2">
<div className=" d-flex">
       
       <h6 className=" text-start m-0"> <label >Number of openings:</label></h6>
       <p className="ms-1">{programDetails?.studentFields?.openings}</p>
             
              </div>    
              <div className=" d-flex ">

<h6 className=" text-start m-0"> <label >Application End Date:</label></h6>
<p>{programDetails?.studentFields?.applyBy}</p>
     </div> 
</div>
{
  programDetails?.studentFields?.paid?
  <div>
  <div className="d-flex">
   <h6>Paid Program:</h6>
    <p>Yes</p>
  </div>


 <div className="d-flex ">
  <h6 className="text-start m-0">Program fees :</h6>
  <div className="d-flex text-start">
 
 <p>6</p> &nbsp;
      <b>₹</b>
  </div>
   </div>
</div>
  :
  <div className="d-flex">
   <h6>Paid Program:</h6>
    <p>No</p>
  </div>
}
    

         
 
<div className="d-flex justify-content-start mt-1">
        <div className="w-100 text-start d-flex flex-column">
        <h6 className="d-flex"><span>General Instructions</span>
        <span> :</span>
        </h6>
        <p className="program-detail-student-generalInstructions">{programDetails?.studentFields?.generalInstructions}
       </p>
        </div>
     
      </div>
      </div>

         </Collapsible>
  </div>
</div>

         </div>
</div>
    </div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
</div>
        </>
    );
};

export default ProgramDetail;