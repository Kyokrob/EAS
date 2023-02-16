import React, { useEffect } from 'react'
import './saefreight.css'
import Service from '../../components/service/Service'
import Contact from '../../components/contact/Contact'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider';

import { Helmet } from 'react-helmet'




const Seafreight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
          <Helmet>
        <title>EASTHAI - ขนส่งทางเรือ</title>
        </Helmet>  
    <div className='importexport'>
         <img src="https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />

    <div className="importexportHeaderText">
      <h1>Sea Freight</h1>
    </div>
    </div>

    <Container className="customclearanceContent">
           <div className="customclearanceContentTitle">
            <h1>นำเข้าและส่งของไปต่างประเทศโดยการขนส่งทางทะเล</h1>
           </div>

           <div className="importTitle">
           
           <p>การขนส่งทางทะเล โดยใช้เรือบรรทุกสินค้าขนาดใหญ่ เหมาะกับการขนส่งสินค้าที่มีปริมาณมาก ๆ หรือสินค้าที่มีขนาดใหญ่  ยังเป็นหนึ่งในทางเลือกหลักสำหรับผู้นำเข้าส่งออกสินค้าระหว่างประเทศที่ไม่ต้องคำนึงถึงระยะเวลาในการขนส่งมากนัก หากต้องการทำการขนส่งสินค้าประเภทนี้ สินค้าที่นำมาจัดส่งต้องไม่เป็นสินค้าประเภทเร่งด่วน เหมาะกับสินค้าที่มีปริมาณมาก และมีขนาดใหญ่  
          </p>


           <p>  โดยที่การขนส่งทางทะเลมีต้นทุนถูกที่สุดเมื่อเทียบกับการขนส่งรูปแบบอื่นๆ
           ตัวอย่างสินค้าที่เหมาะสมสำหรับการขนส่งทางเรือ เช่น ชิ้นส่วนรถยนต์หรืออะไหล่รถยนต์ เฟอร์นิเจอร์ เครื่องจักร</p>

           <h3>การขนส่งทางทะเลนั้นมี 2 รูปแบบคือ</h3>
           <ul>
            <li> LCL (Less than container load) = การขนส่งแบบไม่เต็มตู้ เหมาะสำหรับสินค้าที่มีปริมาณน้อย</li>
            <li>FCL (Full container load) = การขนส่งแบบเต็มตู้คอนเทนเนอร์ ซึ้งขนาดตู้คอนเทนเนอร์นั้นมีให้เลือก
หลายชนิด แต่ทั้งนี้จะขึ้นอยู่กับ ประเภทของสินค้า ขนาด และ ปริมาณด้วย</li>
           </ul>

           </div>


           <div className="importCc">
           <h3>ข้อดีของการขนส่งทางเรือ</h3>
           <ul>
            <li>
            สามารถส่งสินค้าได้ทุกประเทศทั่วโลก
            </li>
            <li>
            มีต้นทุนการขนส่งที่ต่ำ เนื่องจากระยะเวลาและความเหมาะสมของสินค้า
            </li>
            <li>อัตราค่าขนส่งถูกกว่าเมื่อเปรียบเทียบกับการขนส่งทางอื่นๆ</li>
            <li>สามารถขนส่งสินค้าขนาดใหญ่ได้</li>
            <li>สามารถขนส่งสินค้าได้ครั้งละปริมาณมาก โดยมีตู้หลากหลายแบบและหลายขนาดให้เลือกตามความเหมาะสมของสินค้า</li>
            <li>มีความปลอดภัยค่อนข้างสูง เนื่องจากใช้ความเร็วในการขับเคลื่อนช้า เมื่อเทียบกับการขนส่งทางอื่นๆ</li>
           </ul>
           </div>

           <div className="exportCc">
            <h3>ข้อเสียของการขนส่งทางเรือ</h3>

           <ul>
            <li>ต้องมีการขนถ่ายสินค้าลงเรือเพื่อเปลี่ยนยานพาหนะ เพราะการขนส่งทางเรืออย่างเดียวไม่สามารถส่งสินค้าไปถึงปลายทางได้</li>
            <li>ต้องขนส่งสินค้าในปริมาณมากเต็มตู้คอนเทนเนอร์ เพราะถ้าขนส่งสินค้าในปริมาณที่น้อยจะมีต้นทุนในการขนส่งที่สูง</li>
            <li> ระยะเวลาในการขนส่งค่อนข้างช้า เหมาะกับสินค้าที่ไม่เร่งรีบ</li>
            <li>ไม่สามารถกำหนดระยะเวลาได้อย่างแน่นอน เนื่องจากปัจจัยต่างๆ สภาพอากาศของแต่ละประเทศ</li>
           </ul>
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
           <p><a href="tel:0867780808">คลิกเลย </a>เพื่อติดต่อเจ้าหน้าที่</p>
           </div>

    </Container>
    
    <Service/>
    <Contact/>
    </>
  )
}

export default Seafreight