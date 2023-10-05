import React, { useEffect } from "react";
import "./saefreight.css";

import sea_home from '../../images/sea_home.png'
import sea_container from '../../images/sea_container.png'
import sea_2 from '../../images/sea_2.png'
import check from '../../images/check_icon.png'

import OurService2 from "../../components/ourService2/OurService2";
import Contact from "../../components/contact/Contact";
import GetQuotation2 from '../../components/getQuotation2/GetQuotation2'


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
      {/* Header end */}



       <div className="content1">
       <div className="container content-1">
      <div className="contentTitle">
        <h1>What is Sea freight</h1>
        <p>
        การขนส่งทางเรือ
            เป็นหนึ่งในทางเลือกหลักและได้รับความนิยมมากในปัจจุบัน
            เหมาะกับการขนส่งสินค้าที่มีปริมาณมากหรือสินค้าที่มีขนาดใหญ่ สำหรับสินค้าที่ไม่ต้องคำนึงถึงระยะเวลาในการขนส่งไม่ควรเป็นสินค้าประเภทเร่งด่วน
        </p>
      </div>
       </div>
       </div>

      <div className="content2">
      <div className=" container content-2">
        <div className="content-2Left">
          <h1>การขนส่งทางเรือ</h1>
          <p>เป็นทางเลือกหนึ่งที่ได้รับความนิยมสำหรับการขนส่งสินค้าระหว่างประเทศในปัจจุบัน เนื่องจากราคาค่าขนส่งถูกกว่าวิธีการขนส่งอื่น ๆ โดยการขนส่งทางเรือนั้นใช้ตู้คอนเทนเนอร์เป็นสื่อกลางในการขนส่งสินค้าจากประเทศต้นทางไปยังประเทศปลายทาง เหมาะสำหรับการขนส่งสินค้าที่มีปริมาณมากหรือขนาดใหญ่ ใบขนสินค้าขาเข้าจะถูกออกโดยผู้นำเข้าเพื่อขออนุญาตให้นำเข้าสินค้าที่ได้รับการสั่งซื้อจากต่างประเทศ</p>
        </div>
        <div className="content-2Right">
        <img src={sea_home} alt="" />
        </div>
      </div>
      </div>

      <div className="content3">
      <div className="container content-3">
        <div className="content-3Left">
          <img src={sea_container} alt="" />
        </div>
        <div className="content-3Right">
          <h1>FCL and LCL</h1>

          <h5>FCL (Full Container Load)</h5>
          <div className="content-list">
            <img src={check} alt="" />
          <span>เป็นการบรรจุสินค้าแบบเต็มตู้คอนเทนเนอร์</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>ราคาจะคิดตามขนาดของตู้</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>สำหรับสินค้า ปริมาณมาก และ ขนาดใหญ่</span>
          </div>

          <h5>LCL (Less than Container Load)</h5>
          <div className="content-list">
            <img src={check} alt="" />
          <span>การบรรจุสินค้าแบบไม่เต็มตู้คอนเทนเนอร์</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>เหมาะสำหรับสินค้าจำนวนน้อย</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>ราคาจะคิดตามตามลูกบาศก์เมตร (CBM.) หรือน้ำปริมาตร (Weight Ton) </span>
          </div>
        </div>
      </div>
      </div>




      <div className="content4">
      <div className="container content-4">
        <div className="content-4Left">
          <img src={sea_2} alt="" />
        </div>
        <div className="content-4Right">
          <h1>เอกสารสำคัญที่ใช้ในการนำเข้าส่งออกทางเรือ</h1>
          <div className="content-list">
            <img src={check} alt="" />
          <span>ใบขนสินค้า</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>ใบตราส่งสินค้าทางเรือ (Bill of lading)</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>บัญชีราคาสินค้า (Commercial Invoice)</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>บัญชีบรรจุหีบห่อ (Packing List)</span>
          </div>
        </div>
      </div>
      </div>

      {/* <Service /> */}
      <GetQuotation2/>
      <OurService2/>
      <Contact/>
    </>
  );
};

export default Seafreight;
