import React from 'react'
import './quotation.css'
import QuotationForm from '../../components/quotationForm/QuotationForm'
import { useEffect } from 'react'
import Container from '@mui/material/Container'


const Quotation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    

  return (
    <Container>
    <div className='quotation'>
    <QuotationForm/>
    </div>
    </Container>
  )
}

export default Quotation