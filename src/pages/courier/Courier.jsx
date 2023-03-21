import React, { useEffect } from "react";
import "./courier.css";
import { Link } from "react-router-dom";
import QuestionForm from "../../components/questionForm/QuestionForm";
import Contact from "../../components/contact/Contact";
import Container from "@mui/material/Container";
import Slider from "../../components/slider/Slider";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import cover from "../../images/easexpresscover_resize.png";
import cover2 from "../../images/easexpresscover_giff.gif";
// import cover3 from '../../images/cover_03.png'
import one from "../../images/1.png";
import two from "../../images/2.png";
import three from "../../images/3.png";
import four from "../../images/4.png";
import five from "../../images/5.png";
import six from "../../images/6.png";
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
        <div className="courierHeader">
          <Container className="courierHeaderContent">
            <h1>Express support</h1>
            <p>สั่งของจากต่างประเทศ ติดขัดปัญหาการนำเข้าสินค้า, พัสดุ</p>
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
          </Container>
          <div className="courierHeaderImg">
            <img src={cover} alt="" />
          </div>
        </div>
      </div>

      <Container className="courier1">
        <div className="courierTable">
          <div className="table-box">
            <div className="boxBg">
              <img src={one} alt="eas01" />
            </div>
            <div className="boxDetail" data-aos="flip-up">
              <p>
                Express support
                คือบริการช่วยเหลือผู้นำเข้าสินค้าพร้อมให้คำปรึกษาสำหรับการนำเข้าสินค้าเร่งด่วน
                (Courier express)
                พร้อมช่วยเหลือและแก้ใขด้วยประสบการณ์โดยตรงมากกว่า 25 ปี
              </p>
            </div>
          </div>
          <div className="table-box">
            <div className="boxBg">
              <img src={two} alt="eas02" />
            </div>
            <div className="boxDetail" data-aos="flip-up">
              <p>
                สินค้าของท่านจะผ่านพิธีการศุลกากรอย่างรวดเร็วดูแลผ่านทีมงานมืออาชีพ
                ดำเนินการให้ครบจบทุกขั้นตอน
              </p>
            </div>
          </div>
          <div className="table-box">
            <div className="boxBg">
              <img src={three} alt="eas03" />
            </div>
            <div className="boxDetail" data-aos="flip-up">
              <p>
                ปัญหาสินค้าลงคลัง ไปรษณีย์, ท่าเรือ, สนามบินสุวรรณภูมิ, DHL,
                FEDEX, UPS, TNT ต่างๆ
              </p>
            </div>
          </div>
          <div className="table-box">
            <div className="boxBg">
              <img src={four} alt="eas04" />
            </div>
            <div className="boxDetail" data-aos="flip-up">
              <p>
                ติดปัญหาด้านใบอนุญาตินำเข้า พิกัดศุลกากรการใช้ฟอร์มนำเข้าหรือ
                เอกสารผิดพลาดต่างๆ
              </p>
            </div>
          </div>
          <div className="table-box">
            <div className="boxBg">
              <img src={five} alt="eas05" />
            </div>
            <div className="boxDetail" data-aos="flip-up">
              <p>
                ให้คำปรึกษาแนะนำคำนวนค่าภาษีให้กับคุณ
                เพื่อลดต้นทุนค่าใช้จ่ายและลดความผิดพลาดจากการขนส่งกับราคาที่เหมาะสมและเป็นธรรมสำหรับผู้นำเข้า
              </p>
            </div>
          </div>
          <div className="contact-box">
            <div className="boxBg">
              <img src={six} alt="eas contact us" />
            </div>
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
                  marginTop: "3rem",
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
                  marginTop: "3rem",
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
          <h1>บริการ Express support</h1>
          <p>
          หากท่านต้องการข้อมูลเพิ่มเติมหรือความช่วยเหลือ กรุณาติดต่อเราผ่านช่องทางที่สะดวก ในกรณีที่ท่านต้องการใช้บริการพิธีการศุลกากรกับเรา กรุณาเตรียมข้อมูลที่จำเป็นเพื่อให้เราบริการได้อย่างรวดเร็วและมีประสิทธิภาพ
          </p>
          <ul>
            <li> Invoice / Packing List</li>
            <li>Bill of Lading หรือ Air Waybill</li>
            <li>เอกสารอื่นๆ ที่แนบมากับสินค้า</li>
          </ul>
          {/* <p>
          ติดต่อเจ้าหน้าที่เพื่อบสอบถามกด
          <a className="quotationClick" href="https://page.line.me/999piqzj">
            กดตรงนี้
          </a>{" "} ขอใบเสนอราคา
          <Link to='/quotation'>
            เพื่อขอใบเสนอราคา
          </Link>
        </p> */}
        </div>
        <div className="courier2img">
          <img src={cover2} alt="" />
        </div>
      </Container>

      <Container className="faq-1">
        <div className="courierFaq">
          <h1>คำถามที่พบบ่อย</h1>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className="faqSum"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{color: "text.secondary" }}>
                ไม่เคยนำเข้า-ส่งออกเลย แต่อยากนำเข้าสินค้าในนามบริษัท
                (สินค้าเป็นสมุดโน้ต) ขอคำปรึกษาเบื้องต้น ว่าควรทำอย่างไร
                ติดต่อหน่วยงานไหน สามารถนำเข้าได้เลยไหม หรือต้องทำอะไรก่อน
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                เบื้องต้นให้คำปรึกษาด้านการลงทะเบียนกับกรมศุลกากร ยื่น PAPERLESS
                ให้เรียบร้อย ถึงจะสามารถนำเข้า-ส่งออก กับกรมศุลกากรได้
                (สินค้าเป็นสมุดโน็ต) ไม่ต้องขอใบอนุญาต
                ไม่ต้องติดต่อหน่วยงานราชการอื่นเพิ่มแล้ว // ยื่นเรียบร้อยแล้ว
                สามารถนำเข้า-ส่งออก ได้เลย ภายใน 1 ชม.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className="faqSum"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >

              <Typography
                sx={{color: "text.secondary" }}
                className="faqRight"
              >
                <p>การรวมรายการสินค้าในเอกสาร FORM ทำได้หรือไม่</p>
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
            className="faqSum"
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
            className="faqSum"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{color: "text.secondary" }}>
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

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            className="faqSum"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography sx={{color: "text.secondary" }}>
              ถ้าหากมีคำถามหรือข้อสงสัยเพิ่มเติมเกี่ยวกับกระบวนการพิธีการศุลกากร ควรทำอย่างไร ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              หากคุณมีคำถามหรือข้อสงสัยเกี่ยวกับกระบวนการพิธีการศุลกากร คุณสามารถติดต่อเราสำหรับคำปรึกษาและบริการช่วยเหลือและตอบคำถามต่างๆที่คุณสงสัย <a className="quotationClick" href="https://page.line.me/999piqzj">แชทกับเรา</a>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
            className="faqSum"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel5bh-header"
            >
              <Typography sx={{color: "text.secondary" }}>
              ในกรณีสั่งซื้อสินค้าจากต่างประเทศทาง Internet เช่น อุปกรณ์กอล์ฟ เครื่องใช้ไฟฟ้า และอื่นๆ เพื่อใช้เองส่วนตัวและให้จัดส่งโดยทางพัสดุไปรษณีย์จะต้องเสียภาษีหรือไม่ และอัตราเท่าใด
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              การซื้อสินค้าจากต่างประเทศผ่านทางอินเทอร์เน็ตจัดส่งผ่านทาง ไปรษณีย์ หรือ บริษัท Express เช่น FedEx, UPS, TNT ฯลฯ สำหรับการใช้ส่วนตัวก็ต้องชำระค่าภาษี อากรและปฏิบัติตามข้อห้าม ข้อกำกัดและระเบียบการนำเข้าให้ครบถ้วนตามที่กฎหมายกำหนด อย่างไรก็ตาม หากของที่นำเข้านั้นมีราคาศุลกากร(CIF)* ไม่เกิน 1,500  บาท  จะได้รับการยกเว้นไม่ต้องชำระอากรขาเข้า

              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>

      <div className="courierSlider">
        <h1>ผลงานของเรา</h1>
        <Slider />
      </div>

      <Contact />
      <QuestionForm />
    </>
  );
};

export default Courier;
