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
        <h1>บริการเคลียร์สินค้า, ภาษีนำเข้า, จัดการเอกสาร, ติดใบอนุญาต <br /> ให้เราช่วยเหลือ</h1>
    <div className="contactButton">
      <Button component={Link}
      to='/quotation'
      className='contactBtn'>ขอใบเสนอราคา</Button>
    <Button href="https://page.line.me/999piqzj"
    className='contactBtn'>ติดต่อทางไลน์</Button>
    </div>
    </Typography>
    </Box>
    </>
  )
}

export default Contact