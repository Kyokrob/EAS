import React from 'react'
import './importexport.css'
import Service from '../../components/service/Service'
import Contact from '../../components/contact/Contact'
import { useEffect } from 'react'
import Container from '@mui/material/Container'
import importexportcover from '../../images/importexportcover.png'

import Button from '@mui/material/Button'
import { Link } from "react-router-dom"

import Divider from '@mui/material/Divider'

import { Helmet } from 'react-helmet'




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
      <img src={importexportcover} alt="" />

      <div className="importexportHeaderText">
            <h1>Import/Export</h1>
    </div>
    </div>
    <Container className="customclearanceContent">
           <div className="customclearanceContentTitle">
            <h1>นำเข้าสินค้าจากต่างประเทศ และ ส่งสินค้าออกนอกประเทศ</h1>
           </div>

           <div className="importTitle">
           
           <p>EASTHAI ให้บริการนำเข้าสินค้าจากต่างประเทศทั่วโลก ทั้งการนำเข้าสินค้าทางเครื่องบิน ทางเรือ เรามีเอเย่นต์ที่เป็นตัวแทนเราในหลายประเทศ เพื่อช่วยประสานงานรับสินค้าจากที่อยู่ต้นทางในต่างประเทศ พร้อมช่วยเป็นตัวแทนในการเดินพิธีการศุลกากรขาเข้าประเทศไทย และจัดส่งสินค้าให้ที่อยู่ปลายทางในประเทศไทย </p>

           </div>


           <div className="importExportSection">
           <div className="importSea">
            <div className="importSeaHeader">
              <img src="https://images.pexels.com/photos/9256204/pexels-photo-9256204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div className="importExportBody">
            <h1>Sea Freight</h1>
            <p>การขนส่งทางทะเล โดยใช้เรือบรรทุกสินค้าขนาดใหญ่ เหมาะกับการขนส่งสินค้าที่มีปริมาณมาก ๆ เป็นหนึ่งในทางเลือกหลักสำหรับผู้นำเข้าส่งออกสินค้าระหว่างประเทศที่ไม่ต้องคำนึงถึงระยะเวลาในการขนส่งมากนัก โดยที่การขนส่งทางทะเลมีต้นทุนถูกที่สุดเมื่อเทียบกับการขนส่งรูปแบบอื่นๆ</p>
            <ul>
              <li>สามารถส่งสินค้าได้ทุกประเทศทั่วโลก</li>
              <li>อัตราค่าขนส่งถูกกว่าเมื่อเปรียบเทียบกับการขนส่งทางอื่นๆ</li>
              <li>สามารถขนส่งสินค้าขนาดใหญ่ได้</li>
              <li>สามารถขนส่งสินค้าได้ครั้งละปริมาณมาก โดยมีตู้หลากหลายแบบและหลายขนาดให้เลือกตามความเหมาะสมของสินค้า</li>
            </ul>
            <Button
            to='/seaFreight' component={Link}
            sx={{
              padding: "12px",
              background: "#e6af4b",
              borderRadius: "10px",
              color: "white",
              marginTop: "2rem",
            }}
            >อ่านเกี่ยวกับ Sea Freight</Button>
            </div>
           </div>

           <div className="importAir">
           <div className="importAirHeader">
              <img src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div className="importExportBody">
            <h1>Air Freight</h1>
            <p>การขนส่งทางอากาศ โดยใช้เครื่องบินในการขนส่ง จึงทำให้สินค้าถูกส่งถึงที่หมายได้อย่างรวดเร็ว เมื่อเปรียบเทียบกับการขนส่งในรูปแบบอื่น ๆ เหมาะสำหรับสินค้าที่มีราคาสูง และ ต้องการความรวดเร็วหรือหลีกเลี่ยงความเสียหายระหว่างการขนส่ง เช่น ผักสด ผลไม้สด ซูปเปอร์คาร์ ฯลฯ</p>
            <ul>
              <li>มีความรวดเร็ว</li>
              <li>มีความแน่นอนของเวลาในการขนส่ง </li>
              <li>ความปลอดภัยต่อสินค้าและลดความเสียหายระหว่างขนส่ง</li>
              <li>สามารถส่งสินค้าได้หลายเที่ยวต่อวัน</li>
            </ul>
            <Button
            to='/airFreight' component={Link}
            sx={{
              padding: "12px",
              background: "#e6af4b",
              borderRadius: "10px",
              color: "white",
              marginTop: "2rem",
            }}
            >อ่านเกี่ยวกับ Air Freight</Button>
            </div>
           </div>
           </div>





            <div className="compareSection">
              <h1>ตารางเปรียบเทียบ Sea และ Air freight</h1>
            <div className="seaAirTitle">
            <div className="seaAirTitleLeft">
              <h3>ประเภทขนส่ง</h3>
            </div>
            <div className="seaAirTitleRight">
              <div className="table">
              <h3>เวลาในการขนส่ง</h3>
              </div>
              <div className="table">
              <h3>การบริการ</h3>
              </div>
              <div className="table">
              <h3>ปริมาณสินค้า</h3>
              </div>
              <div className="table">
              <h3>ค่าใช้จ่าย</h3>
              </div>
            </div>
           </div>
           <Divider/>

           <div className="sea">
           <div className="seaLeft">
              <p>การขนส่งทางเรือ (SEA FREIGHT)</p>
            </div>
            <div className="seaRight">
            <div className="table">
            <p>ช้า</p>
            </div>
            <div className="table">
            <p>เกือบ ทุกประเทศ</p>
            </div>
              <div className="table">
              <p>ปริมาณมาก</p>
              </div>
              <div className="table">
              <p>ถูก</p>
              </div>
              </div>
           </div>
           <Divider/>


           <div className="air">
            <div className="airLeft">
            <p>การขนส่งทางเครื่องบิน  (AIR FREIGHT)</p>
            </div>
            <div className="airRight">
              <div className="table">
              <p>เร็วมาก</p>
              </div>
              <div className="table">               
              <p>ทั้วโลก</p>
              </div>
              <div className="table">               
              <p>ปริมาณน้อย</p>
              </div>
              <div className="table">
              <p>แพงกว่า</p>
              </div>
            </div>
           </div>

            </div>


           <div className="easCc">
           <p> ต้องการส่งหรือนำเข้าสินค้า ต่างประเทศ ปรึกษา EASTHAI service เราพร้อมช่วยคุณ ไม่ว่า ทางเรื่อ หรือ ทางเครื่องบิน เตรียมเอกสารสำหรับส่งออก เดินพิธีการขาเข้าและขาออก สนใจ ติดต่อ โทร 02 235 9100(5),  086 778 0808 Line @easthai ยินดีให้บริการ จากเราผู้มีประสบการณ์โดยตรงมากว่า 25 ปี </p>
           <p><a className='highlight' href="tel:0867780808">คลิกเลย </a>เพื่อติดต่อเจ้าหน้าที่</p>
           </div>

    </Container>
    <Service/>
    <Contact/>
    </>
  )
}

export default Importexport