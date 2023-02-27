import React from 'react'
import './importexport.css'
import Service from '../../components/service/Service'
import Contact from '../../components/contact/Contact'
import QuestionForm from "../../components/questionForm/QuestionForm";

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
    </div>
    </div>
    <Container className="customclearanceContent">
           <div className="customclearanceContentTitle">
            <h1>นำเข้า และ ส่งออกสินค้า (Freight Forwarding)</h1>
           </div>

           <div className="importTitle">

           <p>การเข้าใจวิธีการนำเข้าส่งออกเป็นสิ่งสำคัญสำหรับผู้ที่ทำธุรกิจการค้าระหว่างประเทศ โดยการขนส่งสินค้าระหว่างประเทศมีวิธีที่สำคัญอยู่สองวิธีคือ การขนส่งทางอากาศ(Air Freight) และการขนส่งทางทะเล(Sea Freight)ก่อนจะตัดสินใจเลือกวิธีการขนส่งนั่นผู้ประกอบการควรประเมินสินค้าของตนก่อนเพื่อหาวิธีการขนส่งที่เหมาะสมกับความต้องการของตน หากสินค้ามีอายุการใช้หรือเป็นสินค้าเร่งด่วนการขนส่งทางอากาศจะเป็นวิธีการที่เหมาะสมที่สุด สำหรับสินค้าที่มีขนาดใหญ่หรือน้ำหนักมากและไม่เร่งด่วนการขนส่งทางทะเลอาจเป็นทางเลือกที่ต้องการ อย่างไรก็ตามวิธีการขนส่งที่เหมาะสมขึ้นอยู่กับลักษณะของสินค้าระยะเวลาการส่งมอบและงบประมาณที่มีสำหรับค่าขนส่งนั่นๆ</p>

           <h3>ทำความรู้จักกับวิธีการขนส่งสินค้าทั้งสองประเภทเพิ่มเติม</h3>

           </div>


           <div className="importExportSection">
           <div className="importSea">
            <div className="importSeaHeader">
              <img src="https://images.pexels.com/photos/9256204/pexels-photo-9256204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div className="importExportBody">
            <h1>Sea Freight</h1>
            <p>การขนส่งทางทะเลโดยใช้เรือบรรทุกสินค้าขนาดใหญ่เหมาะกับการขนส่งสินค้าที่มีปริมาณมาก ๆ เป็นหนึ่งในทางเลือกหลักสำหรับผู้นำเข้าส่งออกสินค้าระหว่างประเทศที่ไม่ต้องคำนึงถึงระยะเวลาในการขนส่ง</p>
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
            <p>การขนส่งทางอากาศโดยใช้เครื่องบินในการขนส่งจึงทำให้สินค้าถูกส่งถึงที่หมายได้อย่างรวดเร็วเหมาะสำหรับสินค้าที่มีราคาสูงและต้องการความรวดเร็วหรือหลีกเลี่ยงความเสียหายระหว่างการขนส่ง</p>
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

           <div className="importTitle">
           <h4 className='contentBorder'>
           EASTHAI เราให้บริการขนส่งระหว่างประเทศให้กับผู้นำเข้าและส่งออกเรามีเอเย่นต์ที่เป็นตัวแทนในหลากหลายประเทศเพื่อช่วยประสานงานในการรับสินค้าจากโรงงานหรือบริษัทพร้อมเป็นตัวแทนของในการดำเนินการศุลกากรสำหรับการนำเข้าสินค้าเข้าและส่งออก
           </h4>
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


    </Container>
    <Service/>
    <Contact/>
    <QuestionForm/>
    </>
  )
}

export default Importexport