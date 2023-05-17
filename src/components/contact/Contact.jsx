import React from 'react'
import './contact.css'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Contact = () => {
  return (
    <>
    <Box className='contactContainer'>
    <Typography className='contactText'>
        <h1>Shipping ดำเนินพิธีการศุลกากรบริการแก้ใขปัญหาการเสียภาษีนำเข้า ติดต่อเพื่อรับข้อมูลเพิ่มเติม</h1>
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