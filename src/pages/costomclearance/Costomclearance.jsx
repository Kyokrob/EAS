import React from 'react'
import './customclearance.css'
import Service from '../../components/service/Service'
import Contact from '../../components/contact/Contact'

const Costomclearance = () => {
  return (
    <>
    <div className='customclearance'>
        <div className="customclearanceHeader">
            Custom clearance section
        </div>
    </div>
    <Service/>
    <Contact/>
    </>
  )
}

export default Costomclearance