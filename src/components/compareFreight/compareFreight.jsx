import React from "react";
import "./compareFreight.css";
import check from "../../images/check_icon.png";
import compareair from "../../images/compareair.png";
import comparesea from "../../images/comparesea.png";
import { Link } from "react-router-dom";
import CalculateIcon from '@mui/icons-material/Calculate';

const compareFreight = () => {
  return (
    <>
      <div className="compareFreight">
        <h1>ตารางเปรียบเทียบ Air และ Ocean Freight</h1>
        <div class="freight-container container">
          <div class="freightItemTitle"></div>
          <div class="freightItemTitle">
            <img src={compareair} alt="" />
            <h1>Air Freight</h1>
          </div>
          <div class="freightItemTitle">
            <img src={comparesea} alt="" />
            <h1>Ocean Freight</h1>
          </div>
          <div class="freightItemQ">Quicker Product Time arrival</div>
          <div class="freightItem">
            <img src={check} alt="" />
          </div>
          <div class="freightItem"></div>
          <div class="freightItemQ">Lower Cost</div>
          <div class="freightItem"></div>
          <div class="freightItem">
            <img src={check} alt="" />
          </div>
          <div class="freightItemQ">Safer product delivery</div>
          <div class="freightItem">
            <img src={check} alt="" />
          </div>
          <div class="freightItem"></div>
          <div class="freightItemQ">Better for heavy weight</div>
          <div class="freightItem"></div>
          <div class="freightItem">
            <img src={check} alt="" />
          </div>
          <div class="freightItemQ">More likely to be on schedule</div>
          <div class="freightItem">
            <img src={check} alt="" />
          </div>
          <div class="freightItem">
            <img src={check} alt="" />
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
