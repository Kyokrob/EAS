import React, { useState } from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom'


import Appbar from '@mui/material/Appbar'
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

import logo from "../../images/easlogo-resize.jpg"
import { Tabs, Tab, useMediaQuery, useTheme } from '@mui/material';

import NavDrawer from '../navDrawer/NavDrawer';


const Navbar = () => {
  const [value, setValue] = useState();

  const theme = useTheme()
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch)


  return (
        <Appbar position="sticky" color='inherit'>
            <Toolbar>
              <Link to='/' className="companylogo">
                <img src={logo} alt="" width="85px" height="75px" />
              </Link>


              {
                isMatch ? (
                  <>
                  <NavDrawer/>
                  </>
                ) : (
                  <>
                  <Tabs textColor='primary' value={value} onChange={(e,value)=> setValue(value)} indicatorColor="primary" sx={{
                marginLeft: "auto",
              }}>
                <Tab label="About us" to='/about' component={Link}/>
                <Tab label="Our service" to='/' component={Link} />
                <Tab label="Learn" to='/airfreight' component={Link}/>
              </Tabs>

              <Button to='/contactform' component={Link} variant="contained" sx={{
                marginLeft: "auto",
              }}>Get quotation</Button>
              </>
                )
              }
              

    
            </Toolbar>
        </Appbar>  
        )
}

export default Navbar