import React, { useEffect } from "react";
import "./courier.css";
import { Link } from "react-router-dom";
import Contact from "../../components/contact/Contact";
import Container from "@mui/material/Container";
import Slider from "../../components/slider/Slider";
import Button from "@mui/material/Button";
import faqcover from "../../images/faqcover.png"

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import one from '../../images/1.png'
import two from '../../images/2.png'
import three from '../../images/3.png'
import four from '../../images/4.png'
import five from '../../images/5.png'
import six from '../../images/6.png'

import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Courier = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500 });
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
        <Container  className="courierHeader">
          <h1>Express service</h1>
          <p>สั่งของจากต่างประเทศ ติดขัดปัญหาการนำเข้าสินค้า, พัสดุ</p>
          <p>ไปรษณีย์,ท่าเรือ, DHL, FEDEX, UPS, TNT</p>
          {/* <Button
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
          </Button> */}
        </Container>
      </div>

      <Container className="courier1">
        <div className="courierTable">
          <div className="table-box">
            <div className="boxBg"><img src={one} alt="" /></div>
            <div className="boxDetail" data-aos="flip-up">
              <p>Express service คือบริการช่วยเหลือผู้นำเข้าสินค้าพร้อมให้คำปรึกษาสำหรับการนำเข้าสินค้าเร่งด่วน (Courier express) พร้อมช่วยเหลือและแก้ใขด้วยประสบการณ์โดยตรงมากกว่า 25 ปี</p>
            </div>
          </div>
          <div className="table-box">
          <div className="boxBg"><img src={two} alt="" /></div>
            <div className="boxDetail" data-aos="flip-down">
              <p>สินค้าของท่านจะผ่านพิธีการศุลกากรอย่างรวดเร็วดูแลผ่านทีมงานมืออาชีพ ดำเนินการให้ครบจบทุกขั้นตอน</p>
            </div>
          </div>
          <div className="table-box">
          <div className="boxBg"><img src={three} alt="" /></div>
            <div className="boxDetail" data-aos="flip-up">
              <p>ปัญหาสินค้าลงคลัง ไปรษณีย์,
              ท่าเรือ, สนามบินสุวรรณภูมิ, DHL, FEDEX, UPS, TNT ต่างๆ</p>
            </div>
          </div>
          <div className="table-box">
          <div className="boxBg"><img src={four} alt="" /></div>
            <div className="boxDetail" data-aos="flip-up">
              <p>ติดปัญหาด้านใบอนุญาตินำเข้า พิกัดศุลกากรการใช้ฟอร์มนำเข้าหรือ เอกสารผิดพลาดต่างๆ</p>
            </div>
          </div>
          <div className="table-box">
          <div className="boxBg"><img src={five} alt="" /></div>
            <div className="boxDetail" data-aos="flip-up">
              <p>ให้คำปรึกษาแนะนำคำนวนค่าภาษีให้กับคุณ เพื่อลดต้นทุนค่าใช้จ่ายและลดความผิดพลาดจากการขนส่งกับราคาที่เหมาะสมและเป็นธรรมสำหรับผู้นำเข้า</p>
            </div>
          </div>
          <div className="table-box">
          <div className="boxBg"><img src={six} alt="" /></div>
            <div className="boxDetail">
              <br />
              <Button
                to="/contactform"
                component={Link}
                sx={{
                  padding: "8px 12px",
                  background: "#E6AF4B",
                  borderRadius: "10px",
                  color: "#ffffff",
                  marginTop: "12px",
                }}
              >
                ติดต่อเรา
              </Button>
              <Button
                to="/quotation"
                component={Link}
                sx={{
                  padding: "8px 12px",
                  background: "#E6AF4B",
                  borderRadius: "10px",
                  color: "#ffffff",
                  marginTop: "12px",

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
          <h3>คำถามที่พบบ่อย</h3>

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
                  การยื่นเอกสารใบอนุญาตต่างๆเช่นสมอ ประมง อย
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
        <div className="courier2Right">
          <img src={faqcover} alt="ชิปปิ้ง นำเข้า เคลียร์สินค้า shipping freight company" />
          <div className="courier2RightText">
            <h1>Dear shipper,</h1>
            <p>Let us know your if you have any questions, don't hesitate to let us know. Our support team is always ready to assist you and will get back to you as soon as possible.  </p>
            <div className="form-row-faq">
          <div className="form-col-faq">
            <textarea
              id="moreDetail"
              name="moreDetail"
              placeholder="Let us know your question, dont forget to provide us contact infomation you our team can reach you back !"
            />
            <Button
                          sx={{
                            marginRight: "auto",
                            marginTop: "12px",
                            padding: "6px 24px",
                            background: "#E6AF4B",
                            borderRadius: "5px",
                            color: "#000000",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            
                          }}>
              Submit
            </Button>
          </div>
        </div>
          </div>
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
