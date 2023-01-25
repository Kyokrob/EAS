import React from 'react'
import './faq.css'
import { Link } from 'react-router-dom'

import Container from '@mui/material/Container'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    
  return (
    <>
        <Container className='faq'>
            <h1>คำถามที่พอบ่อยสำหรับผู้เริ่มต้นนำเข้าส่งออก</h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Import/Export
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>FCL / LCL คืออะไร ต่างกันอย่างไร และทำไมถึงต้องรู้</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           เมื่อคุณต้องการนำเข้าสินค้าจากทางเรื่อง (sea freight) สิ่งที่ควรคำนึงในอย่างแรกคือ สินค้าเราต้องการส่งแบบเต็มตู้ container หรือ รวมตู้เข้ามา
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Import Tax</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          อากรขาเข้า ภาษีสรรพสามิต ภาษีเพื่อมหาดไทย ภาษีมูลค่าเพิ่ม
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet...... <Link to='/customclearance'>Talk to us</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Import/Export
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>WHat is different between LCL and FCL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            FULL container load and Less container load is the main information what we will reqiuired when import/export by sea freight
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Import/Export
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>WHat is different between LCL and FCL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            FULL container load and Less container load is the main information what we will reqiuired when import/export by sea freight
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
    </>
  )
}

export default Faq