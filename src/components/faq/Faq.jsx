import React from "react";
import "./faq.css";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Container className="faq">
        <h1>คำถามที่พบบ่อยสำหรับผู้เริ่มต้นนำเข้าส่งออก</h1>

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
            ต้องใช้เอกสารอะไรบ้างเมื่อนำเข้าสินค้า?
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
            เอกสารที่จำเป็นต้องมีคือ Commercial Invoice, Packing List, Bill of Lading และใบขนสินค้า โดยเอกสารเหล่านี้จะถูกใช้ในการซื้อขายสินค้า การจัดส่ง การขนส่ง และการผ่านพิธีการศุลกากร
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
            
            <Typography sx={{ color: "text.secondary" }}>
              ในกรณีนำเข้าเครื่องสำอางแต่จดแจ้งหลังวันนำเข้าแล้วจะสามารถไปเดินพิธีการตรวจปล่อยได้หรือไม่
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              สามารถเดินพิธีการตรวจปล่อยได้..แต่ในส่วนของอย.ต้องเสียค่าปรับ10%ของราคาสินค้าชิ้นนั้นแต่ไม่เกิน20,000บาทแต่ในทางที่ถูกต้องควรจดแจ้งก่อนวันนำเข้าจะดีที่สุดค{" "}
              <Link to="/customclearance">Talk to us</Link>
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
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          className="faqSum"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            
            <Typography sx={{ color: "text.secondary" }}>
            ในกรณีสั่งซื้อสินค้าจากต่างประเทศทาง Internet เช่น อุปกรณ์กอล์ฟ เครื่องใช้ไฟฟ้า และอื่นๆ เพื่อใช้เองส่วนตัวและให้จัดส่งโดยทางพัสดุไปรษณีย์จะต้องเสียภาษีหรือไม่ และอัตราเท่าใด
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            การซื้อสินค้าจากต่างประเทศผ่านทางอินเทอร์เน็ตจัดส่งผ่านทาง ไปรษณีย์ หรือ บริษัท Express เช่น FedEx, UPS, TNT ฯลฯ สำหรับการใช้ส่วนตัวก็ต้องชำระค่าภาษี อากรและปฏิบัติตามข้อห้าม ข้อกำกัดและระเบียบการนำเข้าให้ครบถ้วนตามที่กฎหมายกำหนด อย่างไรก็ตาม หากของที่นำเข้านั้นมีราคาศุลกากร(CIF)* ไม่เกิน 1,500  บาท  จะได้รับการยกเว้นไม่ต้องชำระอากรขาเข้า
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
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            
            <Typography sx={{ color: "text.secondary" }}>
              การยื่นเอกสารใบอนุญาตต่างๆเช่นสมอ ประมง
              ยื่นหลังวันนำเข้าได้หรือไม่
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              ไม่สามารถยื่นหลังวันนำเข้าได้
              ถ้ายื่นหลังวันนำเข้าจะมีค่าปรับไม่เกิน 20,000 บาท
              และต้องยื่นเอกสารใบอนุญาตให้สำเร็จก่อนสินค้าจะออกจากศุลกากร
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
};

export default Faq;
