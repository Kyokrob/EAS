import React, { useState } from 'react'
// import Drawer from '@mui/material/Drawer'
// import List from '@mui/material/List'
import { SwipeableDrawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom'

import './navDrawer.css'


const NavDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
        <SwipeableDrawer open={openDrawer}
        onClose={()=>setOpenDrawer(false)}>
            <List sx={{
                padding: "12px"
            }}>
                <ListItemButton sx={{
                    justifyContent: "center"
                }}>
                    <ListItemIcon >
                        <ListItemText>
                            <Link to="/">Home</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton sx={{
                    justifyContent: "center"
                }}>
                    <ListItemIcon>
                        <ListItemText>
                            <Link to="/about">About us</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton >
                <ListItemButton sx={{
                    justifyContent: "center"
                }}>
                    <ListItemIcon>
                        <ListItemText>
                            <Link to="/">Contact us</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton sx={{
                    justifyContent: "center"
                }}>
                    <ListItemIcon>
                        <Button variant='contained'>
                            <Link to="/">Get quotation</Link>
                        </Button>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </SwipeableDrawer>
        <IconButton sx={{marginLeft: "auto"}} onClick={()=> setOpenDrawer(!openDrawer)}>
            <MenuIcon/>
        </IconButton>
    </>
  )
}

export default NavDrawer