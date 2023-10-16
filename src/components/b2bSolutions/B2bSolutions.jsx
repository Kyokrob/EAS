import React from 'react'
import './b2bSolutions.css'
import img1 from "../../images/img1_resize.webp";
import img2 from "../../images/img2_resize.webp";
import img4 from "../../images/img4_resize.webp";
import img7 from "../../images/img7_resize.webp";
import img8 from "../../images/img8_resize.webp";
import img13 from "../../images/img13_resize.webp";
import img14 from "../../images/img14_resize.webp";
import img15 from "../../images/img15_resize.webp";
import img16 from "../../images/img16_resize.webp";
import img17 from "../../images/img17_resize.webp";
import { Link } from 'react-router-dom';

const B2bSolutions = () => {
  return (
        <div className="b2b-container">
          <div className="b2b-box">
            <div className="b2b-left">
              <div className="b2bim1 image-transition">
                <img src={img1} alt="นำเข้าอาหารสัตว์" />
              </div>
              <div className="b2bim2 image-transition">
                <img src={img2} alt="นำเข้า beauty" />
              </div>
              <div className="b2bim3 image-transition">
                <img src={img16} alt="อุปกรณ์นิรภัย" />
              </div>
              <div className="b2bim4 image-transition">
                <img src={img8} alt="นำเข้าเครื่องเสียง" />
              </div>
              <div className="b2bim5 image-transition">
                <img src={img15} alt="นำเข้าหูฟัง" />
              </div>
            </div>
            <div className="b2b-middle">
              <h1>Industrial business solutions</h1>
              <p>ประเภทสินค้าที่นิยมขนส่งกันเรา</p>
              <span>Animal Feed</span>
              <span>Audio system</span>
              <span>Beauty product</span>
              <span>Safety equipment</span>
              <span>Machinery part</span>
              <p> "Tailor-made solution designed to meet your unique business requirements"</p>
              <Link to='/business-solutions'>
              <button>Read more</button>
              </Link>
            </div>
            <div className="b2b-right">
              <div className="b2bim1 image-transition">
                <img src={img14} alt="นำเข้าอาหารสัตว์" />
              </div>
              <div className="b2bim2 image-transition">
                <img src={img7} alt="นำเข้ายาสัตว์" />
              </div>
              <div className="b2bim3 image-transition">
                <img src={img4} alt="นำเข้าอุปกรณ์" />
              </div>
              <div className="b2bim4 image-transition">
                <img src={img17} alt="นำเข้าลำโพง" />
              </div>
              <div className="b2bim5 image-transition">
                <img src={img13} alt="นำเข้าอาหารสัตว์" />
              </div>
            </div>
          </div>
        </div>
  )
}

export default B2bSolutions