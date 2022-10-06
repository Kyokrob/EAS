import React, { useEffect } from 'react'
import './airfreight.css'
import Service from '../../components/service/Service'
import Contact from '../../components/contact/Contact'

const Airfreight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className='airFreight'>
      <img src="https://images.unsplash.com/photo-1571086291540-b137111fa1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />

      <div className="airFreightHeaderText">
            <h1>Air Freight</h1>
    </div>
    </div>
    <Service/>
    <Contact/>
    </>
    
  )
}

export default Airfreight