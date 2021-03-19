import React, { useState } from 'react';
import { Drawer, Button, List, ListItem, ListItemText, ListItemIcon,Menu ,MenuItem, MenuList} from '@material-ui/core';
import { BsList } from "react-icons/bs";
import logo from '../../images/logo.png';
import './NavHome.css'
import { useHistory } from 'react-router';

const NavHome = () => {

  const history=useHistory()

  const [openDrawer,setOpenDrawer]=useState<any>(false)
  const handleRegisterMenuClose=()=>{
    setAnchorElRegister(null)
  }
  const handleProgramsMenuClose=()=>{
    setAnchorElPrograms(null)
  }

  const[anchorElRegister,setAnchorElRegister]=useState(null)
  const[anchorElPrograms,setAnchorElPrograms]=useState(null)

  const handleOpenMenuRegister=(e:any)=>{
      setAnchorElRegister(e.currentTarget)
  }

  const handleOpenMenuPrograms=(e:any)=>{
    setAnchorElPrograms(e.currentTarget)
}
    return (
        <>
        {/* <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#"aria-disabled="true">Disabled</a>
  </li>
</ul> */}
           {/* <nav classNameName="navbar navbar-expand-lg navbar-light ">
     
        <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span classNameName="navbar-toggler-icon"></span>
        </button>
      
        <div classNameName="collapse navbar-collapse " id="navbarSupportedContent">
          <ul classNameName="navbar-nav ">
          <li classNameName="nav-item dropdown ">
          <a classNameName="nav-link dropdown-toggle btn btn-primary" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Programs
          </a>
          <ul classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a classNameName="dropdown-item " href="#">Browse by category</a></li>
            <li><a classNameName="dropdown-item" href="#">Browse by organizer </a></li>
            {/* <li><hr classNameName="dropdown-divider"/></li> */}
            {/* <li><a classNameName="dropdown-item" href="#">All programs</a></li>
          </ul>
        </li>
            <li classNameName="nav-item active">
              <a classNameName="nav-link" href="#">Home </a>
            </li>
            <li classNameName="nav-item">
              <a classNameName="nav-link " href="#">Organizer</a>
            </li>
            <li classNameName="nav-item">
              <a classNameName="nav-link" href="#">Our Team</a>
            </li>
            <li classNameName="nav-item btn-md btn-success pl-2 pr-2">
              <a classNameName="nav-link" href="#">Login</a>
            </li>
            */}
            {/* <li classNameName="nav-item dropdown  ">
           <a classNameName="nav-link dropdown-toggle btn btn-primary" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Register
           </a>
           <ul classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
           <li><a classNameName="dropdown-item " href="#"> As an organizer</a></li>
            <li><a classNameName="dropdown-item" href="#">As a mentor </a></li>  */}
            {/* <li><hr classNameName="dropdown-divider"/></li> */}
            {/* <li><a classNameName="dropdown-item" href="#">As a student</a></li>
          </ul>
        </li>
          </ul>
       
        </div>
      </nav>   */}
      <div className="d-flex container-fluid drawer-control  justify-content-between">
      <img src={logo} className="logo logo-sm-img m-0"/>
      <div className="me-1  bs-list">
        <div className="bs-list-inner">
      <BsList fontSize={40} onClick={()=>setOpenDrawer(true)}/>
      </div>

      </div>
      </div>

<Drawer

anchor="right"
onClose={()=>setOpenDrawer(false)}
open={openDrawer}
>
  
  <List>

    <ListItem button divider  className="bg-warning">
      <ListItemIcon>
      <ListItemText>
    
 Organizations
 
       
      </ListItemText>
      </ListItemIcon>
    </ListItem>
 
   
   
     <ListItem button divider onClick={handleOpenMenuPrograms} 
     aria-controls="menu1" 
     className="bg-primary"
    >
      <ListItemIcon>
      <ListItemText>
        
     Programs
       
      
 </ListItemText>
      </ListItemIcon>
    </ListItem>
    
      
   
    
 

  <ListItem button divider className="bg-primary"  
  onClick={handleOpenMenuRegister} 
  aria-controls="menu1" >
      <ListItemIcon>
      <ListItemText>
        
      Register
       
       
      </ListItemText>
      </ListItemIcon>
    </ListItem>
 
  

<ListItem button divider 
className="bg-success"
 onClick={()=>history.push('/login')}  >
      <ListItemIcon>
      <ListItemText>
        Login
      </ListItemText>
      </ListItemIcon>
    </ListItem>
    
  </List>
</Drawer>
<Menu className="menu-register mt-5 w-100"
      id="menu" 
     anchorEl={anchorElRegister}
     onClose={handleRegisterMenuClose} 
     open={Boolean(anchorElRegister)}>
  <MenuItem onClick={()=>history.push('/student')}>Student</MenuItem>
  <MenuItem onClick={()=>history.push('/mentor')}>Mentor</MenuItem>
  <MenuItem onClick={()=>history.push('/organizer')}>Organizer</MenuItem>
</Menu>

<Menu className="menu-register mt-5 w-100"
  id="menu1"
anchorEl={anchorElPrograms}
 onClose={handleProgramsMenuClose} 
 open={Boolean(anchorElPrograms)}>
  <MenuItem>Browse by category</MenuItem>
  <MenuItem>Browse by organizer</MenuItem>
  <MenuItem>All programs</MenuItem>
</Menu>

        </>
    );
};

export default NavHome;