import React from 'react'
import './contact.css'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import contactImg from '../../images/contact-background.png'

const Contact = () => {
  return (
    <>
    <Box className='contactContainer'>
    <img src={contactImg} alt="" />
    <Typography className='contactText'>
        <h1>เริ่มต้นส่งของกับเราง่ายๆ
เลือกส่งในราคาประหยัดกับเราด้วยข้อเสนอพิเศษ !</h1>
    <Button className='contactBtn'>ติดต่อเรา</Button>
    </Typography>
    </Box>
    </>
  )
}

export default Contact