import React from 'react'
import './contact.css'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import contactBg from '../../images/contactBg.png'
// import videocover from '../../images/videocover.mp4'
// import thumbnail from "../../images/thumbnail.png";


const Contact = () => {
  return (
    <>
    <Box className='contactContainer'>
      <img src={contactBg} alt="" />
      {/* <video loading="lazy"
          autoPlay
          playsInline
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
            zIndex: "1",
          }}
          poster={thumbnail}>
        <source src={videocover} type="video/mp4" />
      </video> */}
    <Typography className='contactText'>
        <h1>"Shipping ดำเนินพิธีการศุลกากรบริการแก้ใขปัญหาการเสียภาษีนำเข้า ติดต่อเพื่อรับข้อมูลเพิ่มเติม"</h1>
    <div className="contactButton">
      <Button href='tel:0867780808'
      className='contactBtn'>โทรหาเรา</Button>
    <Button href="https://page.line.me/999piqzj"
    className='contactBtn'>ติดต่อทางไลน์</Button>
    </div>
    </Typography>
    </Box>
    </>
  )
}

export default Contact