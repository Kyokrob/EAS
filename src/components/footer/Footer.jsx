import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';

import Trustpilot from "../../components/trustpilot/Trustpilot";


const Footer = () => {
  return (
    <div className='footer'>
        <Trustpilot/>
        <div className="footerBody">
            <div className="footerTitle">
                <span>Our service</span>
                <div className="footerSubtitle">
                <Link to='/courier'>
                        Express service
                    </Link>
                    <Link to='/import-export'>
                        Import/Export
                    </Link>
                    <Link to='/seafreight'>
                        Sea freight
                    </Link>
                    <Link to='/airfreight'>
                        Air freight
                    </Link>
                    <Link to='/customclearance'>
                        Custom Clearance
                    </Link>
                </div>
            </div>
            <div className="footerTitle">
                <span>Company</span>
                <div className="footerSubtitle">
                    <Link to="/about">
                        About us
                    </Link>
                    <Link to='/contactform'>
                      Contact
                    </Link>
                    <Link to='/blog'>
                        Blog
                    </Link>
                    <Link to='/quotation'>
                        Get quotation
                    </Link>

                </div>
            </div>
            {/* <div className="footerTitle">
                <span>Legal</span>
                <div className="footerSubtitle">
                    <Link to='/'>
                        Legal notice
                    </Link>
                    <Link to='/'>
                        Terms of use
                    </Link>
                    <Link to='/'>
                        Privacy policy
                    </Link>
                </div>
            </div> */}
            <div className="footerContact">
                <span>Contact us</span>
                <div className="footerContactSubtitle">
                <div className="contact-1">
                    <Tooltip title="Call us">
                    <a href="tel:022359100">
                <CallIcon/>
                    </a>
                    </Tooltip>
                   <Tooltip title="Send us Email">
                   <a href="mailto:sales@easthai.com">
                <EmailIcon/>
                    </a>
                   </Tooltip>
                    <Tooltip title="Chat with us">
                    <a href="https://page.line.me/999piqzj">
                <ChatIcon/>                   
                </a>
                    </Tooltip>
                </div>
                
                </div>

            <div className="footerContactSocial">
            <span>Social media</span>
            <div className="footerContactSocialSubtitle">
            <Tooltip title="Facebook">
            <a href='https://www.facebook.com/easthai.th'>
            <FacebookIcon/>
            </a>
            </Tooltip>
            <Tooltip title="Instagram">
            <a href='https://www.instagram.com'>
            <InstagramIcon/>
            </a>
            </Tooltip>
            {/* <Link to="https://www.tiktok.com/@easthai.express">
            <TikTokIcon/>
            </Link> */}
            </div>
            </div>

            </div>
        </div>
        <p className='footerText'>Copyright &copy; 2023 EASTHAI</p>
    </div>
  )
}

export default Footer