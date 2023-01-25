import React, { useState } from "react";
import {
  SwipeableDrawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import Divider from "@mui/material/Divider";

import "./navDrawer.css";

const NavDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <SwipeableDrawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List
          sx={{
            padding: "16px",
          }}
        >
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText style={{textAlign: 'center'}}>
              <ListItemIcon>
                <Link to="/">Home</Link>
              </ListItemIcon>
            </ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemText style={{textAlign: 'center'}}>
            <ListItemIcon>
                <Link to="/about">About us</Link>
            </ListItemIcon>
              </ListItemText>
          </ListItemButton>

          <Divider sx={{ my: 0.5 }} />

          <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemText style={{textAlign: 'center'}}>
            <ListItemIcon>
                <Link to="/courier">Express service</Link>
            </ListItemIcon>
              </ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemText style={{textAlign: 'center'}}>
            <ListItemIcon>
                <Link to="/import-export">Import/Export</Link>
            </ListItemIcon>
              </ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemText style={{textAlign: 'center'}}>
            <ListItemIcon>
                <Link to="/airfreight">Air Freight</Link>
            </ListItemIcon>
              </ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemText style={{textAlign: 'center'}}>
            <ListItemIcon>
                <Link to="/seafreight">Sea Freight</Link>
            </ListItemIcon>
              </ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemText style={{textAlign: 'center'}}>
            <ListItemIcon>
                <Link to="/customclearance">Custom Clearance</Link>
            </ListItemIcon>
              </ListItemText>
          </ListItemButton>

          <Divider sx={{ my: 0.5 }} />

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <Button variant="contained" style={{backgroundColor: "#E6AF4B"}}>
                <Link to="/contactform">Get quotation</Link>
              </Button>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemText style={{textAlign: 'center'}}>
            <ListItemIcon>
                <Link to="/contactform">Contact us</Link>
            </ListItemIcon>
              </ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default NavDrawer;
