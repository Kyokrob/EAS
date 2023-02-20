import React from "react";
import "./service.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import customcover from "../../images/custom_card_resize.webp";
import importexportcover from "../../images/importexport_card_resize.webp";
import aircard from "../../images/air_card_resize.webp";
import seacard from "../../images/sea_card_resize.webp";
import expresscard from '../../images/express_cover.png'

const Service = () => {
  return (
    <div className="serviceContainer">
      <h1 className="serviceTitle">บริการของเรา</h1>
      <div className="service">
        <div className="ourservice">
          <img src={aircard} alt="Air freight" className="serviceList" />
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
          <img src={seacard} alt="Sea freight" className="serviceList" />
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
              <h5>ดำเนินการศุลกากร</h5>
              <p>
                บริการพิธีการศุลกากร นำเข้าและส่งออก
                พร้อมตรวจสอบและช่วยเหลือทางเอกสารและภาษี
              </p>
              <Button className="overlayBtn">
                <Link to="/customclearance">Readmore</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="ourservice">
          <img
            src={expresscard}
            alt="import shipment"
            className="serviceList"
          />
          <div className="serviceOverlay">
            <div className="serviceText">
              <h3>Express service</h3>
              <h5>เคลียร์สินค้า นำเข้า</h5>
              <p>
                บริการ เคลียร์สินค้า, คำนวนภาษีนำเข้า, จัดทำเอกสาร, สินค้าติดใบอนุญาต
                
              </p>
              <Button className="overlayBtn">
                <Link to="/courier">Readmore</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
