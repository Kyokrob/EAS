import React, { useEffect } from "react";
import Contact from "../contact/Contact";
import Sidebar from "../sidebar/Sidebar";
import BlogShare from "../blogShare/BlogShare";
import blog2cover from "../../images/blog2cover.png";
import ProgressBar from "../progressbar/Progressbar";

const Easblog = () => {
  const url = "https://www.easthai.co/blog/animal-feed-customs-clearance";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="easblog">
        <div className="blogArticle">
          <div className="blogContainer">
            <div className="blogArticleHeader">
              <div>May 23, 2023</div>
              <h1>
                พิธีการตรวจปล่อยสินค้าของกรมศุลกากรในการนำเข้า-ส่งออก
                ผลิตภัณฑ์อาหารสัตว์
              </h1>
              <h2>
                การดำเนินพิธีการศุลกากร ผลิตภัณฑ์อาหารสัตว์ :
                ข้อมูลสำหรับผู้นำเข้าส่งออก
              </h2>
              <div>Written by EASTHAI Team</div>
            </div>
            <img src={blog2cover} alt="Blog post" />
            <section>
              <h3>การตรวจปล่อยสินค้าอาหารสัตว์โดยกรมศุลกากร</h3>
              <p>
                ปกติแล้วในการนำเข้า-ส่งออกผลิตภัณฑ์อาหารสัตว์ของประเทศไทยต้องมีการปฏิบัติตามกฎระเบียบจาก
                กรมศุลกากร และ กรมปศุสัตว์ ว่าด้วยเรื่องความสอาด ปลอดภัย และ
                คำนึงถึงสารอาหารครบถ้วนตามความต้องการของสัตว์อย่างเคร่งครัด
              </p>
              <p>
                การทำความเข้าใจเกี่ยวกับขั้นตอนการนำเข้าส่งออก และ
                ตรวจปล่อยสินค้า ย่อมช่วยสร้างความมั่นใจ
                ดำเนินการขนส่งอย่างมีระบบ และ
                ลดข้อผิดพลาดในกระบวนการนำเข้าและส่งออก
                ในบทความนี้เราจะมาพูดถึงกระบวนการและขั้นตอนการตรวจปล่อยสำหรับผู้ประกอบการผลิตภัณฑ์อาหารสัตว์
              </p>
            </section>
            <section>
              <h3>การจัดหมวดหมู่ผลิตภัณฑ์อาหารสัตว์สำหรับกรมศุลกากร</h3>
              <p>
                การแบ่งผลิตภัณฑ์อาหารสัตว์เพื่อการนำเข้าส่งออกสามารถแบ่งออกเป็นหมวดหลักทั้งหมด
                5 หมวด ได้แก่
              </p>
              <ul>
                <li>
                  ผลิตภัณฑ์รักษาและป้องกันโรค (Animal Health Products): ยา
                  วัคซีน และผลิตภัณฑ์อื่น ๆ ที่ใช้รักษาสุขภาพของสัตว์
                </li>
                <li>
                  อาหารเสริมและวิตามิน (Nutrition Products):
                  ผลิตภัณฑ์ที่ให้สารอาหารสำคัญแก่สัตว์ เช่นวิตามิน แร่ธาตุ
                  และกรดอะมิโนอื่น ๆ
                </li>
                <li>
                  เพื่อการวินิจฉัยโรค (Diagnostic Products):
                  ผลิตภัณฑ์ที่ใช้ในการตรวจวินิจฉัยโรคในสัตว์
                  เช่นชุดทดสอบและสารเคมีที่ใช้ในห้องปฏิบัติการ
                </li>
                <li>
                  อาหารเม็ดสำเร็จรูป (Complete Feed Products):
                  ผลิตภัณฑ์ที่พร้อมใช้งานเป็นอาหารสำเร็จรูปสำหรับสัตว์ เช่น
                  อาหารสุนัข อาหารแมว และอาหารนก
                </li>
                <li>
                  วัตถุดิบอาหารสัตว์ (Ingredient Products):
                  ส่วนประกอบที่ใช้ในการผลิตผลิตภัณฑ์อาหารสัตว์ เช่น เนื้อสัตว์
                  ธัญพืช และผัก
                </li>
              </ul>
              <p>
                แต่ละหมวดหมู่นั้นจะมีกฎเกณฑ์เฉพาะที่เกี่ยวข้องกับการผ่านด่านศุลกากร
                ดังนั้นสิ่งสำคัญคือการเข้าใจว่าผลิตภัณฑ์ของคุณอยู่ในหมวดหมู่ใด
                เพื่อให้สามารถสำแดงให้กับเจ้าหน้าที่ศุลกากรได้อย่างถูกต้อง
              </p>

              <p className="contentBorder">
                Tips : ปรึกษากับผู้เชี่ยวชาญ (Customs Specialist)
                สำหรับการประเมินมูลค่าภาษี และขั้นตอนการเตรียมเอกสาร
                เพื่อช่วยให้คุณได้ประหยัดเวลาและค่าใช้จ่ายที่ไม่จำเป็นหรือค่าปรับที่อาจเกิดขึ้นได้เมื่อสำแดงสินค้าผิดพลาด
              </p>
            </section>
            <section>
              <h3>
                ขั้นตอนการตรวจปล่อยสินค้านำเข้า-ส่งออกกลุ่มผลิตภัณฑ์อาหารสัตว์ของกลมศุลกากร
              </h3>

              <ul>
                <li>
                  รับเอกสารนำเข้าจากลูกค้า เช่น Invoice, Packing, BL,
                  Certificate of origin หรือ From C/O, Certificate of analysis,
                  Health Certificate, Product Information, MSDS, ใบอนุญาตินำเข้า
                  และ ใบขึ้นทะเบียนสินค้า
                </li>
                <li>
                  เช็กความถูกต้องของเอกสาร
                  หากมีข้อผิดพลาดจะแจ้งให้ผู้นำเข้า-ส่งออกทราบทันทีเพื่อทำการแก้ไขให้เรียบร้อยก่อนที่สินค้าจะมาถึง
                  เพื่อความรวดเร็วในการตรวจปล่อยสินค้า
                  และป้องกันค่าใช้จ่ายที่อาจเกิดขึ้นได้
                </li>
                <li>
                  ดราฟท์ไปขนสินค้าเพื่อแจ้งจำนวนภาษี
                  เช็กความถูกต้องของพิกัดสินค้า และอื่น ๆ
                  เพื่อแจ้งประมาณวันที่สินค้ามาถึง ท่าในการนำเข้า
                  เพื่อที่ลูกค้าจะได้เตรียมเอกสาร นส4
                  (แบบแจ้งการนำเข้าอาหารสัตว์) สำหรับนำไปแจ้งกับกรมปศุสัตว์ด้วย
                </li>
                <li>
                  ฝ่ายลูกค้าหรือตัวแทน(ชิปปิ้ง) ยื่นเอกสาร นส4
                  ให้กับกรมปศุสัตว์ก่อนวันเรือเข้าท่า
                </li>
                <li>
                  เมื่อกรมปศุสัตว์อนุมัติ นส4
                  ให้เช็กรายละเอียดเพื่อความถูกต้องอีกครั้ง เช่น เลขที่ใบอนุญาต
                  จำนวนตู้สินค้า ใบขึ้นทะเบียน วันเรือเข้าท่า พิกัดสินค้า
                  ชื่อเรือ ชื่อผู้ผลิต
                  หากทุกอย่างถูกต้องก็สามารถอัปเดตใบขนสินค้าแล้วกรอกข้อมูลเลขที่ใบอนุญาตลงบนใบขนฯ
                  มีการเตรียมค่าภาษีอากรนำเข้า วางแผนตรวจปล่อย
                  วางแผนจัดส่งถึงโรงงาน เช็ก Dem / Rent หากตู้สินค้าเยอะ
                  หรือพื้นที่โรงงานจำกัด
                </li>
                <li>
                เตรียมเอกสารชุดตรวจปล่อย แลก D/O เตรียมค่าภาษีนำเข้า เช็กเอกสารตัวจริงให้ครบถ้วน เช่น B/L ต้นฉบับ Form E เป็นต้น ในระหว่างช่วงเวลาดังกล่าวบริษัทจะส่งข้อมูลใบขนฯสินค้า เข้าสู่ระบบกรมศุลกากรให้ตรวจสอบสถานะและดำเนินการขั้นต่อไป อาทิ พบเจ้าหน้าที่ ยกเว้นการตรวจ หรือ ให้ทำการ X-Ray เป็นต้น
                </li>
                <li>
                ตรวจปล่อยสินค้า มีการตรวจสอบสภาพก่อนออกด่านศุลกากร เช่น การเปิดตรวจ ทั้งนี้หากมีการนำตัวอย่างสินค้าออกมาดูทางบริษัทจะถ่ายคลิปวิดีโอไว้เพื่อลดข้อผิดพลาด เช่น สูญหาย เสียหาย และถ้าหากมีปัญหาเกิดขึ้นก็จะประสานงานกับการท่าเรือหรือสายเรือเพื่อออก Survey ส่งต่อถึงลูกค้านำไปใช้เคลมประกัน (แม้บางครั้งจะมีปัญหาการท่าเรือหรือสายเรือดำเนินการล่าช้า รวมถึงต้องทำจดหมายยินยอมงดฟ้องร้องต่อการท่าเรือและสายเรือ นี่จึงเป็นอีกข้อกังวลในการลงนาม)
                </li>
                <li>
                ประสานงานผู้นำเข้า ระบุแผนการจัดส่ง วัน-เวลา เลขทะเบียนรถ 
                </li>
              </ul>
              <h3>ปัญหางานเอกสารที่สามารถพบเจอได้บ่อยครั้ง</h3>
              <ul>
                <li>
                ใบแจ้งหนี้ (Invoice) ระบุวันที่หรือที่อยู่ผิดพลาด เมื่อลูกค้ามีสถานที่ให้บริการหลายสาขาหรือมีบริษัทในเครือหลายแห่ง
                </li>
                <li>
                ใบรายการสินค้า (Packing list) ระบุจำนวนสินค้าหรือหน่วยไม่ตรงกับใบรับสินค้า (BL)  
                </li>
                <li>
                From CO เอกสารการใช้สิทธิการค้าระหว่างประเทศ   ดราฟท์เอกสารที่ส่งมาไม่ตรงกับตัวจริงที่ใช้ในการตรวจปล่อย, กรณีที่ซื้อผ่านบุคคลที่สาม Shipping mark อาจถูกแก้ไขได้ , ระบุพิกัดใน From ไม่ตรงกับพิกัดนำเข้าที่ทำใบขนสินค้า,เอกสาร From ตัวจริงทางประเทศต้นทางส่งมาล่าช้า
                </li>
              </ul>
              
              <p>
              ทั้งหมดนี้เป็นกระบวนการในการตรวจปล่อยและปัญหาที่อาจพบเจอเมื่อนำเข้าส่งออกสินค้าผลิตภัณฑ์อาหารสัตว์ระหว่างประเทศ ทีมงานของเรา มีใบอนุญาตตัวแทนออกของ และ ได้รับการรับรองผ่านกรมศุลกากร เราเข้าใจกฎระเบียบที่เกี่ยวข้องทั้งหมดเป็นอย่างดี ด้วยความเชี่ยวชาญในอุตสาหกรรมนี้เราพร้อมแก้ใขปัญหา และ ให้ข้อมูลที่เป็นประโยชน์ พร้อมตรวจสอบข้อมูลกฎระเบียบและข้อปฏิบัติเพื่อให้แน่ใจว่าสินค้าจะได้รับการดูแลในระหว่างการขนส่งอย่างปลอดภัย หรือถูกจัดเก็บไว้ในที่ปลอดภัยตามข้อกำหนดอย่างเข้มงวด 
              </p>
              <p>
              หากท่านสนใจนำเข้า-ส่งออกผลิตภัณฑ์อาหารสัตว์ สามารถติดต่อ EASTHAI ผู้เชี่ยวชาญในการดำเนินพิธีการศุลกากร พร้อมดูแลให้ทุกขั้นตอน สะดวก รวดเร็ว ตอบโจทย์ครบวงจร 
              </p>
              <p>
              เบอร์โทรติดต่อ 095-909-8712 หรือ 02-235-9100 (36) 
              </p>

              <BlogShare url={url} />
            </section>
            <ProgressBar />
          </div>
        </div>
        <div className="sidebarComponent">
          <Sidebar />
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Easblog;
