import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

import logo from "../../images/E_resize.webp";
import { Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";

import NavDrawer from "../navDrawer/NavDrawer";
import { styled, alpha } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import express_icon1 from '../../images/express_icon1.svg'
import imex_icon1 from '../../images/imex_icon1.svg'
import customs_icon1 from "../../images/customs_icon1.svg";
import air_icon1 from "../../images/air_icon1.svg";
import sea_icon1 from "../../images/sea_icon1.svg";

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
          <img src={logo} alt="East asia shipping company logo" width="85px" height="85px" />
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
                   <img src={express_icon1} alt="" style={{ width: '24px', height: '24px', marginRight: '12px' }} />
                    <Button
                      to="/courier"
                      component={Link}
                      className="navDropdownItem"
                    >
                      Express Service
                    </Button>
                  </MenuItem>

                   <MenuItem onClick={handleClose} disableRipple>
                    <img src={imex_icon1} alt="" style={{ width: '24px', height: '24px', marginRight: '12px' }} />
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
                  <img src={air_icon1} alt="" style={{ width: '24px', height: '24px', marginRight: '12px' }} />
                    <Button
                      to="/airfreight"
                      component={Link}
                      className="navDropdownItem"
                    >
                      Air Freight
                    </Button>
                  </MenuItem>

                  <MenuItem onClick={handleClose} disableRipple>
                  <img src={sea_icon1} alt="" style={{ width: '24px', height: '24px', marginRight: '12px' }} />
                    <Button
                      to="/seafreight"
                      component={Link}
                      className="navDropdownItem"
                    >
                      Sea Freight
                    </Button>
                  </MenuItem>

                  <MenuItem onClick={handleClose} disableRipple>
                  <img src={customs_icon1} alt="" style={{ width: '24px', height: '24px', marginRight: '12px' }} />
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

              <Tab label="Blog" to="/blog" component={Link} />

              <Tab label="Contact us" to="/contactform" component={Link} />
            </Tabs>

            <Button
              href="https://page.line.me/999piqzj"
              sx={{
                marginLeft: "auto",
                padding: "6px 12px",
                background: "#E6AF4B",
                borderRadius: "5px",
                color: "#000000",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                
              }}
              className="navBtn"
            >
              <FlightTakeoffIcon /> เริ่มต้นส่งของกับเรา
            </Button>
          </>
        )}
      </Toolbar>
    </nav>
  );
};

export default Navbar;
