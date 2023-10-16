import React, { useEffect } from "react";
import Contact from "../contact/Contact";
import Sidebar from "../sidebar/Sidebar";
import BlogShare from "../blogShare/BlogShare";
import blog3cover from "../../images/blog3cover.png";
import ProgressBar from "../progressbar/Progressbar";
import { Helmet } from "react-helmet";

const Easblog = () => {
  const url = "https://www.easthai.co/blog/form-fta";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Helmet>
      <title>EASTHAI - สินธิประโยชน์ทางการค้าและฟอร์มต่างๆ</title>
    </Helmet>
      <div className="easblog">
        <div className="blogArticle">
          <div className="blogContainer">
            <div className="blogArticleHeader">
              <div>August 23, 2023</div>
              <h1>
                ข้อควรรู้และข้อควรระวังในการใช้สิทธิประโยชน์ทางการค้า และ Form
                ต่างๆ
              </h1>
              <h2>
                “รู้หรือไม่ ?
                การใช้สิทธิประโยชน์ทางการค้าระหว่างประเทศสามารถลดต้นทุนสินค้าได้”
              </h2>
              <div>Written by EASTHAI Team</div>
            </div>
            <img src={blog3cover} alt="form fta ลดภาษี" />
            <section>
              <h3>Free trade agreement (FTA) คือ</h3>
              <p>
                Free Trade Area (FTA) หรือ เขตการค้าเสรี
                คือข้อตกลงทางการค้าระหว่างประเทศ ซึ่งสามารถเกิดขึ้นระหว่าง 2
                ประเทศ หรือเป็นกลุ่มประเทศขึ้นไป
                โดยวัตถุประสงค์หลักคือการร่วมมือกันในการลดอุปสรรคทางการค้าโดยการทำข้อตกลงลดอัตราภาษีศุลกากรระหว่างประเทศให้เหลือน้อยที่สุดหรือเป็น
                0%
              </p>
              <p>
                ปัจจุบันไทยได้ทำข้อตกลง FTA กับ 18 ประเทศ ซึ่งได้แก่ จีน ฮ่องกง
                เกาหลี ญี่ปุ่น ออสเตรเลีย นิวซีแลนด์ อินเดีย ชิลี เปรู บรูไน
                อินโดนีเซีย มาเลเซีย ฟิลิปปินส์ สิงคโปร์ กัมพูชา ลาว เมียนมาร์
                และ เวียดนาม
              </p>
              <h3>โดยสิทธิประโยชน์ทางการค้าของ
                เขตการค้าเสรีของแต่ละประเทศจะแบ่งเป็นรูปแบบ Form ต่างๆคือ</h3>
              <ul>
                <li>ASEAN Free Trade Area (AFTA) = FORM D</li>
                <li>ASEAN - CHINA = FORM E</li>
                <li>ASEAN - JAPAN = AJ</li>
                <li>ASEAN - KOREA = AK</li>
                <li>ASEAN - INDIA = AI</li>
                <li>ASEAN - AUS, NEW = AANZ</li>
                <li>ASEAN - HK = AHK</li>
                <li>THAI - PERU = TP</li>
                <li>THAI - CHILE = TC</li>
              </ul>
              <h5>
                *ประเทศที่จัดอยู่ในกลุ่ม ASEAN ได้แก่ = ไทย บรูไน อินโดนีเซีย
                มาเลเซีย ฟิลิปปินส์ สิงคโปร์ กัมพูชา ลาว เมียนมา เวียดนาม{" "}
              </h5>
            </section>
            <section>
              <h3>ข้อดีของการใช้ Form ในการนำเข้าสินค้า</h3>
              <ul>
                <li>ลดต้นทุนการผลิต</li>
                <li>ลดหรือยกเว้นภาษีนำเข้าสินค้า</li>
              </ul>
              <p>
                ในข้อตกลงทางการค้าระหว่างประเทศ
                การใช้สิทธิประโยชน์ทางการค้าสามารถทำได้ผ่านฟอร์มต่างๆ
                ฟอร์มที่นิยมใช้บ่อยมีทั้งหมด 2 รูปแบบหลัก นั่นคือ Form D, และ
                Form E
                โดยวิธีการใช้งานและข้อกำหนดของแต่ละฟอร์มนั้นมีความแตกต่างกันอย่างมากเนื่องจากเป็นการคำนึงถึงสภาวะและเงื่อนไขของการค้าระหว่างประเทศที่แตกต่างกันไป
              </p>
            </section>
            <section>
              <h3>
                ในบทความนี้ขอยกตัวอย่างการใช้ Form E
                ในการนำสินค้าเข้าสินค้าจากประเทศจีน
              </h3>

              <p>
                ทางบริษัท East Asia Shipping
                มีข้อสังเกตจากการปฏิบัติงานและยินดีนำเสนอข้อสำคัญและข้อควรระวัง
                เพิ่มเติมที่เกี่ยวข้องกับการตรวจสอบสิทธิประโยชน์ ในการใช้ FORM E
                ในการขอรับสิทธิพิเศษทางภาษีศุลกากร ดังนี้
              </p>

              <ul>
                <li>
                  ตรวจสอบสิทธิ์ FTA
                  ว่าสินค้าแต่ละชนิดได้สิทธิพิเศษทางภาษีเท่าไหร่
                  ตามประกาศแนบท้ายประกาศกระทรวงการคลัง - ยกตัวอย่างพิกัด 2309.90
                  อากร9% ใช้สิทธิ์ FTA เหลือ 5%
                </li>
                <li>
                  ในช่อง MARK สินค้าจะต้องตรงกับเอกสาร BL / INV / PKG และ MARK
                  ตัวสินค้าที่มาจริง ต้องตรงกันทั้งหมดกับทุกเอกสารที่เกี่ยวข้อง
                </li>
                <li>
                  ในช่องที่ 7 ต้องระบุชื่อสินค้า , part name , จำนวนสินค้า
                  ต้องตรงกับเอกสารที่มาจริง และต้องตรงกับพิกัดศุลกากรไทย
                  ซึ่งเป็นปลายทางในการนำเข้าสินค้านั้นๆ
                </li>
                <li>
                  ในช่องที่ 9 หากเกณฑ์ถิ่นกำเนิดเป็น RVC ในช่องที่ 9
                  จะต้องระบุราคา FOB ด้วย นอกเหนือจาก N.W. หรือ G.W
                </li>
                <li>
                  หากเอกสาร FORM ออกหลังวันเรือออก (departure date ในช่องที่ 3)
                  ใน FORM D มากกว่า 2 วัน , FORM E มากกว่า 3 วัน ในช่องที่ 13
                  จะต้องกากบาท (X) ในช่อง issued retroactively
                </li>
                <li>
                  เอกสาร FORM E สามารถใช้ตราประทับ + ลายมือชื่ออิเล็กทรอนิกส์ได้
                  โดยต้องจัดพิมพ์แบบสี โดยหน่วยงานของ
                  ผู้มีอำนาจในการออกหนังสือรับรอง และต้องมี Overleaf Note
                  อยู่ด้านหลังของกระดาษแผ่นเดียวกันเท่านั้น
                </li>
              </ul>
              <h3>หมวดหมู่สินค้าอาหารสัตว์ที่ถูกรวมอยู่ใน FORM E ได้แก่</h3>
              <ul>
                <li>
                  หมวดของปรุงแต่งชนิดที่ใช้ในการเลี้ยงสัตว์ที่มีเนื้อสัตว์
                  (2309.10.10) - สามารถใช้สิทธิ จาก 9% เหลือ 5%
                </li>
                <li>
                  หมวดของปรุงแต่งชนิดที่ใช้ในการเลี้ยงสัตว์ชนิดเหมาะสำหรับสุกร
                  (2309.90.12) - สามารถใช้สิทธิ จาก 9% เหลือ 5%
                </li>
                <li>
                  หมวดของปรุงแต่งชนิดที่ใช้ในการเลี้ยงสัตว์ พรีมิกซ์
                  อาหารเสริมที่เป็นอาหารสัตว์ หรือสารเติมแต่งอาหารสัตว์
                  (2309.90.20) - สามารถใช้สิทธิ จาก 9% เหลือ 5%
                </li>
              </ul>

              <div className="blogtable">
                <h1>Tips : ตัวอย่างการคำนวณภาษีนำเข้าสินค้าในหมวดอาหารสัตว์</h1>
                <div class="blogcontainer container">
                  <div class="freightItemTitle"></div>
                  <div class="freightItemTitle">
                    <h1>นำเข้าปกติ</h1>
                  </div>
                  <div class="freightItemTitle">
                    <h1>ใช้สิทธิ Form E</h1>
                  </div>
                  <div class="freightItemQ">ราคา CIF</div>
                  <div class="freightItem">
                  $10,000
                  </div>
                  <div class="freightItem">
                  $10,000
                  </div>
                  <div class="freightItemQ">อัตราแลกเปลี่ยน ($)</div>
                  <div class="freightItem">34*as current date</div>
                  <div class="freightItem">
                  34*as current date
                  </div>
                  <div class="freightItemQ">แปลงเป็นบาท</div>
                  <div class="freightItem">
                    340,000
                  </div>
                  <div class="freightItem">
                    340,000
                  </div>
                  <div class="freightItemQ">ภาษีอากร</div>
                  <div class="freightItem">
                    9%
                  </div>
                  <div class="freightItem">
                    5%
                  </div>
                  <div class="freightItemQ">VAT</div>
                  <div class="freightItem">
                    ยกเว้น
                  </div>
                  <div class="freightItem">
                    ยกเว้น
                  </div>
                  <div class="freightItemQ">ค่าอากร/บาท</div>
                  <div class="freightItem">
                    30,600
                  </div>
                  <div class="freightItem">
                    17,000
                  </div>
                  <div class="freightItemQ">ต้นทุนการนำเข้า/บาท</div>
                  <div class="freightItem">
                  370,600
                  </div>
                  <div class="freightItem">
                  357,000
                  </div>
                </div>

              </div>

              <p>
                จะเห็นได้ว่าการใช้สิทธิ์ Form E
                สำหรับการนำเข้าสินค้าในหมวดอาหารสัตว์ (2309.10.10)
                จะช่วยลดอัตราภาษีอากรจาก 9% เป็น 5%
                ซึ่งทำให้ต้นทุนการนำเข้ารวมลดลงจาก 370,600 บาท เหลือ 357,000 บาท
                อย่างไรก็ตาม
                ค่าจริงอาจแตกต่างไปขึ้นอยู่กับวันที่ปัจจุบันและอัตราแลกเปลี่ยนในเวลานั้น
                ๆ
              </p>
              <p>
                ทั้งหมดนี้เป็นกระบวนการสิทธิประโยชน์ทางการค้าระหว่างประเทศ
                หากต้องการทราบว่าสินค้าของท่านสามารถลดหย่อนภาษีได้เท่าไหร่
                สามารถติดต่อสอบถามที่ EASTHAI ได้ทุกช่องทาง
              </p>
              <p>
                ทีมงานของเราพร้อมให้บริการ มีใบอนุญาตตัวแทนออกของ และ
                ได้รับการรับรองผ่านกรมศุลกากร
                เราเข้าใจกฎระเบียบที่เกี่ยวข้องทั้งหมดเป็นอย่างดี
                ด้วยความเชี่ยวชาญในอุตสาหกรรมนี้เราพร้อมแก้ไขปัญหา และ
                ให้ข้อมูลที่เป็นประโยชน์
                พร้อมตรวจสอบข้อมูลกฎระเบียบและข้อปฏิบัติเพื่อให้แน่ใจว่าสินค้าจะได้รับการดูแลในระหว่างการขนส่งอย่างปลอดภัย
              </p>
              <p>เบอร์โทรติดต่อ 095-909-8712 หรือ 02-235-9100 (36)</p>

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
