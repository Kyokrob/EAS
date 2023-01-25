import React, { useEffect } from "react";
import "./customclearance.css";
import Service from "../../components/service/Service";
import Contact from "../../components/contact/Contact";
import Container from "@mui/material/Container";
import customcover from "../../images/customcover.png";

const Costomclearance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="customclearance">
        {/* <img src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" /> */}
        <img src={customcover} alt="" />

        <div className="customclearanceText">
          <h1>Custom Clearance</h1>
        </div>
      </div>
      <Container className="customclearanceCสั่งontent">
        <div className="customclearanceContentTitle">
          <h1>ดำเนินพิธีการศุลกากร</h1>
        </div>

        <div className="importTitle">
          <h3>
            ในการนําเข้า หรือส่งออกสินค้า ผู้นําเข้า
            หรือผู้ส่งออกเข้า จำเป็นต้องปฏิบัติตามกฎระเบียบ กฎหมาย รวมถึงประกาศต่าง ๆ ที่ทาง
            กรมศุลกากร และหน่วยงานอื่น ๆ ที่เกี่ยวข้องกำหนดไว้
            ได้อย่างถูกต้องและครบถ้วน

         
            โดยมีความจำเป็นในการจัดเตรียมเอกสาร
            และปฏิบัติตามขั้นตอนพิธีการศุลกากรทั้งนำเข้าและส่งออกสินค้า
            
            ทั้งนี้ผู้นำเข้า หรือผู้ส่งออก อาจจะไม่มีความชำนาญในด้านข้อกฎหมาย
            ระเบียบ และประกาศที่กรมศุลกากรและหน่วยงานอื่น ๆ ที่เกี่ยวข้อง
            กําหนดไว้ อาจจะทำให้เกิดความผิดพลาดได้ง่าย 
          </h3>
          <h3>
            {" "}
            ตัวแทนที่จะมาทำหน้าที่เคลียร์สินค้าแทนผู้นำเข้า-ส่งออกนั่นเอง
            โดยงานผ่านพิธีการศุลกากร ทั้งในส่วนของขาเข้า-ขาออกนั้น
          </h3>
          <h3>
            การจัดทำเอกสารและเดินพิธีการศุลกากร นั้นแบ่งเป็น 2 ประเภท 1.
            พิธีการขาเข้า(ชิปปิ้งขาเข้า) 2.พิธีการขาออก(ชิปปิ้งขาออก)
            ทุกขั้นตอนนั้นต้องมีเอกสารที่ครบถ้วน
            และห้ามผิดพลากตามกฏของกรมศุลกากร หากตรวจพอว่ามีเอกสารที่ไม่ครบถ้วน
            สินค้าของท่าน จะต้องถูกตรวจสอบโดยกรมศุลกากร ก่อนที่จะถูกส่งออก
            ทั้งนี้ผู้นำเข้า หรือผู้ส่งออก อาจจะไม่มีความชำนาญในด้านข้อกฎหมาย
            ระเบียบ และประกาศที่กรมศุลกากรและหน่วยงานอื่น ๆ ที่เกี่ยวข้อง
            กําหนดไว้ อาจจะทำให้เกิดความผิดพลาดได้ง่าย
          </h3>
        </div>

        <div className="importCc">
          <h1>
            Import custom clearance
            เอกสารที่ต้องจัดเตรียมในการนำเข้าสินค้าเข้าประเทศ
          </h1>
          <ul>
            <li>บัญชีราคาสินค้า (Commercial Invoice)</li>
            <li>บัญชีรายละเอียดบรรจุหีบห่อ P/L (Packing List)</li>
            <li>ใบตราส่งสินค้า B/L (Bill of Lading or Air Waybill)</li>
            <li>ใบแจ้งยอดเบี้ยประกัน (Insurance Premium Invoice)</li>
            <li>ใบอนุญาตหรือหนังสืออนุญาตสำหรับสินค้าควบคุมการนำเข้า</li>
            <li>ใบรับรองแหล่งกำเหนิดสินค้า (Certificate of Origin)</li>
          </ul>
        </div>

        <div className="exportCc">
          <h1>
            Export custom clearance
            เอกสารที่ต้องจัดเตรียมในการส่งออกสินค้าออกนอกประเทศ
          </h1>

          <ul>
            <li>บัญชีราคาสินค้า (Commercial Invoice)</li>
            <li>บัญชีรายละเอียดบรรจุหีบห่อ P/L (Packing List)</li>
            <li>ใบตราส่งสินค้า B/L (Bill of Lading or Air Waybill)</li>
            <li>ใบอณุญาตส่งออกหรือเอกสารอื่นใดสำหรับสินค้าควบคุมการส่งออก</li>
          </ul>
        </div>

        <div className="easCc">
          <h1>
            จะเกิดอะไรขึ้นหากเอกสารของคุณนั้นไม่ครบถ้วน และ
            สินค้านั้นติดพิธีการศุลกากร
          </h1>
          <p>
            ไม่ว่าจะเป็น DHL, FEDEX, UPS, TNT, AIR CARGO ต่างๆ หรือจะเป็นการติด
            อย. มอก. สมอ. กสทช. เกษตร ประมง
            ทางเรายินดีให้บริการช่วยเหลือนำสินค้าออก
          </p>
          <p>
            {" "}
            ต้องการส่งหรือนำเข้าสินค้า ต่างประเทศ ปรึกษา EASTHAI service
            เราพร้อมช่วยคุณ ไม่ว่า ทางเรื่อ หรือ ทางเครื่องบิน
            เตรียมเอกสารสำหรับส่งออก เดินพิธีการขาเข้าและขาออก สนใจ ติดต่อ โทร
            02 235 9100(5), 086 778 0808 Line @easthai ยินดีให้บริการ
            จากเราผู้มีประสบการณืโดยตรงมากว่า 25 ปี{" "}
          </p>
          <p>
            <a href="tel:0867780808">คลิกเลย </a>เพื่อติดต่อกำทางเจ้าหน้าที่
          </p>
        </div>

      </Container>
      <Service />
      <Contact />
    </>
  );
};

export default Costomclearance;
