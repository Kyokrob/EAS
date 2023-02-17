import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PhoneIcon from "@mui/icons-material/Phone";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

import logo from "../../images/E_resize.webp";
import { Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";

import NavDrawer from "../navDrawer/NavDrawer";

import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import PostAddIcon from "@mui/icons-material/PostAdd";

import { styled, alpha } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Navbar = () => {
  const [value, setValue] = useState();
  const [navbar, setNavbar] = useState(false);

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const changeBg = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className={navbar ? "navBar active" : "navBar"}>
      <Toolbar className="navTool">
        <Link to="/" className="companylogo">
          <img src={logo} alt="" width="85px" height="85px" />
        </Link>

        {isMatch ? (
          <>
            <NavDrawer />
          </>
        ) : (
          <>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
              indicatorColor="inherit"
              sx={{
                marginLeft: "auto",
              }}
            >
              <Tab label="About us" to="/about" component={Link} />

              <>
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="inherit"
                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Our service
                </Button>

                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                   <MenuItem onClick={handleClose} disableRipple>
                    <DragHandleIcon />
                    <Button
                      to="/courier"
                      component={Link}
                      className="navDropdownItem"
                    >
                      Express Service
                    </Button>
                  </MenuItem>
                   <MenuItem onClick={handleClose} disableRipple>
                    <DragHandleIcon />
                    <Button
                      to="/import-export"
                      component={Link}
                      className="navDropdownItem"
                    >
                      Import / Export
                    </Button>
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <FlightIcon />
                    <Button
                      to="/airfreight"
                      component={Link}
                      className="navDropdownItem"
                    >
                      Air Freight
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <DirectionsBoatFilledIcon />
                    <Button
                      to="/seafreight"
                      component={Link}
                      className="navDropdownItem"
                    >
                      Sea Freight
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <PostAddIcon />
                    <Button
                      to="/customclearance"
                      component={Link}
                      className="navDropdownItem"
                    >
                      Custom clearance
                    </Button>
                  </MenuItem>
                 
                </StyledMenu>
              </>

              <Tab label="Contact us" to="/contactform" component={Link} />
            </Tabs>

            <Button
              href="tel:0867780808"
              sx={{
                marginLeft: "auto",
                padding: "6px 12px",
                background: "#e6af4b",
                borderRadius: "10px",
                color: "#ececec",
              }}
              className="navBtn"
            >
              <PhoneIcon />
            </Button>
          </>
        )}
      </Toolbar>
    </nav>
  );
};

export default Navbar;
