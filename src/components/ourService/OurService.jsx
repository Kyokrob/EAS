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
    <div className="ourService">
         <div className="ourServiceBox1">
            <h3>EASTHAI</h3>
            <h1>บริการของเรา</h1>
            <p>บริษัทมีความชำนาญในการขำเข้าสินค้า FEED เป็นพิเศษ</p>
        </div>
        <div className="ourServiceBox">
            <img src={air_icon} alt="" />
            <h1>Air Freight</h1>
            <p>การขนส่งทางอากาศเหมาะสำหรับพัสดุ
              สินค้าขนาดเล็กที่ต้องการความรวดเร็ว
              ช่วยให้คุณมั่นใจได้ว่าสินค้าของคุณจะถึงปลายทางได้ตรงเวลา</p>
            <Link to="/airfreight">
              <p>อ่านเพิ่มเติม</p>
            </Link>
        </div>
        <div className="ourServiceBox">
            <img src={sea_icon} alt="" />
            <h1>Sea Freight</h1>
            <p> การขนส่งสินค้าที่มีปริมาณมากหรือสินค้าที่มีขนาดใหญ่
              ไม่ต้องคำนึงถึงระยะเวลาในการขนส่ง
              การขนส่งทางเรือจะใช้ระบบตู้คอนเทนเนอร์ในการส่งสินค้าโดยค่าขนส่งนั้นจะถูกที่สุดเมื่อเทียบกับการขนส่งรูปแบบอื่นๆ
              </p>
            <Link to="/seafreight">
              <p>อ่านเพิ่มเติม</p>
            </Link>
        </div>
        <div className="ourServiceBox">
            <img src={express_icon} alt="" />
            <h1>Express Support</h1>
            <p>บริการช่วยเหลือสำหรับผู้นำเข้าสินค้าเร่งด่วน (Courier express)
                Fedex, DHL, Tnt พร้อมแก้ใขปัญหาการนำเข้าสินค้าจากต่างประเทศ</p>
                <Link to="/courier">
              <p>อ่านเพิ่มเติม</p>
            </Link>
        </div>
        <div className="ourServiceBox">
            <img src={customs_icon} alt="" />
            <h1>Customs clearance</h1>
            <p>ชิปปิ้ง คือการเตรียมงานเอกสารเพื่อสำแดงภาษีให้กับกรมศุลกากร
                เราเป็นตัวแทนในการเดินพิธีการศุลกากรและเคลียร์สินค้าทั้งขาออกขาเข้าประเทศ</p>
                <Link to="/customclearance">
              <p>อ่านเพิ่มเติม</p>
            </Link>
        </div>
        <div className="ourServiceBox">
            <img src={imex_icon} alt="" />
            <h1>Import - Export</h1>
            <p>บริการดำเนินการนำเข้าส่งออกและงานเอกสาร
                หากคุณมีทีมงานมืออาชีพช่วยประสานงาน
                คุณจะสามารถลดได้ทั้งต้นทุนและเวลาได้อย่างมาก</p>
                <Link to="/import-export">
              <p>อ่านเพิ่มเติม</p>
            </Link>
        </div>
    </div>
</div>
  );
};

export default OurService;
