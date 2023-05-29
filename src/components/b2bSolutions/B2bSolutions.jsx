import React from 'react'
import './b2bSolutions.css'
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img4 from "../../images/img4.png";
import img7 from "../../images/img7.png";
import img8 from "../../images/img8.png";
import img13 from "../../images/img13.png";
import img14 from "../../images/img14.png";
import img15 from "../../images/img15.png";
import img16 from "../../images/img16.png";
import img17 from "../../images/img17.png";

const B2bSolutions = () => {
  return (
        <div className="b2b-container">
          <div className="b2b-box">
            <div className="b2b-left">
              <div className="b2bim1 image-transition">
                <img src={img1} alt="" />
              </div>
              <div className="b2bim2 image-transition">
                <img src={img2} alt="" />
              </div>
              <div className="b2bim3 image-transition">
                <img src={img16} alt="" />
              </div>
              <div className="b2bim4 image-transition">
                <img src={img8} alt="" />
              </div>
              <div className="b2bim5 image-transition">
                <img src={img15} alt="" />
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
              <button><a href="tel:0867780808">Read more</a></button>
            </div>
            <div className="b2b-right">
              <div className="b2bim1 image-transition">
                <img src={img14} alt="" />
              </div>
              <div className="b2bim2 image-transition">
                <img src={img7} alt="" />
              </div>
              <div className="b2bim3 image-transition">
                <img src={img4} alt="" />
              </div>
              <div className="b2bim4 image-transition">
                <img src={img17} alt="" />
              </div>
              <div className="b2bim5 image-transition">
                <img src={img13} alt="" />
              </div>
            </div>
          </div>
        </div>
  )
}

export default B2bSolutions