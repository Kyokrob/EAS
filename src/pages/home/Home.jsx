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
import B2bSolutions from "../../components/b2bSolutions/B2bSolutions";
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
          <h5>About us</h5>
          <h1>ตัวแทนของผู้นำเข้าส่งออกขนส่งสินค้าระหว่างประเทศ</h1>
          <p>
            บริการ Freight Forwarder ขนส่งทางเรือ - เครื่องบิน และ
            บริการเดินพิธีการศุลกากร
            ช่วยผู้ขนส่งประเมินค่าภาษีและเช็คพิกัดสินค้า
            พร้อมจัดเตรียมและยื่นเอกสารการขนส่ง
          </p>
        </div>
        <div className="aboutHomeImg">
          <img src={abouthome} alt="" />
        </div>
      </div>

      {/* About end */}


      <div className="ourService-home">
      {/* <Box
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
              <h3>เชื่อถือได้ - มากประสบการณ์</h3>
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
              <h3>เช็คพิกัดสินค้า คำนวนถาษีนำเข้า ฟรี</h3>
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
              <h3>พนักงานได้รับใบรับรอบจากกรมศุลกากร</h3>
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
              <h3>ผ่านการรับรองจากสมาคมชิปปิ้งแห่งประเทศไทย</h3>
            </div>
          </div>
        </Box> */}
        <OurService />
      </div>

      {/* Our Service end */}

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
              <h3>ติดต่อรับใบเสนอราคา</h3>
              <p>
                กรอกรายละเอียดการจัดส่งสินค้า เช่น ประเภทสินค้า น้ำหนัก ขนาด และ
                ประเทศต้นทางปลายทาง
              </p>
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
              <h3>ตรวจสอบและยืนยัน</h3>
              <p>
                เมื่อได้รับใบเสนอราคา
                คุณสามารถตรวจสอบและแจ้งหน้าที่เพื่อยืนยันการจัดส่งได้
              </p>
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
              <h3>เตรียมการขนส่ง</h3>
              <p>จัดเตรียมเอกสารสำคัญเพื่อทำการจัดส่งสินค้าและ</p>
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
              <h3>ยืนยันและติดตาม</h3>
              <p>
                ยืนยันการขนส่ง
                พร้อมช่วยคุณติดตามและอัพเดตข้อมูลสถานะส่งสินค้าของคุณ
              </p>
            </div>
          </div>
        </Box>
        <Slider />
        <B2bSolutions />

        {/* B2b end */}
        <div class="homeFaqContainer">
          <div class="homeFaqBackground"></div>
          <div class="homeFaq">
            <Faq />
          </div>
        </div>
        <GetQuotation />
      </div>

      <Contact />
    </>
  );
};

export default Home;
