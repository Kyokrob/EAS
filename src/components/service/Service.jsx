import React from "react";
import "./service.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import customcover from "../../images/custom_card_resize.webp";

import importexportcover from "../../images/importexportcover.png";

const Service = () => {
  return (
    <div className="serviceContainer">
      <h1 className="serviceTitle">บริการของเรา</h1>
      <div className="service">
        <div className="ourservice">
          <img
            src="https://images.unsplash.com/photo-1571086291540-b137111fa1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt=""
            className="serviceList"
          />
          <div className="serviceOverlay">
            <div className="serviceText">
              <h3>Air Freight</h3>
              <h5>บริการขนส่งทางอากาศ</h5>
              <p>
                บริการขนส่งทางอากาศ นำเข้าสินค้าจากทุกประเทศทั่วโลก
                และส่งสินค้าออกไปยังทุกสนามบินทั่วโลก
              </p>
              <Button className="overlayBtn">
                <Link to="/airfreight">Readmore</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="ourservice">
          <img
            src="https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt=""
            className="serviceList"
          />
          <div className="serviceOverlay">
            <div className="serviceText">
              <h3>Sea Freight</h3>
              <h5>บริการขนส่งทางทะเล</h5>
              <p>
                บริการขนส่งทางทะเล นำเข้าสินค้าจากทุกพอร์ตทั่วโลก
                และส่งสินค้าออกไปยังทุกประเทศทั่วโลก
              </p>
              <Button className="overlayBtn">
                <Link to="/seafreight">Readmore</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="ourservice">
          <img src={importexportcover} alt="" className="serviceList" />
          <div className="serviceOverlay">
            <div className="serviceText">
              <h3>Import/Export</h3>
              <h5>นำเข้าหรือส่งออกสินค้า</h5>
              <p>
                ต้องการนำเข้าหรือส่งออกสินค้า เราช่วยคุณได้
                ไม่ว่าจะเป็นทางน้ำหรือทางอากาศ
              </p>
              <Button className="overlayBtn">
                <Link to="/import-export">Readmore</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="ourservice">
          <img
            src={customcover}
            alt="Custom clearace"
            className="serviceList"
          />
          <div className="serviceOverlay">
            <div className="serviceText">
              <h3>Customs Clearance</h3>
              <h5>ดำเนินการศุลกากรขาเข้า/ขาออก</h5>
              <p>
                ดำเนินพิธีการศุลกากร ทั้งขาเข้า และขาออก
                ตรวจสอบและช่วยเหลือทางด้านภาษี
              </p>
              <Button className="overlayBtn">
                <Link to="/customclearance">Readmore</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="ourservice">
          <img
            src="https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="serviceList"
          />
          <div className="serviceOverlay">
            <div className="serviceText">
              <h3>Experties consultant</h3>
              <h5>สินใจติดต่อทีมงาน</h5>
              <p>
                หากคุณกำลังมองหาผู้ช่วยในการนำเข้าหรือส่งออกสินค้า
                ทักมาหาเราได้เลย ฟรี
              </p>
              <Button className="overlayBtn">
                <Link to="/contactform">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
