import React, { useEffect } from "react";
import "./customclearance.css";
import OurService2 from "../../components/ourService2/OurService2";
import Contact from "../../components/contact/Contact";
import GetQuotation2 from "../../components/getQuotation2/GetQuotation2";
import CustomsCarousel from "../../components/customsCarousel/CustomsCarousel";




import customscover from '../../images/cccover.png'
import cc1 from '../../images/cc_1.png'
import cc2 from '../../images/cc_2.png'
import cc3 from '../../images/cc_3.png'
import check from '../../images/check_icon.png'

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Costomclearance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <Helmet>
        <title>EASTHAI - พิธีการศุลกากร </title>
      </Helmet>
      <div className="importexport">
        <div className="importexportCover">
          <img src={customscover} alt="" />
        </div>
      </div>

      <div className="bg-bg">
      <div className="content1">
       <div className="container content-1">
      <div className="contentTitle">
        <h1>Customs Clearace</h1>        
<p>เมื่อนำเข้าหรือส่งออกสินค้าข้ามประเทศ การปฏิบัติตามกฎหมายและเกณฑ์ข้อบังคับต่าง ๆ มีความสำคัญอย่างมากกับการประกอบธุรกิจที่เกี่ยวกับการค้าระหว่างประเทศทุกขั้นตอนจะต้องปฏิบัติตามกฎและข้อบังคับของกรมศุลกากรอย่างเคร่งครัด </p>
      </div>
       </div>
       </div>

      <div className="content2">
      <div className=" container content-2">
        <div className="content-2Left">
          <h1>พิธีการศุลกากร คืออะไร</h1>
          <p>Customs clearance หรือ การดำเนินพิธีการศุลกากร คือกระบวนการตรวจสอบและอนุมัติการนำเข้าสินค้าเข้าสู่ประเทศผ่านกรมศุลกากร เป็นกระบวนการที่จำเป็นเพื่อให้การนำเข้าสินค้าเป็นไปตามกฎหมาย โดยภายในกระบวนการ ดำเนินพิธีการศุลกากร จะมีการตรวจสอบเอกสารต่างๆ เช่น ใบขนสินค้า ใบแจ้งหนี้ และเอกสารทางศุลกากรอื่นๆ ซึ่งต้องเป็นไปตามกฎหมายและมีความถูกต้องตามเกณฑ์ที่กำหนดไว้ และตรวจสอบสินค้าที่นำเข้าเพื่อตรวจสอบว่าเป็นสินค้าที่ได้รับอนุญาตให้นำเข้าหรือไม่</p>
        </div>
        <div className="content-2Right">
        <img src={cc1} alt="" />
        </div>
      </div>
      </div>

      <div className="cc-content3">
      <div className="cc-content-3">
        <div className="cc-content-3Left">
        <CustomsCarousel/>
        </div>
        <div className="cc-content-3Right">
          <h1>How Customs agents can help you</h1>
          <h5>ตัวกลางระหว่างผู้นำเข้าและเจ้าหน้าที่ศุลกากรมีความชำนาญเกี่ยวกับกระบวนการภาษีศุลกากรอย่างละเอียดรวมถึงความรู้สำหรับเอกสารที่ต้องใช้ ภาษีและอากรที่ต้องชำระ สามารถคำนวนภาษี ให้คำแนะนำและสนับสนุนผู้นำเข้าและผู้ส่งออกได้อย่างเป็นประโยชน์</h5>
          
          <div className="content-list">
            <img src={check} alt="" />
          <span>จัดทำเอกสารที่เกี่ยวข้องกับการขนส่งสินค้า เช่น ใบขนสินค้า ใบนำเข้า ใบกำกับภาษี ใบแจ้งหนี้การค้า (commercial invoice) รายการบรรจุภัณฑ์ (packing lists) และใบรับรองต้นกำเนิดสินค้า (certificate of origin)เป็นต้น</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>ประสานงานกับหน่วยงานที่เกี่ยวข้อง เช่น สำนักงานศุลกากร และบริษัทขนส่งสินค้า</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>ช่วยเตรียมเอกสารขออนุญาตและการยื่นขอใบอนุญาตการนำเข้าสินค้าให้กับหน่วยงานราชการที่เกี่ยวข้อง เช่น อย. สมอ. ประมง</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>ช่วยในการแก้ไขปัญหาที่เกิดขึ้นในกระบวนการนำเข้า-ส่งออกสินค้า เช่น ข้อมูลเอกสารผิดพลาด ทำให้สินค้าล่าช้า</span>
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
          <h1>What we provide</h1>
          <div className="content-list">
            <img src={check} alt="" />
          <span>มีผู้เชี่ยวชาญด้านพิธีการศุลกากรที่ได้รับใบอนุญาต และ ทีมงาน จัดเตรียมเอกสารนำเข้า-ส่งออกด้วยระบบ E-paperless</span>
          </div>
          <div className="content-list">
          <img src={check} alt="" />
          <span>เข้าใจขั้นตอนการทำศุลกากรอย่างละเอียดอ่อนทุกขั้นตอนของการดำเนินพิธีการศุลกากร</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>At EASTHAI our custom clearance software enables electronic submission of invoices for efficient and expedited clearance of your goods.</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>We can handle your temporary imports and exports from free trade zones, and manage bonded shipments of almost any type of cargo.</span>
          </div>
         
          <Link to="/contactform" className="c4r-button-button">
              <button>Contact customs expert</button>
            </Link>
          
        </div>
      </div>
      </div>

      <div className="cc-content5">
      <div className="container cc-content-5">
        <div className="cc-content-5Left">
          <img src={cc3} alt="" />
        </div>
        <div className="cc-content-5Right">
          <h1>Industry Solutions</h1>
          <h5>หน่วยงานที่มีความเชี่ยวชาญเป็นพิเศษ</h5>
          <ul>
            <li>FEED</li>
            <li>STEREO</li>
            <li>COSMETICS/BEAUTY</li>
            <li>MACHINERY PART</li>
          </ul>
        </div>
      </div>
      </div>
      </div>














      {/* <Container className="customclearanceContent">
        <div className="customclearanceContentTitle">
        <h1>Customs Clearance - ดำเนินพิธีการศุลกากร</h1>
        </div>

        <div className="importTitle">
          <p>
          การปฏิบัติตามกฎหมายและเกณฑ์ข้อบังคับต่าง ๆ เมื่อนำเข้าหรือส่งออกสินค้าข้ามประเทศ มีความสำคัญอย่างมากกับการประกอบธุรกิจที่เกี่ยวกับการค้าระหว่างประเทศ กระบวนการดังกล่าวจะประกอบด้วยการตรวจสอบเอกสารที่เกี่ยวข้องกับการนำเข้าหรือส่งออกสินค้า เช่น ใบขนสินค้า ใบรับรองต่างๆ และเอกสารอื่นๆ รวมถึงการชำระภาษีหรืออากรตามกฎหมายที่เกี่ยวข้องกับการนำเข้าหรือส่งออกสินค้า 
          </p>
          <p>ในกระบวนการนำเข้าหรือส่งออกสินค้าข้ามประเทศนั้น ทุกขั้นตอนจำเป็นต้องปฏิบัติตามกฎหมายและข้อบังคับของกรมศุลกากรอย่างเคร่งครัด เพื่อให้การดำเนินงานเป็นไปได้อย่างถูกต้องและสมบูรณ์ หากเอกสารไม่ครบถ้วนหรือมีความผิดพลาดเกิดขึ้น อาจทำให้กรมศุลกากรต้องตรวจสอบสินค้าก่อนจะมีการส่งออกได้ ซึ่งนั่นอาจเป็นปัญหาที่ทำให้เกิดความล่าช้าได้</p>


          <h3>
          การจัดเตรียมเอกสารสำหรับการดำเนินพิธีการศุลกากร
          </h3>

          <ul>
          Import customs clearance
            เอกสารที่ต้องจัดเตรียมในการนำเข้าสินค้าเข้าประเทศ
            <li>บัญชีราคาสินค้า (Commercial Invoice)</li>
            <li>บัญชีรายละเอียดบรรจุหีบห่อ P/L (Packing List)</li>
            <li>ใบตราส่งสินค้า B/L (Bill of Lading or Air Waybill)</li>
            <li>ใบแจ้งยอดเบี้ยประกัน (Insurance Premium Invoice)</li>
            <li>ใบอนุญาตหรือหนังสืออนุญาตสำหรับสินค้าควบคุมการนำเข้า</li>
            <li>ใบรับรองแหล่งกำเนิดสินค้า (Certificate of Origin)</li>
          </ul>


          <ul>Export customs clearance
            เอกสารที่ต้องจัดเตรียมในการส่งออกสินค้าออกนอกประเทศ
            <li>บัญชีราคาสินค้า (Commercial Invoice)</li>
            <li>บัญชีรายละเอียดบรรจุหีบห่อ P/L (Packing List)</li>
            <li>ใบตราส่งสินค้า B/L (Bill of Lading or Air Waybill)</li>
            <li>ใบอนุญาตส่งออกหรือเอกสารอื่นใดสำหรับสินค้าควบคุมการส่งออก</li>
          </ul>

            <p>อย่างไรก็ตาม ผู้นำเข้าหรือผู้ส่งออกบางท่านอาจไม่มีความชำนาญในด้านกฎหมาย ระเบียบ และประกาศของกรมศุลกากรและหน่วยงานอื่น ๆ ที่เกี่ยวข้อง ซึ่งอาจเป็นเหตุให้เกิดความผิดพลาดได้อย่างง่ายดาย ดังนั้น การศึกษาและเรียนรู้เกี่ยวกับกฎหมาย ระเบียบ และข้อบังคับที่เกี่ยวข้องก่อนทำการนำเข้าหรือส่งออกสินค้าข้ามประเทศจึงเป็นสิ่งสำคัญที่ช่วยลดความผิดพลาดได้มากยิ่งขึ้น ดังนั้นการเลือกใช้บริการของผู้ที่มีความชำนาญและเชี่ยวชาญในการจัดทำเอกสารและเดินพิธีการศุลกากร จึงเป็นสิ่งจำเป็นและมีประโยชน์อย่างมาก</p>
      

          <h3>ทำความรู้จัก Customs clearance agents หรือ ชิปปิ้ง</h3>
          <p>เป็นตัวกลางระหว่างผู้นำเข้าและเจ้าหน้าที่ศุลกากร มีความรู้ความเข้าใจเกี่ยวกับกระบวนการเรียกเก็บภาษีศุลกากรอย่างละเอียด ซึ่งรวมถึงความรู้สำหรับเอกสารที่ต้องใช้ ภาษีและอากรที่ต้องชำระ สามารถคำนวนภาษี ให้คำแนะนำและสนับสนุนผู้นำเข้าและผู้ส่งออกได้อย่างเป็นประโยชน์</p>

          <ul>บทบาทและความรับผิดชอบ
            <li>ให้คำปรึกษาและคำแนะนำในการเตรียมเอกสารที่จำเป็นสำหรับการขนส่งสินค้า</li>
            <li>จัดทำเอกสารที่เกี่ยวข้องกับการขนส่งสินค้า เช่น ใบขนสินค้า ใบนำเข้า ใบกำกับภาษี ใบแจ้งหนี้การค้า (commercial invoice) รายการบรรจุภัณฑ์ (packing lists) และใบรับรองต้นกำเนิดสินค้า (certificate of origin)เป็นต้น</li>
            <li>ยื่นคำขอในการขนส่งสินค้าและดำเนินการจัดเตรียมเอกสารที่เกี่ยวข้องกับการส่งออกสินค้า</li>
            <li>ชำระภาษีและอากรในช่วงที่กำหนดโดยเจ้าหน้าที่ศุลกากร</li>
          </ul>

          <ul>ประโยชน์ของการใช้ชิปปิ้ง
            <li>ลดความเสี่ยงของข้อผิดพลาดหรือความล่าช้า</li>
            <li>มีความรู้ความเชี่ยวชาญในขั้นตอนและกฎหมายด่านศุลกากร</li>
            <li>สามารถประหยัดค่าใช้จ่ายได้โดยการระบุการยกเว้นภาษีศุลกากร ข้อตกลงการค้าเสรี และกลยุทธ์การลดค่าใช้จ่ายอื่น ๆ</li>
          </ul>

          <p>การใช้ตัวแทนในการออกสินค้าสามารถจะช่วยเพิ่มประโยชน์ให้กับผู้นำเข้าโดยการลดความเสี่ยงในการผิดพลาดหรือความล่าช้าต่างๆ ทีมผู้เชี่ยวชาญของเราสามารถนำเสนอบริการด้านศุลกากรที่มีความละเอียดอ่อน พร้อมด้วยการเข้าใจขั้นตอนศุลกากรที่ซับซ้อน รวดเร็วและมีประสิทธิภาพ ในการตรวจสอบและยื่นเอกสารเพื่อให้สินค้าถูกต้องตามกฎหมาย การใช้บริการของเราสามารถช่วยประหยัดเวลาลดต้นทุน และมั่นใจได้ว่าพิธีการศุลกากรของคุณได้รับการดูแลอย่างดี หากต้องการข้อมูลเพิ่มเติมเกี่ยวกับบริการศุลกากรของ EASTHAI หรือ กรอกแบบฟอร์มขอ <a href="/quotation">ใบเสนอราคา</a> หรือ <a href="/contactform">ติดต่อเรา</a> โดยตรง</p>

          </div>


      </Container> */}

      <GetQuotation2 />
      <OurService2 />
      <Contact />
    </>
  );
};

export default Costomclearance;
