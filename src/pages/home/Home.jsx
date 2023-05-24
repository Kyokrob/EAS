import React from "react";
import "./home.css";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Box from "@mui/material/Box";
import OurService from "../../components/ourService/OurService";
import GetQuotation from "../../components/getQuotation/GetQuotation";
import Form from "../../components/form/Form";
import SliderBrandTestimonial from "../../components/sliderBrandTestimonial/SliderBrandTestimonial";
import Slider from "../../components/slider/Slider";
import Contact from "../../components/contact/Contact";
import Faq from "../../components/faq/Faq";

import abouthome from "../../images/shipnow.svg";
import step1 from "../../images/step1.png";
import step2 from "../../images/step2.png";
import step3 from "../../images/step3.png";
import step4 from "../../images/step4.png";

import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import img7 from '../../images/img7.png'
import img8 from '../../images/img8.png'
import img9 from '../../images/img9.png'
import img11 from '../../images/img11.png'
import img13 from '../../images/img13.png'
import img14 from '../../images/img14.png'


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Helmet>
        <title>EASTHAI - บริการ ขนส่ง สินค้าระหว่างประเทศ </title>
      </Helmet>
      <div className="header">
        <div className="headerLeft">
          <div className="headerText">
            <h1>EASTHAI</h1>
            <h2>บริการ ขนส่ง สินค้าระหว่างประเทศ </h2>
            <h3>
              สำหรับขอใบเสนอราคา กรอกข้อมูลสำหรับเจ้าหน้าที่เพื่อทำการติดต่อกลับ
            </h3>
            <div className="headerForm">
              <Form />
            </div>
          </div>
        </div>

        <div className="headerRight">
          <img
            src="https://cdn.pixabay.com/photo/2021/03/28/16/22/port-6131793_1280.jpg"
            alt="ชิปปิ้ง"
          />
        </div>
      </div>

      {/* Header end */}

      <div className="partnerLogo">
        <SliderBrandTestimonial />
      </div>

      {/* Partner end */}

      <div className="aboutHome">
        <div className="aboutHomeText">
          <h1>ตัวแทนของผู้ส่งออกและผู้นำเข้าในการจัดส่งสินค้าระหว่างประเทศ</h1>
          <p>
            บริการขนส่งสินค้าระหว่างประเทศ Shipping ดำเนินพิธีการศุลกากร ประเมินค่าภาษีนำเข้า และ เช็คพิกัดสินค้า
          </p>
        </div>
        <div className="aboutHomeImg">
          <img src={abouthome} alt="" />
        </div>
      </div>

      {/* About end */}

      <div className="ourService-home">
              <OurService />
      </div>


      {/* Section3 */}
      <div className="section3">
        <div className="section3Title">
          <h1>ขนส่งกับ EASTHAI</h1>
        </div>
        <Box
          className="boxCardHome"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "1rem",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div className="cardHome">
            <div
              className="cardTop"
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={step1} alt="" />
            </div>
            <div className="cardContent">
              <h3>Get Quotation</h3>
              <p>แจ้งข้อมูลกรอกรายละเอียดการจัดส่ง</p>
              {/* <p>ให้ข้อมูลเกี่ยวกับสินค้า เช่น ประเภทสินค้า สถานที่รับและส่ง น้ำหนัก ขนาด และความต้องการพิเศษอื่นๆ เช่น พิธีการศุลกากร ประกันภัย หรือการขนส่งภายในประเทศ</p> */}
            </div>
          </div>
          <div className="cardHome">
            <div
              className="cardTop"
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={step2} alt="" />
            </div>
            <div className="cardContent">
              <h3>Review and submit </h3>
              <p>ตรวจสอบใบเสนอราคา และ ส่งเอกสารที่จำเป็น</p>
             
            </div>
          </div>

          <div className="cardHome">
            <div
              className="cardTop"
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="cardTopIcon">
                <img src={step3} alt="" />
              </div>
            </div>
            <div className="cardContent">
              <h3>Booking confirm</h3>
              <p>ยืนยันจำนวนเงินที่ต้องชำระและค่าธรรมเนียมเพิ่มเติม (ถ้ามี)</p>
            </div>
          </div>

          <div className="cardHome">
            <div
              className="cardTop"
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={step4} alt="" />
            </div>
            <div className="cardContent">
              <h3>Delivery</h3>
              <p>
              ยืนยันว่าบริษัทขนส่งได้รับสินค้าของคุณแล้ว
              </p>
            </div>
          </div>
        </Box>
        <Slider />
        <div class="homeFaqContainer">
          <div class="homeFaqBackground"></div>
          <div class="homeFaq">
            <Faq />
          </div>
        </div> 
        <div className="b2b-container">
          <div className="b2b-box">
           <div className="b2b-left">
            <div className="b2bim1 image-transition">
            <img src={img1} alt="" />
            </div>
            <div className="b2bim2 image-transition">
            <img src={img2} alt="" />
            </div>
            <div className="b2bim3 image-transition">
            <img src={img3} alt="" />
            </div>
            <div className="b2bim4 image-transition">
            <img src={img8} alt="" />
            </div>
            <div className="b2bim5 image-transition">
            <img src={img11} alt="" />
            </div>
           </div>
           <div className="b2b-middle">
           <h1>Industrial business solutions</h1>
            <p>Tailor made solution for your business</p>
            <button>Read more</button>
           </div>
           <div className="b2b-right">
           <div className="b2bim1 image-transition">
            <img src={img14} alt="" />
            </div>
            <div className="b2bim2 image-transition">
            <img src={img7} alt="" />
            </div>
            <div className="b2bim3 image-transition">
            <img src={img4} alt="" />
            </div>
            <div className="b2bim4 image-transition">
            <img src={img9} alt="" />
            </div>
            <div className="b2bim5 image-transition">
            <img src={img13} alt="" />
            </div>
           </div>
          </div>
        </div>


        <GetQuotation />
      </div>

      <Contact />
    </>
  );
};

export default Home;
