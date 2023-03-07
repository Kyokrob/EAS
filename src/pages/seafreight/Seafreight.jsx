import React, { useEffect } from "react";
import "./saefreight.css";
import Service from "../../components/service/Service";
import Contact from "../../components/contact/Contact";
import QuestionForm from "../../components/questionForm/QuestionForm";

import Container from "@mui/material/Container";

import { Helmet } from "react-helmet";

const Seafreight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>EASTHAI - ขนส่งทางเรือ</title>
      </Helmet>
      <div className="importexport">
        <div className="importexportCover">
        <img
          src="https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt=""
        />
        </div>

        <div className="importexportHeaderText">
          <h1>Sea Freight</h1>
        </div>
      </div>

      <Container className="customclearanceContent">
        <div className="customclearanceContentTitle">
          <h1>นำเข้าส่งของโดยการขนส่งทางเรือ</h1>
        </div>

        <div className="importTitle">
          <p>
            การขนส่งทางเรือ
            เป็นหนึ่งในทางเลือกหลักและได้รับความนิยมมากในปัจจุบัน
            เหมาะกับการขนส่งสินค้าที่มีปริมาณมากหรือสินค้าที่มีขนาดใหญ่สำหรับผู้นำเข้าส่งออกสินค้าระหว่างประเทศที่ไม่ต้องคำนึงถึงระยะเวลาในการขนส่งหากต้องการทำการขนส่งสินค้าทางเรือสินค้าไม่ควรเป็นสินค้าประเภทเร่งด่วน
          </p>

          <p>
            การขนส่งทางเรือจะใช้ระบบตู้คอนเทนเนอร์ในการส่งสินค้าโดยค่าขนส่งนั้นจะถูกที่สุดเมื่อเทียบกับการขนส่งรูปแบบอื่นๆ
            สำหรับตัวอย่างสินค้าที่เหมาะสมแก่การขนส่งทางเรือ เช่น
            ชิ้นส่วนรถยนต์หรืออะไหล่รถยนต์ เฟอร์นิเจอร์ หรือ เครื่องจักร
          </p>

          {/* create calculator feature for calculating container rate and price */}
          <h3>การขนส่งทางทะเลนั้นมี 2 รูปแบบคือ</h3>
          <ul>
            LCL = Less than container load
            <li> ราคาจะถูกคำนวนเป็น Qubic meter</li>
            <li> สินค้าปริมานน้อย</li>
            <li> สินค้าในตู้จะรวมมากับลูกค้าท่านอื่น</li>
            <li> สำหรับปริมาณขนส่งไม่มากพอทสำหรับเช่าตู้คอนเทนเนอร์ทั้งตู้</li>
          </ul>
          <ul>
            FCL = Full container load
            <li> ราคาจะคิดตามขนาดตู้</li>
            <li> สินค้าขนาดใหญ่</li>
            <li> ปริมานมาก</li>
            <li>ไม่มีการร่วมใช้ตู้คอนเทนเนอร์กับลูกค้ารายอื่น</li>
            <li>ขนาดตู้คอนเทนเนอร์มีให้เลือกหลายไซส์</li>
          </ul>

          <h3>เอกสารสำคัญที่ใช้ในการนำเข้าส่งออกทางเรือ</h3>
          <ul>
            <li>ใบขนส่งสินค้า</li>
            <li>ใบตราส่งสินค้าทางเรือ (Bill of lading)</li>
            <li>บัญชีราคาสินค้า (Comercial Invoice)</li>
            <li>บัญชีบรรจุหีบห่อ (Packing List)</li>
          </ul>

          <p>
            การขนส่งทางเรือเป็นวิธีขนส่งสินค้าที่มีข้อดีมากมาย สามารถส่งสินค้าไปยังทุกประเทศทั่วโลกได้โดยมีต้นทุนการขนส่งที่ต่ำกว่าวิธีการขนส่งอื่นๆ
            เช่น การขนส่งทางอากาศ และการขนส่งทางถนน อีกทั้งยังมีอัตราค่าขนส่งที่ถูกกว่าเมื่อเปรียบเทียบกับวิธีการขนส่งอื่นๆ
            การนำเข้าส่งออกทางเรือยังสามารถขนส่งสินค้าขนาดใหญ่ได้โดยสะดวกสบาย
            และสามารถขนส่งสินค้าได้ครั้งละปริมาณมากโดยมีตู้หลากหลายแบบและหลายขนาดให้เลือกตามความเหมาะสมของสินค้า
            นอกจากนี้ การขนส่งทางเรือยังมีความปลอดภัยค่อนข้างสูง
            เนื่องจากใช้ความเร็วในการขับเคลื่อนช้าเมื่อเทียบกับการขนส่งทางอื่นๆ
            ดังนั้นการเลือกใช้วิธีการขนส่งทางเรือนั้นเป็นเรื่องที่ควรพิจารณาให้ดีก่อนตัดสินใจ
          </p>
          <p>
          ถึงแม้การขนส่งทางเรือไม่ใช่วิธีที่เร็วที่สุด แต่มักเป็นวิธีที่มีราคาประหยัดและเป็นธรรมชาติที่มั่นคงที่สุด
          หากคุณกำลังมองหาวิธีการขนส่งสินค้าระหว่างประเทศที่ EASTHAI เราเชี่ยวชาญในการให้บริการขนส่ง สามารถติดต่อเราเพื่อขอใบเสนอราคาและคำปรึกษาเพิ่มเติมในการขนส่งสินค้า
          </p>          
        </div>
      </Container>

      <Service />
      <Contact />
      <QuestionForm/>
    </>
  );
};

export default Seafreight;
