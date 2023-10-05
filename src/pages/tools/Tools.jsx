import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

import './tools.css'
import cal1 from '../../images/cal2.svg'
import CbmCalculator from '../../components/cbmCalculator/CbmCalculator'
import GetQuotation from '../../components/getQuotation/GetQuotation'


const Tools = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
              <Helmet>
        <title>EASTHAI - เครื่องมือคำนวนปริมาตร</title>
        </Helmet>  
    <div className='tools'>
    <div className='toolsBody'>
        <div className="toolBg">
            <img src={cal1} alt="" />
           <div className="toolText">
           </div>
        </div>
        <div className="toolCal">
        <CbmCalculator/>
        </div>
    </div>
    <GetQuotation />
    </div>
    </>
  )
}

export default Tools