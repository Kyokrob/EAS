import React, { useEffect } from "react";
import "./courier.css";
import { Link } from "react-router-dom";
import Contact from "../../components/contact/Contact";
import Container from "@mui/material/Container";
import Slider from "../../components/slider/Slider"
import Button from "@mui/material/Button";
import planeImg from "../../images/planetransparent.png";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';




const Courier = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="courier">
        <Container className="courierHeader">
          <h1>Express service</h1>
          <p>สั่งของจากต่างประเทศ ติดขัดปัญหาการนำเข้าสินค้า</p>
          <p>ไปรษณีย์,ท่าเรือ,DHL,FEDEX,UPS,TNT</p>
          <p>เรายินดีให้คำปรึกษาผ่านผู้เชี่ยวชาญฟรี</p>
          <Button
          href="tel:0867780808"
          sx={{
            padding: "12px 24px",
              background: "transparent",
              border: "1px solid #ffffff",
              borderRadius: "10px",
              color: "#ffffff",
              marginTop: "2rem",
          }}>
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
            <div className="boxDetail">
              EAS Express บริการให้คำปรึกษาปัญหาสำหรับผู้นำเข้าสินค้าพร้อมช่วยเหลือและแก้ใข ด้วยประสบการณ์โดยตรงมากกว่า 25 ปี 
            </div>
          </div>
          <div className="table-box">
            <div className="boxTitle">02</div>
            <div className="boxDetail">
              สินค้าของท่านจะผ่านพิธีการศุลกากรอย่างรวดเร็ว ไม่มีปัญหาเรื่องถูกยึดหรือเรียกเก็บเพิ่ม ดูแลผ่านทีมงานมืออาชีพดำเนินการให้ครบทุกขั้นตอน
            </div>
          </div>
          <div className="table-box">
            <div className="boxTitle">03</div>
            <div className="boxDetail">
            ปัญหาสินค้า คลังสินค้าสุวรรณภูมิ, สนามบินสุวรรณภูมิ, ไปรษณีย์, ท่าเรือ, DHL, FEDEX, UPS, TNT ต่างๆ
            </div>
          </div>
          <div className="table-box">
            <div className="boxTitle">04</div>
            <div className="boxDetail">
            ปัญหา สินค้า ภาษีนำเข้า ทุกประเภท ติดปัญหาใบอนุญาต อย. มอก. กสทช. สมอ.
            </div>
          </div>
          <div className="table-box">
            <div className="boxTitle">05</div>
            <div className="boxDetail">
            ด้านใบอนุญาตินำเข้า พิกัดศุลกากร การใช้ฟอร์มนำเข้าต่างๆ หรือ เอกสารผิดพลาด 
            </div>
          </div>
          <div className="table-box">
            <div className="boxTitle">
              <CalendarMonthIcon fontSize="48px"/>
            </div>
            <div className="boxDetail">
            ให้คำปรึกษา ช่วยเหลือ พร้อม แก้ใข
            <Button
            to='/contactform'
            component={Link}
            sx={{
              padding: "8px",
              background: "transparent",
              border: "1.5px solid #356785",
              borderRadius: "10px",
              color: "#356785",
              marginTop: "12px",
            }}>
              ติดต่อเรา
            </Button>
            </div>
          </div>
        </div>
      </Container>

      <Container className="courier2">
        <div className="courier2Left">
          <h1>Express Service</h1>
          <h3>บริการ Shipping เคลียร์สินค้า ใบอนุญาติ ภาษีศุลกากร สนามบินสุวรรณภูมิ และท่าเรือทุกท่า</h3>

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
                  ติดปัญหาใบอนุญาต อย. มอก. กสทช. สมอ.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  เมื่อคุณต้องการนำเข้าสินค้าจากทางเรื่อง (sea freight)
                  สิ่งที่ควรคำนึงในอย่างแรกคือ สินค้าเราต้องการส่งแบบเต็มตู้
                  container หรือ รวมตู้เข้ามา
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
                บริการให้คำปรึกษาเกี่ยวกับการ นำเข้า-ส่งออก
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  เมื่อคุณต้องการนำเข้าสินค้าจากทางเรื่อง (sea freight)
                  สิ่งที่ควรคำนึงในอย่างแรกคือ สินค้าเราต้องการส่งแบบเต็มตู้
                  container หรือ รวมตู้เข้ามา
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
                  บริการ Shipping เคลียร์จบทุกปัญหา ไม่มีขั้นต่ำ
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                คลังสินค้าสุวรรณภูมิ, สนามบินสุวรรณภูมิ, ไปรษณีย์, ท่าเรือ, DHL, FEDEX, UPS, TNT
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
                ให้คำปรึกษาเกี่ยวกับการใช้ฟอร์มนำเข้าต่างๆ
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  เมื่อคุณต้องการนำเข้าสินค้าจากทางเรื่อง (sea freight)
                  สิ่งที่ควรคำนึงในอย่างแรกคือ สินค้าเราต้องการส่งแบบเต็มตู้
                  container หรือ รวมตู้เข้ามา
                </Typography>
              </AccordionDetails>
            </Accordion>


          </div>
        </div>
        <div className="courier2Right">
          <img src={planeImg} alt="" />
        </div>
      </Container>

      <div className="courierSlider">
        <h1>ผลงานของเรา</h1>
      <Slider/>
      </div>





      <Contact />
    </>

  );
};

export default Courier;

