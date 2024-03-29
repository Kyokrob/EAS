import React from "react";
import './ourService.css'
import { Link } from "react-router-dom";


import air_icon from '../../images/air_icon.svg'
import sea_icon from '../../images/sea_icon.svg'
import express_icon from '../../images/express_icon.svg'
import customs_icon from '../../images/customs_icon.svg'
import imex_icon from '../../images/imex_icon.svg'

const OurService = () => {
  return (
    <div className="container">
    <div className="ourService2">
         <div className="ourServiceBox2-1">
          <h1>One stop service for your logistic needs</h1>
        </div>
        <div className="ourServiceBox2">
            <img src={air_icon} alt="ขนส่งทางเครื่องบิน" />
            <h1>Air Freight</h1>
            <p>การขนส่งทางอากาศเหมาะสำหรับพัสดุ
              สินค้าขนาดเล็กที่ต้องการความรวดเร็ว
              ช่วยให้มั่นใจได้ว่าสินค้าจะถึงปลายทางได้อย่างรวดเร็ว</p>
            <Link to="/airfreight">
              <p>อ่านเพิ่มเติม</p>
            </Link>
        </div>
        <div className="ourServiceBox2">
            <img src={sea_icon} alt="ขนส่งทางเรือ" />
            <h1>Sea Freight</h1>
            <p> การขนส่งสินค้าที่มีปริมาณมากหรือสินค้าที่มีขนาดใหญ่โดยการขนส่งทางเรือสามารถแบ่งออกเป็นสองประเภทคือ FCL และ LCL
              </p>
            <Link to="/seafreight">
              <p>อ่านเพิ่มเติม</p>
            </Link>
        </div>
        <div className="ourServiceBox2">
            <img src={express_icon} alt="ภาษีนำเข้า" />
            <h1>Express Support</h1>
            <p>บริการช่วยเหลือสำหรับผู้นำเข้าสินค้าเร่งด่วน (Courier express)
                Fedex, DHL, Tnt พร้อมแก้ใขปัญหาการนำเข้าสินค้าจากต่างประเทศ</p>
                <Link to="/courier">
              <p>อ่านเพิ่มเติม</p>
            </Link>
        </div>
        <div className="ourServiceBox2">
            <img src={customs_icon} alt="พิธีการศุลกากร" />
            <h1>Customs clearance</h1>
            <p>บริการดำเนินพิธีการศุลกากร เตรียมงานเอกสารและสำแดงภาษีให้กับกรมศุลกากร
                เราเป็นตัวแทนในการเดินพิธีการศุลกากรและเคลียร์สินค้าทั้งขาออกขาเข้าประเทศ</p>
                <Link to="/customclearance">
              <p>อ่านเพิ่มเติม</p>
            </Link>
        </div>
        <div className="ourServiceBox2">
            <img src={imex_icon} alt="Freight Forwarder" />
            <h1>Import - Export</h1>
            <p>ตัวแทนผู้นำเข้า-ส่งออกสินค้าระหว่างประเทศ ช่วยประสานงานต้นทางและปลายทาง เพื่อให้การขนส่งเป็นไปได้ด้วยความรวดเร็วและมีประสิทธิภาพ</p>
                <Link to="/import-export">
              <p>อ่านเพิ่มเติม</p>
            </Link>
        </div>
    </div>
</div>
  );
};

export default OurService;
