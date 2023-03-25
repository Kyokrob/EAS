import React from "react";
import "./home.css";
// import Service from "../../components/service/Service";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RecommendIcon from "@mui/icons-material/Recommend";
import GppGoodIcon from "@mui/icons-material/GppGood";

import Box from "@mui/material/Box";
import Form from "../../components/form/Form";
import BrandTestimonial from "../../components/brandTestimonial/BrandTestimonial";


import { useEffect } from "react";
import eas03 from "../../images/eas-03-resize.webp";
import eas04 from "../../images/eas-04-resize.webp";
import eas05 from "../../images/eas-05-resize.webp";
import seahome from "../../images/home_sea.png";
import airhome from "../../images/home_air.png";
import cover4 from "../../images/cover4.gif";

import { Helmet } from "react-helmet";

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
        <title>
          EASTHAI - บริการ ขนส่ง สินค้า นำเข้า ส่งออก สินค้าต่างประเทศ{" "}
        </title>
      </Helmet>
      <div className="header">
        <img
          src="https://cdn.pixabay.com/photo/2021/03/28/16/22/port-6131793_1280.jpg"
          alt="ชิปปิ้ง"
        />
        <div className="headerText">
          <h1>EASTHAI</h1>
          <h3>EST. 1996</h3>
          <h2>One stop service for import and exporters</h2>
          <div className="headerBtn">
            <Button
              to="/courier"
              component={Link}
              sx={{
                padding: "12px 24px",
                background: "#e6af4b",
                borderRadius: "10px",
                color: "white",
                marginTop: "2rem",
              }}
            >
              EAS EXPRESS
            </Button>
            <Button
              to="/quotation"
              component={Link}
              sx={{
                padding: "12px 24px",
                background: "transparent",
                border: "1px solid #e6af4b",
                borderRadius: "10px",
                color: "#e6af4b",
                marginTop: "2rem",
              }}
            >
              Get Quotation
            </Button>
          </div>

          <a aria-label="scrolldown" id="scroll-btn" href="#section-2">
            .
          </a>
        </div>
      </div>

      <div className="contactSection" id="section-2">
        <h1>
          ติดขัดปัญหาการนำเข้าสินค้า, พัสดุไปรษณีย์, ท่าเรือ, DHL, FEDEX, UPS,
          TNT
        </h1>
        <Button href="tel:0867780808">ติดต่อเจ้าหน้าที่</Button>
      </div>

      <div className="about1">
        <div className="about1Text">
          <h1>ตัวแทนของผู้ส่งออกและผู้นำเข้าในการจัดส่งสินค้าระหว่างประเทศ</h1>
        </div>

        <div className="about1Cards">
          <div className="about1Card" data-aos="slide-up">
            <img src={eas04} alt="Shipping freight ภาษีนำเข้า" />
            <div className="about1CardText">
              <h1>Express support</h1>
              <p>
                บริการช่วยเหลือสำหรับผู้นำเข้าสินค้าเร่งด่วน (Courier express)
                Fedex, DHL, Tnt พร้อมแก้ใขปัญหาการนำเข้าสินค้าจากต่างประเทศ{" "}
              </p>
              <Button
                sx={{
                  padding: "4px",
                  background: "transparent",
                  border: "1px solid #ffffff",
                  borderRadius: "10px",
                  color: "white",
                }}
                className="contactSectionBtn"
                to="/courier"
                component={Link}
              >
                <ArrowForwardIosIcon />
              </Button>
            </div>
          </div>

          <div className="about1Card" data-aos="slide-up">
            <img src={eas03} alt="Freight forwarder" />
            <div className="about1CardText">
              <h1>Freight Forwarder</h1>
              <p>
                บริการดำเนินการนำเข้าส่งออกและงานเอกสาร
                หากคุณมีทีมงานมืออาชีพช่วยประสานงาน
                คุณจะสามารถลดได้ทั้งต้นทุนและเวลาได้อย่างมาก
              </p>
              <Button
                sx={{
                  padding: "4px",
                  background: "transparent",
                  border: "1px solid #ffffff",
                  borderRadius: "10px",
                  color: "white",
                }}
                className="contactSectionBtn"
                to="/import-export"
                component={Link}
              >
                <ArrowForwardIosIcon />
              </Button>
            </div>
          </div>

          <div className="about1Card" data-aos="slide-up">
            <img src={eas05} alt="Shipping custom clearance" />
            <div className="about1CardText">
              <h1>Customs clearance</h1>
              <p>
                หรือชิปปิ้ง คือการเตรียมงานเอกสารเพื่อสำแดงภาษีให้กับกรมศุลกากร
                เราเป็นตัวแทนในการเดินพิธีการศุลกากรและเคลียร์สินค้าทั้งขาออกขาเข้าประเทศ
              </p>
              <Button
                sx={{
                  padding: "4px",
                  background: "transparent",
                  border: "1px solid #ffffff",
                  borderRadius: "10px",
                  color: "white",
                }}
                className="contactSectionBtn"
                to="/customclearance"
                component={Link}
              >
                <ArrowForwardIosIcon />
              </Button>
            </div>
          </div>
        </div>

        <Container className="section1">
          <div className="left">
            <img
              src={airhome}
              alt="ชิปปิ้ง นำเข้า เคลียร์สินค้า shipping freight company"
            />
          </div>
          <div className="rightAboutHome">
            <h3 data-aos="slide-up">Air freight service</h3>
            <p>
              การขนส่งทางอากาศเหมาะสำหรับพัสดุ
              สินค้าขนาดเล็กที่ต้องการความรวดเร็ว
              ช่วยให้คุณมั่นใจได้ว่าสินค้าของคุณจะถึงปลายทางได้ตรงเวลา
            </p>

            <Link to="/airfreight">
              <button>อ่านเพิ่มเติม</button>
            </Link>
          </div>
        </Container>

        <Container className="section11">
          <div className="left11">
            <img src={seahome} alt="shipping freight company" />
          </div>
          <div className="rightAboutHome">
            <h3 data-aos="slide-up">Sea freight service</h3>
            <p>
              การขนส่งสินค้าที่มีปริมาณมากหรือสินค้าที่มีขนาดใหญ่
              ไม่ต้องคำนึงถึงระยะเวลาในการขนส่ง
            </p>
            <p>
              การขนส่งทางเรือจะใช้ระบบตู้คอนเทนเนอร์ในการส่งสินค้าโดยค่าขนส่งนั้นจะถูกที่สุดเมื่อเทียบกับการขนส่งรูปแบบอื่นๆ
            </p>
            <Link to="/seafreight">
              <button>อ่านเพิ่มเติม</button>
            </Link>
          </div>
        </Container>
      </div>

      {/* Section3 */}
      <div className="section3">
        <div className="section3Title">
          <h1>
            Trust our team to deliver your goods with secure and efficient
            logistics.
          </h1>
        </div>
        <Box
          className="boxCardHome"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div className="cardHome">
            <div className="cardTop">
              <h1>25+</h1>
            </div>
            <div className="cardContent">
              <h3>Years experience</h3>
              <p>ขนส่งชัดเจนมีมาตรฐาน ให้คำแนะนำผ่านทีมงานมืออาชีพ</p>
            </div>
          </div>

          <div className="cardHome">
            <div className="cardTop">
              <div className="cardTopIcon">
                <RecommendIcon fontSize="54px" />
              </div>
            </div>
            <div className="cardContent">
              <h3>Efficiency</h3>
              <p>จัดส่งสินค้าอย่างมีประสิทธิภาพรวดเร็วและปลอยภัย</p>
            </div>
          </div>

          <div className="cardHome">
            <div className="cardTop">
              <GppGoodIcon fontSize="48px" />
            </div>
            <div className="cardContent">
              <h3>Reliable</h3>
              <p>
                มีความชำนาญเป็นพิเศษในกลุ่มสินค้า Beauty, Food, Electronic,
                Medicine
              </p>
            </div>
          </div>
        </Box>

        <BrandTestimonial/>


        <Container className="sec4">
          <div className="sec4Left">
            <img src={cover4} alt="" />
          </div>
          <div className="sec4Right">
            <h1>EAST ASIA SHIPPING (THAILAND)</h1>
            <p>
              Provides seamless logistics solutions, including freight
              forwarding and customs clearance services. We specialize in
              streamlining the shipping process, providing personalized support,
              and ensuring goods reach their destination quickly and
              efficiently.
            </p>
            <Link to="/quotation" className="sec4Btn">
              <button>Get Quotation</button>
            </Link>
          </div>
        </Container>
      </div>
      {/* <Service /> */}


      <div className="homeForm">
        <div className="homeFormRight">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Home;
