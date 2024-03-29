import React, { useContext, useEffect, useState } from 'react';
import './EditProgram.css'
import Collapsible from 'react-collapsible';
import Header from '../Header/Header';
import DatePicker from 'react-date-picker';
import { useParams } from 'react-router';
import axios from 'axios';
import { UserContext } from '../../App';
import moment from 'moment';


const EditProgram = () => {

  const{givenDate}=useContext(UserContext)
  
  const{userId}=useParams<any>()
  const[given,setGiven]=useState<any>()
  
  
  useEffect(()=>{

    axios.get<any>(`https://catalysed-iteration1.el.r.appspot.com/program/${userId}`)
    .then((res)=>{
  console.log(res.data.id);
    setGiven(res.data);
  
  
    })
  },[])

const[dating,setDating]=useState<any>('')
  const dateSplit=given?.tentativeStartDate.split('/');

  const dateJoin=[dateSplit?.[2],dateSplit?.[1],dateSplit?.[0]].join('-');
  console.log(dateJoin,typeof(dateJoin))
  useEffect(()=>{
    setDating(dateJoin)
  },[])
  console.log(dating)
  const dateObj = new Date(dateJoin);
  
  console.log(dateObj);
  










    
  
 

    return (
        <>
           <Header />
       
       <h1 className="text-center"><u>Edit Program</u></h1>
      <form >
     <div className="row ">
        <div className="col-md-7 d-flex justify-content-center ms-2 me-2">

          <div className="text-center ml-2">

    <div className=" d-flex justify-content-start">
        <div className="w-100 ">

 <p className=" text-start m-0"> <label >Title</label></p>
<input type="text" className="form-control w-100 "  defaultValue={given?.title} id="formGroupExampleInput" placeholder="Title" name="title" required/>
        </div>


   </div>

    <div className="d-flex justify-content-start mt-3">
     <div className="w-100">
 <p className=" text-start m-0"> <label >Description</label></p>
 <textarea className="form-control w-100" rows={5} name="description" defaultValue={given?.description}
  placeholder="Description *"  required/>
    </div>

    </div>
    <div className="d-flex mt-3">
      
    

<div className="d-flex justify-content-start   ">
<div className=" tentative-date-container me-4">

<p className=" text-start m-0 "> <label >Tentative Start Date:</label></p>
<div className="react-date-picker rounded  mt-1  ">

 <DatePicker clearIcon={null}  className="" value={givenDate}  name="tentativeStartDate" format="dd-MM-y" dayPlaceholder="day" monthPlaceholder="month"
 yearPlaceholder="year" required={true}/> 

</div>

     </div>
     <div className=" w-25 duration-container ">
       
<p className=" text-start mb-1"> <label >Duration:</label></p>
<div className="d-flex m-0">
<input type="number" className=" form-control  " defaultValue={given?.durationInMonths} name="durationInMonths" min="0"
 required/>
       <label className="mt-1 ml-1">month</label>
</div>
      
     </div>
</div>

     


  
    </div>
    <div className="d-flex justify-content-start ">
      <div className="d-flex justify-content-between">
      <div className="me-3">
      <p className=" text-start m-0"> <label >Virtual</label></p>
    <input type="radio" id="male" className="form-check-input" name="mode" value="Virtual" checked={true}
      required/>
      </div>
      <div className="">
      <p className=" text-start m-0 in-person "> <label >In person</label></p>
    <input type="radio" id="male" name="mode" className="form-check-input" value="In Person"  required/>
   </div>
      </div>
      
  
    

    </div>
    <div className=" d-flex justify-content-start mt-2">
        <div className=" ">

 <p className=" text-start m-0"> <label >Language requirements</label>
 <i className="fas fa-info-circle ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Language requirements"></i>
</p>
<input type="text" className="form-control"defaultValue={given?.languageRequirements} id="formGroupExampleInput" name="languageRequirements"
  placeholder="Language requirements" required/>
        </div>


</div>
<div className="mt-3 d-flex">
 <div className="d-flex">
 <p className="text-center  mt-4"> <label >Age Limit </label></p>
 <span  className="ms-2 mt-4">:</span>
 </div>

 <div className="d-flex ms-2 w-50  my-auto ">
   <div className="mb-2" >
     <div className="">
     <p className=" text-center m-0 me-2">From</p>
     </div>
     <div className="">
     <input type="number" name="from"  defaultValue={given?.ageLimit?.from} className=" age-limit-1  w-75  form-control" id="formGroupExampleInput" min="0" placeholder=""required/>
     </div>
 
   </div>
<span className="me-3 mt-4">-</span> 
 <div className="">
   <div>
   <p className="me-2 m-0">To</p>
   </div>
   <div>
   <input type="number" name="to"  defaultValue={given?.ageLimit?.to} className=" age-limit-2 w-75 form-control " id="formGroupExampleInput" placeholder=""  min="0" required/>
   </div>

 
 </div>
  </div>
 </div>


</div>
</div>
<div className="col-md-5 bg-light m-auto d-flex justify-content-center  card card-create-program  mt-1">

<div className="card-body d-flex justify-content-center align-items-center">
  <div>

<div className=" d-flex justify-content-center pt-2 ">
 <div className="w-100 ">

 <p className=" text-start m-0"> <label >Program Link</label></p>
 <input type="url" className="form-control w-100" name="programLink" defaultValue={given?.programLink} id="formGroupExampleInput" placeholder="Program link"  required/>
 </div>
</div>


<h5 className="mt-4">Co-ordinator details</h5>

<div className=" d-flex justify-content-center">
 <div className=" w-100">

 <p className=" text-start m-0"> <label >Name</label></p>
 <input type="text" className="form-control w-100" name="name" defaultValue={given?.coordinator?.name} id="formGroupExampleInput" placeholder="Name" required/>
 </div>
</div>

<div className=" d-flex mt-2 justify-content-center">
 <div className="w-100 ">

 <p className=" text-start m-0"> <label >Email</label></p>
 <input type="email" className="form-control  w-100"  defaultValue={given?.coordinator?.email}  name="email"id="formGroupExampleInput" placeholder="Email" required/>
 </div>
</div>
<div className=" d-flex justify-content-center mt-2 pb-3">
 <div className="phone-container ">

 <p className=" text-start m-0"> <label htmlFor="phone">Phone</label></p>
 <div className="d-flex ">
 <input type="text" className=" phone-1st w-25 form-control " 
  name="phoneExtension"id="phone" defaultValue={given?.coordinator?.phoneExtension}  placeholder="" required/><span className="mt-1">-</span>
 <input type="text" className="form-control w-75" id="phone" defaultValue={given?.coordinator?.phoneNumber} name="phoneNumber" placeholder=""  required/>
 </div>

 </div>
</div>
</div>
</div>

</div>

     </div>
     

 <div className="ms-5 ">
         
          <Collapsible className="container w-auto  collapsible-student-field bg-light mt-2 pb-2 w-100 h-auto collapsible" open={true}overflowWhenOpen="visible" openedClassName="container  collapsible-student-field   collapsible bg-light pb-2  mt-2 " triggerTagName="div"triggerWhenOpen={<p className="text-start mt-3"> <b>^ </b>Mentor Fields &nbsp;<span className="bg-secondary text-white"><i className="fas fa-info-circle"></i>(This field is only visible for mentors)</span></p>} trigger={<p className="text-start mt-3 "> <b className="sign-left">&gt;</b> Mentor Fields &nbsp;<span className="bg-secondary text-white "><i className="fas fa-info-circle"></i>(This field is only visible for mentors)</span></p>} 
          >
        {/* <div className=" d-flex justify-content-center">
 <div className=" ">

 <p className=" text-start m-0"> <label >Skills/Subject requirements</label></p>
 <input type="text" className="w-100 form-control" id="formGroupExampleInput" placeholder="Skills" required/>
 </div>
</div>
<div className="d-flex justify-content-center">
<div className=" w-25">
          
          <p className=" text-center "> <label >Number of openings:</label></p>
                   <input type="number" className="w-25 form-control"  min="0"required/>
                
                 </div>    
                 <div className="  ">

 <p className=" text-start m-0"> <label >Application End Date:</label></p>
 <DatePicker clearIcon={null} value={mentorDate} className="" onChange={setMentorDate} format="dd-MM-y"dayPlaceholder="day" monthPlaceholder="month"  yearPlaceholder="year" required={true}/>
        </div> 
</div>
          
          
        
         <div className="d-flex justify-content-start">
           <div className="w-100 text-start">
           <p className="">Instructions </p>
          <textarea name="" className="w-75 form-control" id="" cols={3} rows={3}  placeholder="Instructions*"/>
           </div>
        
         </div> */}
<div className="bg-white p-2">
<div className=" d-flex justify-content-start">
 <div className=" ">

 <p className=" text-start m-0"> <label >Skills/Subject requirements</label></p>
 <input type="text" name="subjectRequirementsMentor" defaultValue={given?.mentorFields?.subjectRequirements} className="w-100 form-control" id="formGroupExampleInput" placeholder="Skills" required/>
 </div>
</div>
<div className="d-flex justify-content-start mt-3">
<div className=" w-25  ">
          
          <p className=" text-start m-0"> <label >Number of openings:</label></p>
                   <input type="number" name="openingsMentor" defaultValue={given?.mentorFields?.openings}   className="w-25 form-control"  min="0"required/>
                
                 </div>    
                 <div className="  ">

 <p className=" text-start m-0"> <label >Application End Date:</label></p>
 <DatePicker clearIcon={null}  className=""   name="applyByMentor"  format="dd-MM-y"dayPlaceholder="day" monthPlaceholder="month"  yearPlaceholder="year" required={true}/>
        </div> 
</div>
          
          
        
         <div className="d-flex  justify-content-start">
           <div className="w-100 text-start">
           <p className="m-0">Instructions </p>
          <textarea name="generalInstructionsMentor" defaultValue={given?.mentorFields?.generalInstructions} className="w-100 form-control" id="" cols={3} rows={3}  placeholder="Instructions*" required/>
           </div>
        
         </div>
         </div>
 </Collapsible>

 </div>
 <div className="ms-5">
 <Collapsible className="container collapsible-student-field bg-light mt-2  collapsible" open={true}overflowWhenOpen="visible" openedClassName="container  collapsible-student-field  collapsible bg-light  pb-2 mt-2 " triggerTagName="div"triggerWhenOpen={<p className="text-start mt-3"> <b>^ </b>Student Fields &nbsp;<span className="bg-secondary text-white"><i className="fas fa-info-circle"></i>(This field is only visible for students)</span></p>} trigger={<p className="text-start mt-3 "> <b className="sign-left">&gt;</b> Student Fields &nbsp;<span className="bg-secondary text-white "><i className="fas fa-info-circle"></i>(This field is only visible for students)</span></p>} 
          >
           <div className="bg-white p-2">
   <div className=" d-flex justify-content-start ">
     <div className=" ">

  <p className=" text-start m-0"> <label >Skills/Subject requirements</label></p>
 <input type="text" className="w-100 form-control " defaultValue={given?.studentFields?.subjectRequirements}
  name="subjectRequirementsStudent" id="formGroupExampleInput" placeholder="Skills" required/>
 </div>
</div>
<div className="d-flex justify-content-start mt-2">
<div className=" w-25">
          
          <p className=" text-start m-0"> <label >Number of openings:</label></p>
                   <input type="number" defaultValue={given?.studentFields?.openings} className="w-25 form-control" name="openingsStudent" min="0" required/>
                
                 </div>    
                 <div className="  ">

 <p className=" text-start m-0"> <label >Application End Date:</label></p>
 <DatePicker clearIcon={null}  format="dd-MM-y"dayPlaceholder="day" monthPlaceholder="month"  yearPlaceholder="year" name="applyByStudent" required={true}/>
        </div> 
</div>
          <div className="d-flex">
          <div className="d-flex">
            <input type="checkbox"  name="paid" checked={given?.studentFields?.paid}   className="mt-1 form-check-input" required/>
            <p className="ms-1">Is paid program?</p>
          </div> &nbsp;&nbsp;
         
           
               {
              given?.studentFields?.paid ?
                
              <div className="w-25 ">
              <p className="text-start m-0">Program fees</p>
              <div className="d-flex text-start">
             
              <input type="number" name="programFees" defaultValue={given?.studentFields?.programFees}  className=" form-control-md paid-program-input form-control" min="0" required/> &nbsp;
                  <label>₹</label>
              </div>
               </div>


              : 
              ''

            }
       
           
         
          </div>
          
        
         <div className="d-flex justify-content-start mt-3">
           <div className="w-100 text-start">
           <p className="m-0">General Instructions </p>
          <textarea  className="form-control " id=""  defaultValue={given?.studentFields?.generalInstructions}   name="generalInstructionsStudent" cols={3} rows={3}  placeholder="General Instructions*"required/>
           </div>
        
         </div>
         </div>

            </Collapsible>
</div>
            {/* <div className="accordion container  mt-3 mb-3" id="accordionExample">
<div className="accordion-item">
 <h2 className="accordion-header d-flex justify-content-center " id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
   <button className="accordion-button bg-light collapsed"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
     Mentor fields&nbsp;&nbsp;
     <div className="bg-secondary text-white ml-5"><i className="fas fa-info-circle"></i>(This field is only visible for mentors)</div>
   </button>

 </h2>
 <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
   <div className="accordion-body">
   <div className=" d-flex justify-content-start">
 <div className=" ">

 <p className=" text-start m-0"> <label >Skills/Subject requirements</label></p>
 <input type="text" className="w-100 form-control" id="formGroupExampleInput" placeholder="Skills" required/>
 </div>
</div>
<div className="d-flex justify-content-start">
<div className=" w-25  ">
          
          <p className=" text-start m-0"> <label >Number of openings:</label></p>
                   <input type="number" className="w-25 form-control"  min="0"required/>
                
                 </div>    
                 <div className="  ">

 <p className=" text-start m-0"> <label >Application End Date:</label></p>
 <DatePicker clearIcon={null} value={mentorDate} className="" onChange={setMentorDate} format="dd-MM-y"dayPlaceholder="day" monthPlaceholder="month"  yearPlaceholder="year" required={true}/>
        </div> 
</div>
          
          
        
         <div className="d-flex justify-content-start">
           <div className="w-100 text-start">
           <p className="m-0">Instructions </p>
          <textarea name="" className="w-100 form-control" id="" cols={3} rows={3}  placeholder="Instructions*" required/>
           </div>
        
         </div>
   </div>
 </div>
 </div>
 </div> */}

 {/* <div className=" accordion  container mb-3" id="accordionExample2">
   <div className="accordion-item">
    <h2 className="accordion-header d-flex justify-content-center " id="heading" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
     <button className="accordion-button bg-light collapsed"  data-bs-toggle="collapse"  data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
     Students fields &nbsp; 
       <div className="bg-secondary text-white ml-5"><i className="fas fa-info-circle"></i>(This field is only visible for students)</div>
   </button>

  </h2>
 <div id="collapseTwo" className="accordion-collapse collapse show"       aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
   <div className="accordion-body">
 
    <div>
   <div className=" d-flex justify-content-start">
     <div className=" ">

  <p className=" text-start m-0"> <label >Skills/Subject requirements</label></p>
 <input type="text" className="w-100 form-control " id="formGroupExampleInput" placeholder="Skills" required/>
 </div>
</div>
<div className="d-flex justify-content-start">
<div className=" w-25">
          
          <p className=" text-start m-0"> <label >Number of openings:</label></p>
                   <input type="number" className="w-25 form-control"  min="0" required/>
                
                 </div>    
                 <div className="  ">

 <p className=" text-start m-0"> <label >Application End Date:</label></p>
 <DatePicker clearIcon={null} value={studentDate} onChange={setStudentDate} format="dd-MM-y"dayPlaceholder="day" monthPlaceholder="month"  yearPlaceholder="year" required={true}/>
        </div> 
</div>
          <div className="d-flex">
          <div className="d-flex">
            <input type="checkbox" checked={paidProgram} onChange={()=>setPaidProgram(!paidProgram)} className="mt-1 form-check-input" required/>
            <p>Is paid program?</p>
          </div> &nbsp;&nbsp;
         
            {
              paidProgram ? 
              <div className="w-25 ">
              <p className="text-start m-0">Program fees</p>
              <div className="d-flex text-start">
             
              <input type="number" className=" form-control-md paid-program-input form-control" min="0" required/> &nbsp;
                  <label>₹</label>
              </div>
               </div>
              : 
              ''

            }
       
           
         
          </div>
          
        
         <div className="d-flex justify-content-start">
           <div className="w-100 text-start">
           <p className="m-0">General Instructions </p>
          <textarea name="" className="form-control mb-2" id="" cols={3} rows={3}  placeholder="General Instructions*"required/>
           </div>
        
         </div>
         </div>
          
          
        
 
   </div>
 </div>
 </div>
 </div> */}
 


 </form>
   
        </>
    );
};

export default EditProgram;