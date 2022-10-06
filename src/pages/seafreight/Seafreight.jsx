import React, { useEffect } from 'react'
import './saefreight.css'
import Service from '../../components/service/Service'
import Contact from '../../components/contact/Contact'



const Seafreight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className='seaFreight'>
         <img src="https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />

    <div className="seaFreightHeaderText">
      <h1>Sea Freight</h1>
    </div>
    </div>
    <Service/>
    <Contact/>
    </>
  )
}

export default Seafreight