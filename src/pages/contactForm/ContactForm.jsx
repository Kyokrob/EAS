import React, {useEffect} from 'react'
import './contactForm.css'
import Contact from '../../components/contact/Contact'
import Form from '../../components/form/Form'
import Container from '@mui/material/Container'


const ContactForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="contactFormHeader">
        <h1>Contact Us</h1>
        <h3>ยินดีให้บริการทุกช่องทาง</h3>
      </div>
    <Container className='contactForm'>
        <div className="contactForm1">
            <div className="contactForm1Left">
            <h1>Efficient, Effective, and Reliable service for your logistic Needs</h1>
              <p>To receive a quotation for your upcoming shipment, please fill out the form provided. Once completed, our team will contact you back with a competitive and accurate pricing for your logistic needs.</p>
              <p>
              Not ready for a quote yet, but still have questions? <p className='contactFormContact'>Contact us now.</p>
              </p>
            </div>
            <div className="contactForm1Right">
                <Form/>
            </div>
        </div>
        <div className="contactForm2">
            <div className="contactForm2Top">
            <h1>Where we locate</h1>
            <p >TEL : <a href="tel:022359100">02 235 9100</a> or <a href="tel:0867780808">086 778 0808</a></p>
            <p >ADDRESS : 141/32 อาคารสกุลไทย-สุรวงศ์ทาวเวอร์ ชั้น 23 ถนนสุรวงศ์ แขวงสุริยวงศ์ เขตบางรัก กรุงเทพมหานคร 10500</p>
            <p >EMAIL : admin@easthai.com</p>
            <p >LINE : @easthai or <a href="https://page.line.me/999piqzj">Click here !</a></p>
            </div>

            <div className="contactForm2Btm">
                <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.817447021707!2d100.5288556151327!3d13.729499601508133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f2bbc161f97%3A0xe5e951bf33dc1521!2sEast%20Asia%20Shipping%20(Thailand)%20LTD.!5e0!3m2!1sen!2sth!4v1666009792377!5m2!1sen!2sth" width="550" height="550" style={{ border : 0 }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </Container>
            <Contact/>
    </>
  )
}

export default ContactForm