import React from "react";
import "./compareFreight.css";
import check from "../../images/check_icon.png";
import { Link } from "react-router-dom";
import CalculateIcon from '@mui/icons-material/Calculate';

const compareFreight = () => {
  return (
    <>
      <div className="compareFreight">
        <h1>ตารางเปรียบเทียบ Air และ Sea Freight</h1>
        <div class="freight-container container">
          <div class="freightItemTitle"></div>
          <div class="freightItemTitle">
            <h1>Air</h1>
          </div>
          <div class="freightItemTitle">
            <h1>Sea</h1>
          </div>
          <div class="freightItemQ">Quicker Product Time arrival</div>
          <div class="freightItem">
            <img src={check} alt="ชิปปิ้ง" />
          </div>
          <div class="freightItem"></div>
          <div class="freightItemQ">Lower Cost</div>
          <div class="freightItem"></div>
          <div class="freightItem">
            <img src={check} alt="ชิปปิ้ง" />
          </div>
          <div class="freightItemQ">Safer product delivery</div>
          <div class="freightItem">
            <img src={check} alt="ชิปปิ้ง" />
          </div>
          <div class="freightItem"></div>
          <div class="freightItemQ">Better for heavy weight</div>
          <div class="freightItem"></div>
          <div class="freightItem">
            <img src={check} alt="ชิปปิ้ง" />
          </div>
          <div class="freightItemQ">More likely to be on schedule</div>
          <div class="freightItem">
            <img src={check} alt="ชิปปิ้ง" />
          </div>
          <div class="freightItem">
            <img src={check} alt="ชิปปิ้ง" />
          </div>
        </div>
        <Link className="compareFreightBtn" to="/Tools">
          <button>คำนวนปริมาตรสินค้าสำหรับขอใบเสนอราคา <CalculateIcon/></button>
        </Link>
      </div>
    </>
  );
};

export default compareFreight;
