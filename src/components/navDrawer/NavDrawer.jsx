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
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

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
            <ListItemText style={{ textAlign: "center" }}>
              <ListItemIcon>
                <Link to="/">Home</Link>
              </ListItemIcon>
            </ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText style={{ textAlign: "center" }}>
              <ListItemIcon>
                <Link to="/about">About us</Link>
              </ListItemIcon>
            </ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText style={{ textAlign: "center" }}>
              <ListItemIcon>
                <Link to="/about">Contact us</Link>
              </ListItemIcon>
            </ListItemText>
          </ListItemButton>

          <Divider sx={{ my: 0.5 }} />

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText style={{ textAlign: "center" }}>
              <ListItemIcon>
                <Link to="/courier">Express service</Link>
              </ListItemIcon>
            </ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText style={{ textAlign: "center" }}>
              <ListItemIcon>
                <Link to="/import-export">Import/Export</Link>
              </ListItemIcon>
            </ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText style={{ textAlign: "center" }}>
              <ListItemIcon>
                <Link to="/airfreight">Air Freight</Link>
              </ListItemIcon>
            </ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText style={{ textAlign: "center" }}>
              <ListItemIcon>
                <Link to="/seafreight">Sea Freight</Link>
              </ListItemIcon>
            </ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText style={{ textAlign: "center" }}>
              <ListItemIcon>
                <Link to="/customclearance">Custom Clearance</Link>
              </ListItemIcon>
            </ListItemText>
          </ListItemButton>

          <Divider sx={{ my: 0.5 }} />

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <Button
                variant="contained"
                style={{ backgroundColor: "#E6AF4B" }}
              >
                <Link to="/quotation">Get quotation</Link>
              </Button>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: "#042B3B",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    borderRadius: "4px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.2s ease-in-out",
                    cursor: "pointer",
                  }}>
              <ListItemIcon>
                <Button
                  href="https://page.line.me/999piqzj"
                  style={{
                    color: "#E6AF4B",
                  }}
                >
                  <FlightTakeoffIcon style={{ marginRight: "5px" }} />
                  <p style={{ display: "inline" }}>ส่งของกับเรา</p>
                </Button>
              </ListItemIcon>
            </ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
        aria-label="Navdrawer"
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default NavDrawer;
