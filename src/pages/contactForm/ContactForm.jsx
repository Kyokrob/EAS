import React from 'react'
import './contactForm.css'
import Service from '../../components/service/Service'
import Contact from '../../components/contact/Contact'
import Form from '../../components/form/Form'
import Container from '@mui/material/Container'


const ContactForm = () => {
  return (
    <>
    <Container className='contactForm'>
        <div className="contactForm1">
            <div className="contactForm1Left">
            <h1>You're One Step Closer to Becoming the Supplier That Always Delivers</h1>
              <p>There's a lot at stake for you when it comes to picking a transportation provider you trust to move your freight. If you make the wrong choice, it can be truly detrimental to your business and your reputation.</p>
              <p>
              Not ready for a quote yet, but still have questions? <a href="" className='contactFormContact'>Contact us now.</a>
              </p>
            </div>
            <div className="contactForm1Right">
                <Form/>
            </div>
        </div>
        <div className="contactForm2">
            <div className="contactForm2Top">
            <h1>Contact us</h1>
            <a href="">TEL : 02 236 2866</a>
            <a href="">ADDRESS : 141/32 Sakulthai-Surawong Tower 23 Fl, Surawong Rd, Bangrak , Bangkok 10500</a>
            <a href="">EMAIL : admin@easthai.com</a>
            <a href="">LINE@ : easthai </a>
            </div>

            <div className="contactForm2Btm">
                <div className="googleMap">
                google map location here....
                </div>
            </div>
        </div>
    </Container>
            <Service/>
            <Contact/>
    </>
  )
}

export default ContactForm