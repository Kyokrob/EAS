import React, { useEffect } from "react";
import "./saefreight.css";

import sea_home from '../../images/sea_home.png'
import sea_container from '../../images/sea_container.png'
import sea_2 from '../../images/sea_2.png'
import check from '../../images/check_icon.png'

import OurService2 from "../../components/ourService2/OurService2";
import Contact from "../../components/contact/Contact";
import GetQuotation2 from '../../components/getQuotation2/GetQuotation2'


import { Helmet } from "react-helmet";

const Seafreight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>



      <Helmet>
        <title>EASTHAI - ขนส่งทางเรือ</title>
      </Helmet>
      <div className="importexport">
        <div className="importexportCover">
        <img
          src="https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt=""
        />
        </div>

        <div className="importexportHeaderText">
          <h1>Sea Freight</h1>
        </div>
      </div>
      {/* Header end */}



       <div className="content1">
       <div className="container content-1">
      <div className="contentTitle">
        <h1>What is Sea freight</h1>
        <p>
        การขนส่งทางเรือ
            เป็นหนึ่งในทางเลือกหลักและได้รับความนิยมมากในปัจจุบัน
            เหมาะกับการขนส่งสินค้าที่มีปริมาณมากหรือสินค้าที่มีขนาดใหญ่ สำหรับสินค้าที่ไม่ต้องคำนึงถึงระยะเวลาในการขนส่งไม่ควรเป็นสินค้าประเภทเร่งด่วน
        </p>
      </div>
       </div>
       </div>

      <div className="content2">
      <div className=" container content-2">
        <div className="content-2Left">
          <h1>การขนส่งทางเรือ</h1>
          <p>เป็นทางเลือกหนึ่งที่ได้รับความนิยมสำหรับการขนส่งสินค้าระหว่างประเทศในปัจจุบัน เนื่องจากราคาค่าขนส่งถูกกว่าวิธีการขนส่งอื่น ๆ โดยการขนส่งทางเรือนั้นใช้ตู้คอนเทนเนอร์เป็นสื่อกลางในการขนส่งสินค้าจากประเทศต้นทางไปยังประเทศปลายทาง เหมาะสำหรับการขนส่งสินค้าที่มีปริมาณมากหรือขนาดใหญ่ ใบขนสินค้าขาเข้าจะถูกออกโดยผู้นำเข้าเพื่อขออนุญาตให้นำเข้าสินค้าที่ได้รับการสั่งซื้อจากต่างประเทศ</p>
        </div>
        <div className="content-2Right">
        <img src={sea_home} alt="" />
        </div>
      </div>
      </div>

      <div className="content3">
      <div className="container content-3">
        <div className="content-3Left">
          <img src={sea_container} alt="" />
        </div>
        <div className="content-3Right">
          <h1>FCL and LCL</h1>

          <h5>FCL (Full Container Load)</h5>
          <div className="content-list">
            <img src={check} alt="" />
          <span>เป็นการบรรจุสินค้าแบบเต็มตู้คอนเทนเนอร์</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>ราคาจะคิดตามขนาดของตู้</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>สำหรับสินค้า ปริมาณมาก และ ขนาดใหญ่</span>
          </div>

          <h5>LCL (Less than Container Load)</h5>
          <div className="content-list">
            <img src={check} alt="" />
          <span>การบรรจุสินค้าแบบไม่เต็มตู้คอนเทนเนอร์</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>เหมาะสำหรับสินค้าจำนวนน้อย</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>ราคาจะคิดตามตามลูกบาศก์เมตร (CBM.) หรือน้ำปริมาตร (Weight Ton) </span>
          </div>
        </div>
      </div>
      </div>


      <div className="content4">
      <div className="container content-4">
        <div className="content-4Left">
          <img src={sea_2} alt="" />
        </div>
        <div className="content-4Right">
          <h1>เอกสารสำคัญที่ใช้ในการนำเข้าส่งออกทางเรือ</h1>
          <div className="content-list">
            <img src={check} alt="" />
          <span>ใบขนสินค้า</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>ใบตราส่งสินค้าทางเรือ (Bill of lading)</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>บัญชีราคาสินค้า (Commercial Invoice)</span>
          </div>
          <div className="content-list">
            <img src={check} alt="" />
          <span>บัญชีบรรจุหีบห่อ (Packing List)</span>
          </div>
        </div>
      </div>
      </div>


      {/* <Container className="customclearanceContent">
        <div className="customclearanceContentTitle">
          <h1>นำเข้าส่งของโดยการขนส่งทางเรือ</h1>
        </div>

        <div className="importTitle">
          <p>
            การขนส่งทางเรือ
            เป็นหนึ่งในทางเลือกหลักและได้รับความนิยมมากในปัจจุบัน
            เหมาะกับการขนส่งสินค้าที่มีปริมาณมากหรือสินค้าที่มีขนาดใหญ่สำหรับผู้นำเข้าส่งออกสินค้าระหว่างประเทศที่ไม่ต้องคำนึงถึงระยะเวลาในการขนส่งหากต้องการทำการขนส่งสินค้าทางเรือสินค้าไม่ควรเป็นสินค้าประเภทเร่งด่วน
          </p>
        <p>การขนส่งทางเรือเป็นวิธีหนึ่งในการนำสินค้าเข้า-ส่งออกในปริมาณมาก โดยมีความสามารถในการขนส่งสินค้าทุกประเภทที่มีขนาดใหญ่ ของที่ทนต่อแรงกระแทก รวมไปถึงสิ่งของที่มีน้ำหนักมาก เช่น เครื่องจักร เฟอร์นิเจอร์ การใช้บริการขนส่งทางเรือช่วยให้ธุรกิจของคุณสามารถนำเข้าส่งออกสินค้าไปยังทุกมุมโลกได้อย่างต่อเนื่อง โดยมีความปลอดภัยและราคาที่เหมาะสม นอกจากนี้ การใช้บริการขนส่งทางเรือยังช่วยลดต้นทุนในการขนส่งของธุรกิจของคุณด้วยการลดค่าใช้จ่ายในการขนส่ง จึงเป็นทางเลือกที่ดีสำหรับธุรกิจที่ต้องการส่งสินค้าในปริมาณมากและต้องการลดต้นทุนในการขนส่งสินค้าของพวกเขา.
        ตู้คอนเทนเนอร์ขนาด 20’ 40’ 40’HC, Open Tops, Flat Racks, Reefers เป็นต้น
        </p>

          <p>
            การขนส่งทางเรือจะใช้ระบบตู้คอนเทนเนอร์ในการส่งสินค้าโดยค่าขนส่งนั้นจะถูกที่สุดเมื่อเทียบกับการขนส่งรูปแบบอื่นๆ
            สำหรับตัวอย่างสินค้าที่เหมาะสมแก่การขนส่งทางเรือ เช่น
            ชิ้นส่วนรถยนต์หรืออะไหล่รถยนต์ เฟอร์นิเจอร์ หรือ เครื่องจักร
          </p>

          <h3>การขนส่งทางทะเลนั้นมี 2 รูปแบบคือ</h3>
          <ul>
            LCL = Less than container load
            <li> ราคาจะถูกคำนวนเป็น Qubic meter</li>
            <li> สินค้าปริมานน้อย</li>
            <li> สินค้าในตู้จะรวมมากับลูกค้าท่านอื่น</li>
            <li> สำหรับปริมาณขนส่งไม่มากพอทสำหรับเช่าตู้คอนเทนเนอร์ทั้งตู้</li>
          </ul>
          <ul>
            FCL = Full container load
            <li> ราคาจะคิดตามขนาดตู้</li>
            <li> สินค้าขนาดใหญ่</li>
            <li> ปริมานมาก</li>
            <li>ไม่มีการร่วมใช้ตู้คอนเทนเนอร์กับลูกค้ารายอื่น</li>
            <li>ขนาดตู้คอนเทนเนอร์มีให้เลือกหลายไซส์</li>
          </ul>

          <h3>เอกสารสำคัญที่ใช้ในการนำเข้าส่งออกทางเรือ</h3>
          <ul>
            <li>ใบขนส่งสินค้า</li>
            <li>ใบตราส่งสินค้าทางเรือ (Bill of lading)</li>
            <li>บัญชีราคาสินค้า (Comercial Invoice)</li>
            <li>บัญชีบรรจุหีบห่อ (Packing List)</li>
          </ul>

          <p>
            การขนส่งทางเรือเป็นวิธีขนส่งสินค้าที่มีข้อดีมากมาย สามารถส่งสินค้าไปยังทุกประเทศทั่วโลกได้โดยมีต้นทุนการขนส่งที่ต่ำกว่าวิธีการขนส่งอื่นๆ
            เช่น การขนส่งทางอากาศ และการขนส่งทางถนน อีกทั้งยังมีอัตราค่าขนส่งที่ถูกกว่าเมื่อเปรียบเทียบกับวิธีการขนส่งอื่นๆ
            การนำเข้าส่งออกทางเรือยังสามารถขนส่งสินค้าขนาดใหญ่ได้โดยสะดวกสบาย
            และสามารถขนส่งสินค้าได้ครั้งละปริมาณมากโดยมีตู้หลากหลายแบบและหลายขนาดให้เลือกตามความเหมาะสมของสินค้า
            นอกจากนี้ การขนส่งทางเรือยังมีความปลอดภัยค่อนข้างสูง
            เนื่องจากใช้ความเร็วในการขับเคลื่อนช้าเมื่อเทียบกับการขนส่งทางอื่นๆ
            ดังนั้นการเลือกใช้วิธีการขนส่งทางเรือนั้นเป็นเรื่องที่ควรพิจารณาให้ดีก่อนตัดสินใจ
          </p>
          <p>
          ถึงแม้การขนส่งทางเรือไม่ใช่วิธีที่เร็วที่สุด แต่มักเป็นวิธีที่มีราคาประหยัดและเป็นธรรมชาติที่มั่นคงที่สุด
          หากคุณกำลังมองหาวิธีการขนส่งสินค้าระหว่างประเทศที่ EASTHAI เราเชี่ยวชาญในการให้บริการขนส่ง สามารถติดต่อเราเพื่อขอใบเสนอราคาและคำปรึกษาเพิ่มเติมในการขนส่งสินค้า
          </p>          
        </div>
      </Container> */}

      {/* <Service /> */}
      <GetQuotation2/>
      <OurService2/>
      <Contact/>
    </>
  );
};

export default Seafreight;
