import React from "react";
import "./ourService2.css";
import { Link } from "react-router-dom";

import air_icon1 from "../../images/air_icon1.svg";
import sea_icon1 from "../../images/sea_icon1.svg";
import express_icon1 from "../../images/express_icon1.svg";
import customs_icon1 from "../../images/customs_icon1.svg";
import imex_icon1 from "../../images/imex_icon1.svg";

const OurService2 = () => {
  return (
    <div className="container">
      <div className="ourService2">
        <div className="ourServiceBox2-1">
          <h1>บริการอื่นๆของ EASTHAI</h1>
          
        </div>
        <div className="ourServiceBox2">
          <img src={air_icon1} alt="" />
          <h1>Air Freight</h1>
          <p>
            การขนส่งทางอากาศเหมาะสำหรับพัสดุ สินค้าขนาดเล็กที่ต้องการความรวดเร็ว
            ช่วยให้มั่นใจได้ว่าสินค้าจะถึงปลายทางได้อย่างรวดเร็ว
          </p>
          <Link to="/airfreight">
            <p>อ่านเพิ่มเติม</p>
          </Link>
        </div>
        <div className="ourServiceBox2">
          <img src={sea_icon1} alt="" />
          <h1>Sea Freight</h1>
          <p>
            {" "}
            การขนส่งสินค้าที่มีปริมาณมากหรือสินค้าที่มีขนาดใหญ่โดยการขนส่งทางเรือสามารถแบ่งออกเป็นสองประเภทคือ
            FCL และ LCL
          </p>
          <Link to="/seafreight">
            <p>อ่านเพิ่มเติม</p>
          </Link>
        </div>
        <div className="ourServiceBox2">
          <img src={express_icon1} alt="" />
          <h1>Express Support</h1>
          <p>
            บริการช่วยเหลือสำหรับผู้นำเข้าสินค้าเร่งด่วน (Courier express)
            Fedex, DHL, Tnt พร้อมแก้ใขปัญหาการนำเข้าสินค้าจากต่างประเทศ
          </p>
          <Link to="/courier">
            <p>อ่านเพิ่มเติม</p>
          </Link>
        </div>
        <div className="ourServiceBox2">
          <img src={customs_icon1} alt="" />
          <h1>Customs clearance</h1>
          <p>
            ชิปปิ้ง คือการเตรียมงานเอกสารเพื่อสำแดงภาษีให้กับกรมศุลกากร
            เราเป็นตัวแทนในการเดินพิธีการศุลกากรและเคลียร์สินค้าทั้งขาออกขาเข้าประเทศ
          </p>
          <Link to="/customclearance">
            <p>อ่านเพิ่มเติม</p>
          </Link>
        </div>
        <div className="ourServiceBox2">
          <img src={imex_icon1} alt="" />
          <h1>Import - Export</h1>
          <p>
          ตัวแทนผู้นำเข้า-ส่งออกสินค้าระหว่างประเทศ ช่วยประสานงานต้นทางและปลายทาง เพื่อให้การขนส่งเป็นไปได้ด้วยความรวดเร็วและมีประสิทธิภาพ
          </p>
          <Link to="/import-export">
            <p>อ่านเพิ่มเติม</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurService2;
