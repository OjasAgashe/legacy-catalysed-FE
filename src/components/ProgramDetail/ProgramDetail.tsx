import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ProgramDetail.css'
import { UserContext } from '../../App';

const ProgramDetail = () => {


  const {id,setId}=  useContext(UserContext)
    return (
        <>
            <div className="">
                <h1>Title of Program </h1>
    <Tabs className="">
    <TabList>
      <Tab>Program Details</Tab>
      <Tab>Invitations</Tab>
      <Tab>Particiption</Tab>
    </TabList>

    <TabPanel className="">
   <Link style={{textDecoration:'none'}} to={`/editProgram/${id}`}>

 <Button variant="contained" color="primary">Edit</Button>
</Link>

    <Button variant="contained" className="ms-2" color="secondary">Publish</Button>
    <i className="fas fa-info-circle ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Publish the program, few fields will not be editable after publish"></i>

    <div className ="d-flex justify-content-start  ">
      <div>
        <div className="row">
          <div className="col-md-7 ">
          <div className="d-flex ms-5">
  <h3 className="ms-5 ps-3">Title:</h3>
  <h3 className="  ms-1 text-secondary">Hello World</h3>
   </div>
 
   <div className="d-flex ms-3">
  <h3 className="">Description: </h3>
  <p className=" mt-1 text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   </div>

   <div className="d-flex ">
     <div className="d-flex">
     <h4 className="">Tentative Start  :<br/> Date</h4>
  <h3 className="   text-secondary">12/3/2001</h3>
     </div> 
     &nbsp; &nbsp;
 <div className="d-flex">
   <h4> &nbsp; Duration :</h4>
   <h6 className="mt-1 text-secondary">  &nbsp;6 months</h6>
 </div>
 </div>   
  <div className="d-flex">
    <div className="ms-5">
 <div className="d-flex ms-5  ">
<h4 className="d-block ">Mode :</h4>
<h4 className="text-secondary">Virtual</h4>
 </div>
 </div>
 &nbsp;    &nbsp; &nbsp;
 <div className="d-flex ms-4">
 <h4 className="">Language   <span className= "">:</span>  <br/> Requirements</h4>
<h4 className="text-secondary ms-2">English,Hindi</h4>
 </div>
 </div> 
 <div className="d-flex ms-5">
 <h4 className=" ms-5 ps-4">Age   <span className= "">:</span>  <br/>Limit</h4>
<h4 className="text-secondary ms-2">6 to 16</h4>
 </div>
          </div>
          <div className="col-md-5 ">
            <div className="card bg-light">
              <div className="card-body">
               
                <div className="d-flex">
                  <h5>Program Link :</h5>
                  <h6 className="mt-1" ><u>https://www.npmjs.com/package/react-datepicker</u></h6>
                </div>
                <h3 className='text-center'>
                  Co-ordinator details
                </h3>
                <div className="d-flex justify-content-center">
                <div>
                <div className="d-flex ms-5 text-center">
                  <h5>Name:</h5>
                  <h6 className="mt-1 ms-1">Md.Mainul Islam</h6>
                </div>
                <div className="d-flex ms-5">
                  <h5>Email:</h5>
                  <h6 className="mt-1 ms-1">hello1@gmail.com</h6>
                </div>
                <div className="d-flex ms-5">
                  <h5>Phone:</h5>
                  <h6 className="mt-1 ms-1">+880 123456</h6>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  
  
 </div>
 </div>
   
    </TabPanel>
    <TabPanel>
      <h2>Invitations</h2>
    </TabPanel>
    <TabPanel>
      <h2>Participants</h2>
    </TabPanel>
  </Tabs>
            </div>
        </>
    );
};

export default ProgramDetail;