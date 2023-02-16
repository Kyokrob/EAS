import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// import TikTokIcon from '@material-ui/icons/TikTok';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerBody">
            <div className="footerTitle">
                <span>Solutions</span>
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
                    <Link to='/'>
                        Work with us
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
                    <Link to='/'>
                    141/32  Sakulthai-Surawong Tower  23 Fl, Surawong Rd, Bangrak , Bangkok 10500
                    </Link>
                </div>

            <div className="footerContactSocial">
            <span>Social media</span>
            <div className="footerContactSocialSubtitle">
            <a href='https://www.facebook.com/easthai.th'>
            <FacebookIcon/>
            </a>
            <a href='https://www.instagram.com'>
            <InstagramIcon/>
            </a>
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