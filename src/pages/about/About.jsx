import React from 'react'
import './about.css'

import Container from '@mui/material/Container'
// import Button from '@mui/material/Button'
import { useEffect } from "react";

import Contact from '../../components/contact/Contact'
import Service from '../../components/service/Service'

import video1 from '../../images/eas-video1.mp4'




const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
    <div className="aboutHeader">
      {/* <img src="https://images.unsplash.com/photo-1617952740732-26b1904d6853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" /> */}

      <video
      autoPlay
      loop
      muted
      style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "1"
      }}
      >
        <source src={video1} type="video/mp4"/>
      </video>


      <div className="aboutHeaderText">
            <h1>EAS<a className='aboutHeaderTextHighlight'>
            THAI</a></h1>
            <p>EXPERIENCE IS OUR EXPERTIES</p>
      </div>
    </div>

    <Container className="aboutSection">
      <h1>For Over 20 Years Of Shipping Experience</h1>
      <p>East Asia Shipping ( Thailand) Ltd was established in 1996 as a supply-chain management company whose activity encompasses international Freight Forwarding, Since our inauguration, East Asia Shipping embarked on an endeavors, providing value-added service for our regional base clientele in high yielding and net worth industries, which marked a new milestone for our company.</p>
    </Container>

    <Container className="aboutSection2">
          <div className="aboutLeft">
            <img src="https://images.unsplash.com/photo-1592063648619-7e520034f357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="" />
          </div>
          <div className="aboutRight">
            <h1>More about EASTHAI</h1>
            <p>We provide... Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae magnam error consectetur molestias voluptatibus veniam unde nemo eveniet ipsam!</p>
            
          </div>
      </Container>



    <Container className="aboutSection4">
    <div className="aboutLeft4">
            <img src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
          <div className="aboutRight4">
            <h1>Ever get charge for over TAX when import ?</h1>
            <p>We provide.... Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae magnam error consectetur molestias voluptatibus veniam unde nemo eveniet ipsam!</p>
           
          </div>
    </Container>

    
    

    <div className="aboutSection3">
      <h1>What is our experties, how can we help you.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum tempore modi distinctio dicta repudiandae magnam quae vitae, laboriosam repella.</p>
    </div>

    <Service/>
    <Contact/>

          


    </>
  )
}

export default About