import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import contactBg from "../../images/contactBg-resize.webp";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Box className="contactContainer">
        <img src={contactBg} alt="ชิปปิ้งดำเนินพิธีการศุลกากร" />
        <Typography className="contactText">
          <h1>
            "Shipping ดำเนินพิธีการศุลกากรบริการแก้ใขปัญหาการเสียภาษีนำเข้า
            ติดต่อเพื่อสอบถามเจ้าหน้าที่"
          </h1>
          <div className="contactButton">
            <Tooltip title="หน้าหลัก">
            <Button component={Link} to="/" className="contactBtn">
              <HomeIcon className="home-icon" />
            </Button>
            </Tooltip>
            <Tooltip title="พูดคุยสอบถาม">
              <Button
                href="https://page.line.me/999piqzj"
                className="contactBtn"
              >
                <ChatIcon className="home-icon" />
              </Button>
            </Tooltip>
            <Tooltip title="ติดต่อเรา">
              <Button href="tel:0867780808" className="contactBtn">
                <CallIcon className="home-icon" />
              </Button>
            </Tooltip>
           <Tooltip title="ส่ง Email">
           <Button href="mailto:sarit@easthai.com" className="contactBtn">
              <EmailIcon className="home-icon" />
            </Button>
           </Tooltip>
          </div>
        </Typography>
      </Box>
    </>
  );
};

export default Contact;
