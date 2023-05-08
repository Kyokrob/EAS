import React, { useEffect } from "react";
import "./airfreight.css";
import GetQuotation2 from "../../components/getQuotation2/GetQuotation2";
import OurService2 from "../../components/ourService2/OurService2";
import Contact from "../../components/contact/Contact";

import aircover from '../../images/air_cover.png'
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
      <div className="importexport">
        <div className="importexportCover">
        {/* <img
          src="https://images.unsplash.com/photo-1571086291540-b137111fa1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt=""
        /> */}
        <img src={aircover} alt="" />
        </div>

        <div className="importexportHeaderText">
          <h1>Air Freight</h1>
        </div>
      </div>


      <div className="content1">
       <div className="container content-1">
      <div className="contentTitle">
        <h1>What is Air freight how can this help you</h1>
        <p>การขนส่งทางอากาศเป็นวิธีหนึ่งในการนำสินค้าเข้า-ส่งออกในปริมาณมาก โดยมีความเร็วและความสะดวกสบายในการขนส่งที่สูง สามารถส่งสินค้าไปถึงทุกมุมโลกในเวลาอันสั้นโดยไม่มีข้อจำกัดต่อระยะทาง นอกจากนี้ การใช้บริการขนส่งทางอากาศยังช่วยลดเวลาในการส่งสินค้าและเพิ่มความเป็นไปได้ในการขายสินค้าในตลาดต่างประเทศ การใช้บริการขนส่งทางอากาศเหมาะสำหรับธุรกิจที่ต้ต้องการส่งในเวลาที่รวดเร็วเพื่อตอบสนองความต้องการของลูกค้า ดังนั้นการใช้บริการขนส่งทางอากาศเป็นทางเลือกที่ดีสำหรับธุรกิจที่ต้องการส่งสินค้าในปริมาณมากและต้องการลดเวลาในการขนส่งสินค้าของพวกเขา</p>
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
        <img src={air5} alt="" />
        </div>
      </div>
      </div>

      <div className="content3">
      <div className="container content-3">
        <div className="content-3Left">
          <img src={air3} alt="" />
        </div>
        <div className="content-3Right">
          <h1>Air Courier and Air Cargo</h1>
          <ul>Air Courier
            <li>A type of sea freight service where a shipper rents an entire container to transport their goods.</li>
            <li>The container is sealed and only opened at the destination.</li>
            <li>FCL is suitable for shippers who need to transport large quantities of goods.</li>
          </ul>
          <ul>Air Cargo
            <li>A type of sea freight service where a shipper shares a container with other shippers.</li>
            <li>LCL is suitable for shippers who need to transport small quantities of goods.</li>
            <li>It offers greater flexibility as the shipper does not need to rent an entire container.</li>
          </ul>
        </div>
      </div>
      </div>

      <div className="content4">
      <div className="container content-4">
        <div className="content-4Left">
          <img src={air4} alt="" />
        </div>
        <div className="content-4Right">
          <h1>Things to prepare before get Air freight quotation</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis illum vel libero suscipit rerum at nostrum sapiente ex distinctio?</p>
          <ul>
            <li>ใบขนส่งสินค้า</li>
            <li>ใบตราส่งสินค้าทางอากาศ (Air Waybill)</li>
            <li>บัญชีราคาสินค้า (Comercial Invoice)</li>
            <li>บัญชีบรรจุหีบห่อ (Packing List)</li>
          </ul>
        </div>
      </div>
      </div>


      {/* <Container className="customclearanceContent">
        <div className="customclearanceContentTitle">
          <h1>นำเข้าและส่งของไปต่างประเทศโดยการขนส่งทางอากาศ</h1>
        </div>

        <div className="importTitle">
          <p>
            การขนส่งทางอากาศเป็นวิธีที่เร็วและเชื่อถือได้ที่สุดในการขนส่งสินค้าระหว่างประเทศโดยมีประโยชน์มากมายเช่น ลดเวลาในการจัดส่ง ความปลอดภัยของสินค้าและเพิ่มความยืดหยุ่นในเรื่องของสถานที่ปลายทาง
            การเลือกใช้การขนส่งทางอากาศจะช่วยให้คุณมั่นใจได้ว่าสินค้าของคุณจะถึงปลายทางได้ตรงเวลาและในสภาพดี
            โดยเฉพาะสำหรับสินค้าที่มีการต้องการเวลาที่สำคัญหรือมีมูลค่าสูง
            ตัวอย่างบริษัทส่งของไปต่างประเทศโดยการขนส่งทางเครื่องบินได้แก่
            FedEx, DHL, UPS{" "}
          </p>

          <p>
            โดยส่วนใหญ่สินค้าที่มีมูลค่าสูงและต้องการการจัดส่งที่รวดเร็วมักถูกส่งโดยการขนส่งทางอากาศ
            เช่น อุปกรณ์อิเล็กทรอนิกส์ ยาและเครื่องสำอาง และเครื่องแต่งกาย
            นอกจากนี้ยังมีสินค้าอื่น ๆ ที่ขนส่งทางอากาศเป็นที่นิยม เช่น
          </p>
          <ul>
            <li>การสั่งซื้อออนไลน์และแพ็คเกจขนาดเล็ก</li>
            <li>สินค้าสดที่เปลี่ยนแปลงได้ง่าย เช่นผลิตภัณฑ์เกษตรและดอกไม้สด</li>
            <li>ชิ้นส่วนรถยนต์</li>
            <li>งานศิลป์และของสะสม</li>
            <li>เครื่องมือและอุปกรณ์ทางการแพทย์</li>
            <li>เครื่องประดับและสินค้าLuxary</li>
            <li>วัสดุพิมพ์ เอกสารสำคัญ</li>
          </ul>

          <h3>ประโยชน์ของการขนส่งทางอากาศ</h3>
          <ul>
            <li>ความเร็วและประสิทธิภาพ</li>
            <li>ความยืดหยุ่น</li>
            <li>การเข้าถึงพื้นที่ที่ห่างไกล</li>
            <li>ความเชื่อถือได้</li>
            <li>ความปลอดภัย</li>
          </ul>

          <h3>เอกสารสำคัญที่ใช้ในการนำเข้าส่งออกทางอากาศ</h3>
          <ul>
            <li>ใบขนสินค้า</li>
            <li>ใบตราส่งสินค้าทางอากาศ (Air Waybiil)</li>
            <li>บัญชีราคาสินค้า (Comercial Invoice)</li>
            <li>บัญชีบรรจุหีบห่อ (Packing List)</li>
          </ul>

          <h4 className="contentBorder">สิ่งสำคัญของการใช้บริการขนส่งทางอากาศคือการขนส่งสินค้าอย่างรวดเร็วและมีประสิทธิภาพสูงสุดทำให้เหมาะสำหรับธุรกิจที่ต้องการเคลื่อนย้ายสินค้าอย่างรวดเร็วโดยเฉพาะอย่างยิ่งสำหรับสินค้าที่มีมูลค่าสูงและต้องการเวลาที่ต้องการแน่นอน</h4>
          <p>
          นอกจากนี้การขนส่งทางอากาศยังมีความยืดหยุ่นมากกว่า โดยที่ผู้ส่งสามารถปรับเปลี่ยนการส่งของได้อย่างง่ายดายในเรื่องของน้ำหนัก ขนาด และปลายทาง สินค้าที่เป็นพืชผลสดหรือดอกไม้ก็สามารถขนส่งได้โดยจะต้องมีการควบคุมอุณหภูมิ นอกจากนี้ การขนส่งทางอากาศยังมีการจัดส่งตามกำหนดเวลาอย่างมั่นคง และสามารถตรวจสอบสถานะการขนส่งได้ตลอดเวลา ทำให้ผู้ส่งสามารถวางแผนการจัดเก็บสินค้าและการส่งมอบได้อย่างมีประสิทธิภาพ
          </p>
        </div>
      </Container> */}



      <GetQuotation2/>
      <OurService2 />
      <Contact />
    </>
  );
};

export default Airfreight;
