import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home'
import About from './pages/about/About'
import Airfreight from './pages/airfreight/Airfreight'
import Seafreight from './pages/seafreight/Seafreight'
import ContactForm from './pages/contactForm/ContactForm'
import Customclearance from './pages/costomclearance/Costomclearance'
import Importexport from './pages/importexport/Importexport'
import Courier from './pages/courier/Courier'
import Quotation from './pages/quotation/Quotation';


import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


import ReactGA from "react-ga4";



ReactGA.initialize("G-Q0L13E0QBK");


const App = () => {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/airfreight" element={<Airfreight/>}></Route>
        <Route path="/seafreight" element={<Seafreight/>}></Route>
        <Route path="/contactform" element={<ContactForm/>}></Route>
        <Route path="/customclearance" element={<Customclearance/>}></Route>
        <Route path="/import-export" element={<Importexport/>}></Route>
        <Route path="/courier" element={<Courier/>}></Route>
        <Route path="/quotation" element={<Quotation/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}


export default App;