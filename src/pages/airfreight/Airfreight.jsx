import React, { useEffect } from 'react'
import './airfreight.css'
import Service from '../../components/service/Service'
import Contact from '../../components/contact/Contact'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider';

const Airfreight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className='importexport'>
      <img src="https://images.unsplash.com/photo-1571086291540-b137111fa1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />

      <div className="importexportHeaderText">
            <h1>Air Freight</h1>
    </div>
    </div>
    <Container className="customclearanceContent">
           <div className="customclearanceContentTitle">
            <h1>นำเข้าและส่งของไปต่างประเทศโดยการขนส่งทางอากาศ</h1>
           </div>

           <div className="importTitle">
           
           <h3>การขนส่งทางอากาศ หรือการขนส่งทางเครื่องบิน เป็นการขนส่งที่มีความนิยมมากที่สุด และเป็นที่รู้จักกันดี อย่างบริษัทขนส่งสินค้าระหว่างประเทศ FedEx DHL การขนส่งทางเครื่องบินให้ความสะดวกและรวดเร็วที่สุด แต่ค่าใช้จ่ายสูงเมื่อเปรียบเทียบกับการขนส่งทางอื่นๆ โดยการส่งของไปต่างประเทศด้วยวิธีนี้ เหมาะกับสินค้าที่มีขนาดเล็ก ปริมาณไม่มากนัก และต้องการความเร่งด่วน  ตัวอย่างสินค้าที่เหมาะสมสำหรับการขนส่งทางเครื่องบิน เช่น เอกสาร อัญมนี เครื่องประดับ เสื้อผ้า กระเป๋า รองเท้า อาหารสด ผักผลไม้  ตัวอย่างบริษัทส่งของไปต่างประเทศโดยการขนส่งทางเครื่องบิน เช่น FedEx DHL UPS </h3>

           <h3>  การส่งสินค้าทางเครื่องบินเป็นการขนส่งรูปแบบหนึ่งที่มีความสำคัญมากในปัจจุบัน โดยเป็นการขนส่งที่มีความสะดวก รวดเร็วเมื่อเปรียบเทียบกับการขนส่งรูปแบบอื่น ๆ และสามารถส่งสินค้าไปได้ทั่วโลก แต่อย่างไรก็ตาม การส่งสินค้าทางเครื่องบินก็มีค่าใช้จ่ายที่สูง </h3>

           </div>


           <div className="importCc">
           <h1>การส่งสินค้าทางเครื่องบิน มี 2 รูปแบบ คือ Air Courier กับ Air Cargo</h1>
           <ul>
            <li>
            การส่งสินค้าทางเครื่องบินแบบ Air Courier - 
เป็นการส่งสินค้าทางเครื่องบินที่ได้รับความนิยมในปัจจุบัน เหมาะกับการส่งสินค้าที่มีขนาดเล็ก หรือสินค้าที่มีขนาดปานกลาง ที่ต้องการความสะดวก รวดเร็วสามารถส่งถึงมือผู้รับปลายทางได้เลย แต่ก็ไม่ได้เหมาะสำหรับการส่งสินค้าที่มีขนาดใหญ่มากๆ หรือน้ำหนักเป็นตัน
            </li>
            
            <li>
            การส่งสินค้าทางเครื่องบินแบบ Air Cargo
เป็นการส่งสินค้าทางเครื่องบินที่เหมาะกับสินค้าที่มีขนาดใหญ่ ต้องการการจัดส่งที่มีความรวดเร็ว กำหนดเที่ยวบินได้ แต่จะเป็นการส่งถึงแค่ท่าอากาศยาน ผู้รับปลายทางต้องมารับสินค้าจากสนามบินปลายทางเอง
            </li>
           </ul>
           </div>

           <div className="exportCc">
            <h1>การส่งสินค้าทางเครื่องบินมีข้อดีและข้อเสีย คือ</h1>
            <p>
            ข้อดีของการส่งสินค้าทางเครื่องบิน
            </p>
           <ul>
            <li>การส่งสินค้าทางเครื่องบินมีความรวดเร็ว เมื่อเทียบกับการขนส่งประเภทอื่นๆ</li>
            <li>การส่งสินค้าทางเครื่องบินมีความแน่นอนของเวลาในการขนส่ง เพราะมีตารางบินชี้แจงชัดเจน</li>
            <li>การส่งสินค้าทางเครื่องบินมีความปลอดภัยต่อสินค้าและลดความเสียหายระหว่างขนส่ง เพราะมีมาตรฐานในการขนส่งที่สูง</li>
            <li>การส่งสินค้าทางเครื่องบินสามารถส่งสินค้าได้หลายเที่ยวต่อวัน</li>
           </ul>
           </div>

           <div className="exportCc">
            <p>
            ข้อเสียของการส่งสินค้าทางเครื่องบิน
            </p>
           <ul>
            <li>การส่งสินค้าทางเครื่องบินมีค่าใช้จ่ายที่สูง เมื่อเทียบการขนส่งประเภทอื่นๆ</li>
            <li>การส่งสินค้าทางเครื่องบินมีการจำกัดขนาดและน้ำหนักของสินค้า</li>
            <li>การส่งสินค้าทางเครื่องบิน อาจมีปัจจัยหลายอย่างทำให้เกิดความล่าช้า ตัวอย่างเช่น สภาพอากาศ สถานการณ์โรคระบาดโควิด 19 ทำให้เที่ยวบินลดลง</li>
            <li>การส่งสินค้าทางเครื่องบินสามารถ เชื่อมต่อกับการขนส่งรูปแบบอื่น ๆ ได้ที่ท่าอากาศยานเท่านั้น ไม่สามารถส่งไปถึงปลายทางได้เลย</li>
           </ul>
           </div>



            <div className="compareSection">
              <h1>ตารางเปรียบเทียบ Sea และ Air freight</h1>
            <div className="seaAirTitle">
            <div className="seaAirTitleLeft">
              <p>ประเภทขนส่ง</p>
            </div>
            <div className="seaAirTitleRight">
              <div className="table">
              <p>ระยะเวลาในการขนส่ง</p>
              </div>
              <div className="table">
              <p>การบริการ</p>
              </div>
              <div className="table">
              <p>ปริมานสินค้า</p>
              </div>
              <div className="table">
              <p>ค่าใช้จ่าย</p>
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
              <p>ปริมานมาก</p>
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
              <p>ปริมานน้อย</p>
              </div>
              <div className="table">
              <p>แพงกว่า</p>
              </div>
            </div>
           </div>

            </div>


           <div className="easCc">
           <p> ต้องการส่งหรือนำเข้าสินค้า ต่างประเทศ ปรึกษา EASTHAI service เราพร้อมช่วยคุณ ไม่ว่า ทางเรื่อ หรือ ทางเครื่องบิน เตรียมเอกสารสำหรับส่งออก เดินพิธีการขาเข้าและขาออก สนใจ ติดต่อ โทร 02 235 9100(5),  086 778 0808 Line @easthai ยินดีให้บริการ จากเราผู้มีประสบการณืโดยตรงมากว่า 25 ปี</p>
           <p><a className='highlight' href="tel:0867780808">คลิกเลย </a>เพื่อติดต่อกำทางเจ้าหน้าที่</p>
           </div>

    </Container>


    <Service/>
    <Contact/>
    </>
    
  )
}

export default Airfreight