import React, { useEffect } from "react";
import "./courier.css";
import { Link } from "react-router-dom";
import Contact from "../../components/contact/Contact";
import Container from "@mui/material/Container";
import Slider from "../../components/slider/Slider";
import Button from "@mui/material/Button";
import planeImg from "../../images/express1.webp";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Courier = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Helmet>
        <title>EASTHAI - บริการเคลียร์สินค้านำเข้า</title>
      </Helmet>
      <div className="courier">
        <Container className="courierHeader">
          <h1>Express service</h1>
          <p>สั่งของจากต่างประเทศ ติดขัดปัญหาการนำเข้าสินค้า</p>
          <p>ไปรษณีย์,ท่าเรือ, DHL, FEDEX, UPS, TNT</p>
          <Button
            href="tel:0867780808"
            className="courierHeaderbtn"
            sx={{
              padding: "12px 24px",
              background: "transparent",
              border: "1px solid #ffffff",
              borderRadius: "10px",
              color: "#ffffff",
              marginTop: "2rem",
            }}
          >
            ติดต่อทีมงาน
          </Button>

          {/* <div className="courierHeaderBtn">
            <p>
              <a href="tel:0867780808">ติดต่อทีมงาน</a>
            </p>
          </div> */}
        </Container>
      </div>

      <Container className="courier1">
        <div className="courierTable">
          <div className="table-box">
            <div className="boxTitle">01</div>
            <div className="boxDetail" data-aos="slide-up">
              EAS Express service คือบริการช่วยเหลือผู้นำเข้าสินค้า
              พร้อมให้คำปรึกษาปัญหาสำหรับการนำเข้าสินค้าพร้อมช่วยเหลือและแก้ใข
              ด้วยประสบการณ์โดยตรงมากกว่า 25 ปี
            </div>
          </div>
          <div className="table-box">
            <div className="boxTitle">02</div>
            <div className="boxDetail" data-aos="slide-up">
              สินค้าของท่านจะผ่านพิธีการศุลกากรอย่างรวดเร็ว
              ดูแลผ่านทีมงานมืออาชีพ ดำเนินการให้ครบทุกขั้นตอน
            </div>
          </div>
          <div className="table-box">
            <div className="boxTitle">03</div>
            <div className="boxDetail" data-aos="slide-up">
              ปัญหาสินค้า คลังสินค้าสุวรรณภูมิ, สนามบินสุวรรณภูมิ, ไปรษณีย์,
              ท่าเรือ, DHL, FEDEX, UPS, TNT ต่างๆ
            </div>
          </div>
          <div className="table-box">
            <div className="boxTitle">04</div>
            <div className="boxDetail" data-aos="slide-up">
              ด้านใบอนุญาตินำเข้า พิกัดศุลกากร การใช้ฟอร์มนำเข้าต่างๆ หรือ
              เอกสารผิดพลาด
            </div>
          </div>
          <div className="table-box">
            <div className="boxTitle">05</div>
            <div className="boxDetail" data-aos="slide-up">
              ให้คำปรึกษา แนะนำ และวางแผน คำนวนค่าภาษี สำหรับผู้นำเข้า
            </div>
          </div>
          <div className="table-box-contact">
            <div className="boxTitle-contact">
              <CalendarMonthIcon fontSize="48px" />
            </div>
            <div className="boxDetail">
              สนใจบริการของเรา
              <br />
              <Button
                to="/contactform"
                component={Link}
                sx={{
                  padding: "8px",
                  background: "transparent",
                  borderRadius: "10px",
                  color: "#042B3B",
                  marginTop: "12px",
                  textDecoration: "underline"
                }}
              >
                โทรติดต่อ
              </Button>
              <Button
                to="/contactform"
                component={Link}
                sx={{
                  padding: "8px",
                  background: "transparent",
                  borderRadius: "10px",
                  color: "#042B3B",
                  marginTop: "12px",
                  textDecoration: "underline"

                }}
              >
                ขอใบเสนอราคา
              </Button>
             
            </div>
          </div>
        </div>
      </Container>

      <Container className="courier2">
        <div className="courier2Left">
          <h3>ข้อควรรู้ก่อนเริ่มต้นนำเข้า</h3>

          <div className="courierFaq">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ color: "text.secondary" }}>
                  ไม่เคยนำเข้า-ส่งออกเลย แต่อยากนำเข้าสินค้าในนามบริษัท
                  (สินค้าเป็นสมุดโน้ต) ขอคำปรึกษาเบื้องต้น ว่าควรทำอย่างไร
                  ติดต่อหน่วยงานไหน สามารถนำเข้าได้เลยไหม หรือต้องทำอะไรก่อน
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  เบื้องต้นให้คำปรึกษาด้านการลงทะเบียนกับกรมศุลกากร ยื่น
                  PAPERLESS ให้เรียบร้อย ถึงจะสามารถนำเข้า-ส่งออก
                  กับกรมศุลกากรได้ (สินค้าเป็นสมุดโน็ต) ไม่ต้องขอใบอนุญาต
                  ไม่ต้องติดต่อหน่วยงานราชการอื่นเพิ่มแล้ว // ยื่นเรียบร้อยแล้ว
                  สามารถนำเข้า-ส่งออก ได้เลย ภายใน 1 ชม.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ color: "text.secondary" }}>
                  การรวมรายการสินค้าในเอกสาร FORM ทำได้หรือไม่
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  การรวมรายการสินค้าในเอกสาร FORM จะต้องเป็นสินค้าประเภทเดียวกัน
                  จัดเข้าพิกัดเดียวกันจึงสามารผ่อนผันให้ใช้ FORM ได้
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ color: "text.secondary" }}>
                  ในกรณีที่ต้องการนำสินค้าตัวอย่างที่เป็นเครื่องสำอางเข้ามาสามารถนำเข้ามาได้จำนวนกี่ชิ้น
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ในกรณีที่จะนำสินค้าตัวอย่างที่เป็นเครื่องสำอางเข้ามาทางด่านอาหารและยา
                  อนุญาตให้นำเข้าได้ไม่เกินครั้งละ 30 ชิ้น
                  โดยแต่ละรายการไม่เกินรายการละ 6 ชิ้น
                  และสามารถนำสินค้าดังกล่าวเข้ามาได้ไม่เกิน 3 ครั้ง
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ color: "text.secondary" }}>
                  การยื่นเอกสารใบอนุญาตต่างๆเช่น สมอ ประมง อย
                  ยื่นหลังวันนำเข้าได้หรือไม่
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ไม่สามารถยื่นหลังวันนำเข้าได้
                  และต้องยื่นเอกสารใบอนุญาตให้สำเร็จก่อน และ
                  จะมีค่าปรับเพิ่มไม่เกิน 20,000 บาท
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="courier2Right" data-aos="slide-up">
          <img src={planeImg} alt="ชิปปิ้ง" />
        </div>
      </Container>

      <div className="courierSlider">
        <h1>ผลงานของเรา</h1>
        <Slider />
      </div>

      <Contact />
    </>
  );
};

export default Courier;
