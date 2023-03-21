import React from 'react'
import './contact2.css'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Contact2 = () => {
  return (
    <>
    <Box className='contactContainer'>
    <Typography className='contactText'>
        <h1>สอบถามข้อมูล หรือ ปรึกษาวิธีการเริ่มต้น นำเข้า - ส่งออก</h1>
    <div className="contactButton">
    <Button href="https://page.line.me/999piqzj"
    className='contactBtn'>ติดต่อทางไลน์</Button>
    </div>
    </Typography>
    </Box>
    </>
  )
}

export default Contact2