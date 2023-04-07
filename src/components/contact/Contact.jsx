import React from 'react'
import './contact.css'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <Box className='contactContainer'>
    <Typography className='contactText'>
        <h1>Shipping ดำเนินพิธีการศุลกากร บริการแก้ใขปัญหา การเสียภาษีนำเข้า ติดต่อเรา เพื่อรับข้อมูลเพิ่มเติม</h1>
    <div className="contactButton">
      <Button component={Link}
      to='/quotation'
      className='contactBtn'>โทรหาเรา</Button>
    <Button href="tel:0867780808"
    className='contactBtn'>ติดต่อทางไลน์</Button>
    </div>
    </Typography>
    </Box>
    </>
  )
}

export default Contact