import React from 'react'
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import getquotaion2 from "../../images/getquotation2.gif";
import './getQuotation2.css'

const GetQuotation = () => {
  return (
    <Container>
     <div className="sec5">
          <div className="sec5Left">
            <img src={getquotaion2} alt="ชิปปิ้ง" />
          </div>
          <div className="sec5Right">
          <h1>ขนส่งอย่างไม่มีข้อจำกัด</h1>
            <p>
            บริการขนส่งสินค้าจากผู้เชี่ยวชาญดูแลอย่างมืออาชีพรับรองว่าสินค้าจะถึงสถานที่ปลายทางได้อย่างรวดเร็วและมีประสิทธิภาพ 
            </p>
            <Link to="/quotation" className="sec4Btn">
              <button>ใบเสนอราคา (ฟรี)</button>
            </Link>
          </div>
        </div>

    </Container>
  )
}

export default GetQuotation