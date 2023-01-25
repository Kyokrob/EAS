import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Airfreight from './pages/airfreight/Airfreight'
import Seafreight from './pages/seafreight/Seafreight'
import ContactForm from './pages/contactForm/ContactForm'
import Customclearance from './pages/costomclearance/Costomclearance'
import Importexport from './pages/importexport/Importexport'
import Courier from './pages/courier/Courier'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'






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
      </Routes>
      <Footer/>
    </Router>
  )
}


export default App;