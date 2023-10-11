import React, { useEffect } from "react";
import "./courier.css";
import { Link } from "react-router-dom";
import Contact from "../../components/contact/Contact";
import OurService2 from "../../components/ourService2/OurService2";
import GetQuotation2 from "../../components/getQuotation2/GetQuotation2";
import Container from "@mui/material/Container";
import Slider from "../../components/slider/Slider";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import cover2 from "../../images/easexpresscover.svg";
import one from "../../images/1.png";
import two from "../../images/2.png";
import three from "../../images/3.png";
import four from "../../images/4.png";
import five from "../../images/5.png";
import six from "../../images/6.png";
import check from "../../images/check_icon.png";
import rightcc1 from "../../images/rightcc1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { Button } from "@mui/material";

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
      <div className="courierHeader">
        <div
          className="parallax-bg-courier"
        >
          <div className="courierHeaderText">
            <h1>Express support</h1>
            <p>
              นำเข้าสินค้าผ่าน Courier Express
              ต้องการคำแนะนำในการเคลียร์สินค้าอย่างรวดเร็วและปลอดภัย
            </p>
          </div>
        </div>
      </div>

      <Container className="courier2">
        <div className="courier2Left">
          <h1>Express support คือ</h1>
          <p>
            Express support
            คือบริการที่จะช่วยเหลือคุณในกระบวนการนำเข้าสินค้าผ่านบริษัทขนส่ง
            Courier Express เช่น Fed, DHL, TNT, UPS, หรือไปรษณีย์
            โดยเฉพาะเมื่อคุณพบกับปัญหาที่อาจเกิดขึ้นหลังจากการนำเข้าสินค้า
            เราเข้าใจว่าปัญหาเช่นการโต้แย้งภาษีหรือการต้องการใบอณุญาตสามารถทำให้ยุ่งยากและล่าช้าได้
            ทีมงานของเราพร้อมที่จะให้คำปรึกษาและช่วยเหลือคุณในการแก้ไขปัญหานี้อย่างมืออาชีพและรวดเร็ว
          </p>
        </div>
        <div className="courier2img">
          <img src={cover2} alt="ชิปปิ้งเคลียร์ภาษี" />
        </div>
      </Container>

      <Container className="customscc1">
        <div className="leftcc1">
          <h4>Why us</h4>
          <h2>เราจะช่วยดูแลคุณตั้งแต่ต้นจนจบ</h2>
          <p>
            ประเมินภาษี ใบอนุญาต ลดปัญหาสินค้าติดด่าน ของมาถึงเเคลียร์ทันที
            คอยให้คำปรึกษาและช่วยเหลือในการเคลียร์สินค้า
          </p>
          <div className="content-list">
            <img src={check} alt="ชิปปิ้ง" />
            <span>สินค้าติดใบอนุญาต อย. มอก. ฯลฯ</span>
          </div>
          <div className="content-list">
            <img src={check} alt="ชิปปิ้ง" />
            <span>บริการด้านประกันภัย</span>
          </div>
          <div className="content-list">
            <img src={check} alt="ชิปปิ้ง" />
            <span>
              บริการออกสินค้า เพื่อแสดงในงานโชว์สินค้า หรือแสดงนิทรรศการ
            </span>
          </div>
          <div className="content-list">
            <img src={check} alt="ชิปปิ้ง" />
            <span>บริการด้านเอกสาร เช่น Form E, Form C/O</span>
          </div>
        </div>
        <div className="rightcc1">
          <img src={rightcc1} alt="ชิปปิ้งใบอณุญาตนำเข้า" />
        </div>
      </Container>

      <div className="customsBanner">
        <h1>
          บริการเดินพิธีการกรมศุลกาการนำเข้า-ส่งออก
          ให้คำปรึกษาด้านใบอนุญาตินำเข้าการใช้ฟอร์มต่างๆ เข้าใจภาษีศุลกากร
        </h1>
        <Button component={Link} to="/customclearance" className="cbBtn">
          อ่านเพิ่มเติม Customs clearance
        </Button>
      </div>

      <Container className="courier1">
        <div className="courier1Title">
          <h1>ขั้นตอนการทำงาน</h1>
        </div>
        <div className="courierTable">
          <div className="table-box">
            <div className="boxBg">
              <img src={one} alt="ชิปปิ้ง" />
            </div>
            <div className="boxDetail" data-aos="flip-up">
              <p>แจ้งปัญหาการขนส่งกับทีมงาน</p>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>ปัญหาด้านพิกัดและอัตราภาษีศุลกากร</span>
              </div>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>สินค้าติดปัญหาใบอณุญาต</span>
              </div>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>สินค้าติดปัญหาหลังจากเปิดตรวจ</span>
              </div>
            </div>
          </div>
          <div className="table-box">
            <div className="boxBg">
              <img src={two} alt="ชิปปิ้ง" />
            </div>
            <div className="boxDetail" data-aos="flip-up">
              <p>
                ส่งรายละเอียดสินค้าที่นำเข้าเพื่อจัดเตรียมเอกสารสำหรับดำเนินการ
              </p>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>Invoice</span>
              </div>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>Packing List</span>
              </div>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>Air Way Bill</span>
              </div>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>ใบอนุญาตนำเข้า (ถ้ามี)</span>
              </div>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>เอกสารอื่นๆที่เกี่ยวข้อง</span>
              </div>
            </div>
          </div>
          <div className="table-box">
            <div className="boxBg">
              <img src={three} alt="ชิปปิ้ง" />
            </div>
            <div className="boxDetail" data-aos="flip-up">
              <p>กอรกแบบฟอร์มศุลกากรและคำนวนภาษีอากร</p>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>กรอกแบบฟอร์มใบขน</span>
              </div>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>ระบุข้อมูลสินค้าให้ถูกต้อง</span>
              </div>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>คำนวนอากรขำเข้า และตรวจสอบข้อตกลงการค้า</span>
              </div>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>ดราฟท์ใบขนสินค้า</span>
              </div>
            </div>
          </div>
          <div className="table-box">
            <div className="boxBg">
              <img src={four} alt="ชิปปิ้ง" />
            </div>
            <div className="boxDetail" data-aos="flip-up">
              <p>ส่งเอกสารให้กับกรมศุลกากรและทำการตรวจสินค้า</p>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>จัดเตรียมเอกสารเพื่อใช้แลก D/O และเอกสารอื่นๆ</span>
              </div>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>
                  เจ้าหน้าที่ EASTHAI
                  ร่วมมือกับพนักงานศุลกากรในกระบวนการตรวจสอบของ{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="table-box">
            <div className="boxBg">
              <img src={five} alt="ชิปปิ้ง" />
            </div>
            <div className="boxDetail" data-aos="flip-up">
              <p>ชำระภาษีเพื่อส่งมองสินค้า</p>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>ชำระอากรนำเข้า ภาษี และค่าธรรมเนียม</span>
              </div>
              <div className="content-list">
                <img src={check} alt="ชิปปิ้ง" />
                <span>จัดการนำสินค้าออกเพื่อส่งให้ลูกค้า</span>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="boxBg">
              <img src={six} alt="ชิปปิ้ง" />
            </div>
            <div className="boxDetail">
              <p>
                **ทุกบริการมีใบเสร็จรับรองอย่างถูกต้อง
                สามารถแจ้งภาษีได้ตามกฏหมาย**
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="courierSlider">
        <h1>ผลงานของเรา</h1>
        <Slider />
      </div>
      <GetQuotation2 />
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
              <Typography sx={{ color: "text.secondary" }}>
                ไม่เคยนำเข้า-ส่งออกเลย
                แต่อยากนำเข้าสินค้าในนามบริษัทควรทำอย่างไร ติดต่อหน่วยงานไหน
                สามารถนำเข้าได้เลยไหม หรือต้องทำอะไรก่อน
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ในการนำเข้าส่งออกจำเป็นต้องลงทะเบียนกับกรมศุลกากร ยื่น
                PAPERLESSให้เรียบร้อย ถึงจะสามารถนำเข้า-ส่งออกกับกรมศุลกากรได้
                เรามีบริการยื่น Paperless ฟรี เรียบร้อยภายใน 1 ชม.{" "}
                <a
                  className="quotationClick"
                  href="https://page.line.me/999piqzj"
                >
                  ติดต่อเรา
                </a>
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
              <Typography sx={{ color: "text.secondary" }} className="faqRight">
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
              <Typography sx={{ color: "text.secondary" }}>
                ถ้าหากมีคำถามหรือข้อสงสัยเพิ่มเติมเกี่ยวกับกระบวนการพิธีการศุลกากร
                ควรทำอย่างไร ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                หากคุณมีคำถามหรือข้อสงสัยเกี่ยวกับกระบวนการพิธีการศุลกากร
                คุณสามารถติดต่อเราสำหรับคำปรึกษาและบริการช่วยเหลือและตอบคำถามต่างๆที่คุณสงสัย{" "}
                <a
                  className="quotationClick"
                  href="https://page.line.me/999piqzj"
                >
                  แชทกับเรา
                </a>
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
              <Typography sx={{ color: "text.secondary" }}>
                ในกรณีสั่งซื้อสินค้าจากต่างประเทศทาง Internet เช่น อุปกรณ์กอล์ฟ
                เครื่องใช้ไฟฟ้า และอื่นๆ
                เพื่อใช้เองส่วนตัวและให้จัดส่งโดยทางพัสดุไปรษณีย์จะต้องเสียภาษีหรือไม่
                และอัตราเท่าใด
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                การซื้อสินค้าจากต่างประเทศผ่านทางอินเทอร์เน็ตจัดส่งผ่านทาง
                ไปรษณีย์ หรือ บริษัท Express เช่น FedEx, UPS, TNT ฯลฯ
                สำหรับการใช้ส่วนตัวก็ต้องชำระค่าภาษี อากรและปฏิบัติตามข้อห้าม
                ข้อกำกัดและระเบียบการนำเข้าให้ครบถ้วนตามที่กฎหมายกำหนด
                อย่างไรก็ตาม หากของที่นำเข้านั้นมีราคาศุลกากร(CIF)* ไม่เกิน
                1,500 บาท จะได้รับการยกเว้นไม่ต้องชำระอากรขาเข้า
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
      <OurService2 />
      <Contact />
    </>
  );
};

export default Courier;
