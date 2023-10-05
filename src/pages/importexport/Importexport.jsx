import React from 'react'
import './importexport.css'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet'
import OurService2 from '../../components/ourService2/OurService2';
import Contact from '../../components/contact/Contact'
import GetQuotation2 from "../../components/getQuotation2/GetQuotation2";
import CompareFreight from '../../components/compareFreight/compareFreight';
import importexportcover from '../../images/importexportcover2.png'
import home_air from '../../images/home_air.png'
import home_sea from '../../images/home_sea.png'
import importexportexample from '../../images/importexport_example.png'






const Importexport = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
          <Helmet>
        <title>EASTHAI - ชิปปิ้งนำเข้าส่งออก</title>
        </Helmet>  
    <div className='importexport'>
      <div className="importexportCover">
      <img src={importexportcover} alt="" />
      </div>
    </div>

    <div className="content1">
       <div className="container content-1">
      <div className="contentTitle">
        <h1>What is Freight service</h1>
        <p>การเข้าใจวิธีการนำเข้าส่งออกเป็นสิ่งสำคัญสำหรับผู้ที่ทำธุรกิจการค้าระหว่างประเทศ โดยการขนส่งสินค้าระหว่างประเทศมักจะมี 2 วิธีที่ถูกใช้เป็นประจำ คือ การขนส่งทางอากาศ(Air Freight) และการขนส่งทางทะเล(Sea Freight)วิธีการขนส่งของแต่ละประเภทนั้นจะมีข้อดีข้อเสียที่แตกต่างกันไป</p>
      </div>
       </div>
       </div>

      <div className="content2">
      <div className=" container content-2">
        <div className="content-2Left">
          <h1>Air Freight</h1>
          <p>เป็นวิธีการขนส่งสินค้าที่มีความเร็วและสะดวกสบายช่วยลดเวลาในการขนส่งสินค้า การใช้บริการขนส่งทางอากาศเป็นทางเลือกสำหรับธุรกิจที่ต้องการส่งสินค้าที่มีความคุ้มค่าสูงและต้องคำนึงถึงความเร็วในการขนส่งสินค้า....</p>
          <Link to="/airfreight" className="sec4Btn">
              <button>อ่านเพิ่มเติม</button>
            </Link>
        </div>
        <div className="content-2Right">
        <img src={home_air} alt="บริการขนส่งทางเครื่องบิน" />
        </div>
      </div>
      </div>

      <div className="content3">
      <div className="container content-3">
        <div className="content-3Left">
          <img src={home_sea} alt="บริการขนส่งทางเรือ" />
        </div>
        <div className="content-3Right">
        <h1>Sea Freight</h1>
          <p>การขนส่งทางเรือนั้นใช้ตู้คอนเทนเนอร์เป็นสื่อกลางในการขนส่งสินค้าจากประเทศต้นทางไปยังประเทศปลายทาง การใช้บริการขนส่งทางเรือยังช่วยลดต้นทุนในการขนส่งของธุรกิจของคุณด้วยการลดค่าใช้จ่ายในการขนส่ง....</p>
          <Link to="/seafreight" className="c3r-button">
              <button>อ่านเพิ่มเตืม</button>
            </Link>

        </div>
      </div>
      </div>


      <CompareFreight/>

      <div className="content4">
      <div className="container content-4">
        <div className="content-4Left">
          <img src={importexportexample} alt="" />
        </div>
        <div className="content-4Right">
          <h1>เอกสารที่จำเป็นในการขอใบเสนอราคา</h1>
          <p>การที่บริษัท Freight Forwarder จะทำใบเสนอราคา ทางผู้ส่งควรที่จะเตรียมข้อมูลเบื้องต้นไว้ เช่น</p>
          <ul>
            <li>ประเภทสินค้า</li>
            <li>คำอธิบายและข้อมูลเพิ่มเติมสำหรับสินค้านั้นๆ</li>
            <li>ประเทศต้นทาง และ ปลายทาง</li>
            <li>ขนาด และ น้ำหนัก</li>
          </ul>
        </div>
      </div>
      </div>
    <GetQuotation2/>
    <OurService2/>
    <Contact/>
    </>
  )
}

export default Importexport