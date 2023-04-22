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
        <h1>คำถามที่พอบ่อยสำหรับผู้เริ่มต้นนำเข้าส่งออก</h1>

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
              FCL / LCL คืออะไร ต่างกันอย่างไร และทำไมถึงต้องรู้
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
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
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
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
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
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
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
