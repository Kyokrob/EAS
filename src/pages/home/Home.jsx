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
              สำหรับขอใบเสนอราคา กรอบข้อมูลสำหรับเจ้าหน้าที่เพื่อทำการติดต่อกลับ
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
          <h5>Who we are</h5>
          <h1>ตัวแทนของผู้ส่งออกและผู้นำเข้าในการจัดส่งสินค้าระหว่างประเทศ</h1>
          <p>
            บริการขนส่งสินค้าระหว่างประเทศ Shipping ดำเนินพิธีการศุลกากร เช็ค
            ภาษีนำเข้า พิกัด ศุลกากร
          </p>
        </div>
        <div className="aboutHomeImg">
          <img src={abouthome} alt="" />
        </div>
      </div>

      {/* About end */}

      {/* Section3 */}
      <div className="section3">
        <div className="section3Title">
          <h1>ขั้นตอนการใช้บริการ</h1>
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
              <h3>กรอกข้อมูลเพื่อใบการขอใบเสนอราคา</h3>
              <p>กรอกข้อมูลให้ครบถ้วนสำหรับในเสนอราคาที่ครอบคลุม</p>
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
              <h3>Revise quotation booking confirm</h3>
              <p>ขนส่งชัดเจนมีมาตรฐาน ให้คำแนะนำผ่านทีมงานมืออาชีพ</p>
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
              <h3>Prepare for shipping</h3>
              <p>จัดส่งสินค้าอย่างมีประสิทธิภาพรวดเร็วและปลอยภัย</p>
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
              <h3>Shipment confirmed</h3>
              <p>
                มีความชำนาญเป็นพิเศษในกลุ่มสินค้า Beauty, Food, Electronic,
                Medicine
              </p>
            </div>
          </div>
        </Box>
        <Slider />
        <OurService />
        <div class="homeFaqContainer">
  <div class="homeFaqBackground"></div>
  <div class="homeFaq">
    <Faq/>
  </div>
</div>

        <GetQuotation />
      </div>
      <Contact />
    </>
  );
};

export default Home;
