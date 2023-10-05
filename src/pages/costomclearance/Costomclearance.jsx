import React, { useEffect } from "react";
import "./customclearance.css";
import OurService2 from "../../components/ourService2/OurService2";
import Contact from "../../components/contact/Contact";
import GetQuotation2 from "../../components/getQuotation2/GetQuotation2";
import CustomsCarousel from "../../components/customsCarousel/CustomsCarousel";

import customscover from "../../images/cccover.png";
import cc1 from "../../images/cc_1.png";
import cc2 from "../../images/cc_2.png";
import check from "../../images/check_icon.png";


import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const Costomclearance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>EASTHAI - พิธีการศุลกากร </title>
      </Helmet>
      <div className="customsclearance">
        <div className="customsclearanceHeader">
          <Container className="customsclearanceBox">
            <div className="customsclearanceTitle">
              <h1>Customs Clearance</h1>
              <h5>
                ในการขนส่งสินค้าข้ามประเทศการปฏิบัติตามกฎระเบียบข้อบังคับต่าง ๆ
                มีความสำคัญอย่างมากกับธุรกิจที่เกี่ยวกับการค้าระหว่างประเทศ
                ในทุกขั้นตอนจะต้องปฏิบัติตามกฎและข้อบังคับอย่างเคร่งครัด
              </h5>
            </div>
          </Container>
          <div className="customsclearanceCover">
            <img src={customscover} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-bg">
        <div className="content2">
          <div className=" container content-2">
            <div className="content-2Left">
              <h5>Customs Clearance</h5>
              <h1>พิธีการศุลกากร คืออะไร</h1>
              <p>
                Customs clearance หรือ การดำเนินพิธีการศุลกากร
                คือกระบวนการตรวจสอบและอนุมัติการนำเข้าสินค้าเข้าสู่ประเทศผ่านกรมศุลกากร
                เป็นกระบวนการจำเป็นเพื่อให้การขนส่งสินค้าเป็นไปตามกฎหมาย
                โดยภายในกระบวนการดำเนินพิธีการศุลกากรนั้น
                จะมีการตรวจสอบเอกสารต่างๆ เช่น ใบขนสินค้า ใบแจ้งหนี้
                และเอกสารทางศุลกากรอื่นๆ
                ซึ่งต้องเป็นไปตามกฎหมายและมีความถูกต้องตามเกณฑ์ที่กำหนดไว้
                และตรวจสอบสินค้าที่นำเข้าเพื่อตรวจสอบว่าเป็นสินค้าที่ได้รับอนุญาตให้นำเข้าหรือไม่
              </p>

              <Link
                to="/blog/ชิปปิ้ง-ตัวแทนออกของ"
                className="content-2Left-More"
              >
                <span>อ่านเพิ่มเติมเกี่ยวกับหน้าที่ของชิปปิ้ง</span>
              </Link>
            </div>
            <div className="content-2Right">
              <img src={cc1} alt="" />
            </div>
          </div>
        </div>

        <div className="cc-container">
          <div className="ccContainer">
          <div className="left-box">
            <div className="leftBox">
            <h1>บริการของเรา</h1>
            <div className="content-list">
            <img src={check} alt="" />
          <span>บริการลงทะเบียนผู้นำเข้าระบบ PAPERLESS ภายใน 1 วัน</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>บริการเดินพิธีการกรมศุลกาการนำเข้า-ส่งออก</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>บริการคีย์ใบขนสินค้าขาเข้า-ขาออก</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>บริการให้คำปรึกษาด้านใบอนุญาตินำเข้า เช่น อย. มอก สมอ. กสทช. เป็นต้น</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>บริการให้คำปรึกษาด้านภาษีนำเข้า และ ให้คำปรึกษาด้านพิกัดอัตราศุลกากร</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>บริการให้คำปรึกษาการใช้ฟอร์มนำเข้าต่างๆ</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>บริการเคลียร์สินค้าลงคลัง เช่น DHL, UPS, FEDEX, TNT, AIR CARGO และ บริการเคลียร์สินค้าทางไปรษณีย์</span>
          </div>
            </div>
          </div>
          <div className="right-box">
            <div className="rightBox">
            <h1>บริการเคลียร์จบทุกปัญหา</h1>
            <div className="content-list">
            <img src={check} alt="" />
          <span>ปัญหาเกี่ยวกับพิกัดอัตราศุลกากร</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>ปัญหางานใบอนุญาต</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>ปัญหาเอกสารผิด</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>ปัญหาการใช้ฟอร์มต่างๆ</span>
          </div>
            </div>
          </div>
          </div>
        </div>

        <div className="cc-content3">
          <div className="cc-content-3">
            <div className="cc-content-3Left">
              <CustomsCarousel />
            </div>
            <div className="cc-content-3Right">
              <h1>ประโยชน์ของ Customs Broker</h1>
              <h5>
                Customs Broker หรือในภาษาไทยเรียกว่า "Shipping"
                เราเป็นตัวแทนของผู้ส่งออก/ผู้นำเข้า
                ให้บริการในการเตรียมและยื่นเอกสารการขนส่งเพื่อปฏิบัติตามข้อบังคับและกฎระเบียบ
                และดำเนินกระบวนการการผ่านศุลกากร
              </h5>

              <div className="content-list">
                <img src={check} alt="" />
                <span>
                  จัดทำเอกสารที่เกี่ยวข้องกับการขนส่งสินค้า เช่น Invoice,
                  Packing, Bill of lading หรือ Air Waybill เป็นต้น
                </span>
              </div>
              <div className="content-list">
                <img src={check} alt="" />
                <span>
                  ประสานงานกับหน่วยงานที่เกี่ยวข้อง เช่น สำนักงานศุลกากร
                  และบริษัทขนส่งสินค้า
                </span>
              </div>
              <div className="content-list">
                <img src={check} alt="" />
                <span>
                  ช่วยเตรียมเอกสารขออนุญาตและการยื่นขอใบอนุญาตการนำเข้าสินค้าให้กับหน่วยงานราชการที่เกี่ยวข้อง
                  เช่น อย. สมอ. ประมง
                </span>
              </div>
              <div className="content-list">
                <img src={check} alt="" />
                <span>
                  ช่วยในการแก้ไขปัญหาที่เกิดขึ้นในกระบวนการนำเข้า-ส่งออกสินค้า
                  เช่น ข้อมูลเอกสารผิดพลาด
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="cc-content4">
          <div className="container cc-content-4">
            <div className="cc-content-4Left">
              <img src={cc2} alt="" />
            </div>
            <div className="cc-content-4Right">
              <h1>ทำไมถึง EASTHAI</h1>
              <div className="content-list">
                <img src={check} alt="" />
                <span>
                  เข้าใจขั้นตอนการทำศุลกากรอย่างละเอียดอ่อนทุกขั้นตอนของการดำเนินพิธีการศุลกากร
                </span>
              </div>
              <div className="content-list">
                <img src={check} alt="" />
                <span>มีพนักงานชิปปิ้งประจำอยู่ตามท่าเรือและสนามบิน</span>
              </div>
              <div className="content-list">
                <img src={check} alt="" />
                <span>
                  บริการจัดการใบขนสินค้าแบบออนไลน์ผ่านระบบ EDI service
                </span>
              </div>
              <div className="content-list">
                <img src={check} alt="" />
                <span>
                  ทีมของเราได้รับการรับรองจากให้เป็นผู้ชำนาญการด้านศุลกากรที่ได้รับใบอนุญาตจากกรมศุลกากร
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetQuotation2 />
      <OurService2 />
      <Contact />
    </>
  );
};

export default Costomclearance;
