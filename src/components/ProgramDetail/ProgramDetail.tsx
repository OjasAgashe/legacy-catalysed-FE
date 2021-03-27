import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { UserContext } from '../../App';

const ProgramDetail = () => {


  const {id,setId}=  useContext(UserContext)
    return (
        <>
            <div>
                <h1>Title of Program </h1>
    <Tabs className="container">
    <TabList>
      <Tab>Program Details</Tab>
      <Tab>Invitations</Tab>
      <Tab>Particiption</Tab>
    </TabList>

    <TabPanel>
   <Link to={`/editProgram/${id}`}>

 <Button variant="contained" color="primary">Edit</Button>
    </Link>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
            </div>
        </>
    );
};

export default ProgramDetail;