
import axios from 'axios';
import React, { FC,  useContext, useState } from 'react';
import Collapsible from 'react-collapsible';
import DatePicker from 'react-date-picker';
import { useHistory } from 'react-router';
import { Flip, toast, ToastContainer } from 'react-toastify';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import  './CreateProgram.css';
import 'react-toastify/dist/ReactToastify.css';
interface createProgramInterface{
  id:string;
title:string;
description:string;
 tentativeStartDate: string;
 durationInMonths: string;
 mode: string;
 languageRequirements:string;
 ageLimit:{
  from:string;
  to:string;
 };

 programLink:string;
 coordinator:{
  name:string;
  email:string;
  phoneExtension:string;
  phoneNumber:string;
 };
 
 studentFields:{
  subjectRequirements: string;
  openings: string;
  applyBy: string
  paid: boolean
  programFees: string;
  generalInstructions: string;
 };
  

   mentorFields: {
    subjectRequirements: string;
    openings: string;
      applyBy: string;
      generalInstructions: string;
   }
     
}
interface AxiosRequestConfig3{
  headers:any;
  id:any;

}
const CreateProgram:FC =()=> {
  const[program,setProgram]=useState<createProgramInterface>({
   id: "",
    title: "",
    description: "",
    tentativeStartDate: "",
    durationInMonths: "",
    mode: "",
    languageRequirements: "",
    ageLimit: {
      from: "",
      to: ""
    },
    programLink: "",
    coordinator: {
      name: "",
      email: "",
      phoneExtension: "",
      phoneNumber: ""
    },
    studentFields: {
      subjectRequirements: "",
      openings: "",
      applyBy: "",
      paid: false,
      programFees: "",
      generalInstructions: ""
    },
    mentorFields: {
      subjectRequirements: "",
    openings: "",
      applyBy: "",
      generalInstructions: ""
    }
  })
  const{id,setId,setGivenDate}=useContext(UserContext)
  const [date, setDate] = useState<any>();
  const[studentDate,setStudentDate]=useState<any>()
  const[mentorDate,setMentorDate]=useState<any>()
const history=useHistory()
  const[paidProgram,setPaidProgram]=useState<any>(false);
  const[render,setRender]=useState(false);
 

const handleDate=(e:any)=>{

setGivenDate(e)
  setDate(e)
  
  const month = ("0" + (e.getMonth() + 1)).slice(-2);
  const day = ("0" + e.getDate()).slice(-2);
  const result= [day,month,e.getFullYear()].join("/");
  program.tentativeStartDate=result
   setProgram(program);
   console.log(program);


 
   
}

const handleMentorDate=(e:any)=>{
  setMentorDate(e)
  
  
    
    const month = ("0" + (e.getMonth() + 1)).slice(-2);
    const day = ("0" + e.getDate()).slice(-2);
    const result= [day,month,e.getFullYear()].join("/");
     
    program.mentorFields.applyBy=result
 
    setProgram(program)
    console.log(program);
    
     console.log(result);
     
  
   
     
  }
  const handleStudentDate=(e:any)=>{
    setStudentDate(e)
    
    
      
      const month = ("0" + (e.getMonth() + 1)).slice(-2);
      const day = ("0" + e.getDate()).slice(-2);
      const result= [day,month,e.getFullYear()].join("/");
    
      program.studentFields.applyBy=result
   
      setProgram(program)
      console.log(program);
      console.log(result);
        } 

      const handleIsPaid = ()=>{
if(paidProgram){
  const newProgramInfo={...program}
  newProgramInfo.studentFields.paid =false
  setProgram(newProgramInfo)
  console.log(program);
}
   

if(!paidProgram){
  const newProgramInfo={...program}
  newProgramInfo.studentFields.paid =true
  setProgram(newProgramInfo)
  console.log(program);
}

      }
  const handleProgramBlur=(e:any)=>{



    
  if(e.target.name ==='title'){
    const newProgramInfo={...program}
    newProgramInfo.title=e.target.value
    setProgram(newProgramInfo);
    console.log(program);
}

if(e.target.name=== 'description'){
  const newProgramInfo={...program}
  newProgramInfo.description=e.target.value
  setProgram(newProgramInfo);
  console.log(program);
 
}
if(e.target.name=== 'durationInMonths'){
  const newProgramInfo={...program}
  newProgramInfo.durationInMonths=e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}

if(e.target.name==='mode'){
  const newProgramInfo={...program}
  newProgramInfo.mode=e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}
if(e.target.name==='languageRequirements'){
  const newProgramInfo={...program}
  newProgramInfo.languageRequirements=e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}
if(e.target.name==='from'){
  const newProgramInfo={...program}
  newProgramInfo.ageLimit.from=e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}
if(e.target.name==='to'){
  const newProgramInfo={...program}
  newProgramInfo.ageLimit.to=e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}
if(e.target.name === 'programLink'){
  const newProgramInfo={...program}
  newProgramInfo.programLink=e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}

if(e.target.name === 'name'){
  const newProgramInfo={...program}
  newProgramInfo.coordinator.name=e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}

if(e.target.name === 'email'){
  const newProgramInfo={...program}
  newProgramInfo.coordinator.email=e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}
if(e.target.name === 'phoneExtension'){
  const newProgramInfo={...program}
  newProgramInfo.coordinator.phoneExtension=e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}
if(e.target.name === 'phoneNumber'){
  const newProgramInfo={...program}
  newProgramInfo.coordinator.phoneNumber=e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}
if(e.target.name === 'subjectRequirementsMentor'){
  const newProgramInfo={...program}
  newProgramInfo.mentorFields.subjectRequirements=e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}
if(e.target.name === 'openingsMentor'){
  const newProgramInfo={...program}
  newProgramInfo.mentorFields.openings=e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}

if(e.target.name === 'generalInstructionsMentor'){
  const newProgramInfo={...program}
  newProgramInfo.mentorFields.generalInstructions =e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}
if(e.target.name === 'openingsStudent'){
  const newProgramInfo={...program}
  newProgramInfo.studentFields.openings=e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}

if(e.target.name === 'subjectRequirementsStudent'){
  const newProgramInfo={...program}
  newProgramInfo.studentFields.subjectRequirements =e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}



if(e.target.name === 'programFees'){
  const newProgramInfo={...program}
  newProgramInfo.studentFields.programFees =e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}

if(e.target.name === 'generalInstructionsStudent'){
  const newProgramInfo={...program}
  newProgramInfo.studentFields.generalInstructions =e.target.value
  setProgram(newProgramInfo)
  console.log(program);
}
if(e.target.name === 'paid'){
  
  program.studentFields.paid =paidProgram
  setProgram(program)
  console.log(program);
}




}



  const handleProgramSubmit=(f:any)=>{
    axios.post<AxiosRequestConfig3>(' https://catalysed-iteration1.el.r.appspot.com/program',
  
    program,
            {
                headers:{'Content-Type': 'application/json'}
            }
      
      )
      .then((res)=>{
       
          toastRender();
 
          console.log('res',res);
          console.log('id',res.data.id);
          setId(res.data.id)
        setTimeout(()=>{
          history.push('/programDetail')

        },4000)

      }


   
          
          
      
  )
 .catch(err=> {
   console.log(err);
 toastRenderError();
 }
      )
    
     
f.preventDefault()
  }

  const toastRender =() =>{
    toast.success('😊 Your program has been created successfully!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      
      });

      }
      const toastRenderError =() =>{
        toast.error('😥  Sorry,your program has not been created successfully...Please check again.', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })

      }
    return (
      <>
      
      
        <Header  />
       
          <h1 className="text-center"><u>Create Program</u></h1>
         <form onSubmit={handleProgramSubmit}>
        <div className="row ">
           <div className="col-md-7 d-flex justify-content-center ms-2 me-2">

             <div className="text-center ml-2">

       <div className=" d-flex justify-content-start">
           <div className="w-100 ">
 
    <p className=" text-start m-0"> <label >Title</label></p>
  <input type="text" className="form-control w-100 " onBlur={handleProgramBlur} onChange={handleProgramBlur} id="formGroupExampleInput" placeholder="Title" name="title" required/>
           </div>

  
      </div>

       <div className="d-flex justify-content-start mt-3">
        <div className="w-100">
    <p className=" text-start m-0"> <label >Description</label></p>
    <textarea className="form-control w-100" rows={5} name="description" onChange={handleProgramBlur}
     onBlur={handleProgramBlur}placeholder="Description *"  required/>
       </div>

       </div>
       <div className="d-flex mt-3">
         
       

 <div className="d-flex justify-content-start   ">
 <div className=" tentative-date-container me-4">
 
 <p className=" text-start m-0 "> <label >Tentative Start Date:</label></p>
 <div className="react-date-picker rounded  mt-1  ">
  
    <DatePicker clearIcon={null}  className=""  value={date} name="tentativeStartDate" 
   onChange={handleDate}  format="dd-MM-y" dayPlaceholder="day" monthPlaceholder="month"
    yearPlaceholder="year" required={true}/> 
 
 </div>
 
        </div>
        <div className=" w-25 duration-container ">
          
 <p className=" text-start mb-1"> <label >Duration:</label></p>
 <div className="d-flex m-0">
 <input type="number" className=" form-control  "  name="durationInMonths" min="0" onChange={handleProgramBlur}
 onBlur={handleProgramBlur} required/>
          <label className="mt-1 ml-1">month</label>
 </div>
         
        </div>
   </div>
  
        

  
     
       </div>
       <div className="d-flex justify-content-start ">
         <div className="d-flex justify-content-between">
         <div className="me-3">
         <p className=" text-start m-0"> <label >Virtual</label></p>
       <input type="radio" id="male" className="form-check-input" name="mode" value="Virtual" 
        onClick={handleProgramBlur} onBlur={handleProgramBlur} required/>
         </div>
         <div className="">
         <p className=" text-start m-0 in-person "> <label >In person</label></p>
       <input type="radio" id="male" name="mode" className="form-check-input" value="In Person"   onClick={handleProgramBlur} onBlur={handleProgramBlur} required/>
      </div>
         </div>
         
     
       
 
       </div>
       <div className=" d-flex justify-content-start mt-2">
           <div className=" ">
 
    <p className=" text-start m-0"> <label >Language requirements</label>
    <i className="fas fa-info-circle ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Language requirements"></i>
</p>
  <input type="text" className="form-control" id="formGroupExampleInput" name="languageRequirements"
   onChange={handleProgramBlur} onBlur={handleProgramBlur} placeholder="Language requirements" required/>
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
        <input type="number" name="from" className=" age-limit-1  w-75  form-control" id="formGroupExampleInput" min="0" placeholder="" onChange={handleProgramBlur} onClick={handleProgramBlur} required/>
        </div>
    
      </div>
   <span className="me-3 mt-4">-</span> 
    <div className="">
      <div>
      <p className="me-2 m-0">To</p>
      </div>
      <div>
      <input type="number" name="to" className=" age-limit-2 w-75 form-control " id="formGroupExampleInput" placeholder="" onChange={handleProgramBlur} onClick={handleProgramBlur} min="0" required/>
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
    <input type="url" className="form-control w-100" name="programLink" id="formGroupExampleInput" placeholder="Program link" onChange={handleProgramBlur} onClick={handleProgramBlur} required/>
    </div>
   </div>
   

   <h5 className="mt-4">Co-ordinator details</h5>

   <div className=" d-flex justify-content-center">
    <div className=" w-100">

    <p className=" text-start m-0"> <label >Name</label></p>
    <input type="text"  onChange={handleProgramBlur} onClick={handleProgramBlur} className="form-control w-100" name="name" id="formGroupExampleInput" placeholder="Name" required/>
    </div>
   </div>

   <div className=" d-flex mt-2 justify-content-center">
    <div className="w-100 ">

    <p className=" text-start m-0"> <label >Email</label></p>
    <input type="email"  onChange={handleProgramBlur} onClick={handleProgramBlur} className="form-control  w-100" name="email"id="formGroupExampleInput" placeholder="Email" required/>
    </div>
   </div>
   <div className=" d-flex justify-content-center mt-2 pb-3">
    <div className="phone-container ">

    <p className=" text-start m-0"> <label htmlFor="phone">Phone</label></p>
    <div className="d-flex ">
    <input type="text" className=" phone-1st w-25 form-control " onChange={handleProgramBlur} 
    onClick={handleProgramBlur} name="phoneExtension"id="phone" placeholder="" required/><span className="mt-1">-</span>
    <input type="text" className="form-control w-75" id="phone"  name="phoneNumber" placeholder=""  onChange={handleProgramBlur} onClick={handleProgramBlur} required/>
    </div>
   
    </div>
   </div>
   </div>
</div>

</div>

        </div>
        
  
    <div className="ms-5">
            
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
    <input type="text" name="subjectRequirementsMentor" onChange={handleProgramBlur} onClick={handleProgramBlur} className="w-100 form-control" id="formGroupExampleInput" placeholder="Skills" required/>
    </div>
   </div>
   <div className="d-flex justify-content-start mt-3">
   <div className=" w-25  ">
             
             <p className=" text-start m-0"> <label >Number of openings:</label></p>
                      <input type="number" name="openingsMentor"  onChange={handleProgramBlur} onClick={handleProgramBlur} className="w-25 form-control"  min="0"required/>
                   
                    </div>    
                    <div className="  ">
 
    <p className=" text-start m-0"> <label >Application End Date:</label></p>
    <DatePicker clearIcon={null} value={mentorDate} className="" onChange={handleMentorDate}  name="applyByMentor" format="dd-MM-y"dayPlaceholder="day" monthPlaceholder="month"  yearPlaceholder="year" required={true}/>
           </div> 
   </div>
             
             
           
            <div className="d-flex  justify-content-start">
              <div className="w-100 text-start">
              <p className="m-0">Instructions </p>
             <textarea name="generalInstructionsMentor" onChange={handleProgramBlur} onClick={handleProgramBlur} className="w-100 form-control" id="" cols={3} rows={3}  placeholder="Instructions*" required/>
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
    <input type="text" className="w-100 form-control "onChange={handleProgramBlur} onClick={handleProgramBlur}  name="subjectRequirementsStudent" id="formGroupExampleInput" placeholder="Skills" required/>
    </div>
   </div>
   <div className="d-flex justify-content-start mt-2">
   <div className=" w-25">
             
             <p className=" text-start m-0"> <label >Number of openings:</label></p>
                      <input type="number"onChange={handleProgramBlur} onClick={handleProgramBlur}  className="w-25 form-control" name="openingsStudent" min="0" required/>
                   
                    </div>    
                    <div className="  ">
 
    <p className=" text-start m-0"> <label >Application End Date:</label></p>
    <DatePicker clearIcon={null} value={studentDate}  onChange={handleStudentDate}  format="dd-MM-y"dayPlaceholder="day" monthPlaceholder="month"  yearPlaceholder="year" name="applyByStudent" required={true}/>
           </div> 
   </div>
             <div className="d-flex">
             <div className="d-flex">
               <input type="checkbox" checked={paidProgram} name="paid" value={paidProgram} onClick={handleIsPaid} onChange={()=>setPaidProgram(!paidProgram) } className="mt-1 form-check-input" />
               <p className="ms-1">Is paid program?</p>
             </div> &nbsp;&nbsp;
            
               {
                 paidProgram ? 
                 <div className="w-25 ">
                 <p className="text-start m-0">Program fees</p>
                 <div className="d-flex text-start">
                
                 <input type="number" name="programFees"onChange={handleProgramBlur} onClick={handleProgramBlur}  className=" form-control-md paid-program-input form-control" min="0" required/> &nbsp;
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
             <textarea  className="form-control " id="" onChange={handleProgramBlur} onClick={handleProgramBlur}  name="generalInstructionsStudent" cols={3} rows={3}  placeholder="General Instructions*"required/>
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
    <input type="submit" className="btn btn-success w-100 container mt-2 mb-2 ms-5"  value="Send Program"/>
   <ToastContainer
    transition={Flip}
   />
    </form>
   
        </>
    );
};

export default CreateProgram;