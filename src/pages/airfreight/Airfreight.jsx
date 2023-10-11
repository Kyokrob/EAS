import React, { useEffect } from "react";
import "./airfreight.css";
import GetQuotation2 from "../../components/getQuotation2/GetQuotation2";
import OurService2 from "../../components/ourService2/OurService2";
import Contact from "../../components/contact/Contact";

import check from '../../images/check_icon.png'
import air3 from '../../images/air_3.png'
import air4 from '../../images/air_4.gif'
import air5 from '../../images/air_5.png'



import { Helmet } from "react-helmet";

const Airfreight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>EASTHAI - ขนส่งทางเครื่องบิน</title>
      </Helmet>

      <div className="airHeader">
        <div className="parallax-bg-air">
        <div className="airHeaderText">
        <h1>Air freight</h1>
        <p>การขนส่งทางอากาศเป็นวิธีที่เร็วที่สุดในการขนส่งสินค้าระหว่างประเทศ และมีความยืดหยุ่นในเรื่องของสถานที่ขนส่งสินค้า
          การเลือกใช้การขนส่งทางอากาศจะช่วยให้คุณมั่นใจได้ว่าสินค้าของคุณจะถึงปลายทางได้ตรงเวลา
        </p>
        </div>
        </div>
      </div>


      <div className="content2">
      <div className=" container content-2">
        <div className="content-2Left">
          <h1>การขนส่งทางอากาศ</h1>
          <p>เป็นวิธีการขนส่งสินค้าที่มีความเร็วและสะดวกสบายผ่านการขนส่งโดยใช้เครื่องบิน การใช้บริการขนส่งทางอากาศมีความเหมาะสมสำหรับธุรกิจที่ต้องการส่งสินค้าที่ต้องการส่งในเวลาที่รวดเร็วเพื่อตอบสนองความต้องการของลูกค้า นอกจากนี้การใช้บริการขนส่งทางอากาศยังช่วยลดเวลาในการขนส่งสินค้าและเพิ่มความเป็นไปได้ในการขายสินค้าในตลาดต่างประเทศ ดังนั้น การใช้บริการขนส่งทางอากาศเป็นทางเลือกที่ดีสำหรับธุรกิจที่ต้องการส่งสินค้าที่มีความคุ้มค่าสูงและต้องการลดเวลาในการขนส่งสินค้า</p>
        </div>
        <div className="content-2Right">
        <img src={air5} alt="การขนส่งทางอากาส" />
        </div>
      </div>
      </div>

      <div className="content3">
      <div className="container content-3">
        <div className="content-3Left">
          <img src={air3} alt="air courier cargo" />
        </div>
        <div className="content-3Right">
          <h1>Air Courier and Air Cargo</h1>
          <h5>Air Courier</h5>
          <div className="content-list">
            <img src={check} alt="ขนส่งทางอากาส" />
          <span>กว้าง x ยาว x สูง (ซ.ม.) / 5,000</span>
          </div>
          <div className="content-list">
            <img src={check} alt="ขนส่งทางอากาส" />
          <span>สินค้ามีปริมาณน้อย</span>
          </div>
          <div className="content-list">
            <img src={check} alt="ขนส่งทางอากาส" />
          <span>ต้องการความสะดวก รวดเร็วสามารถส่งถึงมือผู้รับปลายทางได้เลย</span>
          </div>
          <h5>Air Cargo</h5>
          <div className="content-list">
            <img src={check} alt="ขนส่งทางอากาส" />
          <span>กว้าง x ยาว x สูง (ซ.ม.) / 6,000</span>
          </div>
          <div className="content-list">
            <img src={check} alt="ขนส่งทางอากาส" />
          <span>สินค้ามีปริมาณมาก</span>
          </div>
          <div className="content-list">
            <img src={check} alt="ขนส่งทางอากาส" />
          <span>เหมาะกับสินค้าขนาดใหญ่ ที่ต้องการการจัดส่งที่มีความรวดเร็ว</span>
          </div>
        </div>
      </div>
      </div>

      <div className="content4">
      <div className="container content-4">
        <div className="content-4Left">
          <img src={air4} alt="ขนส่งทางอากาส" />
        </div>
        <div className="content-4Right">
          <h1>เอกสารสำคัญที่ใช้ในการนำเข้าส่งออกทางอากาศ</h1>
          <div className="content-list">
            <img src={check} alt="ขนส่งทางอากาส" />
          <span>ใบขนสินค้า</span>
          </div>
          <div className="content-list">
            <img src={check} alt="ขนส่งทางอากาส" />
            <span>ใบตราส่งสินค้าทางอากาศ (Air Waybiil)</span>
          </div>
          <div className="content-list">
            <img src={check} alt="ขนส่งทางอากาส" />
            <span>บัญชีราคาสินค้า (Commercial Invoice)</span>
          </div>
          <div className="content-list">
            <img src={check} alt="ขนส่งทางอากาส" />
            <span>บัญชีบรรจุหีบห่อ (Packing List)</span>
          </div>
        </div>
      </div>
      </div>


      <GetQuotation2/>
      <OurService2 />
      <Contact />
    </>
  );
};

export default Airfreight;
